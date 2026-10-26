import fs from "fs";

let content = fs.readFileSync("index.html", "utf8");

const oldNav = `<button class="btn btn-primary btn-sm" onclick="scrollToSection('speechlab')">Try Speech Lab</button>`;
const newNav = `<div style="display:flex;align-items:center;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:3px;gap:3px;font-family:monospace;font-size:11px;">
        <span style="padding:2px 7px;border-radius:5px;background:#f59e0b;color:#000;font-weight:bold;">v1</span>
        <a href="v2.html" style="padding:2px 7px;border-radius:5px;color:#94a3b8;text-decoration:none;">v2</a>
        <a href="v3.html" style="padding:2px 7px;border-radius:5px;color:#94a3b8;text-decoration:none;">v3</a>
        <a href="v4.html" style="padding:2px 7px;border-radius:5px;color:#94a3b8;text-decoration:none;">v4</a>
        <a href="v5.html" style="padding:2px 7px;border-radius:5px;color:#94a3b8;text-decoration:none;">v5</a>
        <a href="v6.html" style="padding:2px 7px;border-radius:5px;color:#94a3b8;text-decoration:none;">v6</a>
      </div>
      <button class="btn btn-primary btn-sm" onclick="scrollToSection('speechlab')">Try Speech Lab</button>`;

if (content.includes(oldNav) && !content.includes("v6.html")) {
  content = content.replace(oldNav, newNav);
}

const oldTabs = `<div class="admin-tab" onclick="switchAdminTab('ai', this)">AI Router & Fallback</div>`;
const newTabs = `<div class="admin-tab" onclick="switchAdminTab('ai', this)">AI Router & Fallback</div>
      <div class="admin-tab" onclick="switchAdminTab('versions', this)">6-Version Switcher</div>`;

if (content.includes(oldTabs) && !content.includes("6-Version Switcher")) {
  content = content.replace(oldTabs, newTabs);
}

const renderTabMarker = `function renderAdminTab(tab) {
  const content = document.getElementById('adminTabContent');`;

const versionsTabCode = `function renderAdminTab(tab) {
  const content = document.getElementById('adminTabContent');
  if (tab === 'versions') {
    content.innerHTML = '<div style="font-family:var(--font-mono); font-size:0.82rem;"><h4 style="color:var(--accent-amber); margin-bottom:0.75rem; font-family:var(--font-display);">6-Version Multi-Experience Switcher</h4><p style="color:var(--text-muted); margin-bottom:1rem; font-family:var(--font-body);">Instantly navigate and preview any of the 6 sovereign career fair platforms:</p><div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:10px;"><a href="index.html" style="padding:12px; border-radius:10px; background:rgba(255,184,0,0.15); border:1px solid var(--accent-amber); text-align:center; text-decoration:none; color:#fff;"><strong style="color:var(--accent-amber); display:block; font-size:1.1rem;">v1</strong><span style="font-size:0.75rem;">Classic Pavilion</span></a><a href="v2.html" style="padding:12px; border-radius:10px; background:var(--bg-card); border:1px solid var(--border-glass); text-align:center; text-decoration:none; color:#fff;"><strong style="color:var(--accent-cyan); display:block; font-size:1.1rem;">v2</strong><span style="font-size:0.75rem;">Verbum Premier</span></a><a href="v3.html" style="padding:12px; border-radius:10px; background:var(--bg-card); border:1px solid var(--border-glass); text-align:center; text-decoration:none; color:#fff;"><strong style="color:var(--accent-emerald); display:block; font-size:1.1rem;">v3</strong><span style="font-size:0.75rem;">Open Mic Lab</span></a><a href="v4.html" style="padding:12px; border-radius:10px; background:var(--bg-card); border:1px solid var(--border-glass); text-align:center; text-decoration:none; color:#fff;"><strong style="color:var(--accent-violet); display:block; font-size:1.1rem;">v4</strong><span style="font-size:0.75rem;">Alexandria Exec</span></a><a href="v5.html" style="padding:12px; border-radius:10px; background:var(--bg-card); border:1px solid var(--border-glass); text-align:center; text-decoration:none; color:#fff;"><strong style="color:var(--accent-rose); display:block; font-size:1.1rem;">v5</strong><span style="font-size:0.75rem;">Global Mobility</span></a><a href="v6.html" style="padding:12px; border-radius:10px; background:var(--bg-card); border:1px solid var(--border-glass); text-align:center; text-decoration:none; color:#fff;"><strong style="color:#e8c872; display:block; font-size:1.1rem;">v6</strong><span style="font-size:0.75rem;">Theatrical Suite</span></a></div></div>';
    return;
  }`;

if (content.includes(renderTabMarker) && !content.includes("if (tab === 'versions')")) {
  content = content.replace(renderTabMarker, versionsTabCode);
}

content = content.replace(/<!--[\s\S]*?-->/g, "");
content = content.replace(/\/\*[\s\S]*?\*\//g, "");

fs.writeFileSync("index.html", content);
fs.writeFileSync("public/index.html", content);
console.log("index.html and public/index.html updated with 6-version switcher!");
