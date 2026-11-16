# Audit del sito — Marinelys Marte

**Data:** 16 novembre 2026
**Repository:** https://github.com/francevilla/Marte.git — branch `feature/sito-marite-landing`, commit `32dbbf8`
**Stack:** Next.js 15.5.29 · React 19 · Tailwind CSS 3 · TypeScript · `output: export` (statico) · Vercel
**Ambito:** audit di repository e verifica visiva in browser locale. Nessuna modifica al codice prodotto.

---

## 0. Metodologia e limiti (leggere prima dei punteggi)

**Verifiche eseguite**

| Verifica | Strumento | Esito |
|---|---|---|
| Build di produzione | `npm run build` | ✅ riuscita, 10 pagine statiche |
| Lint sorgente (taste skill) | `scripts/lint.mjs src` | ❌ **12 FAIL, 7 WARN** |
| Ispezione browser 1440/768/390 (taste skill) | `scripts/inspect.mjs http://127.0.0.1:4173/` | ❌ **14 FAIL, 6 WARN** |
| Critica visiva di 8 screenshot | `references/critique.md`, 14 passaggi | ❌ vedi §5 |
| Review SEO/GEO su codice | skill CMO, evidenze con `path:linea` | ❌ vedi §3-4 |

**Limiti dichiarati — nessun dato inventato**

- **Non esiste ancora un dominio di produzione** (risposta del cliente: nessun dominio per ora). I punteggi SEO/GEO sono **stime esperte basate su evidenze nel codice**, non su traffico, ranking o Search Console. Nessuna metrica reale è disponibile.
- La prima ispezione su `out/index.html` serviva solo l'HTML senza gli asset `/_next` (font Times New Roman, margini 8px): **quei risultati sono stati scartati**. La build è stata rigenerata e l'inspection ripetuta contro un server statico locale che serviva l'intera cartella `out/`: solo questi risultati sono riportati.
- I dati di contatto nel codice (telefono, P.IVA, REA) sono **segnaposto**; il cliente ha confermato che quelli reali non sono ancora disponibili: vanno sostituiti prima del lancio.
- Social proof disponibile: **solo iscrizione albo/CCIAA**. Non si raccomanda di inventare recensioni o casi studio.
- La taste skill prevede, per un audit, di fermarsi alla critica del *prima*: **non è stato eseguito alcun redesign**.

**Discovery CRO (risposte del cliente)**

| Domanda | Risposta | Impatto sull'audit |
|---|---|---|
| Dominio di produzione | Nessuno per ora | Tutti gli URL assoluti vanno centralizzati e resi configurabili; `marinelysmarte.it` non può essere dichiarato canonical finché non è attivo |
| KPI principale | Richiesta chiamata via form | Il form è oggi un `mailto:`: è il collo di bottiglia di conversione n. 1 |
| Social proof | Solo albo/CCIAA | Rafforzare la credenziale verificabile, non inventare proof |
| Dati reali | Non disponibili, da segnalare | Bloccarli esplicitamente prima del lancio |

---

## 1. Executive summary

| Area | Punteggio | Giudizio |
|---|---|---|
| **SEO tecnico** | **38 / 100** | Fondamenta presenti (sitemap, robots, metadata, hreflang), ma vanificate da canonical doppi, dominio non risolto e pagine localizzate senza metadata proprio |
| **GEO / AI readiness** | **45 / 100** | Buon `@graph` JSON-LD, ma dati segnaposto, `sameAs` vuoti, mancano `FAQPage`, `WebSite`, `Organization.logo` e fatti citabili |
| **Design / Taste** | **5.0 / 10** | Default da generatore: hero centrato con pill, card grid, numerazione, font di sistema, una sola foto, zero motion |
| **CRO / UX** | **45 / 100** | KPI raggiungibile ma con attrito alto: form `mailto:`, banner cookie modale che copre i contenuti, contrasto insufficiente, link rotto |

**Forze reali:** build statica pulita e veloce (109 kB first load JS), struttura semantica corretta (`main`, `nav`, `section`, `article`, `footer`), contenuti multilingua completi per servizi/processo/FAQ, presenza di un grafo schema.org.

**Problemi critici:** (1) identità URL frammentata su tre domini diversi; (2) dati di contatto e P.IVA segnaposto visibili al pubblico; (3) form che non invia nulla e dichiara falso successo; (4) banner cookie senza rifiuto e con `aria-modal` che copre le heading; (5) pagina `/brandbook` vuota ma linkata e in sitemap; (6) privacy e cookie policy non redatte.

