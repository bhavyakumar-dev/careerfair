export const FEATURE_KEYS = ['hero','whyEnglish','careers','quiz','plan','speechLab','mockInterview','roleplay','anchor','compare','speakers','leaderboard','wordOfDay','emailGame','pronunciation','debate','qr','closing'];
export const DEFAULTS = {
  theme:'mix',language:'en',showSchoolName:true,schoolName:'Kanakia International School Mira Road',automaticFallback:true,preferredProvider:'cloudflare',qualityMode:'balanced',providerOrder:['cloudflare','gemini','free','laptop'],providerEnabled:{cloudflare:true,gemini:true,free:true,laptop:false},features:Object.fromEntries(FEATURE_KEYS.map(key=>[key,true]))
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
  return {...DEFAULTS,...saved,features:{...DEFAULTS.features,...(saved.features||{})},providerEnabled:{...DEFAULTS.providerEnabled,...(saved.providerEnabled||{})},providerOrder:Array.isArray(saved.providerOrder)?saved.providerOrder.filter(key=>['cloudflare','gemini','free','laptop'].includes(key)):DEFAULTS.providerOrder};
}
export async function saveSettings(env,settings) {
  if(!env.DB)throw new Error('D1 database binding DB is not configured.');
  await env.DB.prepare('INSERT INTO settings (key,value,updated_at) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at').bind('app_config',JSON.stringify(settings),new Date().toISOString()).run();
}
export async function getProviderSecrets(env) {
  const result={geminiKeys:[],freeUrl:env.FREE_LLM_URL||'',freeKey:env.FREE_LLM_KEY||'',freeModel:env.FREE_LLM_MODEL||'default',laptopUrl:env.LAPTOP_URL||'',laptopToken:env.LAPTOP_TOKEN||'',laptopModel:env.LAPTOP_MODEL||'llama3.2:3b'};
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
      geminiKeys:envKeys.length?envKeys:(Array.isArray(stored.geminiKeys)?stored.geminiKeys:[]),
      freeUrl:env.FREE_LLM_URL||stored.freeUrl||'',freeKey:env.FREE_LLM_KEY||stored.freeKey||'',freeModel:env.FREE_LLM_MODEL||stored.freeModel||'default',
      laptopUrl:env.LAPTOP_URL||stored.laptopUrl||'',laptopToken:env.LAPTOP_TOKEN||stored.laptopToken||'',laptopModel:env.LAPTOP_MODEL||stored.laptopModel||'llama3.2:3b'
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
export async function createAdminToken(user,env) {
  if(!env.ADMIN_SESSION_SECRET||String(env.ADMIN_SESSION_SECRET).length<32)throw new Error('ADMIN_SESSION_SECRET must contain at least 32 characters.');
  const payload=base64Url(new TextEncoder().encode(JSON.stringify({sub:user,exp:Date.now()+8*60*60*1000,nonce:base64Url(crypto.getRandomValues(new Uint8Array(8)))})));
  return hmacToken(payload,env.ADMIN_SESSION_SECRET);
}
export async function verifyAdmin(request,env) {
  if(!env.ADMIN_SESSION_SECRET||String(env.ADMIN_SESSION_SECRET).length<32)return false;
  const cookie=request.headers.get('Cookie')||'';const match=cookie.match(/(?:^|;\s*)openmic_admin=([^;]+)/);if(!match)return false;
  const token=match[1];const separator=token.lastIndexOf('.');if(separator<1)return false;
  const payload=token.slice(0,separator);const signature=token.slice(separator+1);const expected=await hmacToken(payload,env.ADMIN_SESSION_SECRET);
  if(!constantTimeEqual(expected.slice(expected.lastIndexOf('.')+1),signature))return false;
  try {const value=JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));return value.sub===env.ADMIN_USER&&value.exp>Date.now();}catch{return false;}
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
  next.theme=['mix','dark','vibrant','clean'].includes(next.theme)?next.theme:'mix';
  next.language=['en','hi'].includes(next.language)?next.language:'en';
  next.schoolName=safeString(next.schoolName||'Kanakia International School Mira Road',90);
  next.automaticFallback=next.automaticFallback!==false;
  next.preferredProvider=['cloudflare','gemini','free','laptop'].includes(next.preferredProvider)?next.preferredProvider:'cloudflare';
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
  return {cloudflareConfigured:!!env.AI,geminiCount:secrets.geminiKeys.length,freeConfigured:!!(secrets.freeUrl&&secrets.freeKey&&secrets.freeModel),laptopConfigured:!!secrets.laptopUrl,laptopHasToken:!!secrets.laptopToken};
}
