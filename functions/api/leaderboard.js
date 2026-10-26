import {json,parseJson,safeString} from '../_shared.js';

export async function onRequestGet({request,env}) {
  if(!env.DB)return json({entries:[]});
  const metric=new URL(request.url).searchParams.get('metric');
  const sortColumn=metric==='fluency'?'fluency':metric==='clarity'?'clarity':'score';
  try {
    const result=await env.DB.prepare(`SELECT id,nickname,grade,score,fluency,clarity,created_at AS createdAt FROM leaderboard WHERE consent = 1 ORDER BY ${sortColumn} DESC, created_at ASC LIMIT 50`).all();
    return json({entries:result.results||[]});
  } catch { return json({entries:[]}); }
}
export async function onRequestPost({request,env}) {
  if(!env.DB)return json({error:'Shared leaderboard is not configured. Your browser can keep a local demo entry.'},503);
  const body=await parseJson(request);if(!body)return json({error:'Invalid request.'},400);
  if(body.consent!==true)return json({error:'Explicit consent is required to join the shared board.'},400);
  const nickname=safeString(body.nickname,20).trim().replace(/[<>]/g,'');
  const grade=safeString(body.grade,20).trim();
  const score=Number(body.score);const fluency=Number(body.fluency??score);const clarity=Number(body.clarity??score);
  if(nickname.length<2)return json({error:'Use a nickname with at least two characters.'},400);
  if(!['Class 8','Class 9','Class 10','Class 11','Class 12'].includes(grade))return json({error:'Select a supported class.'},400);
  if(!Number.isInteger(score)||score<0||score>100||!Number.isInteger(fluency)||fluency<0||fluency>100||!Number.isInteger(clarity)||clarity<0||clarity>100)return json({error:'Scores must be whole numbers from 0 to 100.'},400);
  try {
    await env.DB.prepare('INSERT INTO leaderboard (nickname,grade,score,fluency,clarity,consent,created_at) VALUES (?,?,?,?,?,?,?)').bind(nickname,grade,score,fluency,clarity,1,new Date().toISOString()).run();
    return json({ok:true});
  } catch(error) { return json({error:error.message||'Could not save leaderboard entry.'},503); }
}
