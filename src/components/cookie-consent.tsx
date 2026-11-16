"use client";

import { useEffect, useState } from "react";
import type { Lang, Translations } from "@/lib/translations";

const COOKIE_KEY = "marte_cookie_consent";

export function CookieConsent({ lang, T }: { lang: Lang; T: Translations }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent !== "true" && consent !== "false") setShown(true);
  }, []);

  function choose(value: "true" | "false") {
    localStorage.setItem(COOKIE_KEY, value);
    setShown(false);
  }

  if (!shown) return null;

  return (
    <div
      className="relative z-40 bg-brand-navy px-4 py-4 text-white md:px-8"
      role="region"
      aria-label={T.cookie.title}
      lang={lang}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-white/80">
          {T.cookie.body}{" "}
          <a
            href="/cookie-policy"
            className="text-brand-gold underline underline-offset-2 hover:text-white"
          >
            {T.cookie.details}
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("false")}
            className="rounded border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            {T.cookie.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("true")}
            className="rounded bg-brand-gold px-4 py-2 text-sm font-bold text-brand-navy hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {T.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
