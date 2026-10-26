import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const failures = [];
const checks = [];
const record = (name, passed, detail = '') => {
  checks.push({ name, passed, detail });
  if (!passed) failures.push(name);
};
const read = path => readFileSync(join(root, path), 'utf8');
const codeFiles = ['v8-app.js', 'functions/_shared.js', 'functions/api/ai.js', 'functions/api/speech.js', 'functions/api/leaderboard.js', 'functions/api/feedback.js', 'functions/api/media.js', 'functions/api/debate.js', 'functions/api/tts.js', 'functions/api/admin/[[path]].js', 'laptop-host.py'];
for (const file of codeFiles.filter(file => file.endsWith('.js'))) {
  try {
    execFileSync(process.execPath, ['--check', file], { cwd: root, stdio: 'pipe' });
    record(`JavaScript syntax: ${file}`, true);
  } catch (error) {
    record(`JavaScript syntax: ${file}`, false, error.stderr?.toString() || error.message);
  }
}
const html = read(existsSync(join(root, 'v8.html')) ? 'v8.html' : 'index.html');
const js = read(existsSync(join(root, 'v8-app.js')) ? 'v8-app.js' : 'app.js');
const css = read(existsSync(join(root, 'v8-styles.css')) ? 'v8-styles.css' : 'styles.css');
const backend = read('functions/api/ai.js');
const requiredSections = ['hero', 'whyEnglish', 'careers', 'quiz', 'plan', 'careerChat', 'speechLab', 'mockInterview', 'roleplay', 'anchor', 'compare', 'speakers', 'leaderboard', 'wordOfDay', 'emailGame', 'pronunciation', 'debate', 'feedback', 'closing', 'games'];
record('Required v8 scroll sections exist', requiredSections.every(key => html.includes(`data-feature="${key}"`)) && html.includes('id="privacy-policy"'));
record('Old QR section is replaced with feedback/support and games are placed before final privacy section', html.includes('id="feedback-support"') && !html.includes('id="share-qr"') && html.indexOf('id="games-arcade"') < html.indexOf('id="privacy-policy"') && html.indexOf('id="privacy-policy"') > html.indexOf('id="feedback-support"') && !js.includes('initQR()'));
const expectedCareerTitles = ['Screenwriter / Scriptwriter', 'Novelist / Fiction Author', 'Narrative Designer / Game Writer', 'Lyricist / Songwriter', 'Journalist / Entertainment Critic', 'Copywriter / Content Strategist', 'YouTube / Podcast Scriptwriter', 'Dialogue Writer / Story Editor', 'Voice Actor / Narrator', 'Dubbing / Subtitle Localizer', 'Radio Jockey / Podcast Host', 'Stand-up Comedian / Comedy Writer', 'Publishing Editor / Literary Agent', 'Script Reader / Development Executive', 'Theatre Playwright / Director'];
record('Requested English-intensive entertainment careers included', expectedCareerTitles.every(title => js.includes(title)));
const guidanceBlock = js.match(/const CAREER_GUIDANCE = \{([\s\S]*?)\n\};/);
const guidanceTitles = guidanceBlock ? [...guidanceBlock[1].matchAll(/^  '([^']+)': \{study:/gm)].map(match => match[1]) : [];
const allCareerTitles = [...expectedCareerTitles, 'Lawyer / Legal Researcher', 'Diplomat / International Relations', 'Civil Services / Policy Analyst', 'Teacher / Lecturer', 'Science Communicator / Research Writer', 'UX Writer / Content Designer', 'Software Developer / Technical Writer', 'Product Manager / Business Analyst', 'Marketing / Public Relations Specialist', 'Doctor / Healthcare Communicator', 'Aviation / Airline Cabin Crew', 'Founder / Social Entrepreneur'];
record('Every career includes study, entry-route and income guidance', allCareerTitles.every(title => guidanceTitles.includes(title)) && guidanceTitles.length === allCareerTitles.length);
record('Career detail offers official admissions links and current salary lookup', js.includes('CAREER_RESOURCES') && js.includes('Look up current India salary listings') && js.includes('career-source-links'));
const streamBlock = js.match(/const CAREER_STREAMS = \[([\s\S]*?)\n\];/);
const mappedStreamTitles = streamBlock ? allCareerTitles.filter(title => streamBlock[1].includes(`'${title}'`)) : [];
record('Career atlas starts with a stream choice instead of listing every career', html.includes('id="career-stream-options"') && html.includes('data-stream="science"') && html.includes('data-stream="commerce"') && html.includes('data-stream="humanities"') && html.includes('data-stream="creative"') && html.includes('data-stream="technology"') && html.includes('data-stream="explore"') && html.includes('id="career-browser" hidden'));
record('Career results are capped at six until Show all is chosen', js.includes('const maxInitialResults = 6;') && js.includes("matchingCareers.slice(0, maxInitialResults)") && html.includes('id="career-more"'));
record('Every career appears in at least one stream shortlist', mappedStreamTitles.length === allCareerTitles.length);
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const anchors = [...html.matchAll(/<a\b([^>]*)>/g)].map(match => match[1]);
const hrefs = anchors.map(attributes => attributes.match(/\bhref="([^"]*)"/i)?.[1]);
const brokenInternalLinks = hrefs.filter(href => href && href.startsWith('#') && !ids.has(href.slice(1)));
record('No empty, hash-placeholder or broken internal links', hrefs.every(href => href && href.trim() !== '#' && !href.startsWith('javascript:')) && brokenInternalLinks.length === 0);
record('Admin has no sample-looking provider URLs', !js.includes('provider.example') && !js.includes('your-tunnel.trycloudflare.com'));
const resourceBlock = js.match(/const CAREER_RESOURCES = \{([\s\S]*?)\n\};/);
const resourceKeys = resourceBlock ? [...resourceBlock[1].matchAll(/^  ([a-zA-Z0-9_]+): \{label:/gm)].map(match => match[1]) : [];
const usedResourceKeys = guidanceBlock ? [...guidanceBlock[1].matchAll(/links:\[([^\]]*)\]/g)].flatMap(match => [...match[1].matchAll(/'([a-zA-Z0-9_]+)'/g)].map(item => item[1])) : [];
record('All career-source links resolve to a defined HTTPS resource', resourceKeys.length > 0 && usedResourceKeys.length > 0 && usedResourceKeys.every(key => resourceKeys.includes(key)) && [...resourceBlock[1].matchAll(/url:'([^']+)'/g)].every(match => /^https:\/\//.test(match[1])));
record('New speaking sections are admin-toggleable', js.includes("pronunciation: ['Sound studio'") && js.includes("debate: ['Debate room'") && read('functions/_shared.js').includes("'pronunciation','debate'"));
record('Manual fallback is configurable', js.includes('automaticFallback') && js.includes('preferredProvider') && backend.includes('automaticFallback'));
record('Only server-side admin settings control provider failover', backend.includes('const automatic=settings.automaticFallback!==false;') && !backend.includes('body.automaticFallback'));
record('Additional speaking-practice sections exist', html.includes('data-feature="pronunciation"') && html.includes('data-feature="debate"') && js.includes('PRONUNCIATION_SOUNDS'));
record('Request logs exclude submitted text', backend.includes('logRequest(env,{task,provider,outcome') && !/logRequest\([^\n]*(body\.text|prompt|transcript|audio)/i.test(backend));
record('Demo credentials are labelled as demo-only', html.includes('Local demo only: admin / careers2026'));
record('Quiz options, Next and restart controls are wired', js.includes("$('#quiz-options').addEventListener('click'") && js.includes("$('#quiz-next').addEventListener('click'") && js.includes("$('#quiz-results').addEventListener('click'"));
record('Plan builder and in-plan copy action are wired', js.includes("$('#plan-form').addEventListener('submit',buildPlan)") && js.includes("event.target.closest('#copy-plan')"));
record('Alternate speaking prompts always cycle to a new prompt', js.includes('speechPromptIndex=(speechPromptIndex+1)%prompts.length') && !js.includes('const prompt=prompts[Math.floor(Math.random()*prompts.length)]'));
record('Practice score is a read-only generated output', /<output id="leader-score"/.test(html) && !/<input[^>]*id="leader-score"/.test(html) && js.includes('storePracticeScore(scored)') && js.includes('lastPracticeScore.score'));
record('Recorded audio is transcribed before transcript coaching', js.includes('requestSpeechTranscription(audioFile)') && js.includes("requestAI('speech-feedback',{text:transcript") && js.includes('Stop the recording first'));
record('Speech uses ElevenLabs Scribe v2 and documented Gemini Interactions transcription', read('functions/api/speech.js').includes("model_id','scribe_v2") && read('functions/api/speech.js').includes("v1beta/interactions") && read('functions/api/speech.js').includes("GEMINI_STT_MODEL||'gemini-3.5-transcribe'") && read('functions/api/speech.js').includes('X-Goog-Upload-Protocol') && read('functions/api/speech.js').includes('uploadedName'));
record('Comparison audio is transcribed before textual comparison', js.includes('requestSpeechTranscription(selectedAudioFile)') && js.includes("renderCompareResult(own,reference,selectedAudioFile?'audio transcription':'typed transcript')"));
record('Four speaker cards use real photo URLs and attribution links', (html.match(/class="speaker-photo"/g)||[]).length===4 && ['David_Attenborough.jpeg','Emma_Watson_Uruguay_1.png','Stephen_Fry.jpg','960px-Official_portrait_of_Barack_Obama.jpg'].every(filename=>html.includes(filename)) && (html.match(/commons\.wikimedia\.org\/wiki\/File:/g)||[]).length>=4 && html.includes('CC BY-SA 3.0'));
record('Conversation scenarios update context and selected state accessibly', js.includes("button.setAttribute('aria-pressed',String(selected))") && js.includes("$('#roleplay-situation').textContent=scenario.title") && js.includes("activeRoleplay === 'doctor'"));
record('Provider failover and local scoring remain available if AI is unavailable', js.includes('on-device scoring') && js.includes('automaticFallback') && js.includes('catch {'));
const targetHtml = existsSync(join(root, 'v8.html')) ? 'v8.html' : 'index.html';
const targetJs = existsSync(join(root, 'v8-app.js')) ? 'v8-app.js' : 'app.js';
const targetCss = existsSync(join(root, 'v8-styles.css')) ? 'v8-styles.css' : 'styles.css';
const codeText = [targetHtml, targetJs, targetCss, ...codeFiles.filter(path => path !== targetJs && path !== 'laptop-host.py')].map(path => ({ path, text: read(path) }));
for (const { path, text } of codeText) {
  const patterns = [/AIza[0-9A-Za-z_-]{30,}/, /sk-[A-Za-z0-9]{24,}/, /gh[pousr]_[A-Za-z0-9]{30,}/, /github_pat_[A-Za-z0-9_]{30,}/];
  record(`No obvious API token in ${path}`, !patterns.some(pattern => pattern.test(text)));
  const hasHtmlComments = path.endsWith('.html') && text.includes('<!--');
  const hasBlockComments = /\/\*[\s\S]*?\*\//.test(text) && !path.endsWith('wrangler.toml');
  const hasLineComments = path.endsWith('.js') && /(^|\n)\s*\/\//m.test(text);
  record(`No code comments in ${path}`, !(hasHtmlComments || hasBlockComments || hasLineComments));
}
const walk = dir => readdirSync(dir).flatMap(name => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
record('Feedback form categories match accepted API categories', ['feedback','bug','support','feature','accessibility'].every(category=>html.includes(`value="${category}"`)&&read('functions/api/feedback.js').includes(`'${category}'`)));
record('Feedback is stored in D1 and export provides Excel with CSV fallback', read('functions/api/feedback.js').includes('INSERT INTO feedback') && read(targetJs).includes('XLSX.writeFile') && read(targetJs).includes('open-mic-feedback.csv') && read('functions/api/admin/[[path]].js').includes('feedback'));
record('Newsroom requires consent, saves private media before analysis, and overlays headline/subheading', read('functions/api/media.js').includes('env.MEDIA.put') && read('functions/api/media.js').includes('env.DB.prepare') && js.includes("fetch('/api/media',{method:'POST'") && js.indexOf("fetch('/api/media',{method:'POST'") < js.indexOf("requestSpeechTranscription(new File([anchorVideoBlob]") && js.includes('wrapCanvasText(context,headline') && js.includes("const displayedScript=$('#teleprompter-text').textContent"));
record('Newsroom updates valid status values and supports private deletion', js.includes("transcriptionStatus:transcript?'complete':'failed'") && js.includes("analysisStatus:reviewTextOutput?'complete':'failed'") && read('functions/api/media.js').includes('env.MEDIA.delete'));
record('Weighted overall score matches front-end and server, with category boards', js.includes('const SCORE_WEIGHTS = { speech:30, editor:15, newsroom:20, words:15, debate:10, interview:10 }') && read('functions/api/leaderboard.js').includes('const WEIGHTS={speech:30,editor:15,newsroom:20,words:15,debate:10,interview:10}') && read('functions/api/leaderboard.js').includes('games_score AS gamesScore') && html.includes('data-board="editor"') && html.includes('id="email-leaderboard-list"') && html.includes('id="games-leaderboard-list"'));
record('Career chat sends context and conversation history to the AI route', html.includes('id="career-chat-form"') && js.includes("requestAI('career-chat',{text:message,history:careerChatHistory.slice(-10),profile:context") && backend.includes('Questioning instruction'));
record('Feedback/media v8 migrations and private bucket binding exist', read('migrations/0002_v8.sql').includes('CREATE TABLE IF NOT EXISTS feedback') && read('migrations/0002_v8.sql').includes('CREATE TABLE IF NOT EXISTS media_submissions') && read('wrangler.toml').includes('binding = "MEDIA"'));
record('Deployment configuration and v8 guide present', ['wrangler.toml', 'migrations/0001_init.sql', 'migrations/0002_v8.sql', 'migrations/0003_debate_rooms.sql', 'functions/api/debate.js', 'functions/api/tts.js', '.dev.vars.example', 'STITCH_BRIEF.md', 'README.md'].every(path => { try { read(path); return true; } catch { return false; } }) && !read('README.md').includes('Artistic QR artwork'));
record('Feature labels are consistent across site and server defaults', ['careerChat','feedback','games'].every(key=>html.includes(`data-feature="${key}"`)&&js.includes(`${key}:`)&&read('functions/_shared.js').includes(`'${key}'`)) && !read('functions/_shared.js').includes("'qr'"));
record('Gibberish samples receive no normal English score', js.includes('const lowSignal =') && js.includes('score = lowSignal ? 0') && js.includes('random letters and gibberish are not counted as good English'));
record('Word of the Day has sample sentence and ElevenLabs pronunciation with fallback', html.includes('id="hear-word"') && html.includes('id="daily-example"') && js.includes("fetch('/api/tts'") && read('functions/api/tts.js').includes('secrets.elevenlabsKey'));
record('Live debate room has consent-gated D1 storage and AI speech transcription', html.includes('id="debate-room-mic"') && js.includes('requestSpeechTranscription(file)') && read('functions/api/debate.js').includes('INSERT INTO debate_messages') && read('migrations/0003_debate_rooms.sql').includes('CREATE TABLE IF NOT EXISTS debate_rooms'));
for (const check of checks) console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? `: ${check.detail}` : ''}`);
console.log(`\n${checks.filter(check => check.passed).length}/${checks.length} checks passed.`);
if (failures.length) process.exitCode = 1;
