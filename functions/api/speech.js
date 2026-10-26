import {json,getProviderSecrets,getSettings,logRequest} from '../_shared.js';

function base64(bytes) { let binary='';const step=0x8000;for(let offset=0;offset<bytes.length;offset+=step)binary+=String.fromCharCode(...bytes.subarray(offset,offset+step));return btoa(binary); }
async function whisper(env,file) {
  if(!env.AI)throw new Error('Workers AI binding AI is unavailable.');
  const bytes=new Uint8Array(await file.arrayBuffer());
  const result=await env.AI.run(env.WHISPER_MODEL||'@cf/openai/whisper-large-v3-turbo',{audio:[...bytes]});
  const text=result?.text||result?.transcription||result?.response;if(!text)throw new Error('Speech recognition returned no transcript.');return text;
}
async function geminiAudio(env,secrets,file) {
  if(!secrets.geminiKeys?.length)throw new Error('Gemini keys are not configured.');
  const bytes=new Uint8Array(await file.arrayBuffer());const audio=base64(bytes);const start=Math.floor(Math.random()*secrets.geminiKeys.length);let failure='Gemini transcription failed.';
  for(let index=0;index<secrets.geminiKeys.length;index++) {
    const key=secrets.geminiKeys[(start+index)%secrets.geminiKeys.length];
    try {
      const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(env.GEMINI_STT_MODEL||'gemini-3.5-transcribe')}:generateContent`,{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':key},body:JSON.stringify({contents:[{role:'user',parts:[{text:'Transcribe the supplied audio accurately. Return only the words that are spoken. Do not identify the speaker or infer personal attributes.'},{inline_data:{mime_type:(file.type||'audio/webm').split(';')[0],data:audio}}]}],generationConfig:{temperature:0,maxOutputTokens:2500}})});
      const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(`Gemini responded ${response.status}.`);
      const text=data.candidates?.[0]?.content?.parts?.map(part=>part.text||'').join('\n').trim();if(text)return text;
    } catch(error) {failure=error.message;}
  }
  throw new Error(failure);
}
export async function onRequestPost({request,env}) {
  const started=Date.now();
  if(!request.headers.get('content-type')?.includes('multipart/form-data'))return json({error:'Submit an audio file as multipart form data.'},400);
  let form;try{form=await request.formData();}catch{return json({error:'Could not read the audio upload.'},400);}
  const file=form.get('audio');if(!file||typeof file.arrayBuffer!=='function')return json({error:'Audio file is missing.'},400);
  if(file.size>10*1024*1024)return json({error:'Audio file must be smaller than 10 MB.'},413);
  if(!/^audio\//.test(file.type||''))return json({error:'Choose a valid audio file.'},415);
  const settings=await getSettings(env);const secrets=await getProviderSecrets(env);const capable=['cloudflare','gemini'];
  const requested=settings.automaticFallback?(settings.providerOrder||capable):[settings.preferredProvider||'cloudflare'];
  const order=requested.filter((provider,index,array)=>capable.includes(provider)&&array.indexOf(provider)===index&&settings.providerEnabled?.[provider]!==false);
  for(const provider of order) {
    try {
      const text=provider==='cloudflare'?await whisper(env,file):await geminiAudio(env,secrets,file);
      if(!text)throw new Error('This provider returned no transcript.');
      await logRequest(env,{task:'audio-transcription',provider,outcome:'success',latencyMs:Date.now()-started,mode:settings.automaticFallback?'auto':'manual'});
      return json({text,provider,latencyMs:Date.now()-started,mode:settings.automaticFallback?'auto':'manual'});
    } catch {}
  }
  await logRequest(env,{task:'audio-transcription',provider:order.join(',')||'none',outcome:'failed',latencyMs:Date.now()-started,mode:settings.automaticFallback?'auto':'manual'});
  return json({error:'No enabled audio-transcription provider is available under the current routing mode. Use browser speech recognition or type a transcript. The uploaded audio was not saved.'},503);
}
