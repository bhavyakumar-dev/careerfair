import fs from "fs";
import path from "path";

const srcDir = "v6";
const targetDir = "public/v6";

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
for (const file of files) {
  const srcFile = path.join(srcDir, file);
  const targetFile = path.join(targetDir, file);
  if (fs.statSync(srcFile).isFile()) {
    fs.copyFileSync(srcFile, targetFile);
  }
}

if (fs.existsSync("v6.html")) {
  fs.copyFileSync("v6.html", "public/v6.html");
}

console.log("Synchronized v6 and public/v6 successfully.");
