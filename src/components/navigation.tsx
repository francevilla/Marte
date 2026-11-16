"use client";

import Link from "next/link";
import { useState } from "react";
import { t } from "@/lib/translations";
import type { Lang, Translations } from "@/lib/translations";

export function Navigation({ lang, T }: { lang: Lang; T: Translations }) {
  const [open, setOpen] = useState(false);
  const sections = [
    { key: "home", href: "#hero", label: T.nav.home },
    { key: "about", href: "#about", label: T.nav.about },
    { key: "services", href: "#services", label: T.nav.services },
    { key: "process", href: "#process", label: T.nav.process },
    { key: "faq", href: "#faq", label: T.nav.faq },
    { key: "contact", href: "#contact", label: T.nav.contact },
    { key: "brandbook", href: "/brandbook", label: T.nav.brandbook },
  ];

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 bg-background/95 backdrop-blur border-b border-border" aria-label="Navigazione principale">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link
          href={lang === "it" ? "/" : `/${lang}`}
          className="flex items-center gap-2"
          aria-label="Homepage"
        >
          <span className="text-[22px] font-serif font-bold text-ink tracking-tight">MM</span>
          <span className="font-serif font-semibold text-ink">Marinelys<span className="text-brand-gold">Marte</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-ink">
          {sections.map((s) => (
            <Link
              key={s.key}
              href={s.href}
              className="hover:text-brand-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-brand-gold text-ink font-bold text-sm"
            aria-label="Contatti"
            onClick={() => setOpen(false)}
          >
            ✉
          </Link>
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border text-ink"
            aria-label="Apri menu"
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-4 px-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {sections.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                className="block px-3 py-2 text-sm font-medium text-ink hover:bg-brand-gold/10 hover:text-brand-gold rounded"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
