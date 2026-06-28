"use client";

import { useI18n } from "@/contexts/I18nContext";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main>
      <div className="page-shell">
        <section className="page-header animate-rise">
          <p className="eyebrow">{t.aboutPage.kicker}</p>
          <h1>{t.aboutPage.title}</h1>
          <p>{t.aboutPage.desc}</p>
        </section>

        <section className="services-grid" style={{ marginTop: 0 }}>
          <div className="service-card animate-rise">
            <div className="service-icon">⚙️</div>
            <h3>{t.aboutPage.cards[0].title}</h3>
            <p>{t.aboutPage.cards[0].body}</p>
          </div>
          <div className="service-card animate-rise" style={{ animationDelay: "80ms" }}>
            <div className="service-icon">🖥️</div>
            <h3>{t.aboutPage.cards[1].title}</h3>
            <p>{t.aboutPage.cards[1].body}</p>
          </div>
          <div className="service-card animate-rise" style={{ animationDelay: "160ms" }}>
            <div className="service-icon">🔧</div>
            <h3>{t.aboutPage.cards[2].title}</h3>
            <p>{t.aboutPage.cards[2].body}</p>
          </div>
        </section>

        <div className="content-panel animate-rise" style={{ animationDelay: "200ms" }}>
          <h2>{t.aboutPage.howTitle}</h2>
          <ul>
            {t.aboutPage.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
