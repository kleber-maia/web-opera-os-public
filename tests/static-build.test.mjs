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

  const pageSource = readFileSync("app/page.tsx", "utf8");
  assert.match(pageSource, /<div className="hero-lede">/);
  assert.match(pageSource, /copy\.hero\.lede\.map\(\(paragraph\) => <p key=\{paragraph\}>\{paragraph\}<\/p>\)/);

  const javascript = readdirSync("dist/assets")
    .filter((file) => file.endsWith(".js"))
    .map((file) => readFileSync(join("dist/assets", file), "utf8"))
    .join("\n");

  assert.match(javascript, /Português \(Brasil\)/);
  assert.match(javascript, /Español \(Latinoamérica\)/);
  assert.match(javascript, /operaos-locale/);
  assert.match(javascript, /OperateOS/);
  assert.match(javascript, /Operator/);
  assert.match(javascript, /hero-lede/);
  assert.match(javascript, /computer of its own and a persistent place to work/);
  assert.match(javascript, /completes real multi-step tasks/);
  assert.match(javascript, /safely operates business data, workflows, and connected SaaS tools/);
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
  assert.match(javascript, /Pricing/);
  assert.match(javascript, /Preços/);
  assert.match(javascript, /Precios/);
  assert.match(javascript, /pricing-section/);
  assert.match(javascript, /Starter/);
  assert.match(javascript, /Business/);
  assert.match(javascript, /Enterprise/);
  assert.match(javascript, /OperateOS stays yours/);
  assert.match(javascript, /Seu OperateOS continua sendo seu/);
  assert.match(javascript, /OperateOS sigue siendo tuyo/);
  assert.match(javascript, /\$500/);
  assert.match(javascript, /\$250/);
  assert.match(javascript, /US\$ 500/);
  assert.match(javascript, /US\$ 250/);
  assert.match(javascript, /per business \/ month/);
  assert.match(javascript, /por negócio \/ mês/);
  assert.match(javascript, /por negocio \/ mes/);
  assert.match(javascript, /AI credits/);
  assert.match(javascript, /créditos de IA/);
  assert.match(javascript, /Local Mode/);
  assert.match(javascript, /Modo Local/);
  assert.match(javascript, /Self-hosted/);
  assert.match(javascript, /Hospedagem própria/);
  assert.match(javascript, /Autoalojado/);
  assert.match(javascript, /Hosted \/ managed/);
  assert.match(javascript, /Hospedado \/ gerenciado/);
  assert.match(javascript, /Alojado \/ administrado/);
  assert.match(javascript, /Dedicated support \+ SLA/);
  assert.match(javascript, /Dedicado \+ SLA/);
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
