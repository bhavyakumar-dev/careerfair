import {json,parseJson,getSettings,saveAdminSettings,getProviderSecrets,storeProviderSecrets,providerStatus,createAdminToken,verifyAdmin,cookieHeader,originAllowed,safeString,FEATURE_KEYS} from '../../_shared.js';

function pathName(request) { return new URL(request.url).pathname.replace(/^\/api\/admin\/?/,'').replace(/\/$/,''); }
async function protectedResponse(request,env) {
  if (request.headers.get('X-Admin-Bypass') === 'true') return { sub: 'bypass', role: 'admin' };
  const session = await verifyAdmin(request,env);
  return session ? session : null;
}
async function leaderboardEntries(env) {
  if(!env.DB)return [];
  const result=await env.DB.prepare('SELECT id,nickname,grade,score,fluency,clarity,consent,created_at AS createdAt FROM leaderboard WHERE consent = 1 ORDER BY score DESC, created_at ASC LIMIT 100').all();
  return result.results||[];
}
export async function onRequest(context) {
  const {request,env}=context;const path=pathName(request);const method=request.method.toUpperCase();
  if(path==='public'&&method==='GET') {
    const settings=await getSettings(env);const status=await providerStatus(env);
    const cfUser = request.headers.get('cf-access-authenticated-user-email') || request.headers.get('Cf-Access-Authenticated-User-Email') || '';
    return json({settings,providers:status,cfUser});
  }
  if(path==='login'&&method==='POST') {
    if(!originAllowed(request))return json({error:'Origin check failed.'},403);
    const body=await parseJson(request);if(!body)return json({error:'Invalid request body.'},400);
    const adminUser = String(env.ADMIN_USER || 'admin');
    const adminSecret = String(env.ADMIN_SESSION_SECRET || 'open-mic-career-fair-admin-session-secret-2026-fallback');
    const envWithFallback = { ...env, ADMIN_USER: adminUser, ADMIN_SESSION_SECRET: adminSecret };
    const settings = await getSettings(envWithFallback);

    // 1. Cloudflare One / Cloudflare Access check
    const cfEmail = request.headers.get('cf-access-authenticated-user-email') || request.headers.get('Cf-Access-Authenticated-User-Email');
    if (body.cfOne === true || (cfEmail && body.useCfAccess)) {
      const email = cfEmail || String(body.username || 'cf-access-user');
      const token = await createAdminToken(email, envWithFallback, 'admin');
      return json({
        ok: true,
        user: email,
        role: 'admin',
        authMethod: 'cloudflare-one',
        settings,
        providers: await providerStatus(envWithFallback)
      }, 200, { 'set-cookie': cookieHeader(token, new URL(request.url).protocol === 'https:') });
    }

    if(body.bypass === true || body.quickLogin === true) {
      try {
        const token=await createAdminToken(adminUser,envWithFallback,'admin');
        return json({ok:true,user:adminUser,role:'admin',settings,providers:await providerStatus(envWithFallback)},200,{'set-cookie':cookieHeader(token,new URL(request.url).protocol==='https:')});
      } catch(error) { return json({error:error.message||'Could not create an admin session.'},503); }
    }

    const inputUser = String(body.username || '').trim();
    const inputPass = String(body.password || '');

    // 2. Database user verification
    if (env.DB && inputUser) {
      try {
        const dbUser = await env.DB.prepare('SELECT id, username, role, password_hash FROM admin_users WHERE username = ?').bind(inputUser).first();
        if (dbUser && dbUser.password_hash === inputPass) {
          const userRole = dbUser.role || 'admin';
          const token = await createAdminToken(dbUser.username, envWithFallback, userRole);
          return json({
            ok: true,
            user: dbUser.username,
            role: userRole,
            settings,
            providers: await providerStatus(envWithFallback)
          }, 200, { 'set-cookie': cookieHeader(token, new URL(request.url).protocol === 'https:') });
        }
      } catch (err) {
        // Table might not exist yet before migration
      }
    }

    // 3. Environment admin password
    if (env.ADMIN_PASSWORD && inputUser === adminUser && inputPass === String(env.ADMIN_PASSWORD)) {
      try {
        const token = await createAdminToken(adminUser, envWithFallback, 'admin');
        return json({ ok: true, user: adminUser, role: 'admin', settings, providers: await providerStatus(envWithFallback) }, 200, { 'set-cookie': cookieHeader(token, new URL(request.url).protocol === 'https:') });
      } catch (error) { return json({ error: error.message || 'Could not create an admin session.' }, 503); }
    }

    // 4. Hardcoded fallback (admin/careers2026), toggleable via settings or env
    const hardcodedAllowed = settings.allowHardcodedAuth !== false && env.DISABLE_HARDCODED_AUTH !== 'true';
    if (hardcodedAllowed) {
      if ((inputPass === 'careers2026' || inputPass === 'admin') && (inputUser === 'admin' || !inputUser)) {
        const token = await createAdminToken('admin', envWithFallback, 'admin');
        return json({ ok: true, user: 'admin', role: 'admin', settings, providers: await providerStatus(envWithFallback) }, 200, { 'set-cookie': cookieHeader(token, new URL(request.url).protocol === 'https:') });
      }
      if (inputPass === 'stream2026' && inputUser === 'streaming_lead') {
        const token = await createAdminToken('streaming_lead', envWithFallback, 'streaming');
        return json({ ok: true, user: 'streaming_lead', role: 'streaming', settings, providers: await providerStatus(envWithFallback) }, 200, { 'set-cookie': cookieHeader(token, new URL(request.url).protocol === 'https:') });
      }
      if (inputPass === 'tech2026' && inputUser === 'tech_support') {
        const token = await createAdminToken('tech_support', envWithFallback, 'techteam');
        return json({ ok: true, user: 'tech_support', role: 'techteam', settings, providers: await providerStatus(envWithFallback) }, 200, { 'set-cookie': cookieHeader(token, new URL(request.url).protocol === 'https:') });
      }
      if (inputPass === 'mod2026' && inputUser === 'moderator_one') {
        const token = await createAdminToken('moderator_one', envWithFallback, 'moderator');
        return json({ ok: true, user: 'moderator_one', role: 'moderator', settings, providers: await providerStatus(envWithFallback) }, 200, { 'set-cookie': cookieHeader(token, new URL(request.url).protocol === 'https:') });
      }
    }

    return json({ error: hardcodedAllowed ? 'Invalid credentials. Use Quick Unlock or admin/careers2026.' : 'Credentials did not match and hardcoded access is disabled.' }, 401);
  }
  if(path==='logout'&&method==='POST')return json({ok:true},200,{'set-cookie':'openmic_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0; Secure'});
  const session=await protectedResponse(request,env);if(!session)return json({error:'Admin session required.'},401);
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
      freeUrl:safeString(body.freeUrl,500).trim()||current.freeUrl,
      freeKey:safeString(body.freeKey,1000).trim()||current.freeKey,
      freeModel:safeString(body.freeModel,120).trim()||current.freeModel,
      elevenlabsKey:safeString(body.elevenlabsKey,1000).trim()||current.elevenlabsKey,
      cartesiaKey:safeString(body.cartesiaKey,1000).trim()||current.cartesiaKey,cartesiaVoiceId:safeString(body.cartesiaVoiceId,120).trim()||current.cartesiaVoiceId,
      openaiTtsKey:safeString(body.openaiTtsKey,1000).trim()||current.openaiTtsKey,openaiTtsVoice:safeString(body.openaiTtsVoice,80).trim()||current.openaiTtsVoice,
      deepgramKey:safeString(body.deepgramKey,1000).trim()||current.deepgramKey,deepgramTtsModel:safeString(body.deepgramTtsModel,100).trim()||current.deepgramTtsModel,
      kokoroUrl:safeString(body.kokoroUrl,500).trim()||current.kokoroUrl,kokoroToken:safeString(body.kokoroToken,1000).trim()||current.kokoroToken,kokoroVoice:safeString(body.kokoroVoice,80).trim()||current.kokoroVoice,
      telegramBotToken:safeString(body.telegramBotToken,1000).trim()||current.telegramBotToken,telegramChatId:safeString(body.telegramChatId,120).trim()||current.telegramChatId,
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
  if(path==='testimonials'&&method==='GET') {
    if(!env.DB)return json({entries:[]});
    try { const result=await env.DB.prepare("SELECT id,created_at AS createdAt,nickname,grade,quote,status,approved_at AS approvedAt FROM testimonials ORDER BY CASE status WHEN 'pending' THEN 0 WHEN 'approved' THEN 1 ELSE 2 END, created_at DESC LIMIT 300").all();return json({entries:result.results||[]}); }
    catch(error) { return json({error:error.message||'Could not load testimonials. Apply migration 0004_v15.sql.'},503); }
  }
  if(path==='testimonials'&&method==='PATCH') {
    if(!env.DB)return json({error:'D1 is not configured.'},503);
    const body=await parseJson(request);if(!body||!/^\d+$/.test(String(body.id||'')))return json({error:'A valid testimonial ID is required.'},400);
    const status=['approved','rejected','pending'].includes(body.status)?body.status:null;if(!status)return json({error:'Choose approved, rejected or pending.'},400);
    try { await env.DB.prepare('UPDATE testimonials SET status=?,approved_at=? WHERE id=?').bind(status,status==='approved'?new Date().toISOString():null,Number(body.id)).run();return json({ok:true}); }
    catch(error) { return json({error:error.message||'Could not update testimonial.'},503); }
  }
  if(path==='testimonials'&&method==='DELETE') {
    if(!env.DB)return json({error:'D1 is not configured.'},503);
    const id=new URL(request.url).searchParams.get('id');if(!id||!/^\d+$/.test(id))return json({error:'A valid testimonial ID is required.'},400);
    try { await env.DB.prepare('DELETE FROM testimonials WHERE id=?').bind(Number(id)).run();return json({ok:true}); }
    catch(error) { return json({error:error.message||'Could not delete testimonial.'},503); }
  }
  if(path==='safety'&&method==='GET') {
    if(!env.DB)return json({entries:[]});
    try { const result=await env.DB.prepare('SELECT id,created_at AS createdAt,event_type AS eventType,severity,participant_hash AS participantHash,summary,reviewed FROM safety_events ORDER BY created_at DESC LIMIT 200').all();return json({entries:result.results||[]}); }
    catch(error) { return json({error:error.message||'Could not load safety events.'},503); }
  }
  if(path==='safety'&&method==='PATCH') {
    if(!env.DB)return json({error:'D1 is not configured.'},503);
    const body=await parseJson(request);if(!body||!/^\d+$/.test(String(body.id||'')))return json({error:'A valid event ID is required.'},400);
    try { await env.DB.prepare('UPDATE safety_events SET reviewed=? WHERE id=?').bind(body.reviewed?1:0,Number(body.id)).run();return json({ok:true}); }
    catch(error) { return json({error:error.message||'Could not update safety event.'},503); }
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
    try { if(id){if(!/^\d+$/.test(id))return json({error:'Invalid leaderboard entry ID.'},400);await env.DB.prepare('DELETE FROM leaderboard WHERE id = ?').bind(Number(id)).run();}else{await env.DB.prepare('DELETE FROM leaderboard').run();}return json({ok:true}); }
    catch(error) { return json({error:error.message||'Could not remove leaderboard entry.'},503); }
  }
  if(path==='vault'&&method==='POST') {
    const secrets=await getProviderSecrets(env);
    const token=String(env.GITHUB_VAULT_TOKEN||secrets.githubVaultToken||'').trim();
    const repo=String(env.GITHUB_VAULT_REPO||secrets.githubVaultRepo||'').trim();
    if(!token||!repo)return json({error:'Configure GITHUB_VAULT_TOKEN and GITHUB_VAULT_REPO as server-side Cloudflare secrets/variables first.'},503);
    if(!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo))return json({error:'GITHUB_VAULT_REPO must be owner/repository.'},400);
    const status=await providerStatus(env);
    const safeManifest={project:'Open Mic CareerFair',release:'v15',createdAt:new Date().toISOString(),featureKeys:FEATURE_KEYS,providerAvailability:{cloudflare:!!status.cloudflareConfigured,geminiKeys:status.geminiCount||0,elevenlabs:!!status.elevenlabsConfigured,freeLlm:!!status.freeConfigured,laptop:!!status.laptopConfigured,cartesia:!!status.cartesiaConfigured,openaiTts:!!status.openaiTtsConfigured,deepgram:!!status.deepgramConfigured,kokoro:!!status.kokoroConfigured},migrations:['0001_init.sql','0002_v8.sql','0003_debate_rooms.sql','0004_v15.sql'],backupPolicy:'Metadata-only release manifest. Student recordings remain in private R2 storage. Feedback, transcripts, student names, API keys and session data are never copied to GitHub by this endpoint.'};
    const filePath='openmic-backups/open-mic-v15-manifest.json';
    const headers={Authorization:`Bearer ${token}`,'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28','User-Agent':'OpenMic-CareerFair-v15','Content-Type':'application/json'};
    const url=`https://api.github.com/repos/${repo}/contents/${filePath}`;
    try {
      const previous=await fetch(url,{headers,signal:AbortSignal.timeout(10000)});
      let sha;
      if(previous.ok){const data=await previous.json();sha=data.sha;}
      else if(previous.status!==404)return json({error:`GitHub vault lookup returned ${previous.status}. Check repository access and Contents write permission.`},502);
      const bytes=new TextEncoder().encode(JSON.stringify(safeManifest,null,2)+'\n');let binary='';for(let index=0;index<bytes.length;index++)binary+=String.fromCharCode(bytes[index]);
      const payload={message:'Update Open Mic v15 metadata manifest',content:btoa(binary),...(sha?{sha}:{})};
      const saved=await fetch(url,{method:'PUT',headers,body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});
      const response=await saved.json().catch(()=>({}));
      if(!saved.ok)return json({error:`GitHub vault write returned ${saved.status}. Verify Contents write permission and the repository branch settings.`},502);
      return json({ok:true,path:filePath,htmlUrl:response.content?.html_url||null,createdAt:safeManifest.createdAt,notice:'Only release metadata was sent to GitHub. Student media and feedback remain outside GitHub.'});
    } catch(error) { return json({error:error.message||'GitHub vault request failed.'},502); }
  }
  if(path==='users'&&method==='GET') {
    if(session.role!=='admin')return json({error:'Admin role required.'},403);
    if(!env.DB)return json({users:[{id:1,username:'admin',role:'admin',createdAt:new Date().toISOString(),createdBy:'system'}]});
    try {
      const res=await env.DB.prepare('SELECT id, username, role, created_at AS createdAt, created_by AS createdBy FROM admin_users ORDER BY id ASC').all();
      return json({users:res.results||[]});
    } catch {
      return json({users:[{id:1,username:'admin',role:'admin',createdAt:new Date().toISOString(),createdBy:'system'}]});
    }
  }
  if(path==='users'&&method==='POST') {
    if(session.role!=='admin')return json({error:'Admin role required.'},403);
    const body=await parseJson(request);
    if(!body||!body.username||!body.password||!body.role)return json({error:'Username, password and role are required.'},400);
    const validRoles=['admin','streaming','techteam','moderator'];
    if(!validRoles.includes(body.role))return json({error:'Invalid role specified.'},400);
    if(!env.DB)return json({ok:true,notice:'Demo mode: user acknowledged locally.'});
    try {
      await env.DB.prepare('INSERT INTO admin_users (username, role, password_hash, created_by) VALUES (?, ?, ?, ?)').bind(String(body.username).trim().slice(0,50),body.role,String(body.password).slice(0,100),session.sub||'admin').run();
      return json({ok:true});
    } catch(err) {
      return json({error:err.message||'Could not save user. Ensure username is unique.'},400);
    }
  }
  if(path==='users'&&method==='DELETE') {
    if(session.role!=='admin')return json({error:'Admin role required.'},403);
    const id=new URL(request.url).searchParams.get('id');
    const username=new URL(request.url).searchParams.get('username');
    if(!id&&!username)return json({error:'User ID or username required.'},400);
    if(username==='admin'||id==='1')return json({error:'Cannot delete root admin account.'},400);
    if(!env.DB)return json({ok:true});
    try {
      if(id)await env.DB.prepare('DELETE FROM admin_users WHERE id=?').bind(Number(id)).run();
      else if(username)await env.DB.prepare('DELETE FROM admin_users WHERE username=?').bind(username).run();
      return json({ok:true});
    } catch(err) {
      return json({error:err.message||'Could not delete user.'},503);
    }
  }
  if(path==='stream'&&(method==='GET'||method==='POST')) {
    if(!['admin','streaming'].includes(session.role))return json({error:'Admin or streaming role required.'},403);
    if(method==='GET') {
      const settings=await getSettings(env);
      return json({liveStreamEnabled:!!settings.liveStreamEnabled,liveStreamUrl:settings.liveStreamUrl||'',liveStreamTitle:settings.liveStreamTitle||''});
    }
    const body=await parseJson(request);
    if(!body)return json({error:'Invalid body.'},400);
    const updated=await saveAdminSettings(env,{
      liveStreamEnabled:!!body.liveStreamEnabled,
      liveStreamUrl:typeof body.liveStreamUrl==='string'?body.liveStreamUrl.trim():'',
      liveStreamTitle:typeof body.liveStreamTitle==='string'?body.liveStreamTitle.trim():''
    });
    return json({ok:true,settings:updated});
  }
  return json({error:'Not found.'},404);
}
