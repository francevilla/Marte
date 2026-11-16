import { contact } from "./contact";
import { siteName, siteUrl, type Locale } from "./site";
import type { Translations } from "./translations";

const role: Record<Locale, string> = {
  it: "Agente immobiliare",
  en: "Real estate agent",
  es: "Agente inmobiliaria",
};

/**
 * Grafo schema.org unico per pagina: Person + RealEstateAgent/LocalBusiness
 * + WebSite + FAQPage. I dati di contatto arrivano da `contact.ts`
 * (segnaposto finché non vengono impostate le env di produzione).
 */
export function buildSchema(lang: Locale, T: Translations) {
  const base = siteUrl;
  const pageUrl = lang === "it" ? `${base}/` : `${base}/${lang}/`;
  const image = `${base}/images/profile.jpg`;
  const agencyId = `${base}/#agency`;
  const personId = `${base}/#person`;
  const websiteId = `${base}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Marinelys Marte",
        jobTitle: role[lang],
        worksFor: { "@id": agencyId },
        memberOf: {
          "@type": "Organization",
          name: "Albo e ruolo degli agenti di affari in mediazione",
          parentOrganization: {
            "@type": "Organization",
            name: "Camera di Commercio di Bologna",
          },
        },
        image,
        address: {
          "@type": "PostalAddress",
          addressLocality: contact.locality,
          addressCountry: contact.country,
        },
        telephone: contact.phone,
        email: contact.email,
        url: pageUrl,
        knowsAbout: T.services.items.map((s) => s.title),
      },
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": agencyId,
        name: `${siteName} — ${T.hero.title}`,
        legalName: siteName,
        description: T.about.sub,
        logo: image,
        image,
        address: {
          "@type": "PostalAddress",
          addressLocality: contact.locality,
          addressCountry: contact.country,
        },
        telephone: contact.phone,
        email: contact.email,
        url: pageUrl,
        priceRange: "€€",
        hasCredential: {
          "@type": "OccupationalCredential",
          name: "Iscrizione all'albo e al ruolo degli agenti di affari in mediazione",
          issuedBy: {
            "@type": "Organization",
            name: "Camera di Commercio di Bologna",
          },
        },
        areaServed: {
          "@type": "City",
          name: contact.locality,
          country: contact.country,
        },
        knowsAbout: T.services.items.map((s) => s.title),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${base}/`,
        name: siteName,
        inLanguage: ["it", "en", "es"],
        publisher: { "@id": agencyId },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: lang,
        mainEntity: T.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}
