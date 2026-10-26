import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const failures = [];
const checks = [];
const record = (name, passed, detail = '') => {
  checks.push({ name, passed, detail });
  if (!passed) failures.push(name);
};
const read = path => readFileSync(join(root, path), 'utf8');

const codeFiles = ['v7-app.js', 'v7/app.js', 'functions/_shared.js', 'functions/api/ai.js', 'functions/api/speech.js', 'functions/api/leaderboard.js', 'functions/api/admin/[[path]].js'];
for (const file of codeFiles.filter(file => file.endsWith('.js'))) {
  try {
    execFileSync(process.execPath, ['--check', file], { cwd: root, stdio: 'pipe' });
    record(`JavaScript syntax: ${file}`, true);
  } catch (error) {
    record(`JavaScript syntax: ${file}`, false, error.stderr?.toString() || error.message);
  }
}
const html = read('v7.html');
const js = read('v7-app.js');
const backend = read('functions/api/ai.js');
const requiredSections = ['hero', 'whyEnglish', 'careers', 'quiz', 'plan', 'speechLab', 'mockInterview', 'roleplay', 'anchor', 'compare', 'speakers', 'leaderboard', 'wordOfDay', 'emailGame', 'pronunciation', 'debate', 'qr', 'closing'];
record('Required scroll sections exist in v7', requiredSections.every(key => html.includes(`data-feature="${key}"`) || key === 'whyEnglish' && html.includes('data-feature="whyEnglish"')));
record('Pronunciation sounds defined in v7', js.includes('PRONUNCIATION_SOUNDS = {') && js.includes('activePronunciationSound'));
record('Automatic practice score binding in v7', html.includes('id="leader-score"') && js.includes('storePracticeScore'));
record('Quiz controls wired in v7', js.includes("$('#quiz-options').addEventListener('click'") && js.includes("$('#quiz-next').addEventListener('click'"));
record('Alternate speaking prompt cycle in v7', js.includes('speechPromptIndex=(speechPromptIndex+1)%prompts.length'));

for (const check of checks) console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.name}${check.detail ? `: ${check.detail}` : ''}`);
console.log(`\n${checks.filter(check => check.passed).length}/${checks.length} v7 checks passed.`);
if (failures.length) process.exitCode = 1;
