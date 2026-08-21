import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

test("the GitHub Pages artifact is complete and static", () => {
  assert.ok(existsSync("dist/index.html"));
  assert.ok(existsSync("dist/CNAME"));
  assert.ok(existsSync("dist/.nojekyll"));
  assert.ok(existsSync("dist/distribution/agent.txt"));
  assert.equal(readFileSync("dist/CNAME", "utf8").trim(), "operaos.ai");

  const html = readFileSync("dist/index.html", "utf8");
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /OperateOS/);
  assert.match(html, /OperateOS — Your business\. Operator at work\./);
  assert.match(html, /business operating system/);
  assert.match(html, /hreflang="pt-BR"/);
  assert.match(html, /hreflang="es-419"/);
  assert.doesNotMatch(html, /\/api\//);

  const javascript = readdirSync("dist/assets")
    .filter((file) => file.endsWith(".js"))
    .map((file) => readFileSync(join("dist/assets", file), "utf8"))
    .join("\n");

  assert.match(javascript, /Português \(Brasil\)/);
  assert.match(javascript, /Español \(Latinoamérica\)/);
  assert.match(javascript, /operaos-locale/);
  assert.match(javascript, /OperateOS/);
  assert.match(javascript, /Operator/);
  assert.match(javascript, /computer of its own/);
  assert.match(javascript, /open web/);
  assert.match(javascript, /browser-based/);
  assert.match(javascript, /multi-step/);
  assert.match(javascript, /mundane/);
  assert.match(javascript, /approval/);
  assert.match(javascript, /computador/);
  assert.match(javascript, /ferramentas no navegador/);
  assert.match(javascript, /tarefas em várias etapas/);
  assert.match(javascript, /herramientas del navegador/);
  assert.match(javascript, /tareas de varios pasos/);
  assert.match(javascript, /encargos/);
  assert.match(javascript, /AI Chat/);
  assert.match(javascript, /Telegram/);
  assert.match(javascript, /WhatsApp/);
  assert.match(javascript, /iMessage/);
  assert.match(javascript, /Your business/);
  assert.match(javascript, /Seu negócio/);
  assert.match(javascript, /Tu negocio/);
  assert.doesNotMatch(javascript, /(?<!\p{L})Opera(?!\p{L})/u);

  const publicCopy = ["app/i18n.ts", "index.html", "README.md"]
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");
  assert.doesNotMatch(publicCopy, /\bcompanies?\b/i);
  assert.doesNotMatch(publicCopy, /\bempresas?\b/i);
  assert.doesNotMatch(publicCopy, /\bempresarial(?:es)?\b/i);
});