---

## 2. Prioritized action plan

### 🔴 ALTA PRIORITÀ — blocchi tecnici e di fiducia

| ID | Azione | Evidenza | Impatto |
|---|---|---|---|
| A1 | **Unificare l'identità URL**: un'unica variabile `SITE_URL` usata da metadata, canonical, hreflang, sitemap, robots e JSON-LD. Finché non c'è un dominio, usare l'URL Vercel di produzione in tutti i punti, mai `marinelysmarte.it` | `layout.tsx:5,22` vs `page.tsx:11` vs `sitemap.xml:4-28` vs `robots.txt:4` | Canonical contrastanti = segnali divisi, rischio dup |
| A2 | **Rimuovere i segnaposto pubblici**: telefono `+393330000000`, P.IVA `00000000000`, REA `BO-000000` | `contact-form.tsx:8`, `footer.tsx:9,71`, `landing.tsx:188,213,243` (vd. §3.4) | Distrugge fiducia e validità LocalBusiness |
| A3 | **Sostituire il form `mailto:` con un invio reale** e uno stato di successo veritiero | `contact-form.tsx:22,26-53` | È il KPI: oggi l'utente abbandona il sito e il successo è dichiarato anche se l'email non parte |
| A4 | **Banner cookie conforme**: aggiungere "Rifiuta", rendere non modale, non coprire le heading | `cookie-consent.tsx:26-30,43-55` | GDPR/ePrivacy + usabilità |
| A5 | **Completare privacy e cookie policy** (oggi "in corso di redazione") | `privacy/page.tsx:14`, `cookie-policy/page.tsx:14` | Compliance |
| A6 | **Rimuovere la pagina brandbook vuota** da nav, footer e sitemap, oppure implementarla | `it/brandbook/page.tsx:3-4` (`return null`), `navigation.tsx:17`, `footer.tsx:48`, `sitemap.xml:28` | Link rotto / pagina indicizzata vuota |
| A7 | **Creare l'OG image** `/images/og-image.jpg` (referenziata ma inesistente) | `layout.tsx:19`, `public/` contiene solo profile.jpg, profile-placeholder.svg, favicon.svg | Condivisioni social senza anteprima |
| A8 | **Correggere `vercel.json`**: la catch-all `/(.*) -> /` precede le regole per robots, sitemap, favicon e immagini | `vercel.json:7` prima di `:8-11` | Rischio che le regole specifiche non vengano raggiunte |
| A9 | **Localizzare `<html lang>` e i metadata per en/es** | `layout.tsx:37` (`lang="it"` hardcoded), `en/page.tsx`, `es/page.tsx` (nessun metadata) | Le pagine inglese/spagnolo risultano italiane ai crawler |

### 🟡 MEDIA PRIORITÀ — GEO, contenuti e design

| ID | Azione | Evidenza |
|---|---|---|
| B1 | Aggiungere `FAQPage`, `WebSite`, `Organization.logo`, `sameAs` reali, `areaServed` strutturato al grafo JSON-LD | `landing.tsx:159-258` |
| B2 | Aggiungere fatti citabili e numerici (tempi, zone, processo, credenziale verificabile con link CCIAA) senza inventare statistiche | `translations.ts:162-181` (FAQ senza cifre) |
| B3 | Definire i font (`next/font`) — `--font-serif` e `--font-sans` sono referenziati ma mai definiti: il browser usa Times New Roman | `tailwind.config.ts:36-37`, `globals.css:1-60` |
| B4 | Portare il body da 14px a 16–20px e correggere i contrasti: oro su bianco 2.2:1, navy su navy nel footer, `Fissa una chiamata` 1.3:1 | inspector FAIL `contrast`, `body-size`; `footer.tsx:19,25,41,66` |
| B5 | Ristrutturare la hero e le sezioni: eliminare eyebrow/pill, numerazione 01-04, badge lettera A-E, card grid uguali; dare una gerarchia dominante | `landing.tsx:30,89-102,112-126`; lint 12 FAIL |
| B6 | Portare almeno 4 immagini reali del soggetto (Bologna, immobile, processo) con crediti; la hero oggi è solo testo | inspector FAIL `few-pictures`, `focal-point` |
| B7 | Aggiungere `lastmod` alla sitemap e la localizzazione delle pagine legali | `sitemap.xml:22-28` |
| B8 | Dare una CTA primaria anche su mobile (oggi solo icona ✉) e microcopy privacy sotto il form | `navigation.tsx:45-60`, `contact-form.tsx:56-129` |

