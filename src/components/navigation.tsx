"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Lang, Translations } from "@/lib/translations";

export function Navigation({ lang, T }: { lang: Lang; T: Translations }) {
  const [open, setOpen] = useState(false);
  const home = lang === "it" ? "/" : `/${lang}`;
  const sections = [
    { key: "home", href: "#hero", label: T.nav.home },
    { key: "about", href: "#about", label: T.nav.about },
    { key: "services", href: "#services", label: T.nav.services },
    { key: "process", href: "#process", label: T.nav.process },
    { key: "faq", href: "#faq", label: T.nav.faq },
    { key: "contact", href: "#contact", label: T.nav.contact },
  ];

  return (
    <nav
      className="relative z-50 bg-white"
      aria-label={T.nav.main}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href={home}
          className="flex items-baseline gap-2"
          aria-label="Homepage"
        >
          <span className="text-[20px] font-serif font-bold tracking-tight text-ink">
            MM
          </span>
          <span className="font-serif text-lg font-semibold text-ink">
            Marinelys<span className="text-brand-goldInk">Marte</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
          {sections.map((s) => (
            <Link
              key={s.key}
              href={s.href}
              className="transition-colors hover:text-brand-goldInk"
            >
              {s.label}
            </Link>
          ))}
          <LanguageSwitcher lang={lang} label={T.nav.language} />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            {T.nav.contact}
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
            aria-label={open ? T.nav.closeMenu : T.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5.5h14M3 10h14M3 14.5h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full bg-white px-4 py-3 md:hidden">
            {sections.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                className="block px-3 py-2 text-sm font-medium text-ink hover:text-brand-goldInk"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between px-3 py-2">
              <span className="text-sm text-[#64748B]">{T.nav.language}</span>
              <LanguageSwitcher lang={lang} label={T.nav.language} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
