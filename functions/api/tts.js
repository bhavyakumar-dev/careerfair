import {json,getProviderSecrets,getSettings,safeString,originAllowed,logRequest} from '../_shared.js';

const STATIC_WORDS={
  articulate:'Articulate. Able to express an idea clearly and effectively. Example: “A strong presenter makes a complex idea easy to understand.”',
  concise:'Concise. Giving a lot of information clearly in very few words. Example: “A concise email respects the reader’s time and still includes the next step.”',
  nuance:'Nuance. A small but important difference in meaning, feeling or expression. Example: “Good dialogue captures the nuance between what a character says and what they mean.”',
  persuasive:'Persuasive. Able to make someone consider or accept an idea through clear reasons. Example: “A persuasive pitch explains the need, shows evidence and makes a fair request.”',
  empathetic:'Empathetic. Showing that you understand or care about another person’s feelings. Example: “An empathetic response can make a difficult conversation more productive.”',
  coherent:'Coherent. Logical, clear and connected in a way that is easy to follow. Example: “A coherent argument guides the listener from a claim to the supporting evidence.”',
  resonate:'Resonate. To create a strong feeling or connection with someone. Example: “A story can resonate when its details feel honest and recognisable.”',
  credible:'Credible. Believable because it is trustworthy and supported by evidence. Example: “A credible report separates what is known from what is still uncertain.”',
  collaborate:'Collaborate. To work with other people to achieve or create something. Example: “Great productions happen when writers, performers and editors collaborate.”',
  nuanced:'Nuanced. Showing awareness of subtle differences or more than one side of an issue. Example: “A nuanced review can criticise a film while recognising what it does well.”'
};
async function digest(value){const data=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));return [...new Uint8Array(data)].map(byte=>byte.toString(16).padStart(2,'0')).join('');}
function ttsSignature(provider,text,secrets,env){const config={cartesia:[env.CARTESIA_TTS_MODEL||'sonic-3.6',env.CARTESIA_VOICE_ID||secrets.cartesiaVoiceId||''],openai:[env.OPENAI_TTS_MODEL||'gpt-4o-mini-tts',env.OPENAI_TTS_VOICE||secrets.openaiTtsVoice||'alloy'],deepgram:[env.DEEPGRAM_TTS_MODEL||secrets.deepgramTtsModel||'aura-2-thalia-en',''],kokoro:[env.KOKORO_MODEL||'kokoro',env.KOKORO_VOICE||secrets.kokoroVoice||'af_sarah',secrets.kokoroUrl||env.KOKORO_URL||''],elevenlabs:[env.ELEVENLABS_TTS_MODEL||'eleven_turbo_v2_5',env.ELEVENLABS_VOICE_ID||'EXAVITQu4vr4xnSDxMaL']};return `${provider}\n${JSON.stringify(config[provider]||[])}\n${text}`;}
async function staticCacheKey(provider,text,secrets,env){return `tts-cache/v1/${provider}/${await digest(ttsSignature(provider,text,secrets,env))}.mp3`;}

