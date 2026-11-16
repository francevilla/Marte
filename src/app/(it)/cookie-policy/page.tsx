import Link from "next/link";
import type { Metadata } from "next";
import { CookieReset } from "@/components/cookie-reset";
import { buildLegalMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLegalMetadata({
  path: "/cookie-policy/",
  title: "Cookie policy",
  description:
    "Cookie policy di Marinelys Marte: cosa memorizza il sito e come gestire le preferenze.",
});

export default function CookiePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-ink">
      <main className="mx-auto w-full max-w-2xl flex-grow px-4 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-brand-navy underline underline-offset-4 hover:text-brand-goldInk"
        >
          ← Torna al sito
        </Link>

        <h1 className="mt-6 text-[36px] font-serif font-bold text-brand-navy">
          Cookie policy
        </h1>
        <p className="mt-2 text-sm text-[#64748B]">
          Ultimo aggiornamento: novembre 2026
        </p>

        <div className="mt-8 space-y-6 leading-relaxed text-[#475569]">
          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              1. Cosa usiamo
            </h2>
            <p className="mt-2">
              Il sito utilizza esclusivamente strumenti tecnici necessari al suo
              funzionamento. Non installiamo cookie di profilazione, cookie
              pubblicitari o cookie di terze parti per il tracciamento.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              2. Memorizzazioni tecniche
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-brand-cream">
                    <th className="px-3 py-2 pr-4 font-semibold text-ink">
                      Nome
                    </th>
                    <th className="px-3 py-2 pr-4 font-semibold text-ink">
                      Tipo
                    </th>
                    <th className="px-3 py-2 font-semibold text-ink">
                      Funzione
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 pr-4">marte_cookie_consent</td>
                    <td className="px-3 py-2 pr-4">localStorage</td>
                    <td className="px-3 py-2">
                      Ricorda la scelta espressa sul banner cookie. Dura fino
                      alla cancellazione manuale.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              3. Come gestire le preferenze
            </h2>
            <p className="mt-2">
              Puoi modificare la scelta in qualsiasi momento con il pulsante qui
              sotto, oppure cancellando i dati del sito dalle impostazioni del
              browser.
            </p>
            <div className="mt-4">
              <CookieReset />
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              4. Titolare
            </h2>
            <p className="mt-2">
              Marinelys Marte — Agente immobiliare, Bologna. Per qualsiasi
              richiesta:{" "}
              <strong>[DA COMPLETARE: email del titolare]</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
