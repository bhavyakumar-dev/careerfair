import fs from "fs";

const files = [
  "index.html",
  "v2.html",
  "v3.html",
  "v4.html",
  "v5.html",
  "open-mic.html",
  "v3-styles.css",
  "v3-app.js",
  "styles.css",
  "app.js",
  "worker.js",
  "functions/api/[[route]].js",
  "functions/_shared.js",
  "functions/api/ai.js",
  "functions/api/speech.js",
  "functions/api/leaderboard.js",
  "functions/api/admin/[[path]].js",
  "public/index.html",
  "public/v2.html",
  "public/v3.html",
  "public/v4.html",
  "public/v5.html",
  "public/open-mic.html",
  "public/v3-styles.css",
  "public/v3-app.js",
  "public/styles.css",
  "public/app.js"
];

let totalIssues = 0;
let supwFound = 0;
let exhibitionFound = 0;

for (const f of files) {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, "utf8");
    const htmlComments = (content.match(/<!--[\s\S]*?-->/g) || []).length;
    const blockComments = (content.match(/\/\*[\s\S]*?\*\//g) || []).length;
    let lines = content.split("\n");
    let lineCommentLines = [];
    lines.forEach((line, idx) => {
      let trimmed = line.trim();
      if (trimmed.startsWith("//")) {
        lineCommentLines.push(idx + 1);
      }
    });

    if (/SUPW/i.test(content)) {
      supwFound++;
      console.log(`[WARN] ${f} contains 'SUPW'!`);
    }

    if (/annual\s+career\s+exhibition/i.test(content)) {
      exhibitionFound++;
      console.log(`[WARN] ${f} contains 'Annual Career Exhibition'!`);
    }

    if (htmlComments > 0 || blockComments > 0 || lineCommentLines.length > 0) {
      totalIssues++;
      console.log(`[WARN] ${f} -> HTML: ${htmlComments}, Block: ${blockComments}, Line Comments: ${lineCommentLines.length}`);
    } else {
      console.log(`[OK] ${f} -> 0 comments`);
    }
  }
}

console.log(`\nSUPW Occurrences: ${supwFound}`);
console.log(`Annual Career Exhibition Occurrences: ${exhibitionFound}`);
if (totalIssues === 0 && supwFound === 0 && exhibitionFound === 0) {
  console.log(">>> VERIFIED: 0 COMMENTS, 0 SUPW, AND 0 'ANNUAL CAREER EXHIBITION' OCCURRENCES! <<<");
} else {
  process.exitCode = 1;
}
