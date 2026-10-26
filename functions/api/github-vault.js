import {json,parseJson,safeString,originAllowed} from '../_shared.js';

export async function onRequestPost({request,env}) {
  if(!originAllowed(request))return json({error:'Origin check failed.'},403);
  const body=await parseJson(request);if(!body)return json({error:'Invalid request body.'},400);
  const token=safeString(body.token||env.GITHUB_TOKEN||'',200).trim();
  const owner=safeString(body.owner||env.GITHUB_OWNER||'',100).trim();
  const repo=safeString(body.repo||env.GITHUB_REPO||'',100).trim();
  const branch=safeString(body.branch||'main',60).trim();
  const path=safeString(body.path||'',300).trim();
  const content=body.content;
  const commitMsg=safeString(body.message||`Save ${path}`,250).trim();

  if(!token||!owner||!repo||!path||!content) {
    return json({error:'Missing GitHub credentials, repo details, path or content.'},400);
  }

  try {
    const ghUrl=`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${path.split('/').map(encodeURIComponent).join('/')}`;
    let sha=undefined;
    try {
      const getRes=await fetch(ghUrl,{
        headers:{
          'Authorization':`Bearer ${token}`,
          'User-Agent':'OpenMic-CareerFair-v12',
          'Accept':'application/vnd.github.v3+json'
        }
      });
      if(getRes.ok){
        const existing=await getRes.json();
        if(existing&&existing.sha)sha=existing.sha;
      }
    } catch {}

    const payload={
      message:commitMsg,
      content,
      branch
    };
    if(sha)payload.sha=sha;

    const putRes=await fetch(ghUrl,{
      method:'PUT',
      headers:{
        'Authorization':`Bearer ${token}`,
        'User-Agent':'OpenMic-CareerFair-v12',
        'Accept':'application/vnd.github.v3+json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    });

    const result=await putRes.json();
    if(!putRes.ok){
      return json({error:result.message||'GitHub API upload rejected.'},putRes.status||400);
    }

    return json({
      ok:true,
      path,
      commitSha:result.commit?.sha||null,
      htmlUrl:result.content?.html_url||null
    });
  } catch(err) {
    return json({error:err.message||'Failed to reach GitHub API.'},502);
  }
}