### 🟢 BASSA PRIORITÀ / correttivi marginali

| ID | Azione | Evidenza |
|---|---|---|
| C1 | Rimuovere `"use strict"` da file TSX (inutile in ES module) | `landing.tsx:1`, `section-header.tsx:1`, `footer.tsx:1` |
| C2 | Sostituire emoji ✉ ☰ con testo o icone SVG | `navigation.tsx:52,59`, `contact-form.tsx:30` |
| C3 | Rimuovere hairline, ring, shadow a riposo e il backdrop-blur | lint `hairline`, `shadow`, `glass`; `landing.tsx:41,53` |
| C4 | Limitare i trattini lunghi (13 nel sito) e la frase stock "not just a negotiation" | lint `em-dash`, `copy`; `translations.ts:196` |
| C5 | Aggiungere `llms.txt` / `robots.txt` allow per crawler AI *dopo* aver fissato i fatti citabili | assente |
| C6 | Rimuovere `images.unoptimized: true` quando si passa a `next/image` con formati moderni | `next.config.js:5` |

---

## 3. Technical SEO audit — evidenze

### 3.1 Identità URL e canonical (critico)

Quattro fonti dichiarano **tre domini diversi**:

| File | Dichiarazione | Valore |
|---|---|---|
| `src/app/layout.tsx:5` | `metadataBase` | `https://marte-bpdz0xpu5-francevilla.vercel.app` |
| `src/app/layout.tsx:22-27` | canonical + hreflang | `https://marinelysmarte.it/` (+ /en/, /es/) |
| `src/app/page.tsx:11-16` | canonical + hreflang (sovrascrive il layout per la home) | `https://marte-bpdz0xpu5-francevilla.vercel.app/` |
| `public/sitemap.xml:4-28` | tutti i `<loc>` | `https://marte-bpdz0xpu5-francevilla.vercel.app/...` |
| `public/robots.txt:4` | Sitemap | `https://marte-bpdz0xpu5-francevilla.vercel.app/sitemap.xml` |

Con `metadataBase` impostato sul preview, anche l'OG image relativa `/images/og-image.jpg` viene risolta sul preview. In assenza di dominio, la scelta corretta è **un solo URL base configurabile** usato ovunque; `marinelysmarte.it` non va dichiarato finché non punta alla produzione.

### 3.2 Internalizzazione

- `src/app/layout.tsx:37` fissa `<html lang="it">` per tutte le rotte, incluse `/en/` e `/es/`.
- `src/app/en/page.tsx` e `src/app/es/page.tsx` non esportano `metadata`: ereditano title, description e `og:locale="it_IT"` dal layout (`:12-20`).
- Le `alternates.languages` della homepage puntano al preview, non coerenti con il canonical del layout.
- `sitemap.xml` dichiara hreflang solo per le tre home; le pagine legali non sono localizzate.

### 3.3 Struttura, performance, circolazione

- **Sitemap**: presente e con hreflang, ma senza `<lastmod>`; contiene `/brandbook/` che non corrisponde alla rotta reale `/it/brandbook/` ed è una pagina vuota.
- **Robots**: corretto nella forma, ma punta al dominio preview.
- **Routing Vercel**: `vercel.json:7` (`/(.*) -> /`) precede le rotte esplicite per robots, sitemap, favicon e immagini (`:8-11`): con la valutazione sequenziale delle route Vercel, la catch-all può intercettarle.
- **Immagini**: `next.config.js:5` disattiva l'ottimizzazione; `<img>` diretto in `landing.tsx:54-62` con `loading="eager"` e dimensioni fisse 800×800 — niente WebP/AVIF, niente `srcset`, niente lazy.
- **Semantica**: buona — un solo `h1` per pagina, `h2` per sezione, `main`/`nav`/`section`/`article`/`footer` presenti. 6 heading totali, lunghezza massima 1 riga.
- **Analytics / Search Console**: nessun tag o file di verifica nel repository: impossibile misurare il KPI.

### 3.4 Contenuti segnaposto esposti

