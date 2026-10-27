import {json,parseJson,safeString,getSettings,getProviderSecrets,logRequest} from '../_shared.js';

function buildSystem(task) {
  const common='You are an encouraging English communication coach for school students. Focus on clear meaning, structure, tone and practical next steps. Do not shame accents, dialects, grammar mistakes, or fluency. Do not make claims about intelligence, social status, or job suitability. Keep feedback age-appropriate and specific. Never claim you heard audio when only text is supplied.';
  const instructions={
    'speech-feedback':'Review the user-provided transcript and supplied heuristic metrics. Give 3 specific strengths or improvements, one short example rewrite, and one practice exercise. Distinguish transcript-based observations from actual pronunciation or audio observations. Be brief and constructive.',
    'mock-interview':'Run a career-specific mock interview. Read the recent history and last answer. Return valid JSON only with keys "feedback" and "nextQuestion". The feedback should be under 90 words and the follow-up should be one useful question. Do not grade the student’s worth.',
    'roleplay-feedback':'Review the response for clarity, empathy, structure and realistic next steps. Give two useful strengths and at most three improvement suggestions. Do not offer medical, legal or aviation instructions as authoritative advice.',
    'compare-communication':'Compare only the two supplied texts. Comment on clarity, sentence length, filler words, word choice and structure. Do not infer accent, pronunciation, identity or vocal similarity from transcripts. Provide three practical observations.',
    'career-chat':'Act as an Indian-school career and college guide. Ask one useful follow-up question at a time, and use class, favourite subjects, stream, city/state, budget, interests and priorities when supplied. Separate confirmed official admission facts from suggestions; do not invent entrance dates, fees, cut-offs or guarantees. Recommend a short list with why it fits, what subjects/qualifications matter, skills to try now, and official links only when known. Keep the conversation warm, practical and age-appropriate.',
    'newsroom-video-review':'Review a student newsroom presentation. Analyse the supplied transcript/headline and any actual video frames included with the request. Give 3 strengths, 3 practical improvements and a short rehearsal plan. Discuss observable framing, posture, gaze, gestures, lighting and headline fit only if frames are actually available. Never infer identity, health, personality, intelligence, emotion or competence from appearance. Clearly say if no frames can be analysed.',
    'general':'Help the student practise clear, effective English. Offer actionable feedback and examples.'
  };
  return `${common}\n${instructions[task]||instructions.general}`;
}
function buildUserText(task,body) {
  const allow=task==='mock-interview'?`Career: ${safeString(body.career,160)}\nLevel: ${safeString(body.level,40)}\nRecent conversation: ${JSON.stringify(Array.isArray(body.history)?body.history.slice(-8).map(row=>({role:safeString(row.role,20),text:safeString(row.text,1200)})):[])}\nRequest: ${safeString(body.prompt,1200)}`:
  task==='roleplay-feedback'?`Scenario: ${safeString(body.scenario,800)}\nContext: ${safeString(body.context,1600)}\nStudent response: ${safeString(body.text,7000)}`:
  task==='career-chat'?`Student profile: ${JSON.stringify(body.profile||{})}\nConversation history: ${JSON.stringify(Array.isArray(body.history)?body.history.slice(-10).map(row=>({role:safeString(row.role,20),text:safeString(row.text,1500)})):[])}\nNew message: ${safeString(body.text,4000)}\nQuestioning instruction: ${safeString(body.prompt,1200)}`:
  task==='newsroom-video-review'?`Headline: ${safeString(body.headline,120)}\nSubheading: ${safeString(body.subheadline,160)}\nTeleprompter script: ${safeString(body.script,3000)}\nTranscript: ${safeString(body.text,7000)}\nVideo frames attached: ${Array.isArray(body.frames)?body.frames.length:0}. Do not assume frames are present unless actual image parts are supplied.\nReview instruction: ${safeString(body.prompt,1600)}`:
  task==='compare-communication'?`Reference label: ${safeString(body.referenceSpeaker,100)}\nStudent text: ${safeString(body.text,7000)}\nReference text: ${safeString(body.reference,7000)}\nRequest: ${safeString(body.prompt,900)}`:
  `Student text: ${safeString(body.text,7000)}\nMetrics: ${JSON.stringify(body.metrics||{})}\nRequest: ${safeString(body.prompt,1200)}`;
  return allow;
}
function extractText(result) {
  if(typeof result==='string')return result;
  if(typeof result?.response==='string')return result.response;
  if(typeof result?.text==='string')return result.text;
  if(typeof result?.output==='string')return result.output;
  if(typeof result?.choices?.[0]?.message?.content==='string')return result.choices[0].message.content;
  if(Array.isArray(result?.content))return result.content.map(item=>item.text||'').join('\n');
  if(typeof result?.result?.response==='string')return result.result.response;
  return JSON.stringify(result||{});
}
function parseOutput(text,task) {
  const clean=String(text||'').trim();
  if(task==='mock-interview') {
    try {const parsed=JSON.parse(clean.replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,''));return {text:clean,feedback:safeString(parsed.feedback,1000),nextQuestion:safeString(parsed.nextQuestion,600)};} catch {}
  }
  return {text:clean};
}
async function cloudflareRun(env,system,user) {
  if(!env.AI)throw new Error('Workers AI binding AI is unavailable.');
  const model=env.CF_MODEL||'@cf/meta/llama-3.1-8b-instruct';
  const result=await env.AI.run(model,{messages:[{role:'system',content:system},{role:'user',content:user}],max_tokens:900,temperature:0.45});
  return extractText(result);
}
async function geminiRun(env,secrets,system,user) {
  const keys=secrets.geminiKeys||[];if(!keys.length)throw new Error('No Gemini keys are configured.');
  const errors=[];const start=Math.floor(Math.random()*keys.length);
  for(let offset=0;offset<keys.length;offset++) {
    const key=keys[(start+offset)%keys.length];
    try {
      const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(env.GEMINI_MODEL||'gemini-3.5-flash-lite')}:generateContent`,{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':key},body:JSON.stringify({system_instruction:{parts:[{text:system}]},contents:[{role:'user',parts:[{text:user}]}],generationConfig:{temperature:0.45,maxOutputTokens:900}})});
      const data=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(`Gemini responded ${response.status}.`);
      const text=data.candidates?.[0]?.content?.parts?.map(part=>part.text||'').join('\n');if(!text)throw new Error('Gemini returned no text.');return text;
    } catch(error) { errors.push(error.message); }
  }
  throw new Error(errors.join(' '));
}
async function geminiVisionRun(env,secrets,system,user,frames) {
  const keys=secrets.geminiKeys||[];if(!keys.length)throw new Error('No Gemini keys are configured for video-frame analysis.');
  const parts=[{text:`${system}\n\n${user}`}];
  for(const frame of frames.slice(0,4)) {
    const data=safeString(frame?.data,90000).replace(/^data:image\/[^;]+;base64,/,'');
    const mimeType=['image/jpeg','image/png','image/webp'].includes(frame?.mimeType)?frame.mimeType:'image/jpeg';
    if(data)parts.push({inline_data:{mime_type:mimeType,data}});
  }
  if(parts.length===1)throw new Error('No usable video frames were provided.');
  const model=env.GEMINI_VISION_MODEL||'gemini-2.5-flash';const errors=[];const start=Math.floor(Math.random()*keys.length);
  for(let offset=0;offset<keys.length;offset++) {
    try {
      const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':keys[(start+offset)%keys.length]},body:JSON.stringify({system_instruction:{parts:[{text:system}]},contents:[{role:'user',parts}],generationConfig:{temperature:0.3,maxOutputTokens:1200}})});
      const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(`Gemini vision responded ${response.status}.`);
      const text=data.candidates?.[0]?.content?.parts?.map(part=>part.text||'').join('\n').trim();if(text)return text;throw new Error('Gemini vision returned no review.');
    } catch(error){errors.push(safeString(error.message,120));}
  }
  throw new Error(errors.join(' '));
}
function normalizeOpenAIUrl(value) {
  let url=String(value||'').trim().replace(/\/$/,'');
  if(!url)return '';
  if(url.endsWith('/chat/completions'))return url;
  if(url.endsWith('/v1'))return `${url}/chat/completions`;
  return `${url}/v1/chat/completions`;
}
async function freeRun(secrets,system,user) {
  if(!secrets.freeUrl||!secrets.freeKey)throw new Error('Free LLM endpoint or API key is missing.');
  const response=await fetch(normalizeOpenAIUrl(secrets.freeUrl),{method:'POST',headers:{'content-type':'application/json','authorization':`Bearer ${secrets.freeKey}`},body:JSON.stringify({model:secrets.freeModel||'default',messages:[{role:'system',content:system},{role:'user',content:user}],temperature:0.45,max_tokens:900})});
  const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(`Free LLM endpoint responded ${response.status}.`);
  const text=data.choices?.[0]?.message?.content;if(!text)throw new Error('Free LLM endpoint returned no text.');return text;
}
async function laptopRun(secrets,system,user) {
  if(!secrets.laptopUrl)throw new Error('Laptop endpoint is not configured.');
  const base=secrets.laptopUrl.replace(/\/$/,'');const headers={'content-type':'application/json'};if(secrets.laptopToken)headers.authorization=`Bearer ${secrets.laptopToken}`;
  const useOpenAI=/\/v1(?:\/chat\/completions)?$/.test(base)||/\/chat\/completions$/.test(base);
  const url=useOpenAI?normalizeOpenAIUrl(base):`${base}/api/chat`;
  const body=useOpenAI?{model:secrets.laptopModel||'llama3.2:3b',messages:[{role:'system',content:system},{role:'user',content:user}],stream:false}:{model:secrets.laptopModel||'llama3.2:3b',messages:[{role:'system',content:system},{role:'user',content:user}],stream:false,options:{num_predict:900,temperature:0.45}};
  const response=await fetch(url,{method:'POST',headers,body:JSON.stringify(body),signal:AbortSignal.timeout(18000)});const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(`Laptop endpoint responded ${response.status}.`);
  const text=useOpenAI?data.choices?.[0]?.message?.content:data.message?.content;if(!text)throw new Error('Laptop endpoint returned no text.');return text;
}
async function runProvider(provider,env,secrets,system,user) {
  if(provider==='cloudflare')return cloudflareRun(env,system,user);
  if(provider==='gemini')return geminiRun(env,secrets,system,user);
  if(provider==='free')return freeRun(secrets,system,user);
  if(provider==='laptop')return laptopRun(secrets,system,user);
  throw new Error('Unknown provider.');
}
export async function onRequestPost({request,env}) {
  const started=Date.now();
  if(request.headers.get('content-length')&&Number(request.headers.get('content-length'))>300000)return json({error:'Request is too large. Reduce the number or size of video frames.'},413);
  const body=await parseJson(request);if(!body)return json({error:'Invalid request.'},400);
  const allowedTasks=['speech-feedback','mock-interview','roleplay-feedback','compare-communication','career-chat','newsroom-video-review','general'];
  const task=allowedTasks.includes(body.task)?body.task:'general';
  const text=buildUserText(task,body);if(text.length>26000)return json({error:'Request is too large.'},413);
  const settings=await getSettings(env);const secrets=await getProviderSecrets(env);
  const automatic=settings.automaticFallback!==false;
  let order=automatic?(settings.providerOrder||['cloudflare','gemini','free','laptop']):[settings.preferredProvider||'cloudflare'];
  if(task==='newsroom-video-review'&&Array.isArray(body.frames)&&body.frames.length&&automatic)order=['gemini',...order.filter(key=>key!=='gemini')];
  if(settings.qualityMode==='saver'&&automatic&&task!=='newsroom-video-review')order=[...order.filter(key=>key==='laptop'||key==='free'),...order.filter(key=>key!=='laptop'&&key!=='free')];
  order=order.filter((provider,index,array)=>['cloudflare','gemini','free','laptop'].includes(provider)&&array.indexOf(provider)===index&&settings.providerEnabled?.[provider]!==false);
  if(!order.length) {await logRequest(env,{task,provider:'none',outcome:'no_provider',latencyMs:Date.now()-started,mode:automatic?'auto':'manual'});return json({error:'No AI provider is enabled. Use local scoring or enable a provider in admin.'},503);}
  const attempts=[];
  for(const provider of order) {
    try {
      let raw='';let visualAnalysisAvailable=false;
      if(task==='newsroom-video-review'&&provider==='gemini'&&Array.isArray(body.frames)&&body.frames.length){raw=await geminiVisionRun(env,secrets,buildSystem(task),text,body.frames);visualAnalysisAvailable=true;}else{raw=await runProvider(provider,env,secrets,buildSystem(task),text);}
      const shaped=parseOutput(raw,task);const latencyMs=Date.now()-started;
      await logRequest(env,{task,provider,outcome:'success',latencyMs,mode:automatic?'auto':'manual'});
      return json({...shaped,provider,latencyMs,mode:automatic?'auto':'manual',...(task==='newsroom-video-review'?{visualAnalysisAvailable}: {})});
    } catch(error) {attempts.push({provider,error:safeString(error.message,160)});}
  }
  await logRequest(env,{task,provider:attempts.map(item=>item.provider).join(','),outcome:'failed',latencyMs:Date.now()-started,mode:automatic?'auto':'manual'});
  return json({error:'Every enabled AI provider failed or was unavailable. The browser can continue with on-device scoring.',attempts:attempts.map(item=>({provider:item.provider,error:item.error}))},503);
}
