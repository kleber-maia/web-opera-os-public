import { copyFileSync, cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";

mkdirSync("dist", { recursive: true });

if (existsSync("distribution")) {
  cpSync("distribution", "dist/distribution", { recursive: true });
}

if (existsSync("CNAME")) {
  copyFileSync("CNAME", "dist/CNAME");
}

writeFileSync("dist/.nojekyll", "");
