"use strict";

import Link from "next/link";
import { t } from "@/lib/translations";
import type { Lang, Translations } from "@/lib/translations";

export function Footer({ lang, T }: { lang: Lang; T: Translations }) {
  const year = new Date().getFullYear();
  const phone = "+39 333 000 0000";
  const email = "info@marinelysmarte.it";

  return (
    <footer className="border-t border-border bg-brand-navy text-white-90">
      <div className="px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-[22px] font-serif font-bold text-white tracking-tight">MM</span>
            <span className="font-serif font-semibold text-white">Marinelys<span className="text-brand-gold">Marte</span></span>
            <p className="mt-3 text-sm text-brand-navy/40 max-w-xs leading-relaxed">
              Agente immobiliare iscritta all'albo e al ruolo — CCIAA Bologna.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contatti</h3>
            <ul className="space-y-2 text-sm text-brand-navy/60">
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-brand-gold transition-colors">
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-brand-gold transition-colors">
                  {email}
                </a>
              </li>
              <li>Bologna, Italia</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Pagine</h3>
            <ul className="space-y-2 text-sm text-brand-navy/60">
              <li>
                <Link href="#faq" className="hover:text-brand-gold transition-colors">
                  {T.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/brandbook" className="hover:text-brand-gold transition-colors">
                  {T.nav.brandbook}
                </Link>
              </li>
              <li>
                <a href="/privacy" className="hover:text-brand-gold transition-colors">
                  {T.footer.privacy}
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-brand-gold transition-colors">
                  {T.footer.cookies}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-navy/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-navy/50">
          <p>
            {T.footer.legal}. {year}. Tutti i diritti riservati.
          </p>
          <p className="text-center md:text-left">
            P.IVA 00000000000 • REA BO-000000
          </p>
        </div>
      </div>
    </footer>
  );
}
