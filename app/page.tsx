"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const systemParts = [
  { label: "Private AI employee", detail: "Works inside the CompanyOS interface", className: "part-agent" },
  { label: "Company memory", detail: "Learns each company. Never forgets.", className: "part-memory" },
  { label: "Company operating system", detail: "Work, records, knowledge, workflows", className: "part-system" },
  { label: "Own computer", detail: "A persistent place to operate", className: "part-computer" },
  { label: "Open web", detail: "Research and real task execution", className: "part-web" },
  { label: "Task automation", detail: "Turns repeatable work into systems", className: "part-automation" },
];

const agentCapabilities = [
  {
    number: "01",
    eyebrow: "Company memory",
    title: "Learns each company. Never forgets.",
    body: "Customers, decisions, standards, history, and working preferences become durable company context. Every workspace keeps its own memory and boundaries.",
  },
  {
    number: "02",
    eyebrow: "Inside the interface",
    title: "Your words become structured company work.",
    body: "The agent lives inside CompanyOS, understands the screen you are viewing, and creates or updates Boards, cards, records, knowledge, schedules, and more from the same conversation.",
  },
  {
    number: "03",
    eyebrow: "Open-web operator",
    title: "Navigates the web like a real employee.",
    body: "It can research, compare, navigate websites, and complete browser-based tasks—then bring the evidence and results back into the company system.",
  },
  {
    number: "04",
    eyebrow: "Task automation",
    title: "Automates any repeatable process.",
    body: "Turn recurring research, follow-up, record work, and multi-step operations into supervised automations that keep running from the company’s own computer.",
  },
];

const layers = [
  {
    number: "01",
    eyebrow: "The intelligence",
    title: "A private AI employee",
    body: "Not a chatbot waiting in another tab. The agent lives inside CompanyOS, learns each company, sees the current screen, uses the open web, and executes or automates real work with approval.",
    accent: "violet",
  },
  {
    number: "02",
    eyebrow: "The company system",
    title: "One connected place to run the company",
    body: "Customer conversations, relationships, sales, advertising, projects, knowledge, and company records live as connected modules—not scattered subscriptions. The system can change as the company does.",
    accent: "cyan",
  },
  {
    number: "03",
    eyebrow: "The foundation",
    title: "A computer of its own",
    body: "The agent has a persistent place to work, remember, automate, and improve the software. The business gets infrastructure that belongs to it—not another rented seat.",
    accent: "lime",
  },
  {
    number: "04",
    eyebrow: "The reach",
    title: "The open web",
    body: "CompanyOS holds the durable context. The agent can also research, navigate, and operate browser-based tools—bringing the outside world back into one trusted company system.",
    accent: "coral",
  },
];

const modules = [
  ["Home", "The operating picture"],
  ["Inbox", "Every customer conversation"],
  ["Pipeline", "Sales work in motion"],
  ["Relationships", "People, companies, and history"],
  ["Ads", "Performance and guarded action"],
  ["Boards", "Flexible work management"],
  ["Knowledge", "The company source of truth"],
];

