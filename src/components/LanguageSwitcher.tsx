"use client";

import { useState, useRef, useEffect } from "react";
import { Locale, localeLabels, LOCALES } from "@/lib/i18n";
import { useI18n } from "@/contexts/I18nContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        onClick={() => setOpen(!open)}
        aria-label="Change language"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown">
          {LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              className={`lang-option${locale === l ? " active" : ""}`}
              onClick={() => { setLocale(l as Locale); setOpen(false); }}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
