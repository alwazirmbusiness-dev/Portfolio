"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const { t, locale } = useI18n();

  return (
    <main>
      {/* ── Hero ── */}
      <div className="site-shell">
        <section className="hero-section">
          {/* Left */}
          <div className="hero-left">
            <h1 className={`hi-line${locale !== "en" ? " hi-line-compact" : ""}`}>
              {t.hero.greetingLead}
              <br />
              <span>{t.hero.name}</span>
            </h1>
            <div className="role-row">
              <span className="role-line"></span>
              {t.hero.role}
            </div>
            <p className="hero-desc">{t.hero.desc}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">{t.hero.ctaTalk} ↗</Link>
              <a href="/cv.pdf" className="btn btn-outline" download>{t.hero.ctaCv} ↓</a>
            </div>
            <div className="social-strip">
              <span className="social-divider"></span>
              <a href="https://github.com/alwazirmbusiness-dev" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/alwazirtech-dev" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:alwazirm.business@gmail.com">Email</a>
            </div>
            <div className="spoken-languages">
              <p className="spoken-title">{t.hero.spokenTitle}</p>
              <div className="spoken-pills">
                {t.hero.spoken.map((lang) => (
                  <span key={lang} className="spoken-pill">{lang}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Center photo */}
          <div className="hero-photo-col">
            <div className="hero-photo-wrap">
              <div className="hero-photo-glow"></div>
              <Image
                src="/images/portfoliopic.png"
                alt="Alwaz — Full-Stack Developer"
                width={680}
                height={900}
                priority
                style={{ objectFit: "contain", objectPosition: "bottom", height: "100%", width: "auto" }}
              />
            </div>
          </div>

          {/* Right stats */}
          <div className="hero-right">
            <div className="stat-item">
              <p className="stat-num">1+</p>
              <p className="stat-label">{t.hero.years}</p>
            </div>
            <div className="stat-item">
              <p className="stat-num">10+</p>
              <p className="stat-label">{t.hero.delivered}</p>
            </div>
            <div className="stat-item">
              <p className="stat-num">5+</p>
              <p className="stat-label">{t.hero.mastered}</p>
            </div>
            <div className="tech-strip">
              {["Java", "Next.js", "XML", "Docker"].map((t) => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Services ── */}
      <section className="section" id="services">
        <div className="site-shell">
          <div className="services-header">
            <div>
              <p className="section-kicker">{t.services.kicker}</p>
              <h2 className="section-title">{t.services.titleA}<br />{t.services.titleB}</h2>
            </div>
            <div className="services-right">
              <p className="services-desc">{t.services.desc}</p>
              <Link href="/projects" className="btn-all-service">{t.services.allProjects} →</Link>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎵</div>
              <h3>{t.services.cards[0].title}</h3>
              <p>{t.services.cards[0].body}</p>
              <span className="read-more">{t.services.cards[0].cta} →</span>
            </div>
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>{t.services.cards[1].title}</h3>
              <p>{t.services.cards[1].body}</p>
              <span className="read-more">{t.services.cards[1].cta} →</span>
            </div>
            <div className="service-card">
              <div className="service-icon">🐳</div>
              <h3>{t.services.cards[2].title}</h3>
              <p>{t.services.cards[2].body}</p>
              <span className="read-more">{t.services.cards[2].cta} →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section className="section" id="portfolio">
        <div className="site-shell">
          <div className="portfolio-header">
            <p className="section-kicker" style={{ justifyContent: "center" }}>{t.portfolio.kicker}</p>
            <h2 className="section-title">
              <span className="sparkle">✦</span> {t.portfolio.title} <span className="sparkle">✦</span>
            </h2>
            <p className="portfolio-desc">{t.portfolio.desc}</p>
          </div>

          <div className="filter-tabs">
            {t.portfolio.tabs.map((tab, idx) => (
              <button key={tab} className={`filter-tab${idx === 0 ? " active" : ""}`}>{tab}</button>
            ))}
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
