import {json,getSettings,getProviderSecrets,safeString,originAllowed} from '../_shared.js';
export async function onRequestPost({request,env}) {
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  const body=await request.json().catch(()=>null);if(!body)return json({error:'Invalid request.'},400);
  const text=safeString(body.text,1800).trim();if(!text)return json({error:'Text is required.'},400);
  
  const settings=await getSettings(env);
  if(settings.providerEnabled?.elevenlabs!==true) {
    return json({error:'ElevenLabs API access is disabled in the Admin Panel. Falling back to browser speech.',provider:'browser',fallback:true,disabled:true},503);
  }

  const secrets=await getProviderSecrets(env);
  if(!secrets.elevenlabsKey)return json({error:'ElevenLabs is not configured. The browser will use its built-in speech voice.',provider:'browser',fallback:true},503);
  
  const voice=env.ELEVENLABS_VOICE_ID||'EXAVITQu4vr4xnSDxMaL';
  try {
    const response=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voice)}`,{method:'POST',headers:{'xi-api-key':secrets.elevenlabsKey,'content-type':'application/json','accept':'audio/mpeg'},body:JSON.stringify({text,model_id:env.ELEVENLABS_TTS_MODEL||'eleven_turbo_v2_5',voice_settings:{stability:0.55,similarity_boost:0.75}})});
    if(!response.ok)return json({error:`ElevenLabs speech returned ${response.status}.`,provider:'browser',fallback:true},502);
    return new Response(response.body,{headers:{'content-type':'audio/mpeg','cache-control':'no-store','x-content-type-options':'nosniff','x-tts-provider':'elevenlabs'}});
  } catch(error) {
    return json({error:`ElevenLabs connection failed: ${error.message}`,provider:'browser',fallback:true},502);
  }
}
