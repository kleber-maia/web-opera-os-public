export const SUPPORTED_LOCALES = ["en", "pt-BR", "es-419"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const en = {
  meta: {
    title: "OperaOS — Your company. Its own intelligence.",
    description: "OperaOS is a self-hosted operating system for your company, with Opera—a private AI agent—embedded inside.",
    ogDescription: "OperaOS evolves with the business through Opera, its embedded private AI agent.",
  },
  language: { label: "Language", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Main navigation", homeAria: "OperaOS home", system: "The system", work: "How it works", modules: "Modules", ownership: "Ownership", access: "Early access" },
  hero: {
    kickerOne: "Opera · Private AI agent", kickerTwo: "Self-hosted company OS",
    lineOne: "Your company.", lineTwo: "Its own ", emphasis: "intelligence.",
    lede: "OperaOS is a self-hosted operating system for your company, with Opera—a private AI agent—embedded inside. Opera learns how the business works, operates across the system and the web, and helps OperaOS evolve as the company changes.",
    stageAria: "The parts of OperaOS working as one", status: "Online", context: "Working across the company",
    message: "I found two campaigns spending without qualified pipeline. I compared Ads, Pipeline, and the current budget policy.",
    actionLabel: "Prepared action", actionTitle: "Pause Broad Prospecting", approval: "Waiting for your approval", checked: "Context checked",
    contextItems: ["Ads", "Pipeline", "Knowledge"], scroll: "Enter the system",
  },
  systemParts: [
    ["Opera", "Private agent embedded in OperaOS", "part-agent"],
    ["Company memory", "Gives Opera durable company context", "part-memory"],
    ["Information system", "Created and extended by the company", "part-system"],
    ["Own computer", "A persistent place to operate", "part-computer"],
    ["Open web", "Research and real task execution", "part-web"],
    ["Task automation", "Turns repeatable work into systems", "part-automation"],
  ],
  system: {
    kicker: "A different kind of stack", title: "Opera is powerful because the whole operating system works as one.",
    body: "Each layer makes the agent more capable. Company memory compounds. The information system adapts. Opera gains the context and tools to become a real part of the company.",
    capabilitiesAria: "What Opera can do", advantage: "Why Opera works",
    advantageTitle: "Opera knows the company—and has the tools to do the work.",
    advantageBody: "The agent works continuously across company memory, daily operations, the open web, and automation.",
  },
  capabilities: [
    ["Company memory", "Learns each company. Never forgets.", "Customers, decisions, standards, history, and working preferences become durable context for Opera. Every workspace keeps its own memory and boundaries."],
    ["Inside the interface", "Your words become structured company work.", "Opera lives inside OperaOS, understands the screen you are viewing, and creates or updates Boards, cards, records, knowledge, schedules, and more from the same conversation."],
    ["Open-web operator", "Navigates the web like a real employee.", "The agent can research, compare, navigate websites, and complete browser-based tasks—then bring the evidence and results back into OperaOS."],
    ["Task automation", "Automates any repeatable process.", "Opera turns recurring research, follow-up, record work, and multi-step operations into supervised automations that keep running from the company’s own computer."],
  ],
  layers: [
    ["The intelligence", "Opera, your private AI agent", "The agent isn’t a chatbot waiting in another tab. Embedded in OperaOS, Opera learns each company, sees the current screen, uses the open web, and executes or automates real work with approval.", "violet"],
    ["The information system", "A system the company can shape", "OperaOS holds company work and information in connected, adaptable structures. The company can create new modules and workflows as its needs change.", "cyan"],
    ["The foundation", "A computer of its own", "The agent has a persistent place to work, remember, automate, and improve the information system. The business gets infrastructure that belongs to it—not another rented seat.", "lime"],
    ["The reach", "The open web", "OperaOS holds the durable context. Opera can also research, navigate, and operate browser-based tools—bringing the outside world back into one trusted company operating system.", "coral"],
  ],
  work: {
    kicker: "One request. The whole company moves.", titleBefore: "Opera doesn’t just answer. Opera works ", emphasis: "through", titleAfter: " the business.",
    you: "You", question: "“Which campaigns are wasting money—and what should we do next?”",
    steps: [["Reads Ads", "Spend, CPA, pacing, provider state"], ["Checks Pipeline", "Qualified value and won revenue"], ["Uses Knowledge", "Budget policy and company context"], ["Prepares action", "Exact change, impact, and limits"]],
    recommended: "Recommended action", action: "Pause Broad Prospecting", result: "$213 spent · 0 qualified opportunities", approve: "Approve change", approveAria: "Example approval control", confirmation: "Nothing changes without a human confirmation.",
  },
  structure: {
    kicker: "Conversation becomes the interface", title: "Describe the project. Opera builds the working structure.",
    body: "A few sentences become durable company data: a Board, the right cards, practical checklists, owners, dependencies, and a schedule. Keep talking and the agent keeps OperaOS current.",
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
    kicker: "Development mode · Built to change", title: "Opera becomes your on-demand development team.",
    body: "Describe what the company needs in the same chat. The agent clarifies the workflow, coordinates the build, asks for decisions, and returns a tested improvement for review. Nothing reaches Production without your approval.",
    mode: "Development mode", connected: "Opera connected", history: "Development history", next: "Ready for the next improvement",
    historyItems: [["Vendor onboarding", "New workflow · in progress"], ["Unified customer inbox", "Saved improvement"], ["Ads action controls", "Saved improvement"]],
    user: "Add a vendor onboarding flow with owner approval and document collection.",
    agent: "I’ll coordinate this as your development team: a connected module sharing people, files, permissions, activity, and company memory. I’ll bring back a working version for review.",
    progress: ["Workflow clarified", "Records and permissions built", "Desktop and mobile UI created", "Testing and preparing review"],
    newCapability: "New company capability", module: "Vendor onboarding", moduleBody: "Connected to Relationships, Boards, Knowledge, and files.", appears: "Appears inside your OperaOS",
  },
  modulesSection: {
    kicker: "Starting points, not limits", title: "OperaOS evolves with the company.", body: "These modules are examples of what the system can do today. Your company can create its own modules, workflows, and capabilities as new needs emerge—with Opera helping turn them into working parts of OperaOS.", aria: "Examples of OperaOS modules",
    workspaceKicker: "One installation. Many companies.", workspaceTitle: "Every workspace keeps its own memory, work, identity, and files.", workspaceBody: "Opera follows the company you are in. Shared administration stays centralized. Business context stays inside its boundary.", workspaceAria: "Three separate company workspaces", workspaceTypes: ["Retail", "Design", "Services"], sharedAdmin: "Shared administration",
  },
  modules: [["Home", "The operating picture"], ["Inbox", "Every customer conversation"], ["Pipeline", "Sales work in motion"], ["Relationships", "People, companies, and history"], ["Ads", "Performance and guarded action"], ["Boards", "Flexible work management"], ["Knowledge", "The company source of truth"]],
  ownership: {
    kicker: "The compounding advantage", lineOne: "Your operating system.", lineTwo: "Your data.", lineThree: "Your ", emphasis: "agent.",
    body: "With OperaOS, the company controls its operating system, its data, and Opera—without locking its future to one SaaS vendor or one AI model.",
    proofs: [["Self-hosted", "Runs on company-controlled infrastructure."], ["Private by design", "Company records stay inside OperaOS."], ["Model freedom", "Choose the AI provider and model that fits."], ["Built to endure", "Backups, encrypted credentials, and signed updates."]],
    closing: "Not another SaaS.", closingSecond: "A company-owned operating system built around your business.", access: "Early access · By approval",
  },
};

export type Copy = typeof en;

const ptBR: Copy = {
  meta: {
    title: "OperaOS — Sua empresa. Com inteligência própria.",
    description: "O OperaOS é um sistema operacional hospedado pela própria empresa, com Opera — um agente privado de IA — integrado.",
    ogDescription: "O OperaOS evolui com o negócio por meio de Opera, seu agente privado de IA integrado.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegação principal", homeAria: "Página inicial do OperaOS", system: "O sistema", work: "Como funciona", modules: "Módulos", ownership: "Controle", access: "Acesso antecipado" },
  hero: {
    kickerOne: "Opera · Agente privado de IA", kickerTwo: "Sistema operacional com hospedagem própria",
    lineOne: "Sua empresa.", lineTwo: "Com inteligência ", emphasis: "própria.",
    lede: "O OperaOS é um sistema operacional hospedado pela própria empresa, com Opera — um agente privado de IA — integrado. Opera aprende como o negócio funciona, atua no sistema e na web e ajuda o OperaOS a evoluir conforme a empresa muda.",
    stageAria: "As partes do OperaOS funcionando como uma só", status: "Online", context: "Trabalhando em toda a empresa",
    message: "Encontrei duas campanhas gerando gastos sem oportunidades qualificadas no pipeline. Comparei Anúncios, Pipeline e a política de orçamento atual.",
    actionLabel: "Ação preparada", actionTitle: "Pausar prospecção ampla", approval: "Aguardando sua aprovação", checked: "Contexto verificado",
    contextItems: ["Anúncios", "Pipeline", "Conhecimento"], scroll: "Conheça o sistema",
  },
  systemParts: [
    ["Opera", "Agente privado integrado ao OperaOS", "part-agent"],
    ["Memória da empresa", "Dá a Opera contexto empresarial duradouro", "part-memory"],
    ["Sistema de informação", "Criado e ampliado pela empresa", "part-system"],
    ["Computador próprio", "Um ambiente persistente para operar", "part-computer"],
    ["Web aberta", "Pesquisa e execução de tarefas reais", "part-web"],
    ["Automação de tarefas", "Transforma trabalhos repetitivos em sistemas", "part-automation"],
  ],
  system: {
    kicker: "Uma arquitetura diferente", title: "Opera é poderoso porque todo o sistema operacional funciona em conjunto.",
    body: "Cada camada torna o agente mais capaz. A memória da empresa se acumula. O sistema de informação se adapta. Opera ganha o contexto e as ferramentas para se tornar parte real da empresa.",
    capabilitiesAria: "O que Opera pode fazer", advantage: "Por que Opera funciona",
    advantageTitle: "Opera conhece a empresa — e tem as ferramentas para fazer o trabalho.",
    advantageBody: "O agente atua continuamente na memória da empresa, nas operações diárias, na web aberta e na automação.",
  },
  capabilities: [
    ["Memória da empresa", "Aprende sobre cada empresa. Nunca esquece.", "Clientes, decisões, padrões, histórico e preferências de trabalho viram contexto duradouro para Opera. Cada espaço de trabalho mantém sua própria memória e seus limites."],
    ["Dentro da interface", "Suas palavras viram trabalho empresarial estruturado.", "Opera vive dentro do OperaOS, entende a tela que você está vendo e cria ou atualiza Quadros, cartões, registros, conhecimento, agendas e muito mais na mesma conversa."],
    ["Operador da web aberta", "Navega na web como um funcionário de verdade.", "O agente pode pesquisar, comparar, navegar em sites e concluir tarefas no navegador — depois traz as evidências e os resultados de volta ao OperaOS."],
    ["Automação de tarefas", "Automatiza qualquer processo repetitivo.", "Opera transforma pesquisas recorrentes, acompanhamentos, registros e operações em várias etapas em automações supervisionadas, executadas continuamente no computador da própria empresa."],
  ],
  layers: [
    ["A inteligência", "Opera, seu agente privado de IA", "O agente não é um chatbot esperando em outra aba. Integrado ao OperaOS, Opera aprende sobre cada empresa, vê a tela atual, usa a web aberta e executa ou automatiza trabalhos reais mediante aprovação.", "violet"],
    ["O sistema de informação", "Um sistema que a empresa pode moldar", "O OperaOS organiza o trabalho e as informações da empresa em estruturas conectadas e adaptáveis. A empresa pode criar novos módulos e fluxos conforme suas necessidades mudam.", "cyan"],
    ["A base", "Um computador próprio", "O agente tem um ambiente persistente para trabalhar, lembrar, automatizar e melhorar o sistema de informação. A empresa ganha uma infraestrutura que é sua — não mais uma licença alugada.", "lime"],
    ["O alcance", "A web aberta", "O OperaOS guarda o contexto duradouro. Opera também pode pesquisar, navegar e operar ferramentas no navegador — trazendo o mundo externo para um único sistema operacional confiável da empresa.", "coral"],
  ],
  work: {
    kicker: "Um pedido. A empresa inteira se move.", titleBefore: "Opera não apenas responde. Opera atua ", emphasis: "por toda", titleAfter: " a empresa.",
    you: "Você", question: "“Quais campanhas estão desperdiçando dinheiro — e o que devemos fazer agora?”",
    steps: [["Lê os Anúncios", "Gastos, CPA, ritmo e status do provedor"], ["Verifica o Pipeline", "Valor qualificado e receita conquistada"], ["Usa o Conhecimento", "Política de orçamento e contexto da empresa"], ["Prepara a ação", "Mudança exata, impacto e limites"]],
    recommended: "Ação recomendada", action: "Pausar prospecção ampla", result: "US$ 213 gastos · 0 oportunidades qualificadas", approve: "Aprovar mudança", approveAria: "Controle de aprovação de exemplo", confirmation: "Nada muda sem a confirmação de uma pessoa.",
  },
  structure: {
    kicker: "A conversa vira a interface", title: "Descreva o projeto. Opera cria a estrutura de trabalho.",
    body: "Algumas frases viram dados empresariais duradouros: um Quadro, os cartões certos, checklists práticos, responsáveis, dependências e um cronograma. Continue conversando, e o agente mantém o OperaOS atualizado.",
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
    kicker: "Modo de desenvolvimento · Feito para evoluir", title: "Opera se torna sua equipe de desenvolvimento sob demanda.",
    body: "Descreva o que a empresa precisa na mesma conversa. O agente esclarece o fluxo, coordena o desenvolvimento, pede decisões e entrega uma melhoria testada para revisão. Nada chega à Produção sem sua aprovação.",
    mode: "Modo de desenvolvimento", connected: "Opera conectado", history: "Histórico de desenvolvimento", next: "Pronto para a próxima melhoria",
    historyItems: [["Integração de fornecedores", "Novo fluxo · em andamento"], ["Caixa de entrada unificada", "Melhoria salva"], ["Controles de ação em Anúncios", "Melhoria salva"]],
    user: "Adicione um fluxo de integração de fornecedores com aprovação do responsável e coleta de documentos.",
    agent: "Vou coordenar isso como sua equipe de desenvolvimento: um módulo conectado que compartilha pessoas, arquivos, permissões, atividades e a memória da empresa. Entregarei uma versão funcional para revisão.",
    progress: ["Fluxo esclarecido", "Registros e permissões criados", "Interface para desktop e celular criada", "Testando e preparando a revisão"],
    newCapability: "Nova capacidade da empresa", module: "Integração de fornecedores", moduleBody: "Conectado a Relacionamentos, Quadros, Conhecimento e arquivos.", appears: "Disponível dentro do seu OperaOS",
  },
  modulesSection: {
    kicker: "Pontos de partida, não limites", title: "O OperaOS evolui com a empresa.", body: "Estes módulos são exemplos do que o sistema pode fazer hoje. Sua empresa pode criar seus próprios módulos, fluxos e capacidades conforme novas necessidades surgem — com Opera ajudando a transformá-los em partes funcionais do OperaOS.", aria: "Exemplos de módulos do OperaOS",
    workspaceKicker: "Uma instalação. Muitas empresas.", workspaceTitle: "Cada espaço mantém sua própria memória, trabalho, identidade e arquivos.", workspaceBody: "Opera acompanha a empresa em que você está. A administração compartilhada continua centralizada. O contexto do negócio permanece dentro dos seus limites.", workspaceAria: "Três espaços de trabalho separados", workspaceTypes: ["Varejo", "Design", "Serviços"], sharedAdmin: "Administração compartilhada",
  },
  modules: [["Início", "A visão operacional"], ["Caixa de entrada", "Todas as conversas com clientes"], ["Pipeline", "O trabalho de vendas em movimento"], ["Relacionamentos", "Pessoas, empresas e histórico"], ["Anúncios", "Desempenho e ações controladas"], ["Quadros", "Gestão flexível do trabalho"], ["Conhecimento", "A fonte da verdade da empresa"]],
  ownership: {
    kicker: "A vantagem que se acumula", lineOne: "Seu sistema operacional.", lineTwo: "Seus dados.", lineThree: "Seu ", emphasis: "agente.",
    body: "Com o OperaOS, a empresa controla seu sistema operacional, seus dados e Opera — sem prender o futuro a um único fornecedor de SaaS ou modelo de IA.",
    proofs: [["Hospedagem própria", "Executado em infraestrutura controlada pela empresa."], ["Privado por design", "Os registros permanecem dentro do OperaOS."], ["Liberdade de modelo", "Escolha o provedor e o modelo de IA mais adequados."], ["Feito para durar", "Backups, credenciais criptografadas e atualizações assinadas."]],
    closing: "Não é mais um SaaS.", closingSecond: "É um sistema operacional próprio, criado em torno da sua empresa.", access: "Acesso antecipado · Mediante aprovação",
  },
};

const es419: Copy = {
  meta: {
    title: "OperaOS — Tu empresa. Con inteligencia propia.",
    description: "OperaOS es un sistema operativo autoalojado para tu empresa, con Opera —un agente privado de IA— integrado.",
    ogDescription: "OperaOS evoluciona con el negocio a través de Opera, su agente privado de IA integrado.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegación principal", homeAria: "Inicio de OperaOS", system: "El sistema", work: "Cómo funciona", modules: "Módulos", ownership: "Control", access: "Acceso anticipado" },
  hero: {
    kickerOne: "Opera · Agente privado de IA", kickerTwo: "Sistema operativo autoalojado",
    lineOne: "Tu empresa.", lineTwo: "Con inteligencia ", emphasis: "propia.",
    lede: "OperaOS es un sistema operativo autoalojado para tu empresa, con Opera —un agente privado de IA— integrado. Opera aprende cómo funciona el negocio, trabaja en el sistema y en la web, y ayuda a que OperaOS evolucione junto con la empresa.",
    stageAria: "Las partes de OperaOS funcionando como una sola", status: "En línea", context: "Trabajando en toda la empresa",
    message: "Encontré dos campañas con gastos pero sin oportunidades calificadas en el pipeline. Comparé Anuncios, Pipeline y la política de presupuesto actual.",
    actionLabel: "Acción preparada", actionTitle: "Pausar prospección amplia", approval: "Esperando tu aprobación", checked: "Contexto verificado",
    contextItems: ["Anuncios", "Pipeline", "Conocimiento"], scroll: "Conoce el sistema",
  },
  systemParts: [
    ["Opera", "Agente privado integrado en OperaOS", "part-agent"],
    ["Memoria de la empresa", "Le da a Opera contexto empresarial duradero", "part-memory"],
    ["Sistema de información", "Creado y ampliado por la empresa", "part-system"],
    ["Computadora propia", "Un entorno persistente para operar", "part-computer"],
    ["Web abierta", "Investigación y ejecución de tareas reales", "part-web"],
    ["Automatización de tareas", "Convierte el trabajo repetitivo en sistemas", "part-automation"],
  ],
  system: {
    kicker: "Una arquitectura diferente", title: "Opera es poderoso porque todo el sistema operativo funciona en conjunto.",
    body: "Cada capa hace que el agente sea más capaz. La memoria empresarial se acumula. El sistema de información se adapta. Opera obtiene el contexto y las herramientas para convertirse en una parte real de la empresa.",
    capabilitiesAria: "Lo que Opera puede hacer", advantage: "Por qué funciona Opera",
    advantageTitle: "Opera conoce la empresa y tiene las herramientas para hacer el trabajo.",
    advantageBody: "El agente trabaja continuamente con la memoria empresarial, las operaciones diarias, la web abierta y la automatización.",
  },
  capabilities: [
    ["Memoria de la empresa", "Aprende de cada empresa. Nunca olvida.", "Los clientes, las decisiones, los estándares, el historial y las preferencias de trabajo se convierten en contexto duradero para Opera. Cada espacio conserva su propia memoria y sus límites."],
    ["Dentro de la interfaz", "Tus palabras se convierten en trabajo empresarial estructurado.", "Opera vive dentro de OperaOS, entiende la pantalla que estás viendo y crea o actualiza Tableros, tarjetas, registros, conocimiento, agendas y más desde la misma conversación."],
    ["Operador de la web abierta", "Navega por la web como un empleado real.", "El agente puede investigar, comparar, navegar por sitios web y completar tareas en el navegador; luego lleva la evidencia y los resultados de vuelta a OperaOS."],
    ["Automatización de tareas", "Automatiza cualquier proceso repetitivo.", "Opera convierte la investigación recurrente, el seguimiento, los registros y las operaciones de varios pasos en automatizaciones supervisadas que siguen ejecutándose desde la computadora de la empresa."],
  ],
  layers: [
    ["La inteligencia", "Opera, tu agente privado de IA", "El agente no es un chatbot esperando en otra pestaña. Integrado en OperaOS, Opera aprende de cada empresa, ve la pantalla actual, usa la web abierta y ejecuta o automatiza trabajo real con aprobación.", "violet"],
    ["El sistema de información", "Un sistema que la empresa puede moldear", "OperaOS organiza el trabajo y la información de la empresa en estructuras conectadas y adaptables. La empresa puede crear nuevos módulos y flujos a medida que cambian sus necesidades.", "cyan"],
    ["La base", "Una computadora propia", "El agente tiene un entorno persistente para trabajar, recordar, automatizar y mejorar el sistema de información. La empresa obtiene infraestructura propia, no otro asiento rentado.", "lime"],
    ["El alcance", "La web abierta", "OperaOS conserva el contexto duradero. Opera también puede investigar, navegar y operar herramientas en el navegador, llevando el mundo exterior a un único sistema operativo empresarial confiable.", "coral"],
  ],
  work: {
    kicker: "Una solicitud. Toda la empresa se mueve.", titleBefore: "Opera no se limita a responder. Opera trabaja ", emphasis: "en toda", titleAfter: " la empresa.",
    you: "Tú", question: "“¿Qué campañas están desperdiciando dinero y qué deberíamos hacer ahora?”",
    steps: [["Lee Anuncios", "Gasto, CPA, ritmo y estado del proveedor"], ["Revisa el Pipeline", "Valor calificado e ingresos ganados"], ["Usa Conocimiento", "Política de presupuesto y contexto empresarial"], ["Prepara la acción", "Cambio exacto, impacto y límites"]],
    recommended: "Acción recomendada", action: "Pausar prospección amplia", result: "US$213 gastados · 0 oportunidades calificadas", approve: "Aprobar cambio", approveAria: "Control de aprobación de ejemplo", confirmation: "Nada cambia sin la confirmación de una persona.",
  },
  structure: {
    kicker: "La conversación se convierte en la interfaz", title: "Describe el proyecto. Opera crea la estructura de trabajo.",
    body: "Unas cuantas frases se convierten en datos empresariales duraderos: un Tablero, las tarjetas correctas, listas prácticas, responsables, dependencias y un calendario. Sigue conversando y el agente mantiene OperaOS actualizado.",
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
    kicker: "Modo de desarrollo · Creado para evolucionar", title: "Opera se convierte en tu equipo de desarrollo bajo demanda.",
    body: "Describe lo que la empresa necesita en el mismo chat. El agente aclara el flujo, coordina el desarrollo, solicita decisiones y entrega una mejora probada para revisión. Nada llega a Producción sin tu aprobación.",
    mode: "Modo de desarrollo", connected: "Opera conectado", history: "Historial de desarrollo", next: "Listo para la próxima mejora",
    historyItems: [["Incorporación de proveedores", "Nuevo flujo · en curso"], ["Bandeja de entrada unificada", "Mejora guardada"], ["Controles de acción en Anuncios", "Mejora guardada"]],
    user: "Agrega un flujo de incorporación de proveedores con aprobación del responsable y recopilación de documentos.",
    agent: "Coordinaré esto como tu equipo de desarrollo: un módulo conectado que comparte personas, archivos, permisos, actividad y memoria empresarial. Te entregaré una versión funcional para revisión.",
    progress: ["Flujo aclarado", "Registros y permisos creados", "Interfaz para escritorio y móvil creada", "Probando y preparando la revisión"],
    newCapability: "Nueva capacidad empresarial", module: "Incorporación de proveedores", moduleBody: "Conectado con Relaciones, Tableros, Conocimiento y archivos.", appears: "Disponible dentro de tu OperaOS",
  },
  modulesSection: {
    kicker: "Puntos de partida, no límites", title: "OperaOS evoluciona con la empresa.", body: "Estos módulos son ejemplos de lo que el sistema puede hacer hoy. Tu empresa puede crear sus propios módulos, flujos y capacidades a medida que surgen nuevas necesidades, con Opera ayudando a convertirlos en partes funcionales de OperaOS.", aria: "Ejemplos de módulos de OperaOS",
    workspaceKicker: "Una instalación. Muchas empresas.", workspaceTitle: "Cada espacio conserva su propia memoria, trabajo, identidad y archivos.", workspaceBody: "Opera sigue a la empresa en la que estás. La administración compartida permanece centralizada. El contexto empresarial se mantiene dentro de sus límites.", workspaceAria: "Tres espacios de trabajo separados", workspaceTypes: ["Comercio", "Diseño", "Servicios"], sharedAdmin: "Administración compartida",
  },
  modules: [["Inicio", "La visión operativa"], ["Bandeja de entrada", "Cada conversación con clientes"], ["Pipeline", "El trabajo de ventas en marcha"], ["Relaciones", "Personas, empresas e historial"], ["Anuncios", "Rendimiento y acciones controladas"], ["Tableros", "Gestión flexible del trabajo"], ["Conocimiento", "La fuente de verdad de la empresa"]],
  ownership: {
    kicker: "La ventaja que se acumula", lineOne: "Tu sistema operativo.", lineTwo: "Tus datos.", lineThree: "Tu ", emphasis: "agente.",
    body: "Con OperaOS, la empresa controla su sistema operativo, sus datos y a Opera, sin atar su futuro a un solo proveedor de SaaS ni a un solo modelo de IA.",
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
