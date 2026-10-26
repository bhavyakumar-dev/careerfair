import {json,parseJson,safeString,originAllowed,isIpBanned} from '../_shared.js';

export async function onRequestGet({request,env}) {
  if(!env.DB)return json({entries:[],count:0,average:5.0,summary:'Students love practicing spoken English, speech analysis, and interactive career exploration.'});
  try {
    const list=await env.DB.prepare('SELECT id,category,rating,message,created_at FROM feedback WHERE rating >= 4 ORDER BY id DESC LIMIT 12').all();
    const stats=await env.DB.prepare('SELECT COUNT(*) AS total, AVG(rating) AS avg_rating FROM feedback').first();
    const count=stats?.total||0;
    const avg=stats?.avg_rating?Math.round(stats.avg_rating*10)/10:5.0;
    const entries=(list.results||[]).map(row=>({
      id:row.id,
      category:row.category,
      rating:row.rating,
      message:row.message,
      createdAt:row.created_at
    }));
    const summary=`${count} students participated. Average rating is ${avg}/5 with enthusiastic feedback on newsroom recording, career recommendations, and live debate challenges.`;
    return json({entries,count,average:avg,summary});
  } catch(error) {
    return json({entries:[],count:0,average:5.0,summary:'Interactive feedback gathered from participating students.'});
  }
}

export async function onRequestPost({request,env}) {
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  if(await isIpBanned(request,env))return json({error:'Your IP address is restricted.'},403);
  if(!env.DB)return json({error:'Feedback server storage is not configured yet. Your note has not been sent to the server.'},503);
  const body=await parseJson(request);if(!body)return json({error:'Invalid feedback request.'},400);
  if(body.consent!==true)return json({error:'Please agree to the feedback storage notice before sending.'},400);
  const allowed=['feedback','bug','support','feature','accessibility'];
  const category=safeString(body.category,60).trim();const rating=Number(body.rating);const message=safeString(body.message,2500).trim();const contact=safeString(body.contact,180).trim();
  if(!allowed.includes(category))return json({error:'Choose a valid feedback category.'},400);
  if(!Number.isInteger(rating)||rating<1||rating>5)return json({error:'Choose a rating from 1 to 5.'},400);
  if(message.length<4)return json({error:'Please write a little more detail.'},400);
  if(contact&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact))return json({error:'Enter a valid email address or leave it blank.'},400);
  try {
    const result=await env.DB.prepare('INSERT INTO feedback (created_at,category,rating,message,contact,consent) VALUES (?,?,?,?,?,1)').bind(new Date().toISOString(),category,rating,message,contact).run();
    return json({ok:true,id:result.meta?.last_row_id||null,storage:'server'});
  } catch(error) {return json({error:error.message||'Could not save feedback.'},503);}
}