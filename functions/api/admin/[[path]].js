import {json,parseJson,getSettings,saveAdminSettings,getProviderSecrets,storeProviderSecrets,providerStatus,createAdminToken,verifyAdmin,cookieHeader,originAllowed,safeString,getBannedIps,addBannedIp,removeBannedIp} from '../../_shared.js';

function pathName(request) { return new URL(request.url).pathname.replace(/^\/api\/admin\/?/,'').replace(/\/$/,''); }
async function protectedResponse(request,env) { return await verifyAdmin(request,env) ? null : json({error:'Admin session required.'},401); }
async function leaderboardEntries(env) {
  if(!env.DB)return [];
  const result=await env.DB.prepare('SELECT id,nickname,grade,score,fluency,clarity,consent,created_at AS createdAt FROM leaderboard WHERE consent = 1 ORDER BY score DESC, created_at ASC LIMIT 100').all();
  return result.results||[];
}
export async function onRequest(context) {
  const {request,env}=context;const path=pathName(request);const method=request.method.toUpperCase();
  if(path==='public'&&method==='GET') {
    const settings=await getSettings(env);const status=await providerStatus(env);
    return json({settings,providers:status});
  }
  if(path==='login'&&method==='POST') {
    if(!originAllowed(request))return json({error:'Origin check failed.'},403);
    const body=await parseJson(request);if(!body)return json({error:'Invalid request body.'},400);
    if(!env.ADMIN_USER||!env.ADMIN_PASSWORD||!env.ADMIN_SESSION_SECRET)return json({error:'Admin server secrets are not configured. Set ADMIN_USER, ADMIN_PASSWORD and ADMIN_SESSION_SECRET in Cloudflare.'},503);
    if(String(body.username||'')!==String(env.ADMIN_USER)||String(body.password||'')!==String(env.ADMIN_PASSWORD))return json({error:'Those credentials did not match.'},401);
    try {
      const token=await createAdminToken(env.ADMIN_USER,env);
      return json({ok:true,settings:await getSettings(env),providers:await providerStatus(env)},200,{'set-cookie':cookieHeader(token,new URL(request.url).protocol==='https:')});
    } catch(error) { return json({error:error.message||'Could not create an admin session.'},503); }
  }
  if(path==='logout'&&method==='POST')return json({ok:true},200,{'set-cookie':'openmic_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0; Secure'});
  const denied=await protectedResponse(request,env);if(denied)return denied;
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  if(path==='settings'&&method==='GET')return json({settings:await getSettings(env),providers:await providerStatus(env)});
  if(path==='settings'&&method==='POST') {
    const body=await parseJson(request);if(!body)return json({error:'Invalid settings body.'},400);
    try { const settings=await saveAdminSettings(env,body);return json({ok:true,settings,providers:await providerStatus(env)}); }
    catch(error) { return json({error:error.message||'Could not save settings.'},503); }
  }
  if(path==='keys/status'&&method==='GET')return json(await providerStatus(env));
  if(path==='keys'&&method==='POST') {
    const body=await parseJson(request);if(!body)return json({error:'Invalid credential body.'},400);
    const current=await getProviderSecrets(env);
    const geminiInput=Array.isArray(body.geminiKeys)?body.geminiKeys.map(value=>safeString(value,500).trim()).filter(Boolean):[];
    const next={
      geminiKeys:geminiInput.length?geminiInput:current.geminiKeys,
      cartesiaKey:safeString(body.cartesiaKey,1000).trim()||current.cartesiaKey,
      openaiKey:safeString(body.openaiKey,1000).trim()||current.openaiKey,
      deepgramKey:safeString(body.deepgramKey,1000).trim()||current.deepgramKey,
      kokoroUrl:safeString(body.kokoroUrl,500).trim()||current.kokoroUrl,
      elevenlabsKey:safeString(body.elevenlabsKey,1000).trim()||current.elevenlabsKey,
      freeUrl:safeString(body.freeUrl,500).trim()||current.freeUrl,
      freeKey:safeString(body.freeKey,1000).trim()||current.freeKey,
      freeModel:safeString(body.freeModel,120).trim()||current.freeModel,
      laptopUrl:safeString(body.laptopUrl,500).trim()||current.laptopUrl,
      laptopToken:safeString(body.laptopToken,1000).trim()||current.laptopToken,
      laptopModel:safeString(body.laptopModel,120).trim()||current.laptopModel
    };
    for(const value of [next.freeUrl,next.laptopUrl,next.kokoroUrl])if(value){try{const url=new URL(value);if(!['https:','http:'].includes(url.protocol))throw new Error();}catch{return json({error:'Provider URLs must be valid HTTP(S) URLs.'},400);}}
    try { await storeProviderSecrets(env,next);return json({ok:true,status:await providerStatus(env)}); }
    catch(error) { return json({error:error.message||'Credentials could not be encrypted and saved.'},503); }
  }
  if(path==='feedback'&&method==='GET') {
    if(!env.DB)return json({error:'D1 database binding DB is not configured.'},503);
    try { const result=await env.DB.prepare('SELECT id,created_at AS createdAt,category,rating,message,contact FROM feedback ORDER BY created_at DESC LIMIT 500').all();return json({entries:result.results||[]}); }
    catch(error) { return json({error:error.message||'Could not load feedback.'},503); }
  }
  if(path==='media'&&method==='GET') {
    if(!env.DB)return json({error:'D1 database binding DB is not configured.'},503);
    try { const result=await env.DB.prepare('SELECT id,created_at AS createdAt,filename,mime_type AS mimeType,size_bytes AS sizeBytes,headline,subheadline,transcription_status AS transcriptionStatus,analysis_status AS analysisStatus,transcription_provider AS transcriptionProvider,analysis_provider AS analysisProvider FROM media_submissions ORDER BY created_at DESC LIMIT 300').all();return json({entries:result.results||[]}); }
    catch(error) { return json({error:error.message||'Could not load saved media.'},503); }
  }
  if(path==='media'&&method==='DELETE') {
    if(!env.DB||!env.MEDIA)return json({error:'D1 and private R2 storage must be configured.'},503);
    const id=new URL(request.url).searchParams.get('id');if(!id)return json({error:'Media record ID is required.'},400);
    try { const row=await env.DB.prepare('SELECT object_key FROM media_submissions WHERE id = ?').bind(id).first();if(!row)return json({error:'Saved recording not found.'},404);await env.MEDIA.delete(row.object_key);await env.DB.prepare('DELETE FROM media_submissions WHERE id = ?').bind(id).run();return json({ok:true}); }
    catch(error) { return json({error:error.message||'Could not delete the recording.'},503); }
  }
  if(path==='logs'&&method==='GET') {
    if(!env.DB)return json({logs:[]});
    try { const result=await env.DB.prepare('SELECT id,created_at AS createdAt,task,provider,outcome,latency_ms AS latencyMs,mode FROM request_logs ORDER BY id DESC LIMIT 100').all();return json({logs:result.results||[]}); }
    catch { return json({logs:[]}); }
  }
  if(path==='leaderboard'&&method==='GET') {
    try { return json({entries:await leaderboardEntries(env)}); }
    catch { return json({entries:[]}); }
  }
  if(path==='leaderboard'&&method==='DELETE') {
    if(!env.DB)return json({error:'D1 database binding DB is not configured.'},503);
    const id=new URL(request.url).searchParams.get('id');
    const nickname=new URL(request.url).searchParams.get('nickname');
    try {
      if(id){
        if(!/^\d+$/.test(id))return json({error:'Invalid leaderboard entry ID.'},400);
        await env.DB.prepare('DELETE FROM leaderboard WHERE id = ?').bind(Number(id)).run();
      }else if(nickname){
        await env.DB.prepare('DELETE FROM leaderboard WHERE nickname = ?').bind(nickname).run();
      }else{
        await env.DB.prepare('DELETE FROM leaderboard').run();
      }
      return json({ok:true});
    }
    catch(error) { return json({error:error.message||'Could not remove leaderboard entry.'},503); }
  }
  if(path==='banned-ips'&&method==='GET') {
    return json({ips:await getBannedIps(env)});
  }
  if(path==='banned-ips'&&method==='POST') {
    const body=await parseJson(request);if(!body)return json({error:'Invalid request body.'},400);
    try { const list=await addBannedIp(env,body.ip,body.reason);return json({ok:true,ips:list}); }
    catch(err) { return json({error:err.message||'Could not ban IP.'},503); }
  }
  if(path==='banned-ips'&&method==='DELETE') {
    const ip=new URL(request.url).searchParams.get('ip');if(!ip)return json({error:'IP address is required.'},400);
    try { const list=await removeBannedIp(env,ip);return json({ok:true,ips:list}); }
    catch(err) { return json({error:err.message||'Could not remove banned IP.'},503); }
  }
  return json({error:'Not found.'},404);
}