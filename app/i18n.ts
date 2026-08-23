export const SUPPORTED_LOCALES = ["en", "pt-BR", "es-419"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const en = {
  meta: {
    title: "OperateOS — An operating system for your business.",
    description: "OperateOS is an operating system for your business, with its own AI agent, Operator. Customize it, expand it, and host it on your own hardware while keeping control of your system and data.",
    ogDescription: "An operating system for your business, with its own AI agent, Operator. Customize it, expand it, and host it on your own hardware while keeping control of your system and data.",
  },
  language: { label: "Language", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Main navigation", homeAria: "OperateOS home", system: "The system", work: "How it works", modules: "Modules", pricing: "Pricing", ownership: "Ownership", access: "Early access" },
  hero: {
    title: "An operating system for your business.", subtitle: "With its own AI agent.", traits: "Customizable. Expandable. Hosted on your own hardware.", pointsAria: "What OperateOS means for your business",
    points: [
      { label: "Operating system for your business.", detail: "OperateOS brings business information, work, and tools together in one place." },
      { label: "Its own AI agent.", detail: "Operator browses, handles routine work, and helps get things done." },
      { label: "Customizable.", detail: "Shape OperateOS around the way the business works." },
      { label: "Expandable.", detail: "Add modules, workflows, and capabilities as the business grows." },
      { label: "Hosted on your own hardware.", detail: "The business keeps control of its system and data." },
    ],
    stageAria: "Operator working across OperateOS and the open web", status: "Online", context: "Working across the business", agentLabel: "Operator",
    message: "Operator researched two campaigns spending without qualified pipeline. It compared Ads, Pipeline, and the current budget policy.",
    actionLabel: "Prepared action", actionTitle: "Pause Broad Prospecting", approval: "Waiting for your approval", checked: "Context checked",
    contextItems: ["Ads", "Pipeline", "Knowledge"], scroll: "Enter the system",
  },
  systemParts: [
    ["Operator", "AI agent with a computer of its own", "part-agent"],
    ["Business context", "Memory, permissions, and approval boundaries", "part-memory"],
    ["OperateOS", "The information system your business controls", "part-system"],
    ["Open web", "Browses, navigates, and brings evidence back", "part-computer"],
    ["AI Chat + channels", "AI Chat, Telegram, WhatsApp, iMessage, and more", "part-web"],
    ["Task automation", "Mundane work, errands, and repeatable processes", "part-automation"],
  ],
  system: {
    kicker: "One agent. One business operating system.", title: "OperateOS gives Operator a place to work.",
    body: "OperateOS combines Operator, an AI agent with a computer of its own, with the business memory, information, permissions, and workflows it needs. Operator can browse the open internet, use browser-based tools, and act across connected systems—with approval where appropriate.",
    capabilitiesAria: "What Operator can do", advantage: "Operator works across the business",
    advantageTitle: "Ask once. Operator researches, acts, and keeps the system current.",
    advantageBody: "Operator carries business context, memory, permissions, and approval boundaries from AI Chat into real work across OperateOS, the open web, connected SaaS tools, and messaging channels.",
  },
  capabilities: [
    ["Business memory", "Understands the context behind the request.", "Operator uses business memory, permissions, and approval boundaries to make its work fit the business."],
    ["Own computer", "A persistent place to browse and work.", "Operator has a computer of its own: it can navigate the open internet, use browser-based tools, and complete multi-step tasks."],
    ["AI Chat + channels", "Reach Operator wherever work starts.", "Ask Operator inside OperateOS through the dedicated AI Chat feature or through Telegram, WhatsApp, iMessage, and other messaging channels."],
    ["Safe operations", "Move work forward with control.", "Operator operates business data, workflows, and connected SaaS tools, automates mundane processes, runs errands, and asks for approval before consequential actions."],
  ],
  layers: [
    ["The Operator", "One agent, with a computer of its own", "Operator researches, navigates the web, uses browser-based tools, and performs real work while respecting business context, permissions, and approvals.", "violet"],
    ["The memory", "Business context that travels with the work", "OperateOS keeps business memory, data, workflows, and approval boundaries together so Operator can act with context.", "cyan"],
    ["The information system", "OperateOS, shaped around the business", "OperateOS connects the information, workflows, connected tools, and infrastructure the business controls. Modules can grow as needs change.", "lime"],
    ["The reach", "AI Chat and messaging channels", "Start with Operator inside OperateOS or through Telegram, WhatsApp, iMessage, and other channels. Operator brings research, evidence, and results back into the system.", "coral"],
  ],
  work: {
    kicker: "Operator · Research, action, and context", titleBefore: "Operator doesn’t just answer. It works ", emphasis: "through", titleAfter: " the business.",
    you: "You", question: "“Which campaigns are wasting money—and what should we do next?”",
    steps: [["Researches the web", "Current signals, sources, and provider state"], ["Checks business data", "Spend, pipeline, policies, and connected tools"], ["Uses business context", "Memory, permissions, and approval boundaries"], ["Prepares the action", "Exact steps, impact, evidence, and limits"]],
    recommended: "Recommended action", action: "Pause Broad Prospecting", result: "$213 spent · 0 qualified opportunities · evidence returned to OperateOS", approve: "Approve change", approveAria: "Example approval control", confirmation: "Nothing changes without a human confirmation.",
  },
  structure: {
    kicker: "Conversation becomes work", title: "Describe the need. Operator builds the working structure.",
    body: "A few sentences become durable business data: a Board, the right cards, practical checklists, owners, dependencies, and a schedule. Operator keeps OperateOS current as the project changes, and can research the web or use connected tools when the work needs it.",
    prompt: "“We’re opening a second location in eight weeks. Organize permits, suppliers, hiring, launch marketing, and opening-day readiness. Maya owns it.”",
    outputAria: "A project created inside OperateOS from a conversation", created: "Created inside Boards", ready: "Ready for review", newProject: "New business project", project: "Second location launch", owner: "Owner · Maya Chen",
    summary: [["14", "cards"], ["37", "checklist items"], ["5", "owners"], ["8", "weeks scheduled"]],
    columns: [
      ["Plan", [["Confirm permit milestones", "6 checklist items · Maya"], ["Finalize opening budget", "4 checklist items · Finance"]]],
      ["In progress", [["Build supplier shortlist", "Due week 2 · Operations"], ["Draft hiring plan", "Due week 3 · Maya"]]],
      ["Scheduled", [["Launch local campaign", "Starts week 5 · Marketing"], ["Opening-day readiness", "12 checklist items · Team"]]],
    ],
    later: "Later", update: "“The permit is delayed one week.”", updated: "Schedule and dependent cards updated",
  },
  development: {
    kicker: "Built to change with the business", title: "Operator helps you extend the system.",
    body: "Describe what the business needs in the dedicated AI Chat feature. Operator clarifies the workflow, proposes modules and capabilities, coordinates the work, and returns a tested improvement for review. Nothing reaches Production without your approval.",
    mode: "Operator mode", connected: "Operator connected", agentLabel: "Operator", history: "System improvements", next: "Ready for the next capability",
    historyItems: [["Vendor onboarding", "New workflow · in progress"], ["Unified customer inbox", "Saved improvement"], ["Ads action controls", "Saved improvement"]],
    user: "Add a vendor onboarding flow with owner approval and document collection.",
    agent: "I’ll help shape this as a connected module sharing people, files, permissions, activity, and business memory. I’ll bring back a working version for review.",
    progress: ["Workflow clarified", "Records and permissions built", "Desktop and mobile UI created", "Testing and preparing review"],
    newCapability: "New business capability", module: "Vendor onboarding", moduleBody: "Connected to Relationships, Boards, Knowledge, and files.", appears: "Appears inside your OperateOS",
  },
  modulesSection: {
    kicker: "Starting points, not limits", title: "OperateOS evolves with the business.", body: "These modules are examples of what the system can do today. Your business can create and extend its own modules, workflows, and capabilities as needs emerge. Operator can help shape them into working parts of OperateOS, with permissions and approval boundaries intact.", aria: "Examples of OperateOS modules",
    workspaceKicker: "One installation. Many businesses.", workspaceTitle: "Every workspace keeps its own memory, work, identity, and files.", workspaceBody: "Operator works within the business you are in. Your business can extend its workspace as needs change. Shared administration stays centralized, while business context stays inside its boundary.", workspaceAria: "Three separate business workspaces", workspaceTypes: ["Retail", "Design", "Services"], sharedAdmin: "Shared administration",
  },
  modules: [["Home", "The operating picture"], ["Inbox", "Every customer conversation"], ["Pipeline", "Sales work in motion"], ["Relationships", "People, businesses, and history"], ["Ads", "Performance and guarded action"], ["Boards", "Flexible work management"], ["Knowledge", "The business source of truth"]],
  pricing: {
    kicker: "The subscription that keeps work moving", title: "Your installation stays yours.", body: "Choose the level of active Operator support that fits the business. Starter and Business run on your machine; Enterprise is the hosted, managed option.",
    promiseLabel: "The ownership promise", promise: "OperateOS stays yours. Your subscription keeps Operator active, connected, updated, and ready to work. Cancel anytime—your data and installation remain available; Operator, automations, integrations, updates, and support simply pause until you reactivate.", plansAria: "OperateOS plans", detailsLabel: "Plan details",
    plans: [
      {
        name: "Starter", tag: "One business", price: "$500", cadence: "per year", accent: "violet", description: "An annual subscription for one business—not priced per business.",
        details: [["Deployment", "Self-hosted"], ["Machine", "You own the machine"], ["Business limit", "1 business"], ["Core features", "All core features while active"], ["Models", "Capable models included"], ["AI credits", "Included AI credit allowance"], ["Additional credits", "Top-ups available"], ["Updates", "Included while active"], ["Support", "Standard"], ["After cancellation", "Local Mode: installation, data, modules, and history remain available. Operator, automations, integrations, updates, and support pause until reactivation."]],
      },
      {
        name: "Business", tag: "Priced by business", price: "$250", cadence: "per business / month", accent: "cyan", description: "A monthly subscription for each business on your self-hosted installation.",
        details: [["Deployment", "Self-hosted"], ["Machine", "You own the machine"], ["Business limit", "Priced per business"], ["Core features", "All core features while active"], ["Models", "Capable models included"], ["AI credits", "Included AI credit allowance"], ["Additional credits", "Top-ups available"], ["Updates", "Included while active"], ["Support", "Priority"], ["After cancellation", "Local Mode: installation, data, modules, and history remain available. Operator, automations, integrations, updates, and support pause until reactivation."]],
      },
      {
        name: "Enterprise", tag: "Hosted / managed", price: "Custom", cadence: "under consultation", accent: "lime", description: "A hosted and managed option shaped with your business.",
        details: [["Deployment", "Hosted / managed"], ["Machine", "Managed for you"], ["Business limit", "Defined in consultation"], ["Core features", "Core features and tailored capabilities"], ["Models", "Model and capacity defined in consultation"], ["AI credits", "Allowance defined in consultation"], ["Additional credits", "Defined in consultation"], ["Updates", "Included under the plan"], ["Support", "Dedicated support + SLA"], ["After cancellation", "Service terms and data handling defined in consultation."]],
      },
    ],
    active: { label: "Active subscription", title: "Everything active, with the support level of your plan.", body: "Starter and Business include all core features, capable models built for complex, multi-step work, an AI credit allowance, updates, and support while active. Additional AI credits are available as top-ups. Business support is priority; Enterprise includes dedicated support and an SLA." },
    local: { label: "Local Mode", title: "What remains after a self-hosted plan pauses.", body: "If Starter or Business is not active, your installation, data, modules, and history remain available in Local Mode. Operator, automations, integrations, updates, and support pause until you reactivate." },
  },
  ownership: {
    kicker: "The compounding advantage", lineOne: "Your operating system.", lineTwo: "Your data.", lineThree: "Your ", emphasis: "Operator.",
    body: "With OperateOS, the business controls its operating system, its data, and how Operator works inside it—keeping the information system and its future in business hands.",
    proofs: [["Self-hosted", "Runs on business-controlled infrastructure."], ["Private by design", "Business records stay inside OperateOS."], ["Capable models", "Plans include powerful models built for complex, multi-step work."], ["Built to endure", "Backups, encrypted credentials, and signed updates."]],
    closing: "Not another SaaS.", closingSecond: "A business-owned operating system built around your business.", access: "Early access · By approval",
  },
};

export type Copy = typeof en;

const ptBR: Copy = {
  meta: {
    title: "OperateOS — Um sistema operacional para o seu negócio.",
    description: "O OperateOS é um sistema operacional para o seu negócio, com hospedagem própria e o Operator: um agente de IA com seu próprio computador. O Operator navega na internet aberta, realiza tarefas no navegador, automatiza trabalhos repetitivos e opera com segurança dados e fluxos de trabalho, com sua aprovação.",
    ogDescription: "Um sistema operacional para o seu negócio, com seu próprio agente de IA, o Operator. Personalize, expanda e hospede no seu próprio hardware, mantendo o controle do sistema e dos dados.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegação principal", homeAria: "Página inicial do OperateOS", system: "O sistema", work: "Como funciona", modules: "Módulos", pricing: "Preços", ownership: "Controle", access: "Acesso antecipado" },
  hero: {
    title: "Um sistema operacional para o seu negócio.", subtitle: "Com seu próprio agente de IA.", traits: "Personalizável. Expansível. Hospedado no seu próprio hardware.", pointsAria: "O que o OperateOS significa para o seu negócio",
    points: [
      { label: "Sistema operacional para o seu negócio.", detail: "O OperateOS reúne as informações, o trabalho e as ferramentas do negócio em um só lugar." },
      { label: "Seu próprio agente de IA.", detail: "O Operator navega, cuida do trabalho rotineiro e ajuda a fazer as coisas acontecerem." },
      { label: "Personalizável.", detail: "Adapte o OperateOS ao jeito como o negócio trabalha." },
      { label: "Expansível.", detail: "Adicione módulos, fluxos de trabalho e capacidades à medida que o negócio cresce." },
      { label: "Hospedado no seu próprio hardware.", detail: "O negócio mantém o controle do sistema e dos dados." },
    ],
    stageAria: "Operator trabalhando no OperateOS e na internet aberta", status: "Online", context: "Trabalhando em todo o negócio", agentLabel: "Operator",
    message: "O Operator pesquisou duas campanhas gerando gastos sem oportunidades qualificadas no pipeline. Comparou Anúncios, Pipeline e a política de orçamento atual.",
    actionLabel: "Ação preparada", actionTitle: "Pausar prospecção ampla", approval: "Aguardando sua aprovação", checked: "Contexto verificado",
    contextItems: ["Anúncios", "Pipeline", "Conhecimento"], scroll: "Conheça o sistema",
  },
  systemParts: [
    ["Operator", "Agente de IA com seu próprio computador", "part-agent"],
    ["Contexto do negócio", "Memória, permissões e limites de aprovação", "part-memory"],
    ["OperateOS", "O sistema de informação sob controle do negócio", "part-system"],
    ["Internet aberta", "Navega, pesquisa e traz evidências de volta", "part-computer"],
    ["AI Chat + canais", "AI Chat, Telegram, WhatsApp, iMessage e outros", "part-web"],
    ["Automação de tarefas", "Trabalhos repetitivos, recados e processos recorrentes", "part-automation"],
  ],
  system: {
    kicker: "Um agente. Um sistema operacional do negócio.", title: "O OperateOS dá ao Operator um lugar para trabalhar.",
    body: "O OperateOS combina o Operator, um agente de IA com seu próprio computador, com a memória, as informações, as permissões e os fluxos de trabalho de que o negócio precisa. O Operator pode navegar na internet aberta, usar ferramentas no navegador e agir em sistemas conectados — com aprovação quando necessário.",
    capabilitiesAria: "O que o Operator pode fazer", advantage: "O Operator trabalha em todo o negócio",
    advantageTitle: "Peça uma vez. O Operator pesquisa, age e mantém o sistema atualizado.",
    advantageBody: "O Operator leva o contexto do negócio, a memória, as permissões e os limites de aprovação do AI Chat para o trabalho real no OperateOS, na web aberta, em ferramentas SaaS conectadas e nos canais de mensagens.",
  },
  capabilities: [
    ["Memória do negócio", "Entende o contexto por trás do pedido.", "O Operator usa a memória do negócio, permissões e limites de aprovação para adaptar o trabalho à realidade do negócio."],
    ["Próprio computador", "Um lugar persistente para navegar e trabalhar.", "O Operator tem seu próprio computador: navega na internet aberta, usa ferramentas no navegador e conclui tarefas em várias etapas."],
    ["AI Chat + canais", "Encontre o Operator onde o trabalho começa.", "Pergunte ao Operator dentro do OperateOS pelo recurso dedicado AI Chat ou pelo Telegram, WhatsApp, iMessage e outros canais de mensagens."],
    ["Operação segura", "Faça o trabalho avançar com controle.", "O Operator opera dados, fluxos de trabalho e ferramentas SaaS conectadas, automatiza processos repetitivos, resolve tarefas do dia a dia e pede aprovação antes de ações consequentes."],
  ],
  layers: [
    ["O Operator", "Um agente com seu próprio computador", "O Operator pesquisa, navega na web, usa ferramentas no navegador e realiza trabalho de verdade, respeitando o contexto do negócio, as permissões e as aprovações.", "violet"],
    ["A memória", "Contexto do negócio que acompanha o trabalho", "O OperateOS mantém juntos a memória do negócio, os dados, os fluxos de trabalho e os limites de aprovação para o Operator agir com contexto.", "cyan"],
    ["O sistema de informação", "OperateOS, moldado para o negócio", "O OperateOS conecta as informações, os fluxos de trabalho, as ferramentas conectadas e a infraestrutura sob controle do negócio. Os módulos crescem conforme as necessidades mudam.", "lime"],
    ["O alcance", "AI Chat e canais de mensagens", "Comece com o Operator dentro do OperateOS ou pelo Telegram, WhatsApp, iMessage e outros canais. O Operator traz pesquisas, evidências e resultados de volta para o sistema.", "coral"],
  ],
  work: {
    kicker: "Operator · Pesquisa, ação e contexto", titleBefore: "O Operator não apenas responde. Ele trabalha ", emphasis: "em todo", titleAfter: " o negócio.",
    you: "Você", question: "“Quais campanhas estão desperdiçando dinheiro — e o que devemos fazer agora?”",
    steps: [["Pesquisa a web", "Sinais atuais, fontes e status das ferramentas"], ["Verifica os dados do negócio", "Gastos, pipeline, políticas e sistemas conectados"], ["Usa o contexto do negócio", "Memória, permissões e limites de aprovação"], ["Prepara a ação", "Etapas exatas, impacto, evidências e limites"]],
    recommended: "Ação recomendada", action: "Pausar prospecção ampla", result: "US$ 213 gastos · 0 oportunidades qualificadas · evidências devolvidas ao OperateOS", approve: "Aprovar mudança", approveAria: "Controle de aprovação de exemplo", confirmation: "Nada muda sem a confirmação de uma pessoa.",
  },
  structure: {
    kicker: "A conversa vira trabalho", title: "Descreva a necessidade. O Operator cria a estrutura de trabalho.",
    body: "Algumas frases viram dados duradouros do negócio: um Quadro, os cartões certos, checklists práticos, responsáveis, dependências e um cronograma. O Operator mantém o OperateOS atualizado conforme o projeto muda e pode pesquisar a web ou usar ferramentas conectadas quando o trabalho precisar.",
    prompt: "“Vamos abrir uma segunda unidade em oito semanas. Organize licenças, fornecedores, contratações, marketing de lançamento e os preparativos para a inauguração. Maya é a responsável.”",
    outputAria: "Um projeto criado dentro do OperateOS a partir de uma conversa", created: "Criado em Quadros", ready: "Pronto para revisão", newProject: "Novo projeto do negócio", project: "Lançamento da segunda unidade", owner: "Responsável · Maya Chen",
    summary: [["14", "cartões"], ["37", "itens de checklist"], ["5", "responsáveis"], ["8", "semanas programadas"]],
    columns: [
      ["Planejamento", [["Confirmar etapas das licenças", "6 itens de checklist · Maya"], ["Finalizar orçamento de abertura", "4 itens de checklist · Financeiro"]]],
      ["Em andamento", [["Criar lista de fornecedores", "Prazo: semana 2 · Operações"], ["Elaborar plano de contratação", "Prazo: semana 3 · Maya"]]],
      ["Agendado", [["Lançar campanha local", "Início: semana 5 · Marketing"], ["Preparativos para a inauguração", "12 itens de checklist · Equipe"]]],
    ],
    later: "Depois", update: "“A licença atrasou uma semana.”", updated: "Cronograma e cartões dependentes atualizados",
  },
  development: {
    kicker: "Feito para evoluir com o negócio", title: "O Operator ajuda a ampliar o sistema.",
    body: "Descreva o que o negócio precisa no recurso dedicado AI Chat. O Operator esclarece o fluxo, propõe módulos e capacidades, coordena o trabalho e entrega uma melhoria testada para revisão. Nada chega à Produção sem sua aprovação.",
    mode: "Modo Operator", connected: "Operator conectado", agentLabel: "Operator", history: "Melhorias do sistema", next: "Pronto para a próxima capacidade",
    historyItems: [["Integração de fornecedores", "Novo fluxo · em andamento"], ["Caixa de entrada unificada", "Melhoria salva"], ["Controles de ação em Anúncios", "Melhoria salva"]],
    user: "Adicione um fluxo de integração de fornecedores com aprovação do responsável e coleta de documentos.",
    agent: "Vou ajudar a estruturar isso como um módulo conectado que compartilha pessoas, arquivos, permissões, atividades e a memória do negócio. Entregarei uma versão funcional para revisão.",
    progress: ["Fluxo esclarecido", "Registros e permissões criados", "Interface para desktop e celular criada", "Testando e preparando a revisão"],
    newCapability: "Nova capacidade do negócio", module: "Integração de fornecedores", moduleBody: "Conectado a Relacionamentos, Quadros, Conhecimento e arquivos.", appears: "Disponível dentro do seu OperateOS",
  },
  modulesSection: {
    kicker: "Pontos de partida, não limites", title: "O OperateOS evolui com o negócio.", body: "Estes módulos são exemplos do que o sistema pode fazer hoje. Seu negócio pode criar e ampliar seus próprios módulos, fluxos de trabalho e capacidades conforme novas necessidades surgem. O Operator pode ajudar a transformá-los em partes funcionais do OperateOS, mantendo permissões e limites de aprovação.", aria: "Exemplos de módulos do OperateOS",
    workspaceKicker: "Uma instalação. Muitos negócios.", workspaceTitle: "Cada espaço mantém sua própria memória, trabalho, identidade e arquivos.", workspaceBody: "O Operator trabalha dentro do negócio em que você está. Seu negócio pode ampliar o espaço conforme as necessidades mudam. A administração compartilhada continua centralizada, enquanto o contexto do negócio permanece dentro dos seus limites.", workspaceAria: "Três espaços de trabalho separados para negócios", workspaceTypes: ["Varejo", "Design", "Serviços"], sharedAdmin: "Administração compartilhada",
  },
  modules: [["Início", "A visão operacional"], ["Caixa de entrada", "Todas as conversas com clientes"], ["Pipeline", "O trabalho de vendas em movimento"], ["Relacionamentos", "Pessoas, negócios e histórico"], ["Anúncios", "Desempenho e ações controladas"], ["Quadros", "Gestão flexível do trabalho"], ["Conhecimento", "A fonte da verdade do negócio"]],
  pricing: {
    kicker: "A assinatura que mantém o trabalho em movimento", title: "Sua instalação continua sendo sua.", body: "Escolha o nível de suporte ativo do Operator que combina com o negócio. Starter e Business rodam na sua máquina; Enterprise é a opção hospedada e gerenciada.",
    promiseLabel: "A promessa de controle", promise: "Seu OperateOS continua sendo seu. Sua assinatura mantém o Operator ativo, conectado, atualizado e pronto para trabalhar. Cancele quando quiser — seus dados e sua instalação continuam disponíveis; o Operator, as automações, as integrações, as atualizações e o suporte simplesmente ficam pausados até você reativar.", plansAria: "Planos do OperateOS", detailsLabel: "Detalhes do plano",
    plans: [
      {
        name: "Starter", tag: "Um negócio", price: "US$ 500", cadence: "por ano", accent: "violet", description: "Uma assinatura anual para um negócio — não é cobrada por negócio.",
        details: [["Implantação", "Hospedagem própria"], ["Máquina", "Você é dono da máquina"], ["Limite de negócios", "1 negócio"], ["Recursos essenciais", "Todos os recursos essenciais enquanto ativo"], ["Modelos", "Modelos capazes incluídos"], ["Créditos de IA", "Franquia de créditos de IA incluída"], ["Créditos adicionais", "Recargas disponíveis"], ["Atualizações", "Incluídas enquanto ativo"], ["Suporte", "Padrão"], ["Após o cancelamento", "Modo Local: instalação, dados, módulos e histórico continuam disponíveis. Operator, automações, integrações, atualizações e suporte ficam pausados até a reativação."]],
      },
      {
        name: "Business", tag: "Cobrado por negócio", price: "US$ 250", cadence: "por negócio / mês", accent: "cyan", description: "Uma assinatura mensal para cada negócio na sua instalação com hospedagem própria.",
        details: [["Implantação", "Hospedagem própria"], ["Máquina", "Você é dono da máquina"], ["Limite de negócios", "Cobrado por negócio"], ["Recursos essenciais", "Todos os recursos essenciais enquanto ativo"], ["Modelos", "Modelos capazes incluídos"], ["Créditos de IA", "Franquia de créditos de IA incluída"], ["Créditos adicionais", "Recargas disponíveis"], ["Atualizações", "Incluídas enquanto ativo"], ["Suporte", "Prioritário"], ["Após o cancelamento", "Modo Local: instalação, dados, módulos e histórico continuam disponíveis. Operator, automações, integrações, atualizações e suporte ficam pausados até a reativação."]],
      },
      {
        name: "Enterprise", tag: "Hospedado / gerenciado", price: "Personalizado", cadence: "sob consulta", accent: "lime", description: "Uma opção hospedada e gerenciada, definida com o seu negócio.",
        details: [["Implantação", "Hospedado / gerenciado"], ["Máquina", "Infraestrutura gerenciada"], ["Limite de negócios", "Definido em consulta"], ["Recursos essenciais", "Recursos essenciais e capacidades sob medida"], ["Modelos", "Modelos e capacidade definidos em consulta"], ["Créditos de IA", "Franquia definida em consulta"], ["Créditos adicionais", "Definidos em consulta"], ["Atualizações", "Incluídas conforme o plano"], ["Suporte", "Dedicado + SLA"], ["Após o cancelamento", "Termos de serviço e dados definidos em consulta."]],
      },
    ],
    active: { label: "Assinatura ativa", title: "Tudo ativo, com o nível de suporte do seu plano.", body: "Starter e Business incluem todos os recursos essenciais, modelos avançados para trabalhos complexos e em várias etapas, uma franquia de créditos de IA, atualizações e suporte enquanto estiverem ativos. Créditos de IA adicionais podem ser comprados como recargas. O suporte do Business é prioritário; Enterprise inclui suporte dedicado e SLA." },
    local: { label: "Modo Local", title: "O que permanece quando um plano auto-hospedado é pausado.", body: "Se Starter ou Business não estiver ativo, sua instalação, seus dados, módulos e histórico continuam disponíveis no Modo Local. O Operator, as automações, as integrações, as atualizações e o suporte ficam pausados até você reativar." },
  },
  ownership: {
    kicker: "A vantagem que se acumula", lineOne: "Seu sistema operacional.", lineTwo: "Seus dados.", lineThree: "Seu ", emphasis: "Operator.",
    body: "Com o OperateOS, o negócio controla seu sistema operacional, seus dados e a forma como o Operator trabalha dentro dele — mantendo o sistema de informação e seu futuro sob o controle do negócio.",
    proofs: [["Hospedagem própria", "Executado em infraestrutura controlada pelo negócio."], ["Privado por design", "Os registros permanecem dentro do OperateOS."], ["Modelos capazes", "Os planos incluem modelos avançados para trabalhos complexos e em várias etapas."], ["Feito para durar", "Backups, credenciais criptografadas e atualizações assinadas."]],
    closing: "Não é mais um SaaS.", closingSecond: "É um sistema operacional próprio do seu negócio, criado para evoluir com ele.", access: "Acesso antecipado · Mediante aprovação",
  },
};

const es419: Copy = {
  meta: {
    title: "OperateOS — Un sistema operativo para tu negocio.",
    description: "OperateOS es un sistema operativo autoalojado para tu negocio, con Operator: un agente de IA con su propia computadora. Operator navega por internet abierto, usa herramientas del navegador, realiza tareas de varios pasos, automatiza trabajos repetitivos y opera de forma segura datos y flujos de trabajo, con aprobación cuando corresponde.",
    ogDescription: "Un sistema operativo para tu negocio, con su propio agente de IA, Operator. Personalízalo, amplíalo y alójalo en tu propio hardware, manteniendo el control de tu sistema y tus datos.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegación principal", homeAria: "Inicio de OperateOS", system: "El sistema", work: "Cómo funciona", modules: "Módulos", pricing: "Precios", ownership: "Control", access: "Acceso anticipado" },
  hero: {
    title: "Un sistema operativo para tu negocio.", subtitle: "Con su propio agente de IA.", traits: "Personalizable. Expandible. Alojado en tu propio hardware.", pointsAria: "Lo que OperateOS significa para tu negocio",
    points: [
      { label: "Sistema operativo para tu negocio.", detail: "OperateOS reúne la información, el trabajo y las herramientas de tu negocio en un solo lugar." },
      { label: "Su propio agente de IA.", detail: "Operator navega, se encarga del trabajo rutinario y ayuda a que las cosas se hagan." },
      { label: "Personalizable.", detail: "Adapta OperateOS a la forma en que trabaja tu negocio." },
      { label: "Expandible.", detail: "Añade módulos, flujos de trabajo y capacidades a medida que crece tu negocio." },
      { label: "Alojado en tu propio hardware.", detail: "Tu negocio mantiene el control de su sistema y sus datos." },
    ],
    stageAria: "Operator trabajando en OperateOS y en internet abierto", status: "En línea", context: "Trabajando en todo el negocio", agentLabel: "Operator",
    message: "Operator investigó dos campañas con gastos pero sin oportunidades calificadas en el pipeline. Comparó Anuncios, Pipeline y la política de presupuesto actual.",
    actionLabel: "Acción preparada", actionTitle: "Pausar prospección amplia", approval: "Esperando tu aprobación", checked: "Contexto verificado",
    contextItems: ["Anuncios", "Pipeline", "Conocimiento"], scroll: "Conoce el sistema",
  },
  systemParts: [
    ["Operator", "Agente de IA con su propia computadora", "part-agent"],
    ["Contexto del negocio", "Memoria, permisos y límites de aprobación", "part-memory"],
    ["OperateOS", "El sistema de información que controla tu negocio", "part-system"],
    ["Internet abierto", "Navega, investiga y devuelve evidencias", "part-computer"],
    ["AI Chat + canales", "AI Chat, Telegram, WhatsApp, iMessage y más", "part-web"],
    ["Automatización de tareas", "Trabajo repetitivo, encargos y procesos recurrentes", "part-automation"],
  ],
  system: {
    kicker: "Un agente. Un sistema operativo para el negocio.", title: "OperateOS le da a Operator un lugar para trabajar.",
    body: "OperateOS combina a Operator, un agente de IA con su propia computadora, con la memoria, la información, los permisos y los flujos de trabajo que el negocio necesita. Operator puede navegar por internet abierto, usar herramientas del navegador y actuar en sistemas conectados — con aprobación cuando corresponde.",
    capabilitiesAria: "Lo que Operator puede hacer", advantage: "Operator trabaja en todo el negocio",
    advantageTitle: "Pide una vez. Operator investiga, actúa y mantiene el sistema actualizado.",
    advantageBody: "Operator lleva el contexto del negocio, la memoria, los permisos y los límites de aprobación desde AI Chat al trabajo real en OperateOS, la web abierta, herramientas SaaS conectadas y canales de mensajería.",
  },
  capabilities: [
    ["Memoria del negocio", "Entiende el contexto detrás de la solicitud.", "Operator usa la memoria del negocio, los permisos y los límites de aprobación para adaptar el trabajo a la realidad del negocio."],
    ["Su propia computadora", "Un lugar persistente para navegar y trabajar.", "Operator tiene su propia computadora: navega por internet abierto, usa herramientas del navegador y completa tareas de varios pasos."],
    ["AI Chat + canales", "Llega a Operator donde empieza el trabajo.", "Pregúntale a Operator dentro de OperateOS mediante la función dedicada AI Chat o por Telegram, WhatsApp, iMessage y otros canales de mensajería."],
    ["Operación segura", "Haz avanzar el trabajo con control.", "Operator opera datos, flujos de trabajo y herramientas SaaS conectadas, automatiza procesos repetitivos, resuelve encargos y pide aprobación antes de acciones relevantes."],
  ],
  layers: [
    ["Operator", "Un agente con su propia computadora", "Operator investiga, navega por la web, usa herramientas del navegador y realiza trabajo real respetando el contexto del negocio, los permisos y las aprobaciones.", "violet"],
    ["La memoria", "Contexto del negocio que acompaña el trabajo", "OperateOS mantiene unidos la memoria del negocio, los datos, los flujos de trabajo y los límites de aprobación para que Operator actúe con contexto.", "cyan"],
    ["El sistema de información", "OperateOS, adaptado al negocio", "OperateOS conecta la información, los flujos de trabajo, las herramientas conectadas y la infraestructura que controla el negocio. Los módulos crecen cuando cambian las necesidades.", "lime"],
    ["El alcance", "AI Chat y canales de mensajería", "Empieza con Operator dentro de OperateOS o por Telegram, WhatsApp, iMessage y otros canales. Operator devuelve investigaciones, evidencias y resultados al sistema.", "coral"],
  ],
  work: {
    kicker: "Operator · Investigación, acción y contexto", titleBefore: "Operator no se limita a responder. Trabaja ", emphasis: "en todo", titleAfter: " el negocio.",
    you: "Tú", question: "“¿Qué campañas están desperdiciando dinero y qué deberíamos hacer ahora?”",
    steps: [["Investiga la web", "Señales actuales, fuentes y estado de las herramientas"], ["Revisa los datos del negocio", "Gasto, pipeline, políticas y sistemas conectados"], ["Usa el contexto del negocio", "Memoria, permisos y límites de aprobación"], ["Prepara la acción", "Pasos exactos, impacto, evidencias y límites"]],
    recommended: "Acción recomendada", action: "Pausar prospección amplia", result: "US$213 gastados · 0 oportunidades calificadas · evidencias devueltas a OperateOS", approve: "Aprobar cambio", approveAria: "Control de aprobación de ejemplo", confirmation: "Nada cambia sin la confirmación de una persona.",
  },
  structure: {
    kicker: "La conversación se convierte en trabajo", title: "Describe la necesidad. Operator crea la estructura de trabajo.",
    body: "Unas cuantas frases se convierten en datos duraderos del negocio: un Tablero, las tarjetas correctas, listas prácticas, responsables, dependencias y un calendario. Operator mantiene OperateOS actualizado a medida que cambia el proyecto y puede investigar la web o usar herramientas conectadas cuando el trabajo lo necesita.",
    prompt: "“Abriremos una segunda ubicación en ocho semanas. Organiza permisos, proveedores, contratación, marketing de lanzamiento y los preparativos para el día de apertura. Maya es la responsable.”",
    outputAria: "Un proyecto creado dentro de OperateOS a partir de una conversación", created: "Creado en Tableros", ready: "Listo para revisión", newProject: "Nuevo proyecto del negocio", project: "Lanzamiento de la segunda ubicación", owner: "Responsable · Maya Chen",
    summary: [["14", "tarjetas"], ["37", "elementos de lista"], ["5", "responsables"], ["8", "semanas programadas"]],
    columns: [
      ["Plan", [["Confirmar etapas de permisos", "6 elementos de lista · Maya"], ["Finalizar presupuesto de apertura", "4 elementos de lista · Finanzas"]]],
      ["En curso", [["Crear lista de proveedores", "Para la semana 2 · Operaciones"], ["Preparar plan de contratación", "Para la semana 3 · Maya"]]],
      ["Programado", [["Lanzar campaña local", "Inicia en la semana 5 · Marketing"], ["Preparativos para la apertura", "12 elementos de lista · Equipo"]]],
    ],
    later: "Después", update: "“El permiso se retrasó una semana.”", updated: "Calendario y tarjetas dependientes actualizados",
  },
  development: {
    kicker: "Hecho para evolucionar con el negocio", title: "Operator ayuda a ampliar el sistema.",
    body: "Describe lo que el negocio necesita en la función dedicada AI Chat. Operator aclara el flujo, propone módulos y capacidades, coordina el trabajo y entrega una mejora probada para revisión. Nada llega a Producción sin tu aprobación.",
    mode: "Modo Operator", connected: "Operator conectado", agentLabel: "Operator", history: "Mejoras del sistema", next: "Listo para la próxima capacidad",
    historyItems: [["Incorporación de proveedores", "Nuevo flujo · en curso"], ["Bandeja de entrada unificada", "Mejora guardada"], ["Controles de acción en Anuncios", "Mejora guardada"]],
    user: "Agrega un flujo de incorporación de proveedores con aprobación del responsable y recopilación de documentos.",
    agent: "Te ayudaré a estructurarlo como un módulo conectado que comparte personas, archivos, permisos, actividad y memoria del negocio. Te entregaré una versión funcional para revisión.",
    progress: ["Flujo aclarado", "Registros y permisos creados", "Interfaz para escritorio y móvil creada", "Probando y preparando la revisión"],
    newCapability: "Nueva capacidad del negocio", module: "Incorporación de proveedores", moduleBody: "Conectado con Relaciones, Tableros, Conocimiento y archivos.", appears: "Disponible dentro de tu OperateOS",
  },
  modulesSection: {
    kicker: "Puntos de partida, no límites", title: "OperateOS evoluciona con el negocio.", body: "Estos módulos son ejemplos de lo que el sistema puede hacer hoy. Tu negocio puede crear y ampliar sus propios módulos, flujos de trabajo y capacidades a medida que surgen nuevas necesidades. Operator puede ayudar a convertirlos en partes funcionales de OperateOS, manteniendo los permisos y los límites de aprobación.", aria: "Ejemplos de módulos de OperateOS",
    workspaceKicker: "Una instalación. Muchos negocios.", workspaceTitle: "Cada espacio conserva su propia memoria, trabajo, identidad y archivos.", workspaceBody: "Operator trabaja dentro del negocio en el que estás. Tu negocio puede ampliar el espacio a medida que cambian las necesidades. La administración compartida permanece centralizada, mientras el contexto del negocio se mantiene dentro de sus límites.", workspaceAria: "Tres espacios de trabajo separados para negocios", workspaceTypes: ["Comercio", "Diseño", "Servicios"], sharedAdmin: "Administración compartida",
  },
  modules: [["Inicio", "La visión operativa"], ["Bandeja de entrada", "Cada conversación con clientes"], ["Pipeline", "El trabajo de ventas en marcha"], ["Relaciones", "Personas, negocios e historial"], ["Anuncios", "Rendimiento y acciones controladas"], ["Tableros", "Gestión flexible del trabajo"], ["Conocimiento", "La fuente de verdad del negocio"]],
  pricing: {
    kicker: "La suscripción que mantiene el trabajo en marcha", title: "Tu instalación sigue siendo tuya.", body: "Elige el nivel de soporte activo de Operator que necesita tu negocio. Starter y Business funcionan en tu máquina; Enterprise es la opción alojada y administrada.",
    promiseLabel: "La promesa de propiedad", promise: "OperateOS sigue siendo tuyo. Tu suscripción mantiene a Operator activo, conectado, actualizado y listo para trabajar. Cancela cuando quieras: tus datos y tu instalación siguen disponibles; Operator, las automatizaciones, las integraciones, las actualizaciones y el soporte simplemente quedan en pausa hasta que reactives el servicio.", plansAria: "Planes de OperateOS", detailsLabel: "Detalles del plan",
    plans: [
      {
        name: "Starter", tag: "Un negocio", price: "US$ 500", cadence: "por año", accent: "violet", description: "Una suscripción anual para un negocio; no se cobra por negocio.",
        details: [["Implementación", "Autoalojado"], ["Máquina", "La máquina es tuya"], ["Límite de negocios", "1 negocio"], ["Funciones esenciales", "Todas las funciones esenciales mientras está activo"], ["Modelos", "Modelos capaces incluidos"], ["Créditos de IA", "Asignación de créditos de IA incluida"], ["Créditos adicionales", "Recargas disponibles"], ["Actualizaciones", "Incluidas mientras está activo"], ["Soporte", "Estándar"], ["Después de cancelar", "Modo Local: la instalación, los datos, los módulos y el historial siguen disponibles. Operator, las automatizaciones, las integraciones, las actualizaciones y el soporte quedan en pausa hasta la reactivación."]],
      },
      {
        name: "Business", tag: "Cobrado por negocio", price: "US$ 250", cadence: "por negocio / mes", accent: "cyan", description: "Una suscripción mensual por cada negocio en tu instalación autoalojada.",
        details: [["Implementación", "Autoalojado"], ["Máquina", "La máquina es tuya"], ["Límite de negocios", "Cobrado por negocio"], ["Funciones esenciales", "Todas las funciones esenciales mientras está activo"], ["Modelos", "Modelos capaces incluidos"], ["Créditos de IA", "Asignación de créditos de IA incluida"], ["Créditos adicionales", "Recargas disponibles"], ["Actualizaciones", "Incluidas mientras está activo"], ["Soporte", "Prioritario"], ["Después de cancelar", "Modo Local: la instalación, los datos, los módulos y el historial siguen disponibles. Operator, las automatizaciones, las integraciones, las actualizaciones y el soporte quedan en pausa hasta la reactivación."]],
      },
      {
        name: "Enterprise", tag: "Alojado / administrado", price: "Personalizado", cadence: "bajo consulta", accent: "lime", description: "Una opción alojada y administrada, definida con tu negocio.",
        details: [["Implementación", "Alojado / administrado"], ["Máquina", "Infraestructura administrada"], ["Límite de negocios", "Se define en consulta"], ["Funciones esenciales", "Funciones esenciales y capacidades a medida"], ["Modelos", "Modelos y capacidad definidos en consulta"], ["Créditos de IA", "Asignación definida en consulta"], ["Créditos adicionales", "Se define en consulta"], ["Actualizaciones", "Incluidas según el plan"], ["Soporte", "Dedicado + SLA"], ["Después de cancelar", "Los términos del servicio y los datos se definen en consulta."]],
      },
    ],
    active: { label: "Suscripción activa", title: "Todo activo, con el nivel de soporte de tu plan.", body: "Starter y Business incluyen todas las funciones esenciales, modelos avanzados para trabajos complejos y de varios pasos, una asignación de créditos de IA, actualizaciones y soporte mientras están activos. Puedes comprar créditos de IA adicionales como recargas. El soporte de Business es prioritario; Enterprise incluye soporte dedicado y un SLA." },
    local: { label: "Modo Local", title: "Qué queda disponible cuando un plan autoalojado se pausa.", body: "Si Starter o Business no está activo, tu instalación, tus datos, tus módulos y tu historial siguen disponibles en Modo Local. Operator, las automatizaciones, las integraciones, las actualizaciones y el soporte quedan en pausa hasta que reactives el servicio." },
  },
  ownership: {
    kicker: "La ventaja que se acumula", lineOne: "Tu sistema operativo.", lineTwo: "Tus datos.", lineThree: "Tu ", emphasis: "Operator.",
    body: "Con OperateOS, el negocio controla su sistema operativo, sus datos y la forma en que Operator trabaja dentro de él, manteniendo el sistema de información y su futuro bajo su propio control.",
    proofs: [["Alojamiento propio", "Se ejecuta en infraestructura controlada por el negocio."], ["Privado por diseño", "Los registros permanecen dentro de OperateOS."], ["Modelos capaces", "Los planes incluyen modelos avanzados para trabajos complejos y de varios pasos."], ["Creado para durar", "Copias de seguridad, credenciales cifradas y actualizaciones firmadas."]],
    closing: "No es otro SaaS.", closingSecond: "Es un sistema operativo propio, creado para evolucionar con tu negocio.", access: "Acceso anticipado · Con aprobación",
  },
};

export const COPY: Record<Locale, Copy> = { en, "pt-BR": ptBR, "es-419": es419 };

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  if (normalized === "pt-br" || normalized.startsWith("pt")) return "pt-BR";
  if (normalized === "es-419" || normalized.startsWith("es")) return "es-419";
  if (normalized === "en" || normalized.startsWith("en")) return "en";
  return null;
}
