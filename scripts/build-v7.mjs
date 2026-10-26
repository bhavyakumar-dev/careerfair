import fs from "fs";
import path from "path";

const srcDir = "C:/Users/hp/Downloads/OpenMic-CareerFair-Fixed";

if (!fs.existsSync(srcDir)) {
  console.error("Source directory does not exist: " + srcDir);
  process.exit(1);
}

const v7HtmlRaw = fs.readFileSync(path.join(srcDir, "index.html"), "utf8");
const v7JsRaw = fs.readFileSync(path.join(srcDir, "app.js"), "utf8");
const v7CssRaw = fs.readFileSync(path.join(srcDir, "styles.css"), "utf8");

const cleanText = (txt) => {
  let cleaned = txt.replace(/<!--[\s\S]*?-->/g, "");
  cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, "");
  const lines = cleaned.split("\n");
  const filtered = [];
  for (const l of lines) {
    if (!l.trim().startsWith("//")) {
      filtered.push(l);
    }
  }
  return filtered.join("\n");
};

const v7JsClean = cleanText(v7JsRaw);
const v7CssClean = cleanText(v7CssRaw);

const v7SwitcherRoot = `<div style="display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:3px;gap:4px;font-family:monospace;font-size:11px;">
<a href="index.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v1</a>
<a href="v2.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v2</a>
<a href="v3.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v3</a>
<a href="v4.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v4</a>
<a href="v5.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v5</a>
<a href="v6.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v6</a>
<span style="padding:2px 8px;border-radius:5px;background:#f59e0b;color:#000;font-weight:bold;">v7</span>
</div>`;

const v7SwitcherSubdir = `<div style="display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:3px;gap:4px;font-family:monospace;font-size:11px;">
<a href="/index.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v1</a>
<a href="/v2.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v2</a>
<a href="/v3.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v3</a>
<a href="/v4.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v4</a>
<a href="/v5.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v5</a>
<a href="/v6.html" style="padding:2px 8px;border-radius:5px;color:#94a3b8;text-decoration:none;">v6</a>
<span style="padding:2px 8px;border-radius:5px;background:#f59e0b;color:#000;font-weight:bold;">v7</span>
</div>`;

let v7HtmlRoot = cleanText(v7HtmlRaw);
v7HtmlRoot = v7HtmlRoot.replace(/href="styles\.css"/g, 'href="v7-styles.css"');
v7HtmlRoot = v7HtmlRoot.replace(/src="app\.js"/g, 'src="v7-app.js"');
v7HtmlRoot = v7HtmlRoot.replace('<div class="header-right">', '<div class="header-right">' + v7SwitcherRoot);
v7HtmlRoot = v7HtmlRoot.replace('id="header-note">A career fair experiment<', 'id="header-note">Kanakia International School Mira Road<');

let v7HtmlSubdir = cleanText(v7HtmlRaw);
v7HtmlSubdir = v7HtmlSubdir.replace('<div class="header-right">', '<div class="header-right">' + v7SwitcherSubdir);
v7HtmlSubdir = v7HtmlSubdir.replace('id="header-note">A career fair experiment<', 'id="header-note">Kanakia International School Mira Road<');

fs.writeFileSync("v7.html", v7HtmlRoot);
fs.writeFileSync("public/v7.html", v7HtmlRoot);

fs.writeFileSync("v7-app.js", v7JsClean);
fs.writeFileSync("public/v7-app.js", v7JsClean);

fs.writeFileSync("v7-styles.css", v7CssClean);
fs.writeFileSync("public/v7-styles.css", v7CssClean);

if (!fs.existsSync("v7")) fs.mkdirSync("v7", { recursive: true });
if (!fs.existsSync("public/v7")) fs.mkdirSync("public/v7", { recursive: true });

fs.writeFileSync("v7/index.html", v7HtmlSubdir);
fs.writeFileSync("public/v7/index.html", v7HtmlSubdir);

fs.writeFileSync("v7/app.js", v7JsClean);
fs.writeFileSync("public/v7/app.js", v7JsClean);

fs.writeFileSync("v7/styles.css", v7CssClean);
fs.writeFileSync("public/v7/styles.css", v7CssClean);

fs.writeFileSync("app.js", v7JsClean);
fs.writeFileSync("public/app.js", v7JsClean);
fs.writeFileSync("v3-app.js", v7JsClean);
fs.writeFileSync("public/v3-app.js", v7JsClean);

console.log("Created v7 and synchronized v3-app.js!");
