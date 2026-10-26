import fs from 'fs';
import vm from 'vm';

const checks = [];
function record(name, passed, detail = '') {
  checks.push({ name, passed, detail });
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function testSyntax(path) {
  try {
    const code = read(path);
    new vm.Script(code, { filename: path });
    record(`JavaScript syntax: ${path}`, true);
  } catch (err) {
    record(`JavaScript syntax: ${path}`, false, err.message);
  }
}

['v8-app.js', 'v8/app.js', 'public/v8-app.js', 'public/v8/app.js'].forEach(testSyntax);

const v8Html = read('v8.html');
const v8App = read('v8-app.js');

record('AI College Counselor section exists in v8', v8Html.includes('id="college-counselor"'));
record('Modern Vocabulary Games section exists in v8', v8Html.includes('id="modern-games"'));
record('Feedback & Support section exists in v8', v8Html.includes('id="feedback-support"'));
record('Broadcast Newsroom Studio exists in v8', v8Html.includes('newsroom-studio') && v8Html.includes('id="anchor-video"'));
record('Composite scoring formula banner exists in v8', v8Html.includes('composite-formula-banner'));
record('Career Wordle game implemented in v8', v8App.includes('initWordle') && v8Html.includes('id="wordle-grid"'));
record('Word & Meaning Match game implemented in v8', v8App.includes('initMatching') && v8Html.includes('id="matching-grid"'));
record('Sentence Clinic game implemented in v8', v8App.includes('initClinic') && v8Html.includes('id="clinic-options"'));
record('Excel spreadsheet download implemented in v8', v8App.includes('download-excel-btn') && v8Html.includes('download-excel-btn'));
record('Emma Watson photo visible with reliable source in v8', v8Html.includes('Emma_Watson'));
record('Zero comments in v8 HTML, JS, CSS', !v8Html.includes('<!--') && !/\/\*[\s\S]*?\*\//.test(v8App) && !/(^|\n)\s*\/\//m.test(v8App));

for (const check of checks) {
  console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? `: ${check.detail}` : ''}`);
}

const failures = checks.filter(c => !c.passed);
console.log(`\n${checks.filter(c => c.passed).length}/${checks.length} v8 checks passed.`);
if (failures.length) process.exitCode = 1;