const sparkleStyles = Array.from({ length: 54 }, (_, index) => {
  const x = (index * 37 + 11) % 100;
  const y = (index * 61 + 7) % 100;
  const size = index % 9 === 0 ? 3 : index % 4 === 0 ? 2 : 1;
  return {
    "--x": `${x}%`,
    "--y": `${y}%`,
    "--size": `${size}px`,
    "--delay": `${(index % 12) * -0.43}s`,
    "--duration": `${3.8 + (index % 7) * 0.55}s`,
  } as CSSProperties;
});

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      hero.style.setProperty("--px-s", `${(x * 10).toFixed(2)}px`);
      hero.style.setProperty("--py-s", `${(y * 7).toFixed(2)}px`);
      hero.style.setProperty("--px-m", `${(x * 18).toFixed(2)}px`);
      hero.style.setProperty("--py-m", `${(y * 12).toFixed(2)}px`);
      hero.style.setProperty("--px-l", `${(x * 27).toFixed(2)}px`);
      hero.style.setProperty("--py-l", `${(y * 18).toFixed(2)}px`);
      hero.style.setProperty("--px-n", `${(x * -20).toFixed(2)}px`);
      hero.style.setProperty("--py-n", `${(y * -14).toFixed(2)}px`);
      hero.style.setProperty("--rx", `${(y * -2).toFixed(2)}deg`);
      hero.style.setProperty("--ry", `${(x * 2.5).toFixed(2)}deg`);
    };

    const onPointerLeave = () => {
      ["--px-s", "--py-s", "--px-m", "--py-m", "--px-l", "--py-l", "--px-n", "--py-n"].forEach((name) => hero.style.setProperty(name, "0px"));
      hero.style.setProperty("--rx", "0deg");
      hero.style.setProperty("--ry", "0deg");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => observer.observe(element));
    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);

    return () => {
      observer.disconnect();
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <main>
      <section className="hero" ref={heroRef} id="top">
        <div className="aurora aurora-one" aria-hidden="true" />
        <div className="aurora aurora-two" aria-hidden="true" />
        <div className="aurora aurora-three" aria-hidden="true" />
        <div className="sparkle-field" aria-hidden="true">
          {sparkleStyles.map((style, index) => (
            <span className="sparkle" style={style} key={index} />
          ))}
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="CompanyOS home">CompanyOS</a>
          <div className="nav-links">
            <a href="#system">The system</a>
            <a href="#work">How it works</a>
            <a href="#modules">Modules</a>
            <a href="#ownership">Ownership</a>
          </div>
          <span className="access-label"><i /> Early access</span>
        </nav>

        <div className="hero-copy">
          <p className="hero-kicker"><span>Private AI employee</span><i /><span>Company operating system</span></p>
          <h1>Your company.<br />Its own <em>intelligence.</em></h1>
          <p className="hero-lede">
            CompanyOS gives a private AI employee the memory, software, web access, and automations to understand and operate the business—all inside one company-owned system.
          </p>
        </div>

        <div className="system-stage" aria-label="The parts of CompanyOS working as one">
          <div className="stage-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="signal signal-one" aria-hidden="true" />
          <div className="signal signal-two" aria-hidden="true" />
          <div className="signal signal-three" aria-hidden="true" />
          <div className="signal signal-four" aria-hidden="true" />
          <div className="core-glow" aria-hidden="true" />

          <div className="company-core">
            <div className="core-header">
              <span>CompanyOS</span>
              <span className="core-status"><i /> Online</span>
            </div>
            <div className="core-body">
              <p className="core-context">Working across the company</p>
              <div className="agent-message">
                <span className="agent-avatar">AI</span>
                <p>I found two campaigns spending without qualified pipeline. I compared Ads, Pipeline, and the current budget policy.</p>
              </div>
              <div className="agent-action">
                <span>Prepared action</span>
                <strong>Pause Broad Prospecting</strong>
                <small>Waiting for your approval</small>
              </div>
              <div className="context-track" aria-label="Context checked">
                <span>Ads</span><i /><span>Pipeline</span><i /><span>Knowledge</span>
              </div>
            </div>
          </div>

          {systemParts.map((part) => (
            <div className={`system-part ${part.className}`} key={part.label}>
              <span className="part-orb" aria-hidden="true"><i /></span>
              <div><strong>{part.label}</strong><small>{part.detail}</small></div>
            </div>
          ))}
        </div>

        <a className="scroll-cue" href="#system"><span>Enter the system</span><i aria-hidden="true" /></a>
      </section>

      <section className="system-section" id="system">
        <div className="section-intro reveal">
          <p className="section-kicker">A different kind of stack</p>
          <h2>The agent is only powerful because the whole system belongs together.</h2>
          <p>Each layer makes the others more useful. Memory compounds. Software adapts. The agent gains the context and tools to become a real part of the company.</p>
        </div>

        <div className="agent-capabilities reveal" aria-label="Flagship AI employee capabilities">
          <div className="capability-heading">
            <p className="section-kicker">The agent advantage</p>
            <h3>It knows the company—and has the tools to do the work.</h3>
            <p>One continuous employee across company memory, daily operations, the open web, and automation.</p>
          </div>
          <div className="capability-grid">
            {agentCapabilities.map((capability) => (
              <article className="capability-item" key={capability.number}>
                <div className="capability-meta"><span>{capability.number}</span><i aria-hidden="true" /></div>
                <p>{capability.eyebrow}</p>
                <h4>{capability.title}</h4>
                <small>{capability.body}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="layer-stack">
          {layers.map((layer, index) => (
            <article className={`layer-card layer-${layer.accent} reveal`} key={layer.number} style={{ "--layer-top": `${20 + index * 15}px` } as CSSProperties}>
              <div className="layer-number">{layer.number}</div>
              <div className="layer-copy">
                <p>{layer.eyebrow}</p>
                <h3>{layer.title}</h3>
                <span>{layer.body}</span>
              </div>
              <div className="layer-visual" aria-hidden="true">
                <span className="layer-sphere"><i /><i /><i /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-heading reveal">
          <p className="section-kicker">One request. The whole company moves.</p>
          <h2>It doesn’t answer beside your work. It works <em>through</em> it.</h2>
        </div>

        <div className="workflow reveal">
          <div className="workflow-question">
            <span>You</span>
            <p>“Which campaigns are wasting money—and what should we do next?”</p>
          </div>
          <div className="workflow-rail" aria-hidden="true">
            <span className="rail-light" />
          </div>
          <div className="workflow-steps">
            <div><span>01</span><strong>Reads Ads</strong><small>Spend, CPA, pacing, provider state</small></div>
            <div><span>02</span><strong>Checks Pipeline</strong><small>Qualified value and won revenue</small></div>
            <div><span>03</span><strong>Uses Knowledge</strong><small>Budget policy and company context</small></div>
            <div><span>04</span><strong>Prepares action</strong><small>Exact change, impact, and limits</small></div>
          </div>
          <div className="workflow-result">
            <div>
              <span>Recommended action</span>
              <strong>Pause Broad Prospecting</strong>
              <small>$213 spent · 0 qualified opportunities</small>
            </div>
            <button type="button" aria-label="Example approval control">Approve change</button>
            <p>Nothing changes without a human confirmation.</p>
          </div>
        </div>

        <div className="structure-story reveal">
          <div className="structure-copy">
            <p className="section-kicker">Conversation becomes the interface</p>
            <h3>Describe the project. The agent builds the working structure.</h3>
            <p>A few sentences become durable company data: a Board, the right cards, practical checklists, owners, dependencies, and a schedule. Keep talking and the agent keeps the system current.</p>
            <div className="structure-prompt">
              <span>You</span>
              <p>“We’re opening a second location in eight weeks. Organize permits, suppliers, hiring, launch marketing, and opening-day readiness. Maya owns it.”</p>
            </div>
          </div>

          <div className="structure-output" aria-label="A project created inside CompanyOS from a conversation">
            <div className="structure-topbar">
              <span>Created inside Boards</span>
              <small><i /> Ready for review</small>
            </div>
            <div className="created-board-heading">
              <div>
                <span>New company project</span>
                <h4>Second location launch</h4>
              </div>
              <small>Owner · Maya Chen</small>
            </div>
            <div className="created-summary">
              <span><strong>14</strong> cards</span>
              <span><strong>37</strong> checklist items</span>
              <span><strong>5</strong> owners</span>
              <span><strong>8</strong> weeks scheduled</span>
            </div>
            <div className="created-columns">
              <div>
                <p>Plan</p>
                <article><strong>Confirm permit milestones</strong><small>6 checklist items · Maya</small></article>
                <article><strong>Finalize opening budget</strong><small>4 checklist items · Finance</small></article>
              </div>
              <div>
                <p>In progress</p>
                <article><strong>Build supplier shortlist</strong><small>Due week 2 · Operations</small></article>
                <article><strong>Draft hiring plan</strong><small>Due week 3 · Maya</small></article>
              </div>
              <div>
                <p>Scheduled</p>
                <article><strong>Launch local campaign</strong><small>Starts week 5 · Marketing</small></article>
                <article><strong>Opening-day readiness</strong><small>12 checklist items · Team</small></article>
              </div>
            </div>
            <div className="structure-update">
              <span>Later</span>
              <p>“The permit is delayed one week.”</p>
              <small>Schedule and dependent cards updated</small>
            </div>
          </div>
        </div>
      </section>

      <section className="development-section">
        <div className="development-aura" aria-hidden="true" />
        <div className="development-copy reveal">
          <p className="section-kicker">Development mode · Built to change</p>
          <h2>The same AI employee becomes your software development team.</h2>
          <p>Describe what the company needs in the same chat. The agent clarifies the workflow, coordinates the build, asks for decisions, and returns a tested improvement for review. Nothing reaches Production without your approval.</p>
        </div>

        <div className="development-console reveal">
          <div className="console-topbar">
            <span>CompanyOS</span>
            <strong>Development mode</strong>
            <span className="console-ready"><i /> Agent connected</span>
          </div>
          <div className="console-grid">
            <div className="console-history">
              <p>Development history</p>
              <h3>Ready for the next improvement</h3>
              <div className="history-line active"><i /><span><strong>Vendor onboarding</strong><small>New workflow · in progress</small></span></div>
              <div className="history-line"><i /><span><strong>Unified customer inbox</strong><small>Saved improvement</small></span></div>
              <div className="history-line"><i /><span><strong>Ads action controls</strong><small>Saved improvement</small></span></div>
            </div>
            <div className="console-chat">
              <div className="chat-user">Add a vendor onboarding flow with owner approval and document collection.</div>
              <div className="chat-agent"><span>AI</span><p>I’ll coordinate this as your software team: a connected module sharing people, files, permissions, activity, and company memory. I’ll bring back a working version for review.</p></div>
              <div className="build-progress">
                <span><i /> Workflow clarified</span>
                <span><i /> Records and permissions built</span>
                <span><i /> Desktop and mobile UI created</span>
                <span className="working"><i /> Testing and preparing review</span>
              </div>
            </div>
            <div className="new-module">
              <span>New company capability</span>
              <div className="module-glyph" aria-hidden="true"><i /><i /><i /></div>
              <h3>Vendor onboarding</h3>
              <p>Connected to Relationships, Boards, Knowledge, and files.</p>
              <small><i /> Appears inside your CompanyOS</small>
            </div>
          </div>
        </div>
      </section>

      <section className="modules-section" id="modules">
        <div className="modules-heading reveal">
          <p className="section-kicker">A useful system from day one</p>
          <h2>Every part speaks the same company language.</h2>
          <p>The modules are distinct working spaces, connected by shared context, permissions, activity, and the private agent.</p>
        </div>
        <div className="module-marquee" aria-label="CompanyOS modules">
          <div className="module-track">
            {[...modules, ...modules].map(([name, detail], index) => (
              <div className="module-item" key={`${name}-${index}`} aria-hidden={index >= modules.length}>
                <span>{String((index % modules.length) + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <small>{detail}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="workspace-story reveal">
          <div className="workspace-copy">
            <p className="section-kicker">One installation. Many companies.</p>
            <h3>Every workspace keeps its own memory, work, identity, and files.</h3>
            <p>The agent follows the company you are in. Shared administration stays centralized. Business context stays inside its boundary.</p>
          </div>
          <div className="workspace-universe" aria-label="Three separate company workspaces">
            <div className="workspace-orbit orbit-a"><span>North & Coast<small>Retail</small></span></div>
            <div className="workspace-orbit orbit-b"><span>Vela Studio<small>Design</small></span></div>
            <div className="workspace-orbit orbit-c"><span>Fieldwork<small>Services</small></span></div>
            <div className="workspace-center"><span>CompanyOS<small>Shared administration</small></span></div>
          </div>
        </div>
      </section>

      <section className="ownership-section" id="ownership">
        <div className="ownership-stars" aria-hidden="true">
          {sparkleStyles.slice(0, 28).map((style, index) => <span className="sparkle" style={style} key={index} />)}
        </div>
        <div className="ownership-copy reveal">
          <p className="section-kicker">The compounding advantage</p>
          <h2>Your software.<br />Your data.<br />Your <em>AI employee.</em></h2>
          <p>CompanyOS keeps the system close to the business and the business in control—without locking its future to one SaaS vendor or one AI model.</p>
        </div>
        <div className="ownership-proof reveal">
          <div><span>01</span><strong>Self-hosted</strong><small>Runs on company-controlled infrastructure.</small></div>
          <div><span>02</span><strong>Private by design</strong><small>Company records stay in the company system.</small></div>
          <div><span>03</span><strong>Model freedom</strong><small>Choose the AI provider and model that fits.</small></div>
          <div><span>04</span><strong>Built to endure</strong><small>Backups, encrypted credentials, and signed updates.</small></div>
        </div>
        <div className="closing-mark reveal">
          <p className="closing-brand">CompanyOS</p>
          <h3>Not another SaaS.<br />A company system that becomes yours.</h3>
          <small>Early access · By approval</small>
        </div>
      </section>
    </main>
  );
}