`P.IVA 00000000000 • REA BO-000000` (`footer.tsx:71`), `+39 333 000 0000` (`footer.tsx:9`, `contact-form.tsx:8`), `+393330000000` nel JSON-LD (`landing.tsx:188,213,243`), immagine schema `profile-placeholder.svg` (`landing.tsx:182,237`), `sameAs: []` (`landing.tsx:191,252`).

---

## 4. GEO / AI readiness audit

**Punteggio stimato: 45/100.**

**Punti di forza:** `@graph` con `Person`, `RealEstateAgent`, `LocalBusiness` (`landing.tsx:159-258`), `knowsAbout` con sette competenze specifiche, `hasCredential` con emissione CCIAA Bologna, `areaServed` = Bologna.

**Gap:**

| Gap | Perché conta per LLM | Evidenza |
|---|---|---|
| `FAQPage` assente malgrado 4 FAQ reali | Le domande/risposte sono il formato più citabile | `landing.tsx:131-146`, `translations.ts:162-181` |
| `WebSite` + `SearchAction` assenti | Aiutano a riconoscere l'entità sito | grafo in `landing.tsx:165-255` |
| `Organization.logo` assente | Identità visiva dell'entità | `landing.tsx:176-181` |
| `sameAs: []` vuoti | Nessun collegamento a profili verificabili | `landing.tsx:191,252` |
| Dati di contatto fasulli | Un'entità con telefono `+393330000000` non è verificabile | `landing.tsx:188,213,243` |
| Nessun fatto numerico | Testi come "tempi ottimizzati rispetto alla media di Bologna" non sono estrabili né citabili | `translations.ts:170-171` |
| Triplice identità URL | L'entity resolution si frammenta su tre domini | §3.1 |
| Nessuna citation-worthy page (guide, checklist, approfondimenti) | Il sito è solo landing: poche occasioni di citazione | route in `src/app/` |

**Nota positiva:** il cliente non dispone di recensioni: **non aggiungere `aggregateRating` o testimonianze inventate**.

---

## 5. Design / Taste audit

### 5.1 Gate automatico

- `lint.mjs src`: **12 FAIL / 7 WARN** — 6 hairline, 3 emoji, 1 shadow, 2 micro-label; WARN: `h-screen` ×3, box 1px, glass, frase stock, 13 em-dash.
- `inspect.mjs` (1440/768/390, server statico locale): **14 FAIL / 6 WARN** — eyebrow pill, micro-label ×4, shadow ×2, button-fx, hairline ×3, outlined-box ×10, **contrasto** (1.3:1 e 2.2:1), body 14px, una sola foto, nessun elemento dominante, margini disuguali (32px a sinistra / 212px a destra), zero elementi in movimento, heading coperta su mobile, emoji.

### 5.2 Critica visiva — ROUND 1 (audit, senza modifiche)

```
ROUND 1
Seen in one second: un hero centrato, una pill, un titolo serif e un bottone; nessun'immagine guida.
Idea (one sentence): nessuna — la pagina usa il default di categoria "consulente immobiliare professionale".
Live thing: nessuna.
Layout words by section: hero=centred / about=split / services=grid / process=grid / faq=list / contact=form.
Scores: design 4.5 · usability 5.5 · creativity 5.0 · content 5.0 → overall 5.0
Caps applied: FAIL inspect → overall ≤ 6.0; eyebrow + numerazione + shadow a riposo + hairline → ≤ 6.5;
  meno di 4 foto → design ≤ 6.5; zero motion → design ≤ 7; margini disuguali → design ≤ 6.5;
  heading coperta → usability ≤ 6; segnaposto visibili → content ≤ 5.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. desktop-fold.jpg — la hero è solo testo centrato dentro un campo bianco vuoto, con la pill
   "CONSULENTE IMMOBILIARE • BOLOGNA": non c'è un soggetto dominante e il font è il Times New Roman
   di sistema. Fix: una foto reale del mondo del soggetto a occupare almeno metà del primo schermo,
   titolo a 7-8vw, togliere la pill, caricare un font vero via next/font.
2. desktop-page-01.jpg — "Servizi 360°" e "Come lavoro" sono due grid di card/box quasi identici,
   con badge A-E e numeri 1-4: la pagina diventa template dopo il primo schermo. Fix: composizioni
   diverse per sezione, nessuna numerazione, il contenuto scritto a dimensione piena.
3. mobile-fold.jpg + desktop-fold.jpg — il banner cookie è modale, copre "Domande frequenti" e
   offre solo "Accetta" e "Dettagli"; inoltre oro su bianco è 2.2:1 e il footer è navy su navy.
   Fix: banner non modale con "Rifiuta", contrasto ≥ 4.5:1, testo del footer in bianco pieno.
```

