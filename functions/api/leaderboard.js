import {json,parseJson,safeString} from '../_shared.js';

const WEIGHTS={speech:30,editor:15,newsroom:20,words:15,debate:10,interview:10};
const COLUMNS={overall:'score',score:'score',fluency:'fluency',clarity:'clarity',editor:'editor_score',newsroom:'newsroom_score',games:'games_score'};
const GRADES=['Class 8 and below','Class 8','Class 9','Class 10','Class 11','Class 12','College / other'];
async function hash(value){const data=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));return [...new Uint8Array(data)].map(x=>x.toString(16).padStart(2,'0')).join('');}
function normaliseScores(body){const incoming=body.scores&&typeof body.scores==='object'?body.scores:{};const scores={};for(const key of Object.keys(WEIGHTS)){const n=Number(incoming[key]);if(Number.isFinite(n)&&n>=0&&n<=100)scores[key]=Math.round(n);}if(!Object.keys(scores).length){const legacy=Number(body.score);if(Number.isFinite(legacy)&&legacy>=0&&legacy<=100)scores.speech=Math.round(legacy);}const totalWeight=Object.keys(scores).reduce((sum,key)=>sum+WEIGHTS[key],0);const score=totalWeight?Math.round(Object.entries(scores).reduce((sum,[key,val])=>sum+val*WEIGHTS[key],0)/totalWeight):0;return {scores,score};}
export async function onRequestGet({request,env}) {
  if(!env.DB)return json({entries:[]});
  const metric=new URL(request.url).searchParams.get('metric')||'overall';const sortColumn=COLUMNS[metric]||'score';
  try {const result=await env.DB.prepare(`SELECT id,nickname,grade,score,fluency,clarity,speech_score AS speechScore,editor_score AS editorScore,newsroom_score AS newsroomScore,games_score AS gamesScore,debate_score AS debateScore,interview_score AS interviewScore,scores_json AS scoresJson,created_at AS createdAt FROM leaderboard WHERE consent=1 ORDER BY ${sortColumn} DESC, created_at ASC LIMIT 50`).all();return json({entries:result.results||[],metric});}
  catch {return json({entries:[],error:'Leaderboard migration 0002_v8.sql has not been applied.'},503);}
}
export async function onRequestPost({request,env}) {
  if(!env.DB)return json({error:'Shared leaderboard is not configured.'},503);
  const body=await parseJson(request);if(!body)return json({error:'Invalid request.'},400);
  if(body.consent!==true)return json({error:'Explicit consent is required to join the shared board.'},400);
  const nickname=safeString(body.nickname,20).trim().replace(/[<>]/g,'');const grade=safeString(body.grade,20).trim();
  if(nickname.length<2)return json({error:'Use a nickname with at least two characters.'},400);
  if(!GRADES.includes(grade))return json({error:'Select a supported class.'},400);
  const {scores,score}=normaliseScores(body);if(!Object.keys(scores).length)return json({error:'Complete a practice activity before joining the board.'},400);
  const fluency=Math.round(Number.isFinite(Number(body.fluency))?Math.max(0,Math.min(100,Number(body.fluency))):(scores.speech??score));const clarity=Math.round(Number.isFinite(Number(body.clarity))?Math.max(0,Math.min(100,Number(body.clarity))):(scores.speech??score));
  const participantKey=safeString(body.participantKey,200).trim();if(participantKey.length<20)return json({error:'Participant refresh key is missing. Refresh the page and try again.'},400);
  const keyHash=await hash(participantKey);const now=new Date().toISOString();const scoreVals=['speech','editor','newsroom','words','debate','interview'].map(key=>scores[key]??0);
  try {
    const existing=await env.DB.prepare('SELECT id FROM leaderboard WHERE participant_key_hash=?').bind(keyHash).first();
    if(existing)await env.DB.prepare('UPDATE leaderboard SET nickname=?,grade=?,score=?,fluency=?,clarity=?,scores_json=?,speech_score=?,editor_score=?,newsroom_score=?,games_score=?,debate_score=?,interview_score=?,consent=1,created_at=? WHERE id=?').bind(nickname,grade,score,fluency,clarity,JSON.stringify(scores),...scoreVals,now,existing.id).run();
    else await env.DB.prepare('INSERT INTO leaderboard (nickname,grade,score,fluency,clarity,consent,created_at,scores_json,participant_key_hash,speech_score,editor_score,newsroom_score,games_score,debate_score,interview_score) VALUES (?,?,?,?,?,1,?,?,?,?,?,?,?,?,?)').bind(nickname,grade,score,fluency,clarity,now,JSON.stringify(scores),keyHash,...scoreVals).run();
    return json({ok:true,score,storedScores:scores});
  } catch(error) {return json({error:error.message||'Could not save leaderboard entry. Confirm migration 0002_v8.sql has been applied.'},503);}
}
