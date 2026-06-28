"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="top-nav">
        <Link href="/" className="brand">
          {t.hero.Brand}
        </Link>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          <Link href="/" onClick={closeMenu}>{t.nav.home}</Link>
          <Link href="/#services" onClick={closeMenu}>{t.nav.services}</Link>
          <Link href="/projects" onClick={closeMenu}>{t.nav.projects}</Link>
          <Link href="/about" onClick={closeMenu}>{t.nav.about}</Link>
          <Link href="/contact" className="btn-contact" onClick={closeMenu}>
            {t.nav.contact}
          </Link>
          <div className="nav-lang-mobile">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="nav-right-desktop">
          <LanguageSwitcher />
        </div>
        <div className="nav-lang-topbar">
          <LanguageSwitcher />
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger${menuOpen ? " active" : ""}`} />
        </button>
      </nav>

      {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}

      {children}

      <footer className="site-footer">
        <div className="site-shell">
          <p>{t.footer}</p>
        </div>
      </footer>
    </>
  );
}
