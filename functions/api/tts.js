import {json,getSettings,getProviderSecrets,safeString,originAllowed,isIpBanned} from '../_shared.js';

export async function onRequestPost({request,env}) {
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  if(await isIpBanned(request,env))return json({error:'Your IP address is restricted.'},403);
  const body=await request.json().catch(()=>null);if(!body)return json({error:'Invalid request.'},400);
  const text=safeString(body.text,1800).trim();if(!text)return json({error:'Text is required.'},400);

  const settings=await getSettings(env);
  const secrets=await getProviderSecrets(env);

  let chosen=settings.ttsProvider||'auto';
  if(chosen==='auto'){
    if(secrets.cartesiaKey&&settings.providerEnabled?.cartesia!==false)chosen='cartesia';
    else if(secrets.openaiKey&&settings.providerEnabled?.openai!==false)chosen='openai';
    else if(secrets.deepgramKey&&settings.providerEnabled?.deepgram!==false)chosen='deepgram';
    else if(secrets.kokoroUrl&&settings.providerEnabled?.kokoro!==false)chosen='kokoro';
    else if(secrets.elevenlabsKey&&settings.providerEnabled?.elevenlabs!==false)chosen='elevenlabs';
    else chosen='browser';
  }

  if(chosen==='cartesia'){
    if(!secrets.cartesiaKey||settings.providerEnabled?.cartesia===false)return json({error:'Cartesia Sonic not configured. Falling back to browser speech.',provider:'browser',fallback:true},503);
    try{
      const voiceId=env.CARTESIA_VOICE_ID||'a0e99841-438c-4a64-b679-ae501e7d6091';
      const response=await fetch('https://api.cartesia.ai/tts/bytes',{
        method:'POST',
        headers:{'X-API-Key':secrets.cartesiaKey,'Cartesia-Version':'2024-06-10','Content-Type':'application/json'},
        body:JSON.stringify({model_id:env.CARTESIA_MODEL||'sonic-english',transcript:text,voice:{mode:'id',id:voiceId},output_format:{container:'mp3',encoding:'mp3',sample_rate:44100}})
      });
      if(!response.ok)return json({error:`Cartesia Sonic returned ${response.status}`,provider:'browser',fallback:true},502);
      return new Response(response.body,{headers:{'content-type':'audio/mpeg','cache-control':'no-store','x-tts-provider':'cartesia'}});
    }catch(err){return json({error:err.message,provider:'browser',fallback:true},502);}
  }

  if(chosen==='openai'){
    if(!secrets.openaiKey||settings.providerEnabled?.openai===false)return json({error:'OpenAI TTS not configured. Falling back to browser speech.',provider:'browser',fallback:true},503);
    try{
      const response=await fetch('https://api.openai.com/v1/audio/speech',{
        method:'POST',
        headers:{'Authorization':`Bearer ${secrets.openaiKey}`,'Content-Type':'application/json'},
        body:JSON.stringify({model:env.OPENAI_TTS_MODEL||'tts-1',voice:env.OPENAI_TTS_VOICE||'alloy',input:text})
      });
      if(!response.ok)return json({error:`OpenAI TTS returned ${response.status}`,provider:'browser',fallback:true},502);
      return new Response(response.body,{headers:{'content-type':'audio/mpeg','cache-control':'no-store','x-tts-provider':'openai'}});
    }catch(err){return json({error:err.message,provider:'browser',fallback:true},502);}
  }

  if(chosen==='deepgram'){
    if(!secrets.deepgramKey||settings.providerEnabled?.deepgram===false)return json({error:'Deepgram Aura not configured. Falling back to browser speech.',provider:'browser',fallback:true},503);
    try{
      const model=env.DEEPGRAM_TTS_MODEL||'aura-asteria-en';
      const response=await fetch(`https://api.deepgram.com/v1/speak?model=${encodeURIComponent(model)}`,{
        method:'POST',
        headers:{'Authorization':`Token ${secrets.deepgramKey}`,'Content-Type':'application/json'},
        body:JSON.stringify({text})
      });
      if(!response.ok)return json({error:`Deepgram Aura returned ${response.status}`,provider:'browser',fallback:true},502);
      return new Response(response.body,{headers:{'content-type':'audio/mpeg','cache-control':'no-store','x-tts-provider':'deepgram'}});
    }catch(err){return json({error:err.message,provider:'browser',fallback:true},502);}
  }

  if(chosen==='kokoro'){
    if(!secrets.kokoroUrl||settings.providerEnabled?.kokoro===false)return json({error:'Kokoro-82M endpoint not configured. Falling back to browser speech.',provider:'browser',fallback:true},503);
    try{
      const url=secrets.kokoroUrl.replace(/\/$/,'');
      const target=url.endsWith('/v1/audio/speech')?url:`${url}/v1/audio/speech`;
      const response=await fetch(target,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({model:'kokoro',voice:'af_heart',input:text})
      });
      if(!response.ok)return json({error:`Kokoro-82M returned ${response.status}`,provider:'browser',fallback:true},502);
      return new Response(response.body,{headers:{'content-type':'audio/mpeg','cache-control':'no-store','x-tts-provider':'kokoro'}});
    }catch(err){return json({error:err.message,provider:'browser',fallback:true},502);}
  }

  if(chosen==='elevenlabs'){
    if(!secrets.elevenlabsKey||settings.providerEnabled?.elevenlabs===false)return json({error:'ElevenLabs is disabled or not configured. Falling back to browser speech.',provider:'browser',fallback:true},503);
    const voice=env.ELEVENLABS_VOICE_ID||'EXAVITQu4vr4xnSDxMaL';
    try{
      const response=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voice)}`,{
        method:'POST',
        headers:{'xi-api-key':secrets.elevenlabsKey,'content-type':'application/json','accept':'audio/mpeg'},
        body:JSON.stringify({text,model_id:env.ELEVENLABS_TTS_MODEL||'eleven_turbo_v2_5',voice_settings:{stability:0.55,similarity_boost:0.75}})
      });
      if(!response.ok)return json({error:`ElevenLabs returned ${response.status}`,provider:'browser',fallback:true},502);
      return new Response(response.body,{headers:{'content-type':'audio/mpeg','cache-control':'no-store','x-tts-provider':'elevenlabs'}});
    }catch(err){return json({error:err.message,provider:'browser',fallback:true},502);}
  }

  return json({provider:'browser',fallback:true});
}