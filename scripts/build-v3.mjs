import fs from "fs";
import path from "path";

function stripComments(content, isHtml = false, isCss = false, isJs = false) {
  let out = content;
  if (isHtml) {
    out = out.replace(/<!--[\s\S]*?-->/g, "");
  }
  if (isCss || isHtml) {
    out = out.replace(/\/\*[\s\S]*?\*\//g, "");
  }
  if (isJs) {
    let lines = out.split("\n");
    let cleaned = lines.map(line => {
      let inString = false;
      let quote = "";
      for (let i = 0; i < line.length; i++) {
        let char = line[i];
        let next = line[i + 1] || "";
        if ((char === '"' || char === "'" || char === '`') && (i === 0 || line[i - 1] !== '\\')) {
          if (!inString) {
            inString = true;
            quote = char;
          } else if (char === quote) {
            inString = false;
          }
        }
        if (!inString && char === '/' && next === '/') {
          return line.substring(0, i).trimEnd();
        }
      }
      return line;
    });
    out = cleaned.join("\n");
    out = out.replace(/\/\*[\s\S]*?\*\//g, "");
  }
  return out;
}

const extractedDir = "C:\\Users\\hp\\Downloads\\open-mic-careerfair-extracted";

if (!fs.existsSync("assets")) fs.mkdirSync("assets", { recursive: true });
if (!fs.existsSync("public/assets")) fs.mkdirSync("public/assets", { recursive: true });

const srcQr = path.join(extractedDir, "assets", "open-mic-qr-repo-preview.png");
if (fs.existsSync(srcQr)) {
  fs.copyFileSync(srcQr, path.join("assets", "open-mic-qr-repo-preview.png"));
  fs.copyFileSync(srcQr, path.join("public/assets", "open-mic-qr-repo-preview.png"));
  console.log("Copied open-mic QR asset successfully.");
}

let v3Html = fs.readFileSync(path.join(extractedDir, "index.html"), "utf8");
let v3Css = fs.readFileSync(path.join(extractedDir, "styles.css"), "utf8");
let v3Js = fs.readFileSync(path.join(extractedDir, "app.js"), "utf8");

v3Html = stripComments(v3Html, true, true, false);
v3Css = stripComments(v3Css, false, true, false);
v3Js = stripComments(v3Js, false, false, true);

v3Html = v3Html.replace(/styles\.css/g, "v3-styles.css");
v3Html = v3Html.replace(/app\.js/g, "v3-app.js");

v3Html = v3Html.replace(/SUPW/gi, "Annual Career Exhibition");
v3Css = v3Css.replace(/SUPW/gi, "Annual Career Exhibition");
v3Js = v3Js.replace(/SUPW/gi, "Annual Career Exhibition");

v3Html = v3Html.replace(/A career fair experiment/g, "Kanakia International School Mira Road");

const switcherPill = `<div style="display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:3px;gap:4px;font-family:monospace;font-size:11px;">
<a href="index.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v1</a>
<a href="v2.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v2</a>
<span style="padding:2px 8px;border-radius:5px;background:#f59e0b;color:#000;font-weight:bold;">v3</span>
<a href="v4.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v4</a>
<a href="v5.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v5</a>
</div>`;

v3Html = v3Html.replace(
  '<div class="header-right">',
  '<div class="header-right">' + switcherPill
);

fs.writeFileSync("v3.html", v3Html);
fs.writeFileSync("public/v3.html", v3Html);
fs.writeFileSync("v3-styles.css", v3Css);
fs.writeFileSync("public/v3-styles.css", v3Css);
fs.writeFileSync("v3-app.js", v3Js);
fs.writeFileSync("public/v3-app.js", v3Js);

console.log("v3 built and synchronized successfully.");
