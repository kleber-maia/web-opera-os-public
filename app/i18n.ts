export const SUPPORTED_LOCALES = ["en", "pt-BR", "es-419"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const en = {
  meta: {
    title: "OperaOS — Your company. Two agents. One operating system.",
    description: "OperaOS is a self-hosted operating system for your company: OS Developer customizes and expands it, while OS Agent safely operates company data and workflows.",
    ogDescription: "OS Developer and OS Agent work inside OperaOS through AI Chat and are also reachable through Telegram, WhatsApp, iMessage, and other messaging channels.",
  },
  language: { label: "Language", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Main navigation", homeAria: "OperaOS home", system: "The system", work: "How it works", modules: "Modules", ownership: "Ownership", access: "Early access" },
  hero: {
    kickerOne: "OS Developer + OS Agent · Two private companions", kickerTwo: "Self-hosted company OS",
    lineOne: "Your company.", lineTwo: "Two agents. ", emphasis: "One system.",
    lede: "OperaOS is a self-hosted operating system for your company. OS Developer helps customize and expand the information system and its workflows; OS Agent safely operates company data and workflows. Both are integrated into OperaOS through the dedicated AI Chat feature and can also be reached through Telegram, WhatsApp, iMessage, and other messaging channels.",
    stageAria: "OS Developer and OS Agent working across OperaOS", status: "Online", context: "Working across the company", agentLabel: "OS Agent",
    message: "OS Agent found two campaigns spending without qualified pipeline. It compared Ads, Pipeline, and the current budget policy.",
    actionLabel: "Prepared action", actionTitle: "Pause Broad Prospecting", approval: "Waiting for your approval", checked: "Context checked",
    contextItems: ["Ads", "Pipeline", "Knowledge"], scroll: "Enter the system",
  },
  systemParts: [
    ["OS Agent", "Safely operates company data and workflows", "part-agent"],
    ["OS Developer", "Customizes and expands OperaOS for the company", "part-memory"],
    ["AI Chat", "Both agents are available inside OperaOS", "part-system"],
    ["Company memory", "Shared context for building and operating", "part-computer"],
    ["Messaging channels", "Telegram, WhatsApp, iMessage, and more", "part-web"],
    ["Task automation", "Turns repeatable work into systems", "part-automation"],
  ],
  system: {
    kicker: "Two companions. One operating system.", title: "OS Developer and OS Agent make OperaOS work as one.",
    body: "OS Developer shapes and expands the information system. OS Agent safely operates its data and workflows. They share company context, permissions, and approval boundaries so the system can evolve without losing control.",
    capabilitiesAria: "What OS Developer and OS Agent can do", advantage: "Why the two agents work together",
    advantageTitle: "One companion extends the system. The other operates it safely.",
    advantageBody: "OS Developer and OS Agent share OperaOS context, so customization and daily work reinforce each other without becoming separate products.",
  },
  capabilities: [
    ["OS Agent", "Safely operates company data and workflows.", "OS Agent checks company context, permissions, and approvals before carrying out daily work inside OperaOS."],
    ["OS Developer", "Customizes and expands the information system.", "OS Developer turns company needs into reviewed modules, workflows, and capabilities that extend OperaOS as the business changes."],
    ["AI Chat", "Reach both agents inside OperaOS.", "The dedicated AI Chat feature keeps OS Developer and OS Agent in one company context, ready to clarify, build, operate, and hand work back for approval."],
    ["Messaging channels", "Reach both agents beyond the workspace.", "Both agents can also be reached through Telegram, WhatsApp, iMessage, and other messaging channels while company context continues inside OperaOS."],
  ],
  layers: [
    ["The operator", "OS Agent, the safe way to run the work", "OS Agent uses company context, permissions, and approval boundaries to operate data and workflows inside OperaOS.", "violet"],
    ["The builder", "OS Developer, the companion that expands the system", "OS Developer turns company needs into reviewed modules, workflows, and capabilities that become part of OperaOS.", "cyan"],
    ["The information system", "OperaOS, shaped around the company", "OperaOS connects the data, workflows, memory, and infrastructure the company controls. Its modules can grow with the business.", "lime"],
    ["The reach", "AI Chat and messaging channels", "Inside OperaOS, both agents are available through the dedicated AI Chat feature. They can also be reached through Telegram, WhatsApp, iMessage, and other messaging channels.", "coral"],
  ],
  work: {
    kicker: "OS Agent · Safe operation with context", titleBefore: "OS Agent doesn’t just answer. It works ", emphasis: "through", titleAfter: " the business.",
    you: "You", question: "“Which campaigns are wasting money—and what should we do next?”",
    steps: [["Reads Ads", "Spend, CPA, pacing, provider state"], ["Checks Pipeline", "Qualified value and won revenue"], ["Uses Knowledge", "Budget policy and company context"], ["Prepares action", "Exact change, impact, and limits"]],
    recommended: "Recommended action", action: "Pause Broad Prospecting", result: "$213 spent · 0 qualified opportunities", approve: "Approve change", approveAria: "Example approval control", confirmation: "Nothing changes without a human confirmation.",
  },
  structure: {
    kicker: "Conversation becomes the interface", title: "Describe the need. OS Developer builds the working structure.",
    body: "A few sentences become durable company data: a Board, the right cards, practical checklists, owners, dependencies, and a schedule. Keep talking and OS Developer keeps OperaOS current as the project changes.",
    prompt: "“We’re opening a second location in eight weeks. Organize permits, suppliers, hiring, launch marketing, and opening-day readiness. Maya owns it.”",
    outputAria: "A project created inside OperaOS from a conversation", created: "Created inside Boards", ready: "Ready for review", newProject: "New company project", project: "Second location launch", owner: "Owner · Maya Chen",
    summary: [["14", "cards"], ["37", "checklist items"], ["5", "owners"], ["8", "weeks scheduled"]],
    columns: [
      ["Plan", [["Confirm permit milestones", "6 checklist items · Maya"], ["Finalize opening budget", "4 checklist items · Finance"]]],
      ["In progress", [["Build supplier shortlist", "Due week 2 · Operations"], ["Draft hiring plan", "Due week 3 · Maya"]]],
      ["Scheduled", [["Launch local campaign", "Starts week 5 · Marketing"], ["Opening-day readiness", "12 checklist items · Team"]]],
    ],
    later: "Later", update: "“The permit is delayed one week.”", updated: "Schedule and dependent cards updated",
  },
  development: {
    kicker: "OS Developer · Built to change", title: "OS Developer becomes your on-demand development companion.",
    body: "Describe what the company needs in the dedicated AI Chat feature. OS Developer clarifies the workflow, coordinates the build, asks for decisions, and returns a tested improvement for review. Nothing reaches Production without your approval.",
    mode: "OS Developer mode", connected: "OS Developer connected", agentLabel: "OS Developer", history: "Development history", next: "Ready for the next improvement",
    historyItems: [["Vendor onboarding", "New workflow · in progress"], ["Unified customer inbox", "Saved improvement"], ["Ads action controls", "Saved improvement"]],
    user: "Add a vendor onboarding flow with owner approval and document collection.",
    agent: "I’ll coordinate this as OS Developer: a connected module sharing people, files, permissions, activity, and company memory. I’ll bring back a working version for review.",
    progress: ["Workflow clarified", "Records and permissions built", "Desktop and mobile UI created", "Testing and preparing review"],
    newCapability: "New company capability", module: "Vendor onboarding", moduleBody: "Connected to Relationships, Boards, Knowledge, and files.", appears: "Appears inside your OperaOS",
  },
  modulesSection: {
    kicker: "Starting points, not limits", title: "OperaOS evolves with the company.", body: "These modules are examples of what the system can do today. Your company can create its own modules, workflows, and capabilities as new needs emerge—with OS Developer helping turn them into working parts of OperaOS and OS Agent safely operating them day to day.", aria: "Examples of OperaOS modules",
    workspaceKicker: "One installation. Many companies.", workspaceTitle: "Every workspace keeps its own memory, work, identity, and files.", workspaceBody: "OS Agent operates within the company you are in. OS Developer can extend that workspace. Shared administration stays centralized, while business context stays inside its boundary.", workspaceAria: "Three separate company workspaces", workspaceTypes: ["Retail", "Design", "Services"], sharedAdmin: "Shared administration",
  },
  modules: [["Home", "The operating picture"], ["Inbox", "Every customer conversation"], ["Pipeline", "Sales work in motion"], ["Relationships", "People, companies, and history"], ["Ads", "Performance and guarded action"], ["Boards", "Flexible work management"], ["Knowledge", "The company source of truth"]],
  ownership: {
    kicker: "The compounding advantage", lineOne: "Your operating system.", lineTwo: "Your data.", lineThree: "Your ", emphasis: "two agents.",
    body: "With OperaOS, the company controls its operating system, its data, and the way OS Developer and OS Agent work inside it—without locking its future to one SaaS vendor or one AI model.",
    proofs: [["Self-hosted", "Runs on company-controlled infrastructure."], ["Private by design", "Company records stay inside OperaOS."], ["Model freedom", "Choose the AI provider and model that fits."], ["Built to endure", "Backups, encrypted credentials, and signed updates."]],
    closing: "Not another SaaS.", closingSecond: "A company-owned operating system built around your business.", access: "Early access · By approval",
  },
};

export type Copy = typeof en;

const ptBR: Copy = {
  meta: {
    title: "OperaOS — Sua empresa. Dois agentes. Um sistema operacional.",
    description: "O OperaOS é um sistema operacional hospedado pela própria empresa: o OS Developer personaliza e amplia o sistema, enquanto o OS Agent opera com segurança os dados e fluxos de trabalho da empresa.",
    ogDescription: "OS Developer e OS Agent trabalham integrados ao OperaOS pelo AI Chat e também podem ser acessados pelo Telegram, WhatsApp, iMessage e outros canais de mensagens.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegação principal", homeAria: "Página inicial do OperaOS", system: "O sistema", work: "Como funciona", modules: "Módulos", ownership: "Controle", access: "Acesso antecipado" },
  hero: {
    kickerOne: "OS Developer + OS Agent · Dois companheiros privados", kickerTwo: "Sistema operacional com hospedagem própria",
    lineOne: "Sua empresa.", lineTwo: "Dois agentes. ", emphasis: "Um sistema.",
    lede: "O OperaOS é um sistema operacional hospedado pela própria empresa. O OS Developer ajuda a personalizar e ampliar o sistema de informação e seus fluxos de trabalho; o OS Agent opera com segurança os dados e os fluxos da empresa. Os dois são integrados ao OperaOS pelo recurso dedicado AI Chat e também podem ser acessados pelo Telegram, WhatsApp, iMessage e outros canais de mensagens.",
    stageAria: "OS Developer e OS Agent trabalhando no OperaOS", status: "Online", context: "Trabalhando em toda a empresa", agentLabel: "OS Agent",
    message: "O OS Agent encontrou duas campanhas gerando gastos sem oportunidades qualificadas no pipeline. Comparou Anúncios, Pipeline e a política de orçamento atual.",
    actionLabel: "Ação preparada", actionTitle: "Pausar prospecção ampla", approval: "Aguardando sua aprovação", checked: "Contexto verificado",
    contextItems: ["Anúncios", "Pipeline", "Conhecimento"], scroll: "Conheça o sistema",
  },
  systemParts: [
    ["OS Agent", "Trabalha com segurança os dados e fluxos da empresa", "part-agent"],
    ["OS Developer", "Personaliza e amplia o OperaOS para a empresa", "part-memory"],
    ["AI Chat", "Os dois agentes dentro do OperaOS", "part-system"],
    ["Memória da empresa", "Contexto compartilhado para construir e operar", "part-computer"],
    ["Canais de mensagens", "Telegram, WhatsApp, iMessage e outros", "part-web"],
    ["Automação de tarefas", "Transforma trabalhos repetitivos em sistemas", "part-automation"],
  ],
  system: {
    kicker: "Dois companheiros. Um sistema operacional.", title: "OS Developer e OS Agent fazem o OperaOS funcionar como um só.",
    body: "O OS Developer molda e amplia o sistema de informação. O OS Agent opera com segurança seus dados e fluxos de trabalho. Os dois compartilham o contexto da empresa, permissões e limites de aprovação para o sistema evoluir sem perder o controle.",
    capabilitiesAria: "O que OS Developer e OS Agent podem fazer", advantage: "Por que os dois agentes trabalham juntos",
    advantageTitle: "Um companheiro amplia o sistema. O outro o opera com segurança.",
    advantageBody: "OS Developer e OS Agent compartilham o contexto do OperaOS, fazendo com que a personalização e o trabalho diário se reforcem sem se tornarem produtos separados.",
  },
  capabilities: [
    ["OS Agent", "Trabalha com segurança os dados e os fluxos de trabalho.", "O OS Agent verifica contexto, permissões e aprovações da empresa antes de executar o trabalho diário dentro do OperaOS."],
    ["OS Developer", "Personaliza e amplia o sistema de informação.", "O OS Developer transforma as necessidades da empresa em módulos, fluxos e capacidades revisados que ampliam o OperaOS conforme o negócio muda."],
    ["AI Chat", "Acesse os dois agentes dentro do OperaOS.", "O recurso dedicado AI Chat mantém OS Developer e OS Agent no mesmo contexto da empresa, prontos para esclarecer, construir, operar e devolver o trabalho para aprovação."],
    ["Canais de mensagens", "Acesse os dois agentes além do espaço de trabalho.", "Os dois agentes também podem ser acessados pelo Telegram, WhatsApp, iMessage e outros canais de mensagens, enquanto o contexto da empresa continua dentro do OperaOS."],
  ],
  layers: [
    ["O operador", "OS Agent, a forma segura de operar o trabalho", "O OS Agent usa o contexto da empresa, permissões e limites de aprovação para operar dados e fluxos de trabalho dentro do OperaOS.", "violet"],
    ["O construtor", "OS Developer, o companheiro que amplia o sistema", "O OS Developer transforma as necessidades da empresa em módulos, fluxos e capacidades revisados que passam a fazer parte do OperaOS.", "cyan"],
    ["O sistema de informação", "OperaOS moldado para a empresa", "O OperaOS conecta os dados, fluxos, memória e infraestrutura sob controle da empresa. Seus módulos podem crescer com o negócio.", "lime"],
    ["O alcance", "AI Chat e canais de mensagens", "Dentro do OperaOS, os dois agentes estão disponíveis pelo recurso dedicado AI Chat. Eles também podem ser acessados pelo Telegram, WhatsApp, iMessage e outros canais de mensagens.", "coral"],
  ],
  work: {
    kicker: "OS Agent · Operação segura com contexto", titleBefore: "OS Agent não apenas responde. Ele atua ", emphasis: "por toda", titleAfter: " a empresa.",
    you: "Você", question: "“Quais campanhas estão desperdiçando dinheiro — e o que devemos fazer agora?”",
    steps: [["Lê os Anúncios", "Gastos, CPA, ritmo e status do provedor"], ["Verifica o Pipeline", "Valor qualificado e receita conquistada"], ["Usa o Conhecimento", "Política de orçamento e contexto da empresa"], ["Prepara a ação", "Mudança exata, impacto e limites"]],
    recommended: "Ação recomendada", action: "Pausar prospecção ampla", result: "US$ 213 gastos · 0 oportunidades qualificadas", approve: "Aprovar mudança", approveAria: "Controle de aprovação de exemplo", confirmation: "Nada muda sem a confirmação de uma pessoa.",
  },
  structure: {
    kicker: "A conversa vira a interface", title: "Descreva a necessidade. O OS Developer cria a estrutura de trabalho.",
    body: "Algumas frases viram dados empresariais duradouros: um Quadro, os cartões certos, checklists práticos, responsáveis, dependências e um cronograma. Continue conversando, e o OS Developer mantém o OperaOS atualizado conforme o projeto muda.",
    prompt: "“Vamos abrir uma segunda unidade em oito semanas. Organize licenças, fornecedores, contratações, marketing de lançamento e os preparativos para a inauguração. Maya é a responsável.”",
    outputAria: "Um projeto criado dentro do OperaOS a partir de uma conversa", created: "Criado em Quadros", ready: "Pronto para revisão", newProject: "Novo projeto da empresa", project: "Lançamento da segunda unidade", owner: "Responsável · Maya Chen",
    summary: [["14", "cartões"], ["37", "itens de checklist"], ["5", "responsáveis"], ["8", "semanas programadas"]],
    columns: [
      ["Planejamento", [["Confirmar etapas das licenças", "6 itens de checklist · Maya"], ["Finalizar orçamento de abertura", "4 itens de checklist · Financeiro"]]],
      ["Em andamento", [["Criar lista de fornecedores", "Prazo: semana 2 · Operações"], ["Elaborar plano de contratação", "Prazo: semana 3 · Maya"]]],
      ["Agendado", [["Lançar campanha local", "Início: semana 5 · Marketing"], ["Preparativos para a inauguração", "12 itens de checklist · Equipe"]]],
    ],
    later: "Depois", update: "“A licença atrasou uma semana.”", updated: "Cronograma e cartões dependentes atualizados",
  },
  development: {
    kicker: "OS Developer · Feito para evoluir", title: "OS Developer se torna seu companheiro de desenvolvimento sob demanda.",
    body: "Descreva o que a empresa precisa no recurso dedicado AI Chat. O OS Developer esclarece o fluxo, coordena o desenvolvimento, pede decisões e entrega uma melhoria testada para revisão. Nada chega à Produção sem sua aprovação.",
    mode: "Modo OS Developer", connected: "OS Developer conectado", agentLabel: "OS Developer", history: "Histórico de desenvolvimento", next: "Pronto para a próxima melhoria",
    historyItems: [["Integração de fornecedores", "Novo fluxo · em andamento"], ["Caixa de entrada unificada", "Melhoria salva"], ["Controles de ação em Anúncios", "Melhoria salva"]],
    user: "Adicione um fluxo de integração de fornecedores com aprovação do responsável e coleta de documentos.",
    agent: "Vou coordenar isso como OS Developer: um módulo conectado que compartilha pessoas, arquivos, permissões, atividades e a memória da empresa. Entregarei uma versão funcional para revisão.",
    progress: ["Fluxo esclarecido", "Registros e permissões criados", "Interface para desktop e celular criada", "Testando e preparando a revisão"],
    newCapability: "Nova capacidade da empresa", module: "Integração de fornecedores", moduleBody: "Conectado a Relacionamentos, Quadros, Conhecimento e arquivos.", appears: "Disponível dentro do seu OperaOS",
  },
  modulesSection: {
    kicker: "Pontos de partida, não limites", title: "O OperaOS evolui com a empresa.", body: "Estes módulos são exemplos do que o sistema pode fazer hoje. Sua empresa pode criar seus próprios módulos, fluxos e capacidades conforme novas necessidades surgem — com o OS Developer ajudando a transformá-los em partes funcionais do OperaOS e o OS Agent operando-os com segurança no dia a dia.", aria: "Exemplos de módulos do OperaOS",
    workspaceKicker: "Uma instalação. Muitas empresas.", workspaceTitle: "Cada espaço mantém sua própria memória, trabalho, identidade e arquivos.", workspaceBody: "O OS Agent opera dentro da empresa em que você está. O OS Developer pode ampliar esse espaço. A administração compartilhada continua centralizada, enquanto o contexto do negócio permanece dentro dos seus limites.", workspaceAria: "Três espaços de trabalho separados", workspaceTypes: ["Varejo", "Design", "Serviços"], sharedAdmin: "Administração compartilhada",
  },
  modules: [["Início", "A visão operacional"], ["Caixa de entrada", "Todas as conversas com clientes"], ["Pipeline", "O trabalho de vendas em movimento"], ["Relacionamentos", "Pessoas, empresas e histórico"], ["Anúncios", "Desempenho e ações controladas"], ["Quadros", "Gestão flexível do trabalho"], ["Conhecimento", "A fonte da verdade da empresa"]],
  ownership: {
    kicker: "A vantagem que se acumula", lineOne: "Seu sistema operacional.", lineTwo: "Seus dados.", lineThree: "Seus ", emphasis: "dois agentes.",
    body: "Com o OperaOS, a empresa controla seu sistema operacional, seus dados e a forma como OS Developer e OS Agent trabalham dentro dele — sem prender o futuro a um único fornecedor de SaaS ou modelo de IA.",
    proofs: [["Hospedagem própria", "Executado em infraestrutura controlada pela empresa."], ["Privado por design", "Os registros permanecem dentro do OperaOS."], ["Liberdade de modelo", "Escolha o provedor e o modelo de IA mais adequados."], ["Feito para durar", "Backups, credenciais criptografadas e atualizações assinadas."]],
    closing: "Não é mais um SaaS.", closingSecond: "É um sistema operacional próprio, criado em torno da sua empresa.", access: "Acesso antecipado · Mediante aprovação",
  },
};

const es419: Copy = {
  meta: {
    title: "OperaOS — Tu empresa. Dos agentes. Un sistema operativo.",
    description: "OperaOS es un sistema operativo autoalojado para tu empresa: OS Developer lo personaliza y amplía, mientras OS Agent opera de forma segura los datos y flujos de trabajo de la empresa.",
    ogDescription: "OS Developer y OS Agent trabajan integrados en OperaOS mediante AI Chat y también están disponibles en Telegram, WhatsApp, iMessage y otros canales de mensajería.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegación principal", homeAria: "Inicio de OperaOS", system: "El sistema", work: "Cómo funciona", modules: "Módulos", ownership: "Control", access: "Acceso anticipado" },
  hero: {
    kickerOne: "OS Developer + OS Agent · Dos compañeros privados", kickerTwo: "Sistema operativo autoalojado",
    lineOne: "Tu empresa.", lineTwo: "Dos agentes. ", emphasis: "Un sistema.",
    lede: "OperaOS es un sistema operativo autoalojado para tu empresa. OS Developer ayuda a personalizar y ampliar el sistema de información y sus flujos de trabajo; OS Agent opera de forma segura los datos y flujos de trabajo de la empresa. Ambos están integrados en OperaOS mediante la función dedicada AI Chat y también están disponibles a través de Telegram, WhatsApp, iMessage y otros canales de mensajería.",
    stageAria: "OS Developer y OS Agent trabajando en OperaOS", status: "En línea", context: "Trabajando en toda la empresa", agentLabel: "OS Agent",
    message: "OS Agent encontró dos campañas con gastos pero sin oportunidades calificadas en el pipeline. Comparó Anuncios, Pipeline y la política de presupuesto actual.",
    actionLabel: "Acción preparada", actionTitle: "Pausar prospección amplia", approval: "Esperando tu aprobación", checked: "Contexto verificado",
    contextItems: ["Anuncios", "Pipeline", "Conocimiento"], scroll: "Conoce el sistema",
  },
  systemParts: [
    ["OS Agent", "Gestiona de forma segura los datos y flujos de trabajo", "part-agent"],
    ["OS Developer", "Personaliza y amplía OperaOS para la empresa", "part-memory"],
    ["AI Chat", "Ambos agentes están dentro de OperaOS", "part-system"],
    ["Memoria empresarial", "Contexto compartido para construir y operar", "part-computer"],
    ["Canales de mensajería", "Telegram, WhatsApp, iMessage y más", "part-web"],
    ["Automatización de tareas", "Convierte el trabajo repetitivo en sistemas", "part-automation"],
  ],
  system: {
    kicker: "Dos compañeros. Un sistema operativo.", title: "OS Developer y OS Agent hacen que OperaOS funcione como uno solo.",
    body: "OS Developer da forma y amplía el sistema de información. OS Agent opera de forma segura sus datos y flujos de trabajo. Comparten el contexto empresarial, los permisos y los límites de aprobación para que el sistema evolucione sin perder el control.",
    capabilitiesAria: "Lo que OS Developer y OS Agent pueden hacer", advantage: "Por qué trabajan juntos los dos agentes",
    advantageTitle: "Un compañero amplía el sistema. El otro lo opera de forma segura.",
    advantageBody: "OS Developer y OS Agent comparten el contexto de OperaOS, por lo que la personalización y el trabajo diario se refuerzan sin convertirse en productos separados.",
  },
  capabilities: [
    ["OS Agent", "Gestiona de forma segura los datos y flujos de trabajo.", "OS Agent verifica el contexto empresarial, los permisos y las aprobaciones antes de realizar el trabajo diario dentro de OperaOS."],
    ["OS Developer", "Personaliza y amplía el sistema de información.", "OS Developer convierte las necesidades de la empresa en módulos, flujos de trabajo y capacidades revisados que amplían OperaOS a medida que cambia el negocio."],
    ["AI Chat", "Llega a ambos agentes dentro de OperaOS.", "La función dedicada AI Chat mantiene a OS Developer y OS Agent dentro del mismo contexto empresarial, listos para aclarar, construir, operar y devolver el trabajo para su aprobación."],
    ["Canales de mensajería", "Llega a ambos agentes fuera del espacio de trabajo.", "Ambos agentes también están disponibles a través de Telegram, WhatsApp, iMessage y otros canales de mensajería, mientras el contexto empresarial continúa dentro de OperaOS."],
  ],
  layers: [
    ["El operador", "OS Agent, la forma segura de operar el trabajo", "OS Agent usa el contexto empresarial, los permisos y los límites de aprobación para operar datos y flujos de trabajo dentro de OperaOS.", "violet"],
    ["El constructor", "OS Developer, el compañero que amplía el sistema", "OS Developer convierte las necesidades de la empresa en módulos, flujos y capacidades revisados que pasan a formar parte de OperaOS.", "cyan"],
    ["El sistema de información", "OperaOS, moldeado para la empresa", "OperaOS conecta los datos, flujos, memoria e infraestructura que controla la empresa. Sus módulos pueden crecer con el negocio.", "lime"],
    ["El alcance", "AI Chat y canales de mensajería", "Dentro de OperaOS, ambos agentes están disponibles mediante la función dedicada AI Chat. También están disponibles a través de Telegram, WhatsApp, iMessage y otros canales de mensajería.", "coral"],
  ],
  work: {
    kicker: "OS Agent · Operación segura con contexto", titleBefore: "OS Agent no se limita a responder. Trabaja ", emphasis: "en toda", titleAfter: " la empresa.",
    you: "Tú", question: "“¿Qué campañas están desperdiciando dinero y qué deberíamos hacer ahora?”",
    steps: [["Lee Anuncios", "Gasto, CPA, ritmo y estado del proveedor"], ["Revisa el Pipeline", "Valor calificado e ingresos ganados"], ["Usa Conocimiento", "Política de presupuesto y contexto empresarial"], ["Prepara la acción", "Cambio exacto, impacto y límites"]],
    recommended: "Acción recomendada", action: "Pausar prospección amplia", result: "US$213 gastados · 0 oportunidades calificadas", approve: "Aprobar cambio", approveAria: "Control de aprobación de ejemplo", confirmation: "Nada cambia sin la confirmación de una persona.",
  },
  structure: {
    kicker: "La conversación se convierte en la interfaz", title: "Describe la necesidad. OS Developer crea la estructura de trabajo.",
    body: "Unas cuantas frases se convierten en datos empresariales duraderos: un Tablero, las tarjetas correctas, listas prácticas, responsables, dependencias y un calendario. Sigue conversando y OS Developer mantiene OperaOS actualizado a medida que cambia el proyecto.",
    prompt: "“Abriremos una segunda ubicación en ocho semanas. Organiza permisos, proveedores, contratación, marketing de lanzamiento y los preparativos para el día de apertura. Maya es la responsable.”",
    outputAria: "Un proyecto creado dentro de OperaOS a partir de una conversación", created: "Creado en Tableros", ready: "Listo para revisión", newProject: "Nuevo proyecto de la empresa", project: "Lanzamiento de la segunda ubicación", owner: "Responsable · Maya Chen",
    summary: [["14", "tarjetas"], ["37", "elementos de lista"], ["5", "responsables"], ["8", "semanas programadas"]],
    columns: [
      ["Plan", [["Confirmar etapas de permisos", "6 elementos de lista · Maya"], ["Finalizar presupuesto de apertura", "4 elementos de lista · Finanzas"]]],
      ["En curso", [["Crear lista de proveedores", "Para la semana 2 · Operaciones"], ["Preparar plan de contratación", "Para la semana 3 · Maya"]]],
      ["Programado", [["Lanzar campaña local", "Inicia en la semana 5 · Marketing"], ["Preparativos para la apertura", "12 elementos de lista · Equipo"]]],
    ],
    later: "Después", update: "“El permiso se retrasó una semana.”", updated: "Calendario y tarjetas dependientes actualizados",
  },
  development: {
    kicker: "OS Developer · Creado para evolucionar", title: "OS Developer se convierte en tu compañero de desarrollo bajo demanda.",
    body: "Describe lo que la empresa necesita en la función dedicada AI Chat. OS Developer aclara el flujo, coordina el desarrollo, solicita decisiones y entrega una mejora probada para revisión. Nada llega a Producción sin tu aprobación.",
    mode: "Modo OS Developer", connected: "OS Developer conectado", agentLabel: "OS Developer", history: "Historial de desarrollo", next: "Listo para la próxima mejora",
    historyItems: [["Incorporación de proveedores", "Nuevo flujo · en curso"], ["Bandeja de entrada unificada", "Mejora guardada"], ["Controles de acción en Anuncios", "Mejora guardada"]],
    user: "Agrega un flujo de incorporación de proveedores con aprobación del responsable y recopilación de documentos.",
    agent: "Coordinaré esto como OS Developer: un módulo conectado que comparte personas, archivos, permisos, actividad y memoria empresarial. Te entregaré una versión funcional para revisión.",
    progress: ["Flujo aclarado", "Registros y permisos creados", "Interfaz para escritorio y móvil creada", "Probando y preparando la revisión"],
    newCapability: "Nueva capacidad empresarial", module: "Incorporación de proveedores", moduleBody: "Conectado con Relaciones, Tableros, Conocimiento y archivos.", appears: "Disponible dentro de tu OperaOS",
  },
  modulesSection: {
    kicker: "Puntos de partida, no límites", title: "OperaOS evoluciona con la empresa.", body: "Estos módulos son ejemplos de lo que el sistema puede hacer hoy. Tu empresa puede crear sus propios módulos, flujos y capacidades a medida que surgen nuevas necesidades, con OS Developer ayudando a convertirlos en partes funcionales de OperaOS y OS Agent operándolos de forma segura día a día.", aria: "Ejemplos de módulos de OperaOS",
    workspaceKicker: "Una instalación. Muchas empresas.", workspaceTitle: "Cada espacio conserva su propia memoria, trabajo, identidad y archivos.", workspaceBody: "OS Agent opera dentro de la empresa en la que estás. OS Developer puede ampliar ese espacio. La administración compartida permanece centralizada, mientras el contexto empresarial se mantiene dentro de sus límites.", workspaceAria: "Tres espacios de trabajo separados", workspaceTypes: ["Comercio", "Diseño", "Servicios"], sharedAdmin: "Administración compartida",
  },
  modules: [["Inicio", "La visión operativa"], ["Bandeja de entrada", "Cada conversación con clientes"], ["Pipeline", "El trabajo de ventas en marcha"], ["Relaciones", "Personas, empresas e historial"], ["Anuncios", "Rendimiento y acciones controladas"], ["Tableros", "Gestión flexible del trabajo"], ["Conocimiento", "La fuente de verdad de la empresa"]],
  ownership: {
    kicker: "La ventaja que se acumula", lineOne: "Tu sistema operativo.", lineTwo: "Tus datos.", lineThree: "Tus ", emphasis: "dos agentes.",
    body: "Con OperaOS, la empresa controla su sistema operativo, sus datos y la forma en que OS Developer y OS Agent trabajan dentro de él, sin atar su futuro a un solo proveedor de SaaS ni a un solo modelo de IA.",
    proofs: [["Alojamiento propio", "Se ejecuta en infraestructura controlada por la empresa."], ["Privado por diseño", "Los registros permanecen dentro de OperaOS."], ["Libertad de modelo", "Elige el proveedor y el modelo de IA más adecuados."], ["Creado para durar", "Copias de seguridad, credenciales cifradas y actualizaciones firmadas."]],
    closing: "No es otro SaaS.", closingSecond: "Es un sistema operativo propio, creado en torno a tu empresa.", access: "Acceso anticipado · Con aprobación",
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
