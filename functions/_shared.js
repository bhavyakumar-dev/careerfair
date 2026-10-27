export const FEATURE_KEYS = ['hero','whyEnglish','careers','quiz','plan','careerChat','speechLab','mockInterview','roleplay','anchor','compare','speakers','leaderboard','wordOfDay','emailGame','pronunciation','debate','feedback','games','closing','liveStage','testimonials','versionLibrary','velocityGame','careerGuesser','jobtris','wordOracle','objectOracle','semanticCompass','liveStream'];
export const DEFAULTS = {
  theme:'mix',language:'en',showSchoolName:true,schoolName:'Kanakia International School Mira Road',automaticFallback:true,preferredProvider:'gemini',speechProvider:'auto',qualityMode:'balanced',providerOrder:['gemini','cloudflare','free','laptop'],providerEnabled:{cloudflare:true,gemini:true,free:true,laptop:false},ttsAutomaticFallback:true,ttsPreferredProvider:'browser',ttsProviderOrder:['cartesia','openai','deepgram','kokoro','elevenlabs'],ttsProviderEnabled:{cartesia:true,openai:true,deepgram:true,kokoro:true,elevenlabs:true},liveStageEnabled:false,liveStageUrl:'',horizontalSections:false,allowHardcodedAuth:true,liveStreamEnabled:false,liveStreamUrl:'',liveStreamTitle:'Open Mic Career Fair — Live Session',features:Object.fromEntries(FEATURE_KEYS.map(key=>[key,true]))
};
export function json(data,status=200,headers={}) { return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}}); }
export async function parseJson(request) { try { return await request.json(); } catch { return null; } }
export function safeString(value,max=10000) { return typeof value==='string'?value.slice(0,max):''; }
export function base64Url(bytes) { let text=''; for (const byte of bytes) text+=String.fromCharCode(byte); return btoa(text).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }
export function fromBase64Url(value) { const raw=value.replace(/-/g,'+').replace(/_/g,'/'); const decoded=atob(raw+'='.repeat((4-raw.length%4)%4)); return Uint8Array.from(decoded,char=>char.charCodeAt(0)); }
function bytesFromBase64(value) { const raw=atob(value); return Uint8Array.from(raw,char=>char.charCodeAt(0)); }
export async function getSettings(env) {
  let saved={};
  try { if(env.DB){const row=await env.DB.prepare('SELECT value FROM settings WHERE key = ?').bind('app_config').first();if(row?.value)saved=JSON.parse(row.value); } } catch {}
  return {...DEFAULTS,...saved,features:{...DEFAULTS.features,...(saved.features||{})},providerEnabled:{...DEFAULTS.providerEnabled,...(saved.providerEnabled||{})},providerOrder:Array.isArray(saved.providerOrder)?saved.providerOrder.filter(key=>['cloudflare','gemini','free','laptop'].includes(key)):DEFAULTS.providerOrder,ttsProviderOrder:Array.isArray(saved.ttsProviderOrder)?saved.ttsProviderOrder.filter(key=>['cartesia','openai','deepgram','kokoro','elevenlabs'].includes(key)):DEFAULTS.ttsProviderOrder,ttsProviderEnabled:{...DEFAULTS.ttsProviderEnabled,...(saved.ttsProviderEnabled||{})},liveStageUrl:typeof saved.liveStageUrl==='string'?saved.liveStageUrl:'',liveStageEnabled:saved.liveStageEnabled===true,horizontalSections:saved.horizontalSections===true};
}
export async function saveSettings(env,settings) {
  if(!env.DB)throw new Error('D1 database binding DB is not configured.');
  await env.DB.prepare('INSERT INTO settings (key,value,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at').bind('app_config',JSON.stringify(settings),new Date().toISOString()).run();
}
export async function getProviderSecrets(env) {
  const result={geminiKeys:[],elevenlabsKey:env.ELEVENLABS_API_KEY||'',freeUrl:env.FREE_LLM_URL||'',freeKey:env.FREE_LLM_KEY||'',freeModel:env.FREE_LLM_MODEL||'default',laptopUrl:env.LAPTOP_URL||'',laptopToken:env.LAPTOP_TOKEN||'',laptopModel:env.LAPTOP_MODEL||'llama3.2:3b',cartesiaKey:env.CARTESIA_API_KEY||'',cartesiaVoiceId:env.CARTESIA_VOICE_ID||'',openaiTtsKey:env.OPENAI_TTS_API_KEY||env.OPENAI_API_KEY||'',openaiTtsVoice:env.OPENAI_TTS_VOICE||'alloy',deepgramKey:env.DEEPGRAM_API_KEY||'',deepgramTtsModel:env.DEEPGRAM_TTS_MODEL||'aura-2-thalia-en',kokoroUrl:env.KOKORO_URL||'',kokoroToken:env.KOKORO_TOKEN||'',kokoroVoice:env.KOKORO_VOICE||'af_sarah',telegramBotToken:env.TELEGRAM_BOT_TOKEN||'',telegramChatId:env.TELEGRAM_CHAT_ID||'',githubVaultToken:env.GITHUB_VAULT_TOKEN||'',githubVaultRepo:env.GITHUB_VAULT_REPO||''};
  const envKeys=String(env.GEMINI_API_KEYS||env.GEMINI_API_KEY||'').split(/[\r\n,]+/).map(value=>value.trim()).filter(Boolean);
  result.geminiKeys=envKeys;
  if(!env.DB)return result;
  try {
    const row=await env.DB.prepare('SELECT value FROM settings WHERE key = ?').bind('provider_secrets').first();
    if(!row?.value||!env.CONFIG_ENCRYPTION_KEY)return result;
    const parsed=JSON.parse(row.value);
    if(parsed?.version!=='v1')return result;
    const keyBytes=bytesFromBase64(env.CONFIG_ENCRYPTION_KEY);
    if(keyBytes.length!==32)return result;
    const cryptoKey=await crypto.subtle.importKey('raw',keyBytes,{name:'AES-GCM'},false,['decrypt']);
    const iv=bytesFromBase64(parsed.iv);const encrypted=bytesFromBase64(parsed.data);
    const plaintext=await crypto.subtle.decrypt({name:'AES-GCM',iv},cryptoKey,encrypted);
    const stored=JSON.parse(new TextDecoder().decode(plaintext));
    return {
      geminiKeys:envKeys.length?envKeys:(Array.isArray(stored.geminiKeys)?stored.geminiKeys:[]),elevenlabsKey:env.ELEVENLABS_API_KEY||stored.elevenlabsKey||'',
      freeUrl:env.FREE_LLM_URL||stored.freeUrl||'',freeKey:env.FREE_LLM_KEY||stored.freeKey||'',freeModel:env.FREE_LLM_MODEL||stored.freeModel||'default',
      laptopUrl:env.LAPTOP_URL||stored.laptopUrl||'',laptopToken:env.LAPTOP_TOKEN||stored.laptopToken||'',laptopModel:env.LAPTOP_MODEL||stored.laptopModel||'llama3.2:3b',
      cartesiaKey:env.CARTESIA_API_KEY||stored.cartesiaKey||'',cartesiaVoiceId:env.CARTESIA_VOICE_ID||stored.cartesiaVoiceId||'',openaiTtsKey:env.OPENAI_TTS_API_KEY||env.OPENAI_API_KEY||stored.openaiTtsKey||'',openaiTtsVoice:env.OPENAI_TTS_VOICE||stored.openaiTtsVoice||'alloy',deepgramKey:env.DEEPGRAM_API_KEY||stored.deepgramKey||'',deepgramTtsModel:env.DEEPGRAM_TTS_MODEL||stored.deepgramTtsModel||'aura-2-thalia-en',kokoroUrl:env.KOKORO_URL||stored.kokoroUrl||'',kokoroToken:env.KOKORO_TOKEN||stored.kokoroToken||'',kokoroVoice:env.KOKORO_VOICE||stored.kokoroVoice||'af_sarah',telegramBotToken:env.TELEGRAM_BOT_TOKEN||stored.telegramBotToken||'',telegramChatId:env.TELEGRAM_CHAT_ID||stored.telegramChatId||'',githubVaultToken:env.GITHUB_VAULT_TOKEN||stored.githubVaultToken||'',githubVaultRepo:env.GITHUB_VAULT_REPO||stored.githubVaultRepo||''
    };
  } catch { return result; }
}
export async function storeProviderSecrets(env,secrets) {
  if(!env.DB)throw new Error('D1 database binding DB is not configured.');
  if(!env.CONFIG_ENCRYPTION_KEY)throw new Error('CONFIG_ENCRYPTION_KEY is not configured as a Cloudflare secret.');
  const keyBytes=bytesFromBase64(env.CONFIG_ENCRYPTION_KEY);
  if(keyBytes.length!==32)throw new Error('CONFIG_ENCRYPTION_KEY must be a base64-encoded 32-byte value.');
  const cryptoKey=await crypto.subtle.importKey('raw',keyBytes,{name:'AES-GCM'},false,['encrypt']);
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const encoded=new TextEncoder().encode(JSON.stringify(secrets));
  const encrypted=await crypto.subtle.encrypt({name:'AES-GCM',iv},cryptoKey,encoded);
  const payload=JSON.stringify({version:'v1',iv:btoa(String.fromCharCode(...iv)),data:btoa(String.fromCharCode(...new Uint8Array(encrypted)))});
  await env.DB.prepare('INSERT INTO settings (key,value,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at').bind('provider_secrets',payload,new Date().toISOString()).run();
}
export async function logRequest(env,entry) {
  try { if(!env.DB)return; await env.DB.prepare('INSERT INTO request_logs (created_at,task,provider,outcome,latency_ms,mode) VALUES (?,?,?,?,?,?)').bind(new Date().toISOString(),safeString(entry.task,60),safeString(entry.provider,40),safeString(entry.outcome,20),Math.max(0,Number(entry.latencyMs)||0),safeString(entry.mode,30)).run(); } catch {}
}
function constantTimeEqual(a,b) {
  const left=new TextEncoder().encode(String(a));const right=new TextEncoder().encode(String(b));
  let difference=left.length^right.length;const length=Math.max(left.length,right.length);
  for(let index=0;index<length;index++)difference|=(left[index%Math.max(1,left.length)]||0)^(right[index%Math.max(1,right.length)]||0);
  return difference===0;
}
async function hmacToken(payload,secret) {
  const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
  const signature=await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(payload));
  return `${payload}.${base64Url(new Uint8Array(signature))}`;
}
export async function createAdminToken(user,env,role='admin') {
  if(!env.ADMIN_SESSION_SECRET||String(env.ADMIN_SESSION_SECRET).length<32)throw new Error('ADMIN_SESSION_SECRET must contain at least 32 characters.');
  const payload=base64Url(new TextEncoder().encode(JSON.stringify({sub:user,role:role||'admin',exp:Date.now()+8*60*60*1000,nonce:base64Url(crypto.getRandomValues(new Uint8Array(8)))})));
  return hmacToken(payload,env.ADMIN_SESSION_SECRET);
}
export async function verifyAdmin(request,env) {
  if(!env.ADMIN_SESSION_SECRET||String(env.ADMIN_SESSION_SECRET).length<32)return false;
  const cookie=request.headers.get('Cookie')||'';const match=cookie.match(/(?:^|;\s*)openmic_admin=([^;]+)/);if(!match)return false;
  const token=match[1];const separator=token.lastIndexOf('.');if(separator<1)return false;
  const payload=token.slice(0,separator);const signature=token.slice(separator+1);const expected=await hmacToken(payload,env.ADMIN_SESSION_SECRET);
  if(!constantTimeEqual(expected.slice(expected.lastIndexOf('.')+1),signature))return false;
  try {
    const value=JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
    if(!value||value.exp<=Date.now())return false;
    return {sub:value.sub,role:value.role||'admin',exp:value.exp};
  }catch{return false;}
}
export function cookieHeader(token,secure=true) { return `openmic_admin=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800${secure?'; Secure':''}`; }
export function sessionRequired(request,env) { return verifyAdmin(request,env); }
export function originAllowed(request) {
  const origin=request.headers.get('Origin');if(!origin)return true;
  try{return new URL(origin).origin===new URL(request.url).origin;}catch{return false;}
}
export async function saveAdminSettings(env,body) {
  const current=await getSettings(env);
  const next={...current,...body,features:{...current.features,...(body.features||{})},providerEnabled:{...current.providerEnabled,...(body.providerEnabled||{})}};
  next.theme=['mix','dark','vibrant','clean','orange'].includes(next.theme)?next.theme:'mix';
  next.liveStageEnabled=next.liveStageEnabled===true;
  if(typeof next.liveStageUrl==='string'&&next.liveStageUrl.trim()){try{const liveUrl=new URL(next.liveStageUrl);next.liveStageUrl=['https:','http:'].includes(liveUrl.protocol)?liveUrl.href.slice(0,1000):'';}catch{next.liveStageUrl='';}}else next.liveStageUrl='';
  next.allowHardcodedAuth=body.allowHardcodedAuth!==undefined?!!body.allowHardcodedAuth:(current.allowHardcodedAuth!==false);
  next.liveStreamEnabled=body.liveStreamEnabled!==undefined?!!body.liveStreamEnabled:!!current.liveStreamEnabled;
  next.liveStreamUrl=typeof body.liveStreamUrl==='string'?body.liveStreamUrl.trim().slice(0,500):(current.liveStreamUrl||'');
  next.liveStreamTitle=typeof body.liveStreamTitle==='string'?body.liveStreamTitle.trim().slice(0,200):(current.liveStreamTitle||'Open Mic Career Fair — Live Session');
  next.horizontalSections=next.horizontalSections===true;
  next.language=['en','hi'].includes(next.language)?next.language:'en';
  next.schoolName=safeString(next.schoolName||'Kanakia International School Mira Road',90);
  next.automaticFallback=next.automaticFallback!==false;
  next.preferredProvider=['cloudflare','gemini','free','laptop'].includes(next.preferredProvider)?next.preferredProvider:'cloudflare';
  next.speechProvider=['auto','elevenlabs','cloudflare','gemini'].includes(next.speechProvider)?next.speechProvider:'auto';
  next.ttsAutomaticFallback=next.ttsAutomaticFallback!==false;
  next.ttsPreferredProvider=['cartesia','openai','deepgram','kokoro','elevenlabs','browser'].includes(next.ttsPreferredProvider)?next.ttsPreferredProvider:'browser';
  next.ttsProviderEnabled=Object.fromEntries(['cartesia','openai','deepgram','kokoro','elevenlabs'].map(key=>[key,body.ttsProviderEnabled?.[key]===undefined?(current.ttsProviderEnabled?.[key]??true):!!body.ttsProviderEnabled[key]]));
  const ttsOrder=Array.isArray(body.ttsProviderOrder)?body.ttsProviderOrder.filter((key,index,array)=>['cartesia','openai','deepgram','kokoro','elevenlabs'].includes(key)&&array.indexOf(key)===index):(current.ttsProviderOrder||DEFAULTS.ttsProviderOrder);
  next.ttsProviderOrder=[...ttsOrder,...['cartesia','openai','deepgram','kokoro','elevenlabs'].filter(key=>!ttsOrder.includes(key))];
  next.qualityMode=['best','balanced','saver'].includes(next.qualityMode)?next.qualityMode:'balanced';
  next.features=Object.fromEntries(FEATURE_KEYS.map(key=>[key,body.features?.[key]===undefined?current.features[key]:!!body.features[key]]));
  next.providerEnabled=Object.fromEntries(['cloudflare','gemini','free','laptop'].map(key=>[key,body.providerEnabled?.[key]===undefined?current.providerEnabled[key]:!!body.providerEnabled[key]]));
  const order=Array.isArray(body.providerOrder)?body.providerOrder.filter((key,index,array)=>['cloudflare','gemini','free','laptop'].includes(key)&&array.indexOf(key)===index):current.providerOrder;
  next.providerOrder=[...order,...['cloudflare','gemini','free','laptop'].filter(key=>!order.includes(key))];
  await saveSettings(env,next);
  return next;
}
export async function providerStatus(env) {
  const secrets=await getProviderSecrets(env);
  return {cloudflareConfigured:!!env.AI,geminiCount:secrets.geminiKeys.length,elevenlabsConfigured:!!secrets.elevenlabsKey,freeConfigured:!!(secrets.freeUrl&&secrets.freeKey&&secrets.freeModel),laptopConfigured:!!secrets.laptopUrl,laptopHasToken:!!secrets.laptopToken,cartesiaConfigured:!!(secrets.cartesiaKey&&(env.CARTESIA_VOICE_ID||secrets.cartesiaVoiceId)),openaiTtsConfigured:!!secrets.openaiTtsKey,deepgramConfigured:!!secrets.deepgramKey,kokoroConfigured:!!secrets.kokoroUrl,telegramConfigured:!!(secrets.telegramBotToken&&secrets.telegramChatId),githubVaultConfigured:!!(secrets.githubVaultToken&&secrets.githubVaultRepo)};
}

export async function notifyTelegram(env,message) {
  try { const secrets=await getProviderSecrets(env); if(!secrets.telegramBotToken||!secrets.telegramChatId)return false; const response=await fetch(`https://api.telegram.org/bot${secrets.telegramBotToken}/sendMessage`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({chat_id:secrets.telegramChatId,text:safeString(message,700),disable_web_page_preview:true}),signal:AbortSignal.timeout(5000)}); return response.ok; } catch { return false; }
}
