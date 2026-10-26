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
  "public/app.js",
  "v6/index.html",
  "v6/style.css",
  "v6/games.css",
  "v6/app.js",
  "v6/games.js",
  "v6/history.html",
  "v6/careers.html",
  "v6/colleges.html",
  "v6/games.html",
  "v6/feedback.html",
  "public/v6/index.html",
  "public/v6/style.css",
  "public/v6/games.css",
  "public/v6/app.js",
  "public/v6/games.js",
  "public/v6/history.html",
  "public/v6/careers.html",
  "public/v6/colleges.html",
  "public/v6/games.html",
  "public/v6/feedback.html",
  "v7.html",
  "v7-styles.css",
  "v7-app.js",
  "v7/index.html",
  "v7/styles.css",
  "v7/app.js",
  "public/v7.html",
  "public/v7-styles.css",
  "public/v7-app.js",
  "public/v7/index.html",
  "public/v7/styles.css",
  "public/v7/app.js"
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
    let lineComments = 0;
    for (let l of lines) {
      let trimmed = l.trim();
      if (trimmed.startsWith("//")) {
        lineComments++;
      }
    }

    const issues = htmlComments + blockComments + lineComments;
    if (issues > 0) {
      console.log(`[FAIL] ${f} -> HTML comments: ${htmlComments}, Block comments: ${blockComments}, Line comments: ${lineComments}`);
      totalIssues += issues;
    } else {
      console.log(`[OK] ${f} -> 0 comments`);
    }

    if (content.includes("SUPW")) {
      console.log(`[FAIL] ${f} contains 'SUPW'!`);
      supwFound++;
    }
    if (content.includes("Annual Career Exhibition")) {
      console.log(`[FAIL] ${f} contains 'Annual Career Exhibition'!`);
      exhibitionFound++;
    }
  }
}

console.log("\nSUPW Occurrences: " + supwFound);
console.log("Annual Career Exhibition Occurrences: " + exhibitionFound);

if (totalIssues > 0 || supwFound > 0 || exhibitionFound > 0) {
  console.log(`\n>>> FAILURE: Found ${totalIssues} comments, ${supwFound} SUPW occurrences, and ${exhibitionFound} 'Annual Career Exhibition' occurrences! <<<`);
  process.exit(1);
} else {
  console.log("\n>>> VERIFIED: 0 COMMENTS, 0 SUPW, AND 0 'ANNUAL CAREER EXHIBITION' OCCURRENCES! <<<");
}
