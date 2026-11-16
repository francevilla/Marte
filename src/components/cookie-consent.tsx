"use client";

import { useEffect, useState } from "react";
import { t } from "@/lib/translations";
import type { Lang, Translations } from "@/lib/translations";

const COOKIE_KEY = "marte_cookie_consent";

export function CookieConsent({ lang, T }: { lang: Lang; T: Translations }) {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent === "true") setShown(false);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "true");
    setShown(false);
  }

  if (!shown) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] bg-[#1B2A4A] text-white px-4 py-6 md:px-8 lg:max-w-2xl lg:mx-auto lg:rounded-t-2xl lg:bottom-8 lg:left-[50%] lg:translate-x-[-50%] shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
      role="dialog"
      aria-modal="true"
      aria-label="Informativa cookie"
    >
      <div className="max-w-2xl mx-auto flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-grow">
          <p className="text-sm text-[#C9A96A]/90 font-medium mb-1">
            {T.footer.cookies}
          </p>
          <p className="text-sm text-[#E2E8F0] leading-relaxed">
            Usiamo cookie tecnici necessari al funzionamento del sito. Puoi
            gestire le preferenze in qualsiasi momento dalla pagina cookie
            policy.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <a
            href="/cookie-policy"
            className="text-sm text-[#C9A96A] underline underline-offset-2 hover:text-white transition-colors"
          >
            Dettagli
          </a>
          <button
            onClick={accept}
            className="px-5 py-2 bg-brand-gold text-[#1B2A4A] font-bold rounded text-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
