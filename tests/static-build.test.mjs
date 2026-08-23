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
  assert.match(html, /OperateOS — An operating system for your business\./);
  assert.match(html, /operating system for your business/);
  assert.match(html, /hreflang="pt-BR"/);
  assert.match(html, /hreflang="es-419"/);
  assert.doesNotMatch(html, /\/api\//);

  const pageSource = readFileSync("app/page.tsx", "utf8");
  assert.match(pageSource, /<ul className="hero-points"/);
  assert.match(pageSource, /heroPoints\.map\(\(point, index\) =>/);

  const javascript = readdirSync("dist/assets")
    .filter((file) => file.endsWith(".js"))
    .map((file) => readFileSync(join("dist/assets", file), "utf8"))
    .join("\n");

  assert.match(javascript, /Português \(Brasil\)/);
  assert.match(javascript, /Español \(Latinoamérica\)/);
  assert.match(javascript, /operaos-locale/);
  assert.match(javascript, /OperateOS/);
  assert.match(javascript, /Operator/);
  assert.match(javascript, /hero-points/);
  assert.match(javascript, /An operating system for your business\./);
  assert.match(javascript, /With its own AI agent\./);
  assert.match(javascript, /Customizable\. Expandable\. Hosted on your own hardware\./);
  assert.match(javascript, /Operating system for your business\./);
  assert.match(javascript, /OperateOS brings business information, work, and tools together in one place\./);
  assert.match(javascript, /Its own AI agent\./);
  assert.match(javascript, /Operator browses, handles routine work, and helps get things done\./);
  assert.match(javascript, /Customizable\./);
  assert.match(javascript, /Shape OperateOS around the way the business works\./);
  assert.match(javascript, /Expandable\./);
  assert.match(javascript, /Add modules, workflows, and capabilities as the business grows\./);
  assert.match(javascript, /Hosted on your own hardware\./);
  assert.match(javascript, /The business keeps control of its system and data\./);
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
  assert.match(javascript, /Capable models/);
  assert.match(javascript, /Plans include powerful models built for complex, multi-step work/);
  assert.match(javascript, /Modelos capaces/);
  assert.match(javascript, /modelos avançados para trabalhos complexos e em várias etapas/);
  assert.match(javascript, /modelos avanzados para trabajos complejos y de varios pasos/);
  assert.match(javascript, /Capable models included/);
  assert.match(javascript, /Modelos capaces incluidos/);
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
  assert.doesNotMatch(publicCopy, /Model freedom|Liberdade de modelo|Libertad de modelo|Choose the AI provider|Escolha o provedor|Elige el proveedor/i);
  assert.doesNotMatch(publicCopy, /\bcompanies?\b/i);
  assert.doesNotMatch(publicCopy, /\bempresas?\b/i);
  assert.doesNotMatch(publicCopy, /\bempresarial(?:es)?\b/i);
});