**Competenze critiche:** il font serif non viene mai caricato (`--font-serif` definito solo come variabile Tailwind in `tailwind.config.ts:36` ma mai valorizzato in `globals.css`): il risultato visivo è Times New Roman, non un type system scelto.

---

## 6. CRO / UX audit

**Punteggio stimato: 45/100.**

| Aspetto | Stato | Impatto sulla conversione |
|---|---|---|
| KPI = richiesta chiamata via form | Il pulsante hero porta a `#contact` (`landing.tsx:39-44`), il form usa `mailto:` (`contact-form.tsx:22`) | L'utente deve aprire il client email: attrito massimo; nessun evento tracciabile |
| Stato di successo | Dopo `mailto:` mostra "Richiesta inviata" (`contact-form.tsx:26-53`) | Dichiarazione non verificabile: rischio di fiducia |
| Prossimità della prova | La credenziale CCIAA è in `about` e nel footer, non vicino al form | Il momento della decisione resta senza rassicurazione |
| Banner cookie | `role="dialog" aria-modal="true"` (`cookie-consent.tsx:27-28`), copre le heading, nessun "Rifiuta" | Blocca la lettura e non è conforme |
| Navigazione | 7 voci + link a brandbook vuoto; su mobile CTA solo icona ✉ | Poco spazio per la CTA reale |
| Microcopy privacy | Nessuna informazione sul trattamento dati accanto al form | Frenata sul submit |
| Velocità | 109 kB first load JS, tutto statico | Punto di forza, da preservare |

**Indirizzo CRO consigliato (senza inventare proof):** trasformare il form in invio reale, spostare la credenziale verificabile ("iscritto all'albo e al ruolo — CCIAA Bologna", con link al registro) subito sopra il pulsante di submit, scrivere sotto il form cosa succede dopo l'invio ("ti richiamo entro 24 ore") e cosa viene fatto dei dati, e misurare `form_submit` con un evento analytics.

---

## 7. Snippet pronti all'uso

### 7.1 URL base centralizzato (`src/lib/site.ts`)

```ts
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://<deploy-vercel>.vercel.app"
).replace(/\/$/, "");

export const siteName = "Marinelys Marte";
```

Usare `siteUrl` in `metadataBase`, canonical, hreflang, sitemap generata e JSON-LD. Impostare `NEXT_PUBLIC_SITE_URL` nelle env di Vercel; quando il dominio sarà attivo, cambiare una sola variabile.

### 7.2 Metadata per locale

In `src/app/en/page.tsx` e `src/app/es/page.tsx` esportare metadata propri:

```ts
import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marinelys Marte — Real estate consulting in Bologna",
  description: "360° property consulting for sellers in Bologna: sale, negotiation, condominium management, renovations and energy diagnosis.",
  alternates: {
    canonical: `${siteUrl}/en/`,
    languages: { it: `${siteUrl}/`, en: `${siteUrl}/en/`, es: `${siteUrl}/es/` },
  },
  openGraph: { locale: "en_GB", url: `${siteUrl}/en/` },
};
```

Per `<html lang>` per-locale, la soluzione pulita è spostare il root layout in `src/app/[lang]/layout.tsx` con `generateStaticParams()` che restituisce `it`, `en`, `es`, e impostare `lang={params.lang}`; alternativa minima provvisoria: script inline nel `<head>` che assegna `document.documentElement.lang` dalla pathname (meno robusta per i crawler).

### 7.3 Schema: FAQPage + WebSite (da aggiungere al grafo)

```json
{
  "@type": "FAQPage",
  "@id": "SITE_URL/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto costa vendere con te?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il compenso è provvigionale, pattuito per iscritto prima di ogni incarico."
      }
    }
  ]
},
{
  "@type": "WebSite",
  "@id": "SITE_URL/#website",
  "url": "SITE_URL/",
  "name": "Marinelys Marte",
  "inLanguage": ["it", "en", "es"],
  "publisher": { "@id": "SITE_URL/#agency" }
}
```

Sostituire `SITE_URL` con `siteUrl`. Aggiungere `"logo"` a `Organization`, valorizzare `sameAs` solo con profili reali, e **non** inserire telefoni o P.IVA finti.

