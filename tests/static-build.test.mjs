import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
function builtJavascript() {
  return readdirSync("dist/assets").filter(file => file.endsWith(".js")).map(file => readFileSync(join("dist/assets", file), "utf8")).join("\n");
}
test("GitHub Pages artifact preserves the production host and static distribution", () => {
  for (const path of ["index.html", "CNAME", ".nojekyll", "distribution/agent.txt", "favicon.svg", "social-card.png", "product/home.jpg", "product/calendar.jpg", "art/companyos-sculpture.jpg", "art/companyos-team.jpg", ...["computer", "work", "agents", "system"].map(part => `art/assembly-${part}.jpg`), "robots.txt"]) assert.ok(existsSync(`dist/${path}`), `missing ${path}`);
  assert.equal(readFileSync("dist/CNAME", "utf8").trim(), "operaos.ai");
  const html = readFileSync("dist/index.html", "utf8");
  assert.match(html, /CompanyONE \| Your company\. One system\./);
  assert.match(html, /information system on your own infrastructure/);
  assert.match(html, /property="og:image" content="https:\/\/operaos\.ai\/social-card\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /hreflang="pt-BR"/);
  assert.match(html, /hreflang="es-419"/);
  assert.doesNotMatch(html, /\/api\//);
});
test("all three languages include the three-part product story", () => {
  const javascript = builtJavascript();
  for (const text of ["Your computer", "Your system", "Your team", "Seu computador", "Seu sistema", "Sua equipe", "Tu computadora", "Tu sistema", "Tu equipo", "Agent One", "Dev One", "Bring the work you’ve already done.", "Traga o trabalho que você já fez.", "Trae el trabajo que ya hiciste.", "Automatic backups", "Backups automáticos", "Respaldos automáticos"]) assert.ok(javascript.includes(text), `missing built copy: ${text}`);
});
test("public page uses the CompanyONE identity without obsolete sales paths", () => {
  const content = ["app/i18n.ts", "app/page.tsx", "index.html", "README.md"].map(file => readFileSync(file, "utf8")).join("\n");
  assert.doesNotMatch(content, /OperateOS|OperaOS|OS Operator|OS Developer/);
  assert.doesNotMatch(builtJavascript(), /mailto:|Join the beta waitlist|Entrar na lista de espera|Unirme a la lista de espera/);
});
