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
  assert.match(html, /OperateOS — The operating system your business owns\./);
  assert.match(html, /OperateOS is the operating system your business owns: extendable, comes with its own AI agent, Operator, and is hosted on your own hardware\./);
  assert.match(html, /The operating system your business owns: extendable, comes with its own AI agent, Operator, and is hosted on your own hardware\./);
  assert.match(html, /hreflang="pt-BR"/);
  assert.match(html, /hreflang="es-419"/);
  assert.doesNotMatch(html, /\/api\//);

  const i18nSource = readFileSync("app/i18n.ts", "utf8");
  const systemPartBlocks = [...i18nSource.matchAll(/systemParts:\s*\[([\s\S]*?)\n\s*\],/g)].map(([, block]) => block);
  assert.equal(systemPartBlocks.length, 3);
  for (const block of systemPartBlocks) {
    assert.equal((block.match(/^\s+\["/gm) ?? []).length, 4);
    assert.doesNotMatch(block, /part-web|AI Chat \+ (?:channels|canais|canales)/);
    assert.deepEqual(
      [...block.matchAll(/"(part-[^"]+)"/g)].map(([, className]) => className),
      ["part-system", "part-agent", "part-extendable", "part-hardware"],
    );
  }

  const pageSource = readFileSync("app/page.tsx", "utf8");
  assert.doesNotMatch(pageSource, /hero-description|hero-points|hero-traits|heroPoints/);
  const heroSource = pageSource.slice(pageSource.indexOf('<div className="hero-copy">'), pageSource.indexOf('<div\n          className="system-stage"'));
  const heroSectionSource = pageSource.slice(pageSource.indexOf('<section className="hero"'), pageSource.indexOf('<section className="system-section"'));
  assert.doesNotMatch(heroSource, /hero-(?:card|point|trait)|<ul|<ol/);
  assert.doesNotMatch(heroSectionSource, /hero-description|hero-(?:card|point|trait)|<ul|<ol/);
  assert.match(pageSource, /className="system-stage"/);
  assert.match(pageSource, /systemParts\.map/);
  assert.match(pageSource, /<strong>\{label\}<\/strong><small>\{detail\}<\/small>/);
  assert.match(pageSource, /const orbitStep = 360 \/ systemParts\.length;/);
  assert.match(pageSource, /className="core-statement"/);
  assert.match(pageSource, /className="core-facts"/);
  assert.match(pageSource, /<dt>\{label\}<\/dt><dd>\{value\}<\/dd>/);
  assert.doesNotMatch(pageSource, /agent-message|agent-action|context-track|core-context/);
  assert.doesNotMatch(pageSource, /index \* 60/);

  const javascript = readdirSync("dist/assets")
    .filter((file) => file.endsWith(".js"))
    .map((file) => readFileSync(join("dist/assets", file), "utf8"))
    .join("\n");

  const heroCopyBlocks = [...i18nSource.matchAll(/hero:\s*\{([\s\S]*?)\n\s*\},/g)].map(([, block]) => block);
  assert.equal(heroCopyBlocks.length, 3);
  const localizedMetaCopy = [
    [
      "OperateOS — The operating system your business owns.",
      "OperateOS is the operating system your business owns: extendable, comes with its own AI agent, Operator, and is hosted on your own hardware.",
      "The operating system your business owns: extendable, comes with its own AI agent, Operator, and is hosted on your own hardware.",
    ],
    [
      "OperateOS — O sistema operacional que o seu negócio possui.",
      "O OperateOS é o sistema operacional que o seu negócio possui: é extensível, vem com seu próprio agente de IA, o Operator, e é hospedado no seu próprio hardware.",
      "O sistema operacional que o seu negócio possui: é extensível, vem com seu próprio agente de IA, o Operator, e é hospedado no seu próprio hardware.",
    ],
    [
      "OperateOS — El sistema operativo que tu negocio posee.",
      "OperateOS es el sistema operativo que tu negocio posee: es extensible, viene con su propio agente de IA, Operator, y está alojado en tu propio hardware.",
      "El sistema operativo que tu negocio posee: es extensible, viene con su propio agente de IA, Operator, y está alojado en tu propio hardware.",
    ],
  ];
  for (const metadata of localizedMetaCopy) {
    for (const value of metadata) {
      assert.ok(i18nSource.includes(value), `missing localized metadata source copy: ${value}`);
      assert.ok(javascript.includes(value), `missing localized metadata build copy: ${value}`);
    }
  }
  const localizedHeroCopy = [
    {
      title: "The operating system your business owns.", subtitle: "Extendable, comes with its own AI agent, hosted on your own hardware.", status: "Yours", identity: "The operating system your business owns.", factsLabel: "OperateOS ownership details", facts: [["Operator", "Built in"], ["Hardware", "Yours"]],
    },
    {
      title: "O sistema operacional que o seu negócio possui.", subtitle: "Extensível, com seu próprio agente de IA, hospedado no seu próprio hardware.", status: "Seu", identity: "O sistema operacional que o seu negócio possui.", factsLabel: "Detalhes de propriedade do OperateOS", facts: [["Operator", "Integrado"], ["Hardware", "Seu"]],
    },
    {
      title: "El sistema operativo que tu negocio posee.", subtitle: "Extensible, con su propio agente de IA, alojado en tu propio hardware.", status: "Tuyo", identity: "El sistema operativo que tu negocio posee.", factsLabel: "Detalles de propiedad de OperateOS", facts: [["Operator", "Integrado"], ["Hardware", "Tuyo"]],
    },
  ];
  const staleCenterCopy = /campaign|campanha|campañ|ads|anúncios|anuncios|pipeline|budget|orçamento|presupuesto|approval|aprovação|aprobación|context checked|contexto verificado/i;
  for (const localizedCopy of localizedHeroCopy) {
    const heroBlock = heroCopyBlocks.find((block) => block.includes(`title: "${localizedCopy.title}"`));
    assert.ok(heroBlock, `missing localized hero source copy: ${localizedCopy.title}`);
    assert.doesNotMatch(heroBlock, staleCenterCopy, `stale center-card copy leaked into hero: ${localizedCopy.title}`);
    for (const [field, value] of Object.entries(localizedCopy)) {
      if (Array.isArray(value)) {
        if (Array.isArray(value[0])) {
          for (const item of value) {
            assert.ok(heroBlock.includes(`["${item[0]}", "${item[1]}"]`), `missing localized hero source field: ${field}`);
            for (const part of item) assert.ok(javascript.includes(part), `missing localized hero build copy: ${part}`);
          }
        } else {
          assert.ok(heroBlock.includes(`${field}: ["${value.join('\", \"')}"]`), `missing localized hero source field: ${field}`);
          for (const item of value) assert.ok(javascript.includes(item), `missing localized hero build copy: ${item}`);
        }
      } else {
        assert.ok(heroBlock.includes(`${field}: "${value}"`), `missing localized hero source field: ${field}`);
        assert.ok(javascript.includes(value), `missing localized hero build copy: ${value}`);
      }
    }
  }

  assert.match(javascript, /Português \(Brasil\)/);
  assert.match(javascript, /Español \(Latinoamérica\)/);
  assert.match(javascript, /operaos-locale/);
  assert.match(javascript, /OperateOS/);
  assert.match(javascript, /Operator/);
  const floatingSquareCopy = [
    ["Operating system for your business.", "OperateOS brings business information, work, and tools together in one place."],
    ["Its own AI agent.", "Operator browses, handles routine work, and helps get things done."],
    ["Extendable.", "Add modules, workflows, and capabilities as the business grows."],
    ["Hosted on your own hardware.", "The business keeps control of its system and data."],
    ["Sistema operacional para o seu negócio.", "O OperateOS reúne as informações, o trabalho e as ferramentas do seu negócio em um só lugar."],
    ["Seu próprio agente de IA.", "O Operator navega, cuida do trabalho rotineiro e ajuda a fazer as coisas acontecerem."],
    ["Extensível.", "Adicione módulos, fluxos de trabalho e capacidades à medida que o negócio cresce."],
    ["Hospedado no seu próprio hardware.", "O negócio mantém o controle do seu sistema e dos seus dados."],
    ["Sistema operativo para tu negocio.", "OperateOS reúne la información, el trabajo y las herramientas de tu negocio en un solo lugar."],
    ["Su propio agente de IA.", "Operator navega, se encarga del trabajo rutinario y ayuda a hacer las cosas."],
    ["Extensible.", "Añade módulos, flujos de trabajo y capacidades a medida que crece tu negocio."],
    ["Alojado en tu propio hardware.", "El negocio mantiene el control de su sistema y sus datos."],
  ];
  for (const [title, description] of floatingSquareCopy) {
    const sourceEntry = `["${title}", "${description}"`;
    assert.ok(systemPartBlocks.some((block) => block.includes(sourceEntry)), `missing source floating-square copy: ${title}`);
    assert.ok(javascript.includes(title), `missing built floating-square title: ${title}`);
    assert.ok(javascript.includes(description), `missing built floating-square description: ${description}`);
  }
  assert.doesNotMatch(javascript, /hero-description/);
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
  assert.match(javascript, /messaging channels/);
  assert.match(javascript, /canais de mensagens/);
  assert.match(javascript, /canales de mensajería/);
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
  assert.doesNotMatch(javascript, /[\x54]elegram|[\x57]hatsApp|[\x69]Message/);

  const publicCopy = ["app/i18n.ts", "index.html", "README.md"]
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");
  assert.doesNotMatch(publicCopy, /Model freedom|Liberdade de modelo|Libertad de modelo|Choose the AI provider|Escolha o provedor|Elige el proveedor/i);
  assert.doesNotMatch(publicCopy, /\bcompanies?\b/i);
  assert.doesNotMatch(publicCopy, /\bempresas?\b/i);
  assert.doesNotMatch(publicCopy, /\bempresarial(?:es)?\b/i);
  assert.doesNotMatch(publicCopy, /[\x54]elegram|[\x57]hatsApp|[\x69]Message/);
});
