import fs from "fs";

const files = [
  "index.html",
  "v2.html",
  "v3.html",
  "v4.html",
  "v5.html",
  "v3-styles.css",
  "v3-app.js",
  "worker.js",
  "functions/api/[[route]].js",
  "public/index.html",
  "public/v2.html",
  "public/v3.html",
  "public/v4.html",
  "public/v5.html",
  "public/v3-styles.css",
  "public/v3-app.js"
];

let totalIssues = 0;
let supwFound = 0;
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

    if (htmlComments > 0 || blockComments > 0 || lineCommentLines.length > 0) {
      totalIssues++;
      console.log(`[WARN] ${f} -> HTML: ${htmlComments}, Block: ${blockComments}, Line Comments: ${lineCommentLines.length}`);
    } else {
      console.log(`[OK] ${f} -> 0 comments`);
    }
  }
}

console.log(`\nSUPW Occurrences: ${supwFound}`);
if (totalIssues === 0 && supwFound === 0) {
  console.log(">>> VERIFIED: 0 COMMENTS AND 0 SUPW OCCURRENCES ACROSS ALL FILES! <<<");
}
