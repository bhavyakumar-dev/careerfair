import {json,getProviderSecrets,getSettings,logRequest,safeString,isIpBanned} from '../_shared.js';

async function whisper(env,file) {
  if(!env.AI)throw new Error('Workers AI binding AI is unavailable.');
  const bytes=new Uint8Array(await file.arrayBuffer());
  const result=await env.AI.run(env.WHISPER_MODEL||'@cf/openai/whisper-large-v3-turbo',{audio:[...bytes]});
  const text=result?.text||result?.transcription||result?.response;if(!text)throw new Error('Speech recognition returned no transcript.');return text;
}
async function geminiAudio(env,secrets,file) {
  if(!secrets.geminiKeys?.length)throw new Error('Gemini keys are not configured.');
  if(file.size>10*1024*1024)throw new Error('Gemini audio uploads must be 10 MB or smaller. Use ElevenLabs for larger media.');
  const bytes=new Uint8Array(await file.arrayBuffer());
  const mime=(file.type||'audio/webm').split(';')[0];
  const start=Math.floor(Math.random()*secrets.geminiKeys.length);let failure='Gemini transcription failed.';
  for(let index=0;index<secrets.geminiKeys.length;index++) {
    const key=secrets.geminiKeys[(start+index)%secrets.geminiKeys.length];
    let uploadedName='';
    try {
      const init=await fetch('https://generativelanguage.googleapis.com/upload/v1beta/files',{method:'POST',headers:{'x-goog-api-key':key,'X-Goog-Upload-Protocol':'resumable','X-Goog-Upload-Command':'start','X-Goog-Upload-Header-Content-Length':String(bytes.byteLength),'X-Goog-Upload-Header-Content-Type':mime,'content-type':'application/json'},body:JSON.stringify({file:{display_name:safeString(file.name,120)||'open-mic-speech'}})});
      if(!init.ok)throw new Error(`Gemini file upload initialization responded ${init.status}.`);
      const uploadUrl=init.headers.get('x-goog-upload-url');if(!uploadUrl)throw new Error('Gemini did not return an upload session.');
      const uploaded=await fetch(uploadUrl,{method:'POST',headers:{'X-Goog-Upload-Offset':'0','X-Goog-Upload-Command':'upload, finalize','content-type':mime},body:bytes});
      const fileData=await uploaded.json().catch(()=>({}));if(!uploaded.ok||!fileData.file?.uri)throw new Error(`Gemini file upload responded ${uploaded.status}.`);
      uploadedName=fileData.file.name||'';
      const response=await fetch('https://generativelanguage.googleapis.com/v1beta/interactions',{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':key},body:JSON.stringify({model:env.GEMINI_STT_MODEL||'gemini-3.5-transcribe',input:[{type:'audio',uri:fileData.file.uri,mime_type:fileData.file.mimeType||mime}],generation_config:{transcription_config:{mode:{type:'verbatim'}}}})});
      const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(`Gemini transcription responded ${response.status}.`);
      const text=String(data.output_text||data.outputs?.filter(item=>item.type==='text').map(item=>item.text||'').join('\n')||'').trim();if(text)return text;
      throw new Error('Gemini returned no transcript.');
    } catch(error) {failure=error.message||failure;}
    finally {
      if(uploadedName)try{await fetch(`https://generativelanguage.googleapis.com/v1beta/${uploadedName}`,{method:'DELETE',headers:{'x-goog-api-key':key}})}catch{}
    }
  }
  throw new Error(failure);
}
async function elevenLabsTranscribe(secrets,file) {
  if(!secrets.elevenlabsKey)throw new Error('ElevenLabs API key is not configured.');
  const form=new FormData();
  form.append('file',file,file.name||(/video\//.test(file.type)?'recording.webm':'speech.webm'));
  form.append('model_id','scribe_v2');
  form.append('language_code','en');
  const response=await fetch('https://api.elevenlabs.io/v1/speech-to-text',{method:'POST',headers:{'xi-api-key':secrets.elevenlabsKey},body:form});
  const data=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(`ElevenLabs transcription responded ${response.status}${data.detail?.message?`: ${safeString(data.detail.message,120)}`:''}.`);
  const text=safeString(data.text,50000).trim();
  if(!text)throw new Error('ElevenLabs returned no transcript.');
  return text;
}
export async function onRequestPost({request,env}) {
  const started=Date.now();
  if(await isIpBanned(request,env))return json({error:'Your IP address is restricted.'},403);
  if(!request.headers.get('content-type')?.includes('multipart/form-data'))return json({error:'Submit audio or video as multipart form data.'},400);
  let form;try{form=await request.formData();}catch{return json({error:'Could not read the media upload.'},400);}
  const file=form.get('audio')||form.get('file');if(!file||typeof file.arrayBuffer!=='function')return json({error:'Audio or video file is missing.'},400);
  if(file.size>25*1024*1024)return json({error:'Audio or video must be smaller than 25 MB.'},413);
  if(/^audio\//.test(file.type||'')&&file.size>10*1024*1024&&!(env.ELEVENLABS_API_KEY||'').trim())return json({error:'Audio must be 10 MB or smaller for the Gemini fallback. Configure ElevenLabs for uploads up to 25 MB.'},413);
  if(!/^(audio|video)\//.test(file.type||''))return json({error:'Choose a valid audio or video file.'},415);
  const isVideo=/^video\//.test(file.type||'');
  const settings=await getSettings(env);const secrets=await getProviderSecrets(env);
  const elevenlabsAllowed=!!secrets.elevenlabsKey&&(settings.providerEnabled?.elevenlabs===true);
  const capable=isVideo?(elevenlabsAllowed?['elevenlabs']:[]):(elevenlabsAllowed?['elevenlabs','cloudflare','gemini']:['cloudflare','gemini']);
  const speechProvider=settings.speechProvider||'auto';
  let requested=speechProvider==='auto'?(settings.automaticFallback?(elevenlabsAllowed?['elevenlabs','cloudflare','gemini']:['cloudflare','gemini']):[settings.preferredProvider||'cloudflare']):[speechProvider];
  const order=requested.filter((provider,index,array)=>capable.includes(provider)&&array.indexOf(provider)===index&&(provider==='elevenlabs'?elevenlabsAllowed:settings.providerEnabled?.[provider]!==false));
  const failures=[];
  for(const provider of order) {
    try {
      const text=provider==='elevenlabs'?await elevenLabsTranscribe(secrets,file):provider==='cloudflare'?await whisper(env,file):await geminiAudio(env,secrets,file);
      if(!text)throw new Error('This provider returned no transcript.');
      await logRequest(env,{task:'audio-transcription',provider,outcome:'success',latencyMs:Date.now()-started,mode:speechProvider==='auto'?(settings.automaticFallback?'auto':'manual'):speechProvider});
      return json({text,provider,latencyMs:Date.now()-started,mode:speechProvider==='auto'?(settings.automaticFallback?'auto':'manual'):speechProvider,mediaType:isVideo?'video':'audio'});
    } catch(error) {failures.push(`${provider}: ${safeString(error.message,120)}`);}
  }
  await logRequest(env,{task:'audio-transcription',provider:order.join(',')||'none',outcome:'failed',latencyMs:Date.now()-started,mode:speechProvider==='auto'?(settings.automaticFallback?'auto':'manual'):speechProvider});
  const error=order.length?`Transcription providers failed. ${failures.join(' ')}`:'No transcription provider is enabled. For audio, configure an ElevenLabs key, enable Cloudflare Workers AI, or add Gemini keys. Video transcription currently requires ElevenLabs Scribe v2.';
  return json({error,uploaded:false,serverStorageConfigured:!!(env.DB&&env.MEDIA)},503);
}
