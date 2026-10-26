import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const failures = [];
const checks = [];
const record = (name, passed, detail = '') => {
  checks.push({ name, passed, detail });
  if (!passed) failures.push(name);
};
const read = path => readFileSync(join(root, path), 'utf8');
const codeFiles = ['app.js', 'functions/_shared.js', 'functions/api/ai.js', 'functions/api/speech.js', 'functions/api/leaderboard.js', 'functions/api/admin/[[path]].js', 'laptop-host.py'];
for (const file of codeFiles.filter(file => file.endsWith('.js'))) {
  try {
    execFileSync(process.execPath, ['--check', file], { cwd: root, stdio: 'pipe' });
    record(`JavaScript syntax: ${file}`, true);
  } catch (error) {
    record(`JavaScript syntax: ${file}`, false, error.stderr?.toString() || error.message);
  }
}
const html = read('open-mic.html');
const js = read('app.js');
const backend = read('functions/api/ai.js');
const requiredSections = ['hero', 'whyEnglish', 'careers', 'quiz', 'plan', 'speechLab', 'mockInterview', 'roleplay', 'anchor', 'compare', 'speakers', 'leaderboard', 'wordOfDay', 'emailGame', 'pronunciation', 'debate', 'qr', 'closing'];
record('Required scroll sections exist', requiredSections.every(key => html.includes(`data-feature="${key}"`) || key === 'whyEnglish' && html.includes('data-feature="whyEnglish"')));
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
const codeText = ['open-mic.html', 'app.js', 'styles.css', ...codeFiles.filter(path => path !== 'app.js')].map(path => ({ path, text: read(path) }));
for (const { path, text } of codeText) {
  const patterns = [/AIza[0-9A-Za-z_-]{30,}/, /sk-[A-Za-z0-9]{24,}/, /gh[pousr]_[A-Za-z0-9]{30,}/, /github_pat_[A-Za-z0-9_]{30,}/];
  record(`No obvious API token in ${path}`, !patterns.some(pattern => pattern.test(text)));
  const hasHtmlComments = path.endsWith('.html') && text.includes('<!--');
  const hasBlockComments = /\/\*[\s\S]*?\*\//.test(text) && !path.endsWith('wrangler.toml');
  const hasLineComments = path.endsWith('.js') && /(^|\n)\s*\/\//m.test(text);
  record(`No code comments in ${path}`, !(hasHtmlComments || hasBlockComments || hasLineComments));
}
record('Artistic QR preview asset exists', read('assets/open-mic-qr-repo-preview.png').length > 0);
record('Deployment configuration present', ['wrangler.toml', 'migrations/0001_init.sql', '.dev.vars.example', 'STITCH_BRIEF.md', 'README.md'].every(path => { try { read(path); return true; } catch { return false; } }));
for (const check of checks) console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? `: ${check.detail}` : ''}`);
console.log(`\n${checks.filter(check => check.passed).length}/${checks.length} checks passed.`);
if (failures.length) process.exitCode = 1;