### 7.4 Form con endpoint reale (static export)

Con `output: export` non esiste una route API: usare un endpoint esterno (Formspree, Formsubmit, Resend forms) via variabile d'ambiente.

```tsx
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT!;

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  setStatus("sending");
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error("invio fallito");
    setStatus("sent");
    trackEvent("form_submit");
  } catch {
    setStatus("error"); // Mostra: "Non siamo riusciti a inviare. Chiamaci: ..."
  }
}
```

La UI deve mostrare tre stati distinti (`sending`, `sent`, `error`); il messaggio di successo può dire "Richiesta inviata" solo dopo una risposta 2xx.

### 7.5 Cookie banner conforme (comportamento)

Aggiungere un terzo pulsante "Rifiuta" che salva `marte_cookie_consent = "false"`, trasformare il contenitore in una barra non modale (rimuovere `aria-modal="true"`), e assicurarsi che non copra le heading: su desktop ancorarla in basso a tutta larghezza, su mobile lasciare spazio al contenuto. Collegare "Dettagli" alla cookie policy, che va redatta.

### 7.6 Correzioni rapide di stile e routing

- `globals.css`: definire `--font-serif`/`--font-sans` con `next/font`, impostare `body { font-size: 1rem; line-height: 1.6 }`, portare il testo corrente del footer da `text-brand-navy/40…/60` a `text-white/80`.
- `landing.tsx`: rimuovere la `<span>` eyebrow (`:30-32`), i badge A-E (`:94-96`) e la numerazione (`:114-116`).
- `vercel.json`: spostare la catch-all `/(.*) -> /` in ultima posizione o eliminarla.
- `sitemap.xml` / `robots.txt`: generarli in build da `siteUrl` (uno script Node in `scripts/`) invece di tenerli statici con URL hardcodati.

---

## 8. Piano di misurazione (dopo le correzioni)

1. Configurare Google Search Console e un analytics con evento `form_submit` (oggi assenti).
2. Dopo il lancio: monitorare copertura/canonical, query locali ("consulente immobiliare Bologna", "diagnosi energetica Bologna"), CTR e Core Web Vitals.
3. Rieseguire i gate: `npm run build`, `node scripts/lint.mjs src`, `node scripts/inspect.mjs <URL>`; obiettivo **0 FAIL** su entrambi prima di chiudere.
4. Aggiornare il DOM con 4+ immagini reali e un movimento; ripetere la critica visiva (ROUND 2) e confrontare il punteggio.

---

## 9. Registro evidenze (file:linea)

| Finding | File e riga |
|---|---|
| metadataBase preview / canonical finale | `src/app/layout.tsx:5`, `:22-27` |
| canonical preview homepage | `src/app/page.tsx:11-16` |
| `<html lang="it">` fisso | `src/app/layout.tsx:37` |
| en/es senza metadata | `src/app/en/page.tsx:1-12`, `src/app/es/page.tsx:1-12` |
| OG image inesistente | `src/app/layout.tsx:19` |
| Sitemap / robots su dominio preview | `public/sitemap.xml:4-28`, `public/robots.txt:4` |
| Catch-all prima delle rotte specifiche | `vercel.json:7-11` |
| Immagini non ottimizzate | `next.config.js:5`, `src/components/landing.tsx:54-62` |
| Eyebrow, card badge, numerazione | `src/components/landing.tsx:30-32`, `:89-102`, `:112-126` |
| JSON-LD con segnaposto | `src/components/landing.tsx:159-258` |
| Form mailto e falso successo | `src/components/contact-form.tsx:22`, `:26-53` |
| Banner modale senza rifiuto | `src/components/cookie-consent.tsx:26-30`, `:43-55` |
| P.IVA/REA e contatti segnaposto | `src/components/footer.tsx:9`, `:71`, `src/components/contact-form.tsx:8` |
| Testo navy su navy | `src/components/footer.tsx:19`, `:25`, `:41`, `:66` |
| Brandbook vuoto | `src/app/it/brandbook/page.tsx:3-4` |
| Privacy / cookie policy non redatte | `src/app/privacy/page.tsx:14`, `src/app/cookie-policy/page.tsx:14` |
| Font non definiti | `tailwind.config.ts:36-37`, `src/app/globals.css:1-60` |

*Fine del documento.*
