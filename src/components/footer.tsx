import Link from "next/link";
import { contact, emailHref, phoneHref } from "@/lib/contact";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Lang, Translations } from "@/lib/translations";

export function Footer({ lang, T }: { lang: Lang; T: Translations }) {
  const year = new Date().getFullYear();
  const home = lang === "it" ? "/" : `/${lang}`;

  return (
    <footer className="bg-brand-navy text-white" lang={lang}>
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href={home} className="flex items-baseline gap-2">
              <span className="text-[20px] font-serif font-bold tracking-tight">
                MM
              </span>
              <span className="font-serif text-lg font-semibold">
                Marinelys<span className="text-brand-gold">Marte</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {T.footer.albo}
            </p>
            <div className="mt-4">
              <LanguageSwitcher
                lang={lang}
                label={T.nav.language}
                variant="dark"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">
              {T.footer.contacts}
            </h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={phoneHref}
                  className="transition-colors hover:text-brand-gold"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={emailHref}
                  className="transition-colors hover:text-brand-gold"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                {contact.locality}, {contact.countryName}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">
              {T.footer.pages}
            </h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="#faq"
                  className="transition-colors hover:text-brand-gold"
                >
                  {T.nav.faq}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-brand-gold"
                >
                  {T.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="transition-colors hover:text-brand-gold"
                >
                  {T.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>
            {T.footer.legal}. {year}. Tutti i diritti riservati.
          </p>
          <p className="text-center md:text-left">
            P.IVA {contact.vat} • REA {contact.rea}
          </p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/50">
          Foto: «Bologna, Str. Maggiore, portico» e «Bologna, Via Irnerio,
          portico» di MenkinAlRire, CC BY-SA 4.0; «Bologna Piazza Maggiore 1»
          di Zairon, CC0 — via Wikimedia Commons.
        </p>
      </div>
    </footer>
  );
}
