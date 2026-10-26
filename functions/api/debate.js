import {json,parseJson,safeString,originAllowed,isIpBanned,logRequest} from '../_shared.js';
const cleanRoom=value=>safeString(value,8).toUpperCase().replace(/[^A-Z0-9]/g,'');
export async function onRequestGet({request,env}) {
  if(!env.DB)return json({error:'Live debate rooms require the D1 database.'},503);
  const room=cleanRoom(new URL(request.url).searchParams.get('room'));if(room.length!==6)return json({error:'Enter a valid six-character room code.'},400);
  try{const exists=await env.DB.prepare('SELECT room_code FROM debate_rooms WHERE room_code=?').bind(room).first();if(!exists)return json({error:'Room not found. Create it first.'},404);const result=await env.DB.prepare('SELECT display_name AS name,message,created_at AS createdAt FROM debate_messages WHERE room_code=? ORDER BY id ASC LIMIT 100').bind(room).all();return json({room,messages:result.results||[]});}catch{return json({error:'Debate storage migration is not applied.'},503);}
}
export async function onRequestPost({request,env}) {
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  if(await isIpBanned(request,env))return json({error:'Your IP address is restricted.'},403);
  const clientIp=request.headers.get('cf-connecting-ip')||request.headers.get('x-real-ip')||request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'';
  if(!env.DB)return json({error:'Live debate rooms require the D1 database.'},503);
  const body=await parseJson(request);if(!body)return json({error:'Invalid request.'},400);if(body.consent!==true)return json({error:'Consent is required before storing debate messages.'},400);
  const action=safeString(body.action,20),name=safeString(body.name,24).trim(),message=safeString(body.message,1200).trim();let room=cleanRoom(body.room);
  if(!name)return json({error:'Enter a nickname.'},400);
  try{
    if(action==='join'){
      if(!room){room=crypto.randomUUID().replace(/-/g,'').slice(0,6).toUpperCase();await env.DB.prepare('INSERT INTO debate_rooms (room_code,created_at) VALUES (?,?)').bind(room,new Date().toISOString()).run();}
      else {const exists=await env.DB.prepare('SELECT room_code FROM debate_rooms WHERE room_code=?').bind(room).first();if(!exists)return json({error:'Room not found. Leave the code blank to create a new room.'},404);}
      await env.DB.prepare('INSERT INTO debate_messages (room_code,display_name,message,created_at) VALUES (?,?,?,?)').bind(room,name,`${name} joined the debate.`,new Date().toISOString()).run();return json({ok:true,room});
    }
    if(action==='message'){
      if(room.length!==6||message.length<2)return json({error:'Room and a message are required.'},400);
      const exists=await env.DB.prepare('SELECT room_code FROM debate_rooms WHERE room_code=?').bind(room).first();if(!exists)return json({error:'Room not found.'},404);
      await env.DB.prepare('INSERT INTO debate_messages (room_code,display_name,message,created_at) VALUES (?,?,?,?)').bind(room,name,message,new Date().toISOString()).run();
      await logRequest(env,{task:'debate-message',provider:room,outcome:name,latencyMs:0,mode:'user',ip:clientIp});
      return json({ok:true,room});
    }
    return json({error:'Unknown debate action.'},400);
  }catch{return json({error:'Debate storage migration is not applied or the database is unavailable.'},503);}
}
