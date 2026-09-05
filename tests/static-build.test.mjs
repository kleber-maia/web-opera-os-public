import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

function builtJavascript() {
  return readdirSync("dist/assets")
    .filter((file) => file.endsWith(".js"))
    .map((file) => readFileSync(join("dist/assets", file), "utf8"))
    .join("\n");
}

test("the GitHub Pages artifact is complete and static", () => {
  assert.ok(existsSync("dist/index.html"));
  assert.ok(existsSync("dist/CNAME"));
  assert.ok(existsSync("dist/.nojekyll"));
  assert.ok(existsSync("dist/distribution/agent.txt"));
  assert.equal(readFileSync("dist/CNAME", "utf8").trim(), "operaos.ai");

  const html = readFileSync("dist/index.html", "utf8");
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /OperateOS — Business software that becomes yours\./);
  assert.match(html, /private, adaptable ERP and CRM for small businesses/);
  assert.match(html, /hreflang="pt-BR"/);
  assert.match(html, /hreflang="es-419"/);
  assert.doesNotMatch(html, /\/api\//);
});

test("the built site carries the new positioning in all three languages", () => {
  const javascript = builtJavascript();
  const expected = [
    "Business software should fit your business.",
    "O software deveria se adaptar ao seu negócio.",
    "El software debería adaptarse a tu negocio.",
    "A spreadsheet became an event system",
    "Uma planilha virou um sistema de eventos",
    "Una hoja de cálculo se convirtió en un sistema de eventos",
    "OS Operator",
    "OS Developer",
    "For example—and much more",
    "Por exemplo — e muito mais",
    "Por ejemplo, y mucho más",
    "Join the beta waitlist",
    "Entrar na lista de espera",
    "Unirme a la lista de espera",
  ];

  for (const copy of expected) assert.ok(javascript.includes(copy), `missing built copy: ${copy}`);
  assert.match(javascript, /mailto:hello@operaos\.ai/);
});

test("public copy has no obsolete pricing or agent names", () => {
  const publicCopy = ["app/i18n.ts", "app/page.tsx", "index.html", "README.md"]
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");
  const javascript = builtJavascript();

  for (const content of [publicCopy, javascript]) {
    assert.doesNotMatch(content, /\$500|\$250|US\$\s*500|US\$\s*250/);
    assert.doesNotMatch(content, /pricing-section|id=["']pricing["']|per business \/ month|por negócio \/ mês|por negocio \/ mes/i);
    assert.doesNotMatch(content, /(?<!OS )(?<!\p{L})Operator(?!\p{L})/u);
    assert.doesNotMatch(content, /(?<!\p{L})Opera(?!\p{L})/u);
    assert.doesNotMatch(content, /OS Agent/);
  }
});

test("the page exposes visible beta and contact calls to action", () => {
  const page = readFileSync("app/page.tsx", "utf8");
  assert.match(page, /id="beta"/);
  assert.match(page, /className="hero-actions"/);
  assert.match(page, /className="beta-cards"/);
  assert.match(page, /className="closing-actions"/);
  assert.match(page, /copy\.beta\.cards\[0\]\[4\]/);
  assert.match(page, /copy\.beta\.cards\[1\]\[4\]/);
}
);
