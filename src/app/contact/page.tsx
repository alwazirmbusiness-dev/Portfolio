"use client";

import { useI18n } from "@/contexts/I18nContext";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <main>
      <div className="page-shell">
        <section className="page-header animate-rise">
          <p className="eyebrow">{t.contactPage.kicker}</p>
          <h1>{t.contactPage.title}</h1>
          <p>{t.contactPage.desc}</p>
        </section>

        <div className="services-grid" style={{ marginTop: 0 }}>
          <div className="service-card animate-rise">
            <div className="service-icon">📧</div>
            <h3>{t.contactPage.cards[0].title}</h3>
            <p>{t.contactPage.cards[0].body}</p>
            <a href={t.contactPage.cards[0].href} className="read-more">{t.contactPage.cards[0].cta} →</a>
          </div>
          <div className="service-card animate-rise" style={{ animationDelay: "80ms" }}>
            <div className="service-icon">👨‍💻</div>
            <h3>{t.contactPage.cards[1].title}</h3>
            <p>{t.contactPage.cards[1].body}</p>
            <a href={t.contactPage.cards[1].href} target="_blank" rel="noreferrer" className="read-more">{t.contactPage.cards[1].cta} →</a>
          </div>
          <div className="service-card animate-rise" style={{ animationDelay: "160ms" }}>
            <div className="service-icon">🔗</div>
            <h3>{t.contactPage.cards[2].title}</h3>
            <p>{t.contactPage.cards[2].body}</p>
            <a href={t.contactPage.cards[2].href} target="_blank" rel="noreferrer" className="read-more">{t.contactPage.cards[2].cta} →</a>
          </div>
        </div>
      </div>
    </main>
  );
}
