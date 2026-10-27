import {json,parseJson,safeString,originAllowed,notifyTelegram} from '../_shared.js';

async function digest(value){const result=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));return [...new Uint8Array(result)].map(byte=>byte.toString(16).padStart(2,'0')).join('');}
const EVENTS={site_issue:{severity:'low',summary:'A visitor flagged a site or interaction issue.'},inappropriate_use:{severity:'medium',summary:'A visitor flagged content for administrator review.'},safety_concern:{severity:'high',summary:'A visitor raised a safety concern for administrator review.'},ai_abuse:{severity:'high',summary:'Repeated or deliberate AI abuse / inappropriate language detected.'}};
export async function onRequestPost({request,env}){
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  if(!env.DB)return json({error:'The safety inbox needs the deployed D1 database.'},503);
  const body=await parseJson(request);if(!body)return json({error:'Invalid report.'},400);
  const eventType=safeString(body.eventType,40).trim();const event=EVENTS[eventType]||{severity:'medium',summary:safeString(body.summary,200)||'Flagged safety event'};
  const secret=String(env.SAFETY_HASH_SECRET||env.ADMIN_SESSION_SECRET||'open-mic-safety-salt-key-careerfair-2026');
  const sourceIp=request.headers.get('CF-Connecting-IP')||request.headers.get('x-real-ip')||request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'127.0.0.1';
  const participantHash=sourceIp;
  const now=new Date().toISOString();
  try{
    const cutoff=new Date(Date.now()-10*60*1000).toISOString();const recent=await env.DB.prepare('SELECT COUNT(*) AS total FROM safety_events WHERE participant_hash=? AND created_at>=?').bind(participantHash,cutoff).first();
    const severity=Number(recent?.total||0)>=3?'high':event.severity;
    const detailText=body.detail?` | Detail: ${safeString(body.detail,180)}`:'';
    const enrichedSummary=`[Student IP: ${sourceIp}] ${event.summary}${detailText}`;
    await env.DB.prepare('INSERT INTO safety_events (created_at,event_type,severity,participant_hash,summary,reviewed) VALUES (?,?,?,?,?,0)').bind(now,eventType,severity,participantHash,enrichedSummary).run();
    await notifyTelegram(env,`Open Mic safety inbox: ${eventType} from IP ${sourceIp} received (${severity}). Review it in the private admin console.`);
    return json({ok:true,sourceIp,message:'Your report was sent to the admin review queue.'});
  }catch(error){return json({error:error.message||'The report could not be saved.'},503);}
}
