import {json,parseJson,safeString,originAllowed,notifyTelegram,verifyAdmin} from '../_shared.js';

const GRADES=['Class 8 and below','Class 8','Class 9','Class 10','Class 11','Class 12','College / other'];

export async function onRequestGet({request,env}) {
  if(!env.DB)return json({entries:[]});
  const url=new URL(request.url);
  const showAll=url.searchParams.get('all')==='1';
  try {
    if(showAll&&await verifyAdmin(request,env)){
      const result=await env.DB.prepare("SELECT id,created_at AS createdAt,nickname,grade,quote,status,approved_at AS approvedAt FROM testimonials ORDER BY created_at DESC LIMIT 50").all();
      return json({entries:result.results||[]});
    }
    const result=await env.DB.prepare("SELECT id,created_at AS createdAt,nickname,grade,quote FROM testimonials WHERE status='approved' ORDER BY approved_at DESC LIMIT 24").all();
    return json({entries:result.results||[]});
  } catch(error) { return json({error:error.message||'Testimonials are not ready; apply migration 0004_v15.sql.'},503); }
}

export async function onRequestPost({request,env}) {
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  if(!env.DB)return json({error:'Shared testimonials require the D1 database.'},503);
  const body=await parseJson(request);
  if(!body)return json({error:'Invalid request.'},400);

  if(body.action==='moderate'){
    if(!await verifyAdmin(request,env))return json({error:'Admin authentication required.'},401);
    const id=Number(body.id);
    const status=body.status==='approved'?'approved':'rejected';
    const approvedAt=status==='approved'?new Date().toISOString():null;
    await env.DB.prepare("UPDATE testimonials SET status=?, approved_at=? WHERE id=?").bind(status,approvedAt,id).run();
    return json({ok:true,id,status});
  }

  if(body.consent!==true)return json({error:'Permission is required before sending a testimonial for moderation.'},400);
  const nickname=safeString(body.nickname,24).trim().replace(/[<>\r\n]/g,'');
  const grade=safeString(body.grade,32).trim();
  const quote=safeString(body.quote,500).trim();
  if(nickname.length<2)return json({error:'Use a nickname with at least two characters.'},400);
  if(!GRADES.includes(grade))return json({error:'Select a valid class.'},400);
  if(quote.length<20)return json({error:'Write at least 20 characters so the testimonial is useful.'},400);
  if(/(?:AIza[0-9A-Za-z_-]{25,}|sk-[A-Za-z0-9]{20,}|password\s*[:=])/i.test(quote))return json({error:'Do not include passwords or API keys.'},400);
  try {
    const result=await env.DB.prepare("INSERT INTO testimonials (created_at,nickname,grade,quote,consent,status) VALUES (?,?,?,?,1,'pending')").bind(new Date().toISOString(),nickname,grade,quote).run();
    const id=result.meta?.last_row_id||null;
    await notifyTelegram(env,`Open Mic testimonial #${id||'new'} was submitted for admin approval.`);
    return json({ok:true,id,status:'pending'});
  } catch(error) { return json({error:error.message||'Could not save the testimonial.'},503); }
}
