import Link from "next/link";
import type { Metadata } from "next";
import { contact, emailHref } from "@/lib/contact";
import { buildLegalMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLegalMetadata({
  path: "/privacy/",
  title: "Informativa privacy",
  description:
    "Informativa sul trattamento dei dati personali di Marinelys Marte, agente immobiliare a Bologna.",
});

export default function PrivacyPage() {
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
          Informativa privacy
        </h1>
        <p className="mt-2 text-sm text-[#64748B]">
          Ultimo aggiornamento: novembre 2026
        </p>

        <div className="mt-8 space-y-6 leading-relaxed text-[#475569]">
          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              1. Titolare del trattamento
            </h2>
            <p className="mt-2">
              Marinelys Marte, agente immobiliare iscritta all&apos;albo e al
              ruolo — CCIAA Bologna. Sede legale:{" "}
              <strong>[DA COMPLETARE: indirizzo]</strong> — P.IVA{" "}
              {contact.vat}. Email:{" "}
              <a href={emailHref} className="underline underline-offset-2">
                {contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              2. Dati raccolti
            </h2>
            <p className="mt-2">
              Tramite il modulo di contatto raccogliamo nome e cognome, numero
              di telefono, indirizzo email (facoltativo) e il messaggio che
              scegli di inviare. Il sito non richiede la creazione di un account
              e non raccoglie dati particolari.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              3. Finalità e base giuridica
            </h2>
            <p className="mt-2">
              I dati sono trattati per rispondere alla tua richiesta e
              ricontattarti in merito all&apos;immobile (art. 6, par. 1, lett. b
              GDPR — misure precontrattuali), per adempiere a obblighi di legge
              (art. 6, par. 1, lett. c) e, se necessario, per il legittimo
              interesse alla gestione delle comunicazioni (art. 6, par. 1, lett.
              f).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              4. Conservazione
            </h2>
            <p className="mt-2">
              I dati sono conservati per il tempo necessario a gestire la
              richiesta e gli eventuali rapporti successivi:{" "}
              <strong>[DA COMPLETARE: periodo, ad es. 24 mesi]</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              5. Destinatari
            </h2>
            <p className="mt-2">
              I dati possono essere trattati dal fornitore di hosting e dal
              servizio tecnico che recapita il modulo, in qualità di
              responsabili del trattamento. Non vengono ceduti a terzi per
              finalità di marketing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              6. I tuoi diritti
            </h2>
            <p className="mt-2">
              Puoi chiedere accesso, rettifica, cancellazione, limitazione,
              opposizione e portabilità dei dati scrivendo a{" "}
              <a href={emailHref} className="underline underline-offset-2">
                {contact.email}
              </a>
              . Hai inoltre il diritto di proporre reclamo al Garante per la
              protezione dei dati personali.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-ink">
              7. Cookie
            </h2>
            <p className="mt-2">
              Per il dettaglio dei cookie e delle memorizzazioni tecniche
              consulta la{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2"
              >
                cookie policy
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
