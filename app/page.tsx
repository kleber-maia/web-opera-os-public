"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowUp, ArrowRight, Check, DesktopTower, CloudArrowUp, Stack, UsersThree, Pause, Play, Table, Database, Files, Plus, CaretDown } from "@phosphor-icons/react";
import "@fontsource-variable/geist";
import "@fontsource/anton/latin-400.css";
import { COPY, normalizeLocale } from "./i18n";
import type { Locale } from "./i18n";

function initialLocale(): Locale {
  const url = normalizeLocale(new URLSearchParams(window.location.search).get("lang"));
  if (url) return url;
  try { const saved = normalizeLocale(localStorage.getItem("companyos-locale") ?? localStorage.getItem("operaos-locale")); if (saved) return saved; } catch { /* Storage is optional. */ }
  return normalizeLocale(navigator.language) ?? "en";
}
const partIcons = [DesktopTower, Stack, UsersThree];

// CSS device shells keep the supplied screenshots intact and easy to replace.
function ProductDevices({ desktop, alt, phoneAlt }: { desktop: string; alt: string; phoneAlt?: string }) {
  return <div className={`device-composition${phoneAlt ? " device-pair" : ""}`}>
    <div className="device-laptop"><div className="laptop-lid"><div className="laptop-display"><img src={desktop} alt={alt} loading="lazy" width="4096" height="2124" /></div></div><div className="laptop-base" /></div>
    {phoneAlt && <div className="device-phone"><div className="phone-display"><img src="/product/inbox-mobile.png" alt={phoneAlt} loading="lazy" width="864" height="1884" /></div><span className="phone-island" aria-hidden="true" /></div>}
  </div>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [activePart, setActivePart] = useState(1);
  const [paused, setPaused] = useState(false);
  const page = useRef<HTMLDivElement>(null);
  const copy = COPY[locale];
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = "editorial";
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", copy.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy.meta.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", locale === "pt-BR" ? "pt_BR" : locale === "es-419" ? "es_419" : "en_US");
    const url = new URL(window.location.href); url.searchParams.set("lang", locale); window.history.replaceState({}, "", url);
    try { localStorage.setItem("companyos-locale", locale); } catch { /* Storage is optional. */ }
  }, [locale, copy]);
  useEffect(() => {
    if (!page.current || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.target.classList.contains("reveal") && entry.isIntersecting) entry.target.classList.add("visible");
      if (entry.target.classList.contains("motion-art")) entry.target.classList.toggle("in-view", entry.isIntersecting);
    }), { threshold: .06 });
    page.current.querySelectorAll<HTMLElement>(".reveal, .motion-art").forEach(element => { if (element.classList.contains("reveal")) element.classList.add("will-reveal"); observer.observe(element); });
    const visibility = () => { page.current?.classList.toggle("document-hidden", document.hidden); };
    document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return <div ref={page} className="site" data-paused={paused}>
    <a className="skip-link" href="#content">{copy.skip}</a>
    <header className="site-header wrap" id="top">
      <a className="brand" href="#top" aria-label="CompanyOS">Company<span>OS</span></a>
      <nav aria-label={locale === "en" ? "Main navigation" : locale === "pt-BR" ? "Navegação principal" : "Navegación principal"}>
        {copy.nav.map((label, index) => <a key={index} href={["#ownership", "#system", "#work"][index]}>{label}</a>)}
      </nav>
      <label className="language"><span className="sr-only">{copy.language}</span><select aria-label={copy.language} value={locale} onChange={event => setLocale(event.target.value as Locale)}><option value="en">EN</option><option value="pt-BR">PT</option><option value="es-419">ES</option></select><CaretDown size={13} aria-hidden="true" /></label>
    </header>
    <main id="content">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-main">
          <div className="hero-copy"><h1 id="hero-title">{copy.hero.title.map(line => <span key={line}>{line}</span>)}</h1><p>{copy.hero.body}</p></div>
          <div className="hero-art motion-art" data-focus={activePart}>
            <div className="hero-art-camera"><picture><source media="(max-width: 650px)" srcSet="/art/companyos-sculpture-mobile.jpg" /><img src="/art/companyos-sculpture.jpg" alt={copy.hero.scene} width="1536" height="1024" fetchPriority="high" /></picture></div>
            <button className="motion-toggle" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? copy.hero.play : copy.hero.pause} aria-pressed={paused}>{paused ? <Play size={16} weight="fill" /> : <Pause size={16} weight="fill" />}</button>
          </div>
        </div>
        <div className="hero-index" role="group" aria-label={copy.hero.intro}>
          {copy.hero.tabs.map((label, index) => { const Icon = partIcons[index]; return <button key={index} type="button" className={activePart === index ? "selected" : ""} aria-pressed={activePart === index} onClick={() => setActivePart(index)}><Icon size={22} aria-hidden="true" /><span>{label}</span><ArrowUpRight size={18} aria-hidden="true" /></button>; })}
        </div>
        <p className="hero-context" aria-live="polite">{copy.hero.descriptions[activePart]}</p>
      </section>

      <section className="foundation inverse" id="ownership" aria-labelledby="foundation-title"><div className="wrap foundation-layout">
        <div className="foundation-heading reveal"><h2 id="foundation-title">{copy.hardware.title}</h2><div className="ownership-signature" aria-hidden="true"><DesktopTower size={32} /><span>CompanyOS</span></div></div>
        <div className="foundation-copy reveal"><p className="section-body">{copy.hardware.body}</p><ul className="foundation-points">{copy.hardware.points.map(([title, body], i) => { const Icon = [DesktopTower, CloudArrowUp, Stack][i]; return <li key={title}><Icon size={20} aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></li>; })}</ul></div>
      </div></section>

      <section className="system-section wrap section-space" id="system" aria-labelledby="system-title">
        <div className="system-intro reveal"><p className="eyebrow">{copy.system.kicker}</p><h2 id="system-title">{copy.system.title}</h2><p className="section-body">{copy.system.body}</p></div>
        <div className="system-body" id="modules">
          <div className="module-composition reveal"><div className="module-pieces">{copy.modules.items.map(([name], index) => <div className={`module-piece piece-${index}`} key={index}><span>{name}</span><Plus size={19} aria-hidden="true" /></div>)}<div className="module-open"><Plus size={34} aria-hidden="true" /></div></div></div>
          <div className="module-copy reveal"><h3>{copy.modules.title}</h3><p>{copy.modules.body}</p><p className="module-note">{copy.modules.final}</p><figure className="product-proof"><ProductDevices desktop="/product/knowledge-desktop.png" alt={copy.system.alt[0]} phoneAlt={copy.system.alt[1]} /><figcaption>{copy.system.caption}</figcaption></figure></div>
        </div>
        <div className="import-section reveal"><div className="import-copy"><h3>{copy.system.importTitle}</h3><p>{copy.system.importBody}</p></div><div className="import-flow"><div className="import-sources">{copy.system.sources.map((name, i) => { const Icon = [Table, Database, Files][i]; return <span key={name}><Icon size={18} aria-hidden="true" />{name}</span>; })}</div><ArrowRight className="import-arrow" size={29} aria-hidden="true" /><div className="import-end"><span>CompanyOS</span><small>{copy.system.destination}</small></div></div></div>
      </section>

      <section className="team-section inverse" id="work" aria-labelledby="team-title"><div className="wrap">
        <div className="team-intro"><div className="team-art motion-art"><img src="/art/companyos-team.jpg" alt="OS Agent + OS Dev" width="1536" height="1024" loading="lazy" /></div><div className="team-heading reveal"><p className="eyebrow">{copy.team.kicker}</p><h2 id="team-title">{copy.team.title}</h2><p className="section-body">{copy.team.body}</p></div></div>
        <div className="team-roles">{[false, true].map(dev => <article className="team-role reveal" key={String(dev)}><div className="role-title"><span className="agent-name">{dev ? "OS Dev" : "OS Agent"}</span><h3>{dev ? copy.team.devRole : copy.team.agentRole}</h3></div><p>{dev ? copy.team.devBody : copy.team.agentBody}</p><ul>{(dev ? copy.team.devTasks : copy.team.agentTasks).map(task => <li key={task}><Check size={15} aria-hidden="true" />{task}</li>)}</ul></article>)}</div><p className="team-note reveal">{copy.team.note}</p>
      </div></section>

      <section className="story-section wrap section-space" aria-labelledby="story-title"><div className="story-heading reveal"><h2 id="story-title">{copy.story.title}</h2><p className="section-body">{copy.story.body}</p></div><div className="story-layout"><div className="story-request reveal"><blockquote>{copy.story.request}</blockquote><figure className="story-proof"><ProductDevices desktop="/product/calendar-desktop.png" alt={copy.system.alt[2]} /><figcaption>{copy.story.caption}</figcaption></figure></div><div className="story-steps reveal">{copy.story.steps.map(([title, body]) => <div key={title}><ArrowUpRight size={22} aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></div></section>

      <section className="closing inverse" id="beta" aria-labelledby="closing-title"><div className="wrap"><h2 id="closing-title">{copy.closing.title.map(line => <span key={line}>{line}</span>)}</h2><div className="closing-bottom"><p>{copy.closing.body}</p><span className="closing-os" aria-hidden="true">OS</span></div></div></section>
    </main>
    <footer className="site-footer wrap"><a className="brand" href="#top">Company<span>OS</span></a><p>{copy.closing.note}</p><a className="back-top" href="#top" aria-label={copy.closing.top}><ArrowUp size={22} /></a></footer>
  </div>;
}
