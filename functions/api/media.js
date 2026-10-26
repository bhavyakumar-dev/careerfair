import {json,parseJson,safeString,originAllowed,verifyAdmin} from '../_shared.js';

async function digest(value) {
  const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));
  return [...new Uint8Array(bytes)].map(byte=>byte.toString(16).padStart(2,'0')).join('');
}
async function listMedia(env) {
  const result=await env.DB.prepare('SELECT id,created_at AS createdAt,filename,mime_type AS mimeType,size_bytes AS sizeBytes,headline,subheadline,transcription_status AS transcriptionStatus,analysis_status AS analysisStatus,transcription_provider AS transcriptionProvider,analysis_provider AS analysisProvider,object_key AS objectKey FROM media_submissions ORDER BY created_at DESC LIMIT 300').all();
  return result.results||[];
}
export async function onRequest({request,env}) {
  const url=new URL(request.url);const method=request.method.toUpperCase();
  if(method==='POST') {
    if(!originAllowed(request))return json({error:'Origin check failed.'},403);
    if(!env.DB)return json({error:'D1 database binding DB is not configured.'},503);
    if(!request.headers.get('content-type')?.includes('multipart/form-data'))return json({error:'Send the recording as multipart form data.'},400);
    let form;try{form=await request.formData();}catch{return json({error:'The upload could not be read.'},400);}
    const file=form.get('file');if(!file||typeof file.arrayBuffer!=='function')return json({error:'The recorded video is missing.'},400);
    if(!/^video\//.test(file.type||''))return json({error:'Newsroom uploads must be video files.'},415);
    if(file.size<1||file.size>25*1024*1024)return json({error:'Newsroom video must be between 1 byte and 25 MB.'},413);
    if(String(form.get('consent'))!=='true')return json({error:'Explicit consent is required before storing a recording.'},400);
    const token=safeString(form.get('submissionToken'),200).trim();if(token.length<20)return json({error:'The recording upload token is missing or invalid.'},400);
    const id=crypto.randomUUID();const tokenHash=await digest(token);const objectKey=`newsroom/${new Date().toISOString().slice(0,10)}/${id}.webm`;const now=new Date().toISOString();
    const headline=safeString(form.get('headline'),100).trim()||'Student newsroom';const subheadline=safeString(form.get('subheadline'),140).trim();const filename=safeString(file.name,180).replace(/[\r\n\0]/g,'').trim()||'newsroom-recording.webm';
    try {
      const bytes=await file.arrayBuffer();
      if(env.MEDIA){
        await env.MEDIA.put(objectKey,bytes,{httpMetadata:{contentType:file.type},customMetadata:{id,createdAt:now,consent:'true'}});
      }
      try { await env.DB.prepare('INSERT INTO media_submissions (id,token_hash,created_at,object_key,filename,mime_type,size_bytes,headline,subheadline,consent) VALUES (?,?,?,?,?,?,?,?,?,1)').bind(id,tokenHash,now,objectKey,filename,file.type,bytes.byteLength,headline,subheadline).run(); }
      catch(error) { if(env.MEDIA) await env.MEDIA.delete(objectKey);throw error; }
      return json({ok:true,id,storage:env.MEDIA?'private-r2':'d1-metadata',createdAt:now,filename,sizeBytes:bytes.byteLength});
    } catch(error) {return json({error:error.message||'The server could not store this recording. No AI analysis was started.'},503);}
  }
  if(method==='PATCH') {
    if(!originAllowed(request))return json({error:'Origin check failed.'},403);
    if(!env.DB)return json({error:'D1 database binding DB is not configured.'},503);
    const id=url.searchParams.get('id');if(!id)return json({error:'Recording ID is required.'},400);
    const body=await parseJson(request);if(!body)return json({error:'Invalid analysis status update.'},400);
    const token=safeString(body.submissionToken,200).trim();if(token.length<20)return json({error:'Submission token is invalid.'},403);
    const row=await env.DB.prepare('SELECT token_hash FROM media_submissions WHERE id = ?').bind(id).first();if(!row||row.token_hash!==await digest(token))return json({error:'You are not allowed to update this recording.'},403);
    const transcriptionStatus=['complete','failed','pending'].includes(body.transcriptionStatus)?body.transcriptionStatus:'pending';const analysisStatus=['complete','failed','pending'].includes(body.analysisStatus)?body.analysisStatus:'pending';
    try {await env.DB.prepare('UPDATE media_submissions SET transcription_status=?,analysis_status=?,transcription_provider=?,analysis_provider=?,analyzed_at=? WHERE id=?').bind(transcriptionStatus,analysisStatus,safeString(body.transcriptionProvider,60),safeString(body.analysisProvider,60),new Date().toISOString(),id).run();return json({ok:true});}
    catch(error){return json({error:error.message||'Could not update analysis status.'},503);}
  }
  if(method==='GET') {
    if(!(await verifyAdmin(request,env)))return json({error:'Admin session required to retrieve private recordings.'},401);
    if(!env.DB||!env.MEDIA)return json({error:'D1 and private R2 storage must be configured.'},503);
    const id=url.searchParams.get('id');
    try {
      if(!id)return json({entries:await listMedia(env)});
      const row=await env.DB.prepare('SELECT object_key,filename,mime_type FROM media_submissions WHERE id=?').bind(id).first();if(!row)return json({error:'Saved video not found.'},404);
      const object=await env.MEDIA.get(row.object_key);if(!object)return json({error:'Video file is missing from private storage.'},404);
      return new Response(object.body,{headers:{'content-type':row.mime_type||'application/octet-stream','content-length':String(object.size),'content-disposition':`attachment; filename="${String(row.filename||'newsroom-video.webm').replace(/["\r\n]/g,'_')}"`,'cache-control':'private, no-store','x-content-type-options':'nosniff'}});
    } catch(error){return json({error:error.message||'Private video retrieval failed.'},503);}
  }
  if(method==='DELETE') {
    if(!(await verifyAdmin(request,env)))return json({error:'Admin session required.'},401);
    if(!env.DB)return json({error:'D1 database must be configured.'},503);
    const id=url.searchParams.get('id');if(!id)return json({error:'Recording ID is required.'},400);
    try {const row=await env.DB.prepare('SELECT object_key FROM media_submissions WHERE id=?').bind(id).first();if(!row)return json({error:'Saved recording not found.'},404);if(env.MEDIA)await env.MEDIA.delete(row.object_key);await env.DB.prepare('DELETE FROM media_submissions WHERE id=?').bind(id).run();return json({ok:true});}
    catch(error){return json({error:error.message||'Could not delete the saved recording.'},503);}
  }
  return json({error:'Method not allowed.'},405,{allow:'GET, POST, PATCH, DELETE'});
}