async function providerAudio(provider,text,secrets,env) {
  const timeout=AbortSignal.timeout(18000);
  let response;
  if(provider==='cartesia'&&secrets.cartesiaKey&&(env.CARTESIA_VOICE_ID||secrets.cartesiaVoiceId)) {
    response=await fetch('https://api.cartesia.ai/tts/bytes',{method:'POST',headers:{'Authorization':`Bearer ${secrets.cartesiaKey}`,'Cartesia-Version':env.CARTESIA_API_VERSION||'2025-04-16','Content-Type':'application/json','Accept':'audio/mpeg'},body:JSON.stringify({model_id:env.CARTESIA_TTS_MODEL||'sonic-3.6',transcript:text,voice:env.CARTESIA_VOICE_ID||secrets.cartesiaVoiceId,output_format:{container:'mp3',encoding:'mp3',sample_rate:44100}}),signal:timeout});
  } else if(provider==='openai'&&secrets.openaiTtsKey) {
    response=await fetch('https://api.openai.com/v1/audio/speech',{method:'POST',headers:{'Authorization':`Bearer ${secrets.openaiTtsKey}`,'Content-Type':'application/json','Accept':'audio/mpeg'},body:JSON.stringify({model:env.OPENAI_TTS_MODEL||'gpt-4o-mini-tts',voice:env.OPENAI_TTS_VOICE||secrets.openaiTtsVoice||'alloy',input:text,response_format:'mp3'}),signal:timeout});
  } else if(provider==='deepgram'&&secrets.deepgramKey) {
    const model=env.DEEPGRAM_TTS_MODEL||secrets.deepgramTtsModel||'aura-2-thalia-en';
    response=await fetch(`https://api.deepgram.com/v1/speak?model=${encodeURIComponent(model)}&encoding=mp3`,{method:'POST',headers:{'Authorization':`Token ${secrets.deepgramKey}`,'Content-Type':'application/json','Accept':'audio/mpeg'},body:JSON.stringify({text}),signal:timeout});
  } else if(provider==='kokoro'&&secrets.kokoroUrl) {
    const endpoint=new URL(secrets.kokoroUrl);if(!['https:','http:'].includes(endpoint.protocol))throw new Error('Kokoro URL must use HTTP or HTTPS.');
    if(!endpoint.pathname.endsWith('/audio/speech')&&!endpoint.pathname.endsWith('/v1/audio/speech'))endpoint.pathname=endpoint.pathname.replace(/\/$/,'')+'/v1/audio/speech';
    const headers={'Content-Type':'application/json','Accept':'audio/mpeg'};if(secrets.kokoroToken)headers.Authorization=`Bearer ${secrets.kokoroToken}`;
    response=await fetch(endpoint,{method:'POST',headers,body:JSON.stringify({model:env.KOKORO_MODEL||'kokoro',voice:env.KOKORO_VOICE||secrets.kokoroVoice||'af_sarah',input:text,response_format:'mp3'}),signal:timeout});
  } else if(provider==='elevenlabs'&&secrets.elevenlabsKey) {
    const voice=env.ELEVENLABS_VOICE_ID||'EXAVITQu4vr4xnSDxMaL';
    response=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voice)}/stream`,{method:'POST',headers:{'xi-api-key':secrets.elevenlabsKey,'content-type':'application/json','accept':'audio/mpeg'},body:JSON.stringify({text,model_id:env.ELEVENLABS_TTS_MODEL||'eleven_turbo_v2_5',voice_settings:{stability:0.55,similarity_boost:0.75}}),signal:timeout});
  } else return null;
  if(!response.ok)throw new Error(`${provider} returned ${response.status}`);
  const type=response.headers.get('content-type')||'audio/mpeg';
  if(!type.toLowerCase().includes('audio')&&!type.includes('octet-stream'))throw new Error(`${provider} returned an unexpected content type`);
  return new Response(response.body,{headers:{'content-type':type,'cache-control':'private, no-store','x-content-type-options':'nosniff','x-openmic-tts-provider':provider}});
}

export async function onRequestPost({request,env}) {
  const started=Date.now();
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  const body=await request.json().catch(()=>null);if(!body)return json({error:'Invalid request.'},400);
  const staticWordId=safeString(body.staticWordId,40).trim().toLowerCase();
  const isStaticWord=Object.hasOwn(STATIC_WORDS,staticWordId);
  const text=isStaticWord?STATIC_WORDS[staticWordId]:safeString(body.text,1800).trim();if(!text)return json({error:'Text is required.'},400);
  if(text.length>1800)return json({error:'Speech request is too long.'},413);
  const settings=await getSettings(env);const secrets=await getProviderSecrets(env);
  const names={cartesia:'Cartesia Sonic',openai:'OpenAI TTS',deepgram:'Deepgram Aura',kokoro:'Kokoro host',elevenlabs:'ElevenLabs'};
  let order=settings.ttsAutomaticFallback===false?[settings.ttsPreferredProvider]:Array.isArray(settings.ttsProviderOrder)?settings.ttsProviderOrder:['cartesia','openai','deepgram','kokoro','elevenlabs'];
  if(!order.length||order[0]==='browser')return json({error:'Browser speech was selected. Use the browser voice fallback.'},503);
  const enabled=settings.ttsProviderEnabled||{};order=order.filter(provider=>['cartesia','openai','deepgram','kokoro','elevenlabs'].includes(provider)&&(settings.ttsAutomaticFallback===false||enabled[provider]!==false));
  const failures=[];
  for(const provider of order) {
    try {
      const cacheKey=isStaticWord&&env.MEDIA?await staticCacheKey(provider,text,secrets,env):'';
      if(cacheKey&&env.MEDIA){try{const cached=await env.MEDIA.get(cacheKey);if(cached){await logRequest(env,{task:'tts',provider:`${provider}-cache`,outcome:'success',latencyMs:Date.now()-started,mode:'static-audio-cache'});return new Response(cached.body,{headers:{'content-type':cached.httpMetadata?.contentType||'audio/mpeg','cache-control':'private, no-store','x-content-type-options':'nosniff','x-openmic-tts-provider':provider,'x-openmic-tts-cache':'hit'}});}}catch{}}
      const response=await providerAudio(provider,text,secrets,env);if(!response)continue;
      if(cacheKey&&env.MEDIA){const audio=await response.arrayBuffer();try{await env.MEDIA.put(cacheKey,audio,{httpMetadata:{contentType:response.headers.get('content-type')||'audio/mpeg'},customMetadata:{purpose:'public-static-word-pronunciation',wordId:staticWordId,provider,createdAt:new Date().toISOString()}});}catch{}await logRequest(env,{task:'tts',provider,outcome:'success',latencyMs:Date.now()-started,mode:'static-audio-cache-miss'});return new Response(audio,{headers:{'content-type':response.headers.get('content-type')||'audio/mpeg','cache-control':'private, no-store','x-content-type-options':'nosniff','x-openmic-tts-provider':provider,'x-openmic-tts-cache':'miss'}});}
      await logRequest(env,{task:'tts',provider,outcome:'success',latencyMs:Date.now()-started,mode:settings.ttsAutomaticFallback===false?'manual':'automatic'});return response;
    }
    catch(error) {failures.push(`${names[provider]||provider}: ${safeString(error.message,100)}`);await logRequest(env,{task:'tts',provider,outcome:'failed',latencyMs:Date.now()-started,mode:settings.ttsAutomaticFallback===false?'manual':'automatic'});if(settings.ttsAutomaticFallback===false)break;}
  }
  const manual=settings.ttsAutomaticFallback===false;
  return json({error:manual?'The selected text-to-speech provider is not configured or returned an error. Browser speech can be used instead.':`No enabled text-to-speech provider was available. ${failures.slice(0,3).join('; ')||'Configure a provider key and its required voice settings in Admin.'}`},503);
}
