import {json,parseJson,safeString,originAllowed} from '../_shared.js';

const PART_BYTES=8*1024*1024;
const MAX_BYTES=500*1024*1024;
async function digest(value){const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));return [...new Uint8Array(bytes)].map(byte=>byte.toString(16).padStart(2,'0')).join('');}
async function getSession(env,id,token){
  const row=await env.DB.prepare('SELECT session_id AS sessionId,upload_id AS uploadId,object_key AS objectKey,token_hash AS tokenHash,created_at AS createdAt,filename,mime_type AS mimeType,size_bytes AS sizeBytes,headline,subheadline,expected_parts AS expectedParts,status FROM media_upload_sessions WHERE session_id=?').bind(id).first();
  if(!row||row.tokenHash!==await digest(token))return null;
  if(Date.now()-Date.parse(row.createdAt)>6*60*60*1000)return null;
  return row;
}

export async function onRequest({request,env}){
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  if(!env.DB||!env.MEDIA)return json({error:'Chunked newsroom storage needs the D1 binding DB and private R2 bucket MEDIA.'},503);
  const url=new URL(request.url);const action=url.searchParams.get('action')||'';const method=request.method.toUpperCase();
  if(method==='POST'&&action==='start'){
    const body=await parseJson(request);if(!body)return json({error:'Invalid upload setup.'},400);
    if(body.consent!==true)return json({error:'Permission is required before uploading a recording.'},400);
    const filename=safeString(body.filename,180).replace(/[\r\n\0]/g,'').trim()||'newsroom-recording.webm';
    const mimeType=safeString(body.mimeType,100).trim();const sizeBytes=Number(body.sizeBytes);
    if(!/^video\//i.test(mimeType))return json({error:'Only video recordings can be saved by this upload path.'},415);
    if(!Number.isSafeInteger(sizeBytes)||sizeBytes<1||sizeBytes>MAX_BYTES)return json({error:'The video must be between 1 byte and 500 MB.'},413);
    const expectedParts=Math.ceil(sizeBytes/PART_BYTES);if(expectedParts>10000)return json({error:'The recording requires too many upload parts.'},413);
    const token=safeString(body.submissionToken,200).trim();if(token.length<20)return json({error:'The upload token is missing or invalid.'},400);
    const id=crypto.randomUUID();const now=new Date().toISOString();const objectKey=`newsroom/${now.slice(0,10)}/${id}.webm`;
    let multipart;
    try{
      multipart=await env.MEDIA.createMultipartUpload(objectKey,{httpMetadata:{contentType:mimeType},customMetadata:{id,createdAt:now,consent:'true'}});
      await env.DB.prepare('INSERT INTO media_upload_sessions (session_id,upload_id,object_key,token_hash,created_at,updated_at,filename,mime_type,size_bytes,headline,subheadline,consent,expected_parts,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,1,?,\'uploading\')').bind(id,multipart.uploadId,objectKey,await digest(token),now,now,filename,mimeType,sizeBytes,safeString(body.headline,100).trim()||'Student newsroom',safeString(body.subheadline,140).trim(),expectedParts).run();
      return json({ok:true,sessionId:id,partBytes:PART_BYTES,expectedParts,expiresInSeconds:21600});
    }catch(error){if(multipart?.uploadId)try{await env.MEDIA.resumeMultipartUpload(objectKey,multipart.uploadId).abort();}catch{}return json({error:error.message||'Could not start the private upload.'},503);}
  }
  if(method==='POST'&&action==='part'){
    const id=safeString(url.searchParams.get('id'),80);const partNumber=Number(url.searchParams.get('part'));const token=safeString(request.headers.get('X-Upload-Token'),200).trim();
    if(!id||!Number.isInteger(partNumber)||partNumber<1||!token)return json({error:'Upload ID, part number and token are required.'},400);
    let row;try{row=await getSession(env,id,token);}catch{return json({error:'Upload session could not be checked.'},503);}
    if(!row||row.status!=='uploading')return json({error:'Upload session expired or invalid. Start the upload again.'},403);
    if(partNumber>row.expectedParts)return json({error:'Part number exceeds the expected upload size.'},400);
    const bytes=await request.arrayBuffer();if(!bytes.byteLength||bytes.byteLength>PART_BYTES)return json({error:'Each part must be between 1 byte and 8 MiB.'},413);
    if(partNumber<row.expectedParts&&bytes.byteLength!==PART_BYTES)return json({error:'Every non-final part must be exactly 8 MiB.'},400);
    if(partNumber===row.expectedParts&&bytes.byteLength!==row.sizeBytes-PART_BYTES*(row.expectedParts-1))return json({error:'The final part size does not match the declared file size.'},400);
    try{
      const upload=env.MEDIA.resumeMultipartUpload(row.objectKey,row.uploadId);
      const result=await upload.uploadPart(partNumber,bytes);
      await env.DB.prepare('INSERT INTO media_upload_parts (session_id,part_number,etag,size_bytes) VALUES (?,?,?,?) ON CONFLICT(session_id,part_number) DO UPDATE SET etag=excluded.etag,size_bytes=excluded.size_bytes').bind(id,partNumber,String(result.etag||'').replace(/^"|"$/g,''),bytes.byteLength).run();
      return json({ok:true,partNumber,etag:result.etag,sizeBytes:bytes.byteLength});
    }catch(error){return json({error:error.message||'Could not store this upload part.'},503);}
  }
  if(method==='POST'&&action==='complete'){
    const body=await parseJson(request);if(!body)return json({error:'Invalid completion request.'},400);
    const id=safeString(body.sessionId,80);const token=safeString(body.submissionToken,200).trim();let row;
    try{row=await getSession(env,id,token);}catch{return json({error:'Upload session could not be checked.'},503);}
    if(!row)return json({error:'Upload session expired or invalid.'},403);
    try{
      const {results:parts=[]}=await env.DB.prepare('SELECT part_number AS partNumber,etag,size_bytes AS sizeBytes FROM media_upload_parts WHERE session_id=? ORDER BY part_number').bind(id).all();
      if(parts.length!==row.expectedParts||parts.some((part,index)=>part.partNumber!==index+1||!part.etag))return json({error:`Upload incomplete: received ${parts.length} of ${row.expectedParts} parts.`},409);
      const total=parts.reduce((sum,part)=>sum+Number(part.sizeBytes||0),0);if(total!==row.sizeBytes)return json({error:'Uploaded byte count does not match the original file size.'},409);
      await env.DB.prepare("UPDATE media_upload_sessions SET status='completing' WHERE session_id=?").bind(id).run();
      const multipart=env.MEDIA.resumeMultipartUpload(row.objectKey,row.uploadId);
      const completed=await multipart.complete(parts.map(part=>({partNumber:Number(part.partNumber),etag:part.etag})));
      const objectSize=Number(completed?.size||row.sizeBytes);if(objectSize!==row.sizeBytes){await env.MEDIA.delete(row.objectKey);throw new Error('Completed R2 object size did not match the source file.');}
      const createdAt=new Date().toISOString();
      try{await env.DB.prepare('INSERT INTO media_submissions (id,token_hash,created_at,object_key,filename,mime_type,size_bytes,headline,subheadline,consent) VALUES (?,?,?,?,?,?,?,?,?,1)').bind(id,row.tokenHash,createdAt,row.objectKey,row.filename,row.mimeType,row.sizeBytes,row.headline,row.subheadline).run();}
      catch(error){await env.MEDIA.delete(row.objectKey);throw error;}
      await env.DB.prepare('DELETE FROM media_upload_sessions WHERE session_id=?').bind(id).run();
      return json({ok:true,id,storage:'private-r2-multipart',createdAt,filename:row.filename,sizeBytes:row.sizeBytes});
    }catch(error){return json({error:error.message||'Could not complete private storage. Analysis was not started.'},503);}
  }
  if(method==='POST'&&action==='cancel'){
    const body=await parseJson(request);if(!body)return json({error:'Invalid cancellation request.'},400);const id=safeString(body.sessionId,80);const token=safeString(body.submissionToken,200).trim();
    try{const row=await getSession(env,id,token);if(!row)return json({ok:true});await env.MEDIA.resumeMultipartUpload(row.objectKey,row.uploadId).abort();await env.DB.prepare('DELETE FROM media_upload_sessions WHERE session_id=?').bind(id).run();return json({ok:true});}
    catch{return json({ok:true});}
  }
  return json({error:'Method not allowed.'},405,{allow:'POST'});
}
