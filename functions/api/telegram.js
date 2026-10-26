import {json,parseJson,safeString,originAllowed} from '../_shared.js';

export async function onRequestPost({request,env}) {
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  const body=await parseJson(request);if(!body)return json({error:'Invalid request body.'},400);
  const botToken=safeString(body.token||env.TELEGRAM_BOT_TOKEN||'',150).trim();
  const chatId=safeString(body.chatId||env.TELEGRAM_CHAT_ID||'',80).trim();
  if(!botToken||!chatId)return json({error:'Telegram Bot Token and Chat ID are required. Configure them in the Cloud Vault settings.'},400);
  const action=safeString(body.action||'send',20).trim();
  let text=safeString(body.message||'',3000).trim();
  if(action==='test'||!text){
    text='<b>Open Mic Career Fair v12</b>\nTelegram integration is online and connected.';
  }
  try {
    const tgUrl=`https://api.telegram.org/bot${encodeURIComponent(botToken)}/sendMessage`;
    const response=await fetch(tgUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:chatId,text,parse_mode:'HTML'})
    });
    const result=await response.json();
    if(!response.ok||!result.ok){
      return json({error:result.description||'Telegram API error'},response.status||400);
    }
    return json({ok:true,messageId:result.result?.message_id||null});
  } catch(err) {
    return json({error:err.message||'Failed to reach Telegram API.'},502);
  }
}
