import type { Metadata } from "next";
import { localePath, siteName, siteUrl, type Locale } from "./site";

const copy: Record<
  Locale,
  { title: string; description: string; locale: string }
> = {
  it: {
    title: "Marinelys Marte — Consulenza immobiliare 360° a Bologna",
    description:
      "Agente immobiliare iscritta all'albo e al ruolo. Vendita, trattativa, gestioni condominiali, riqualificazioni, diagnosi energetica e comunità energetiche per proprietari a Bologna.",
    locale: "it_IT",
  },
  en: {
    title: "Marinelys Marte — 360° real estate consulting in Bologna",
    description:
      "Registered real estate agent in Bologna. Sale, negotiation, condominium management, renovations, energy diagnosis and energy communities for property owners.",
    locale: "en_GB",
  },
  es: {
    title: "Marinelys Marte — Asesoría inmobiliaria 360° en Bolonia",
    description:
      "Agente inmobiliaria colegiada en Bolonia. Venta, negociación, gestiones condominiales, rehabilitaciones, diagnóstico energético y comunidades energéticas para propietarios.",
    locale: "es_ES",
  },
};

const ogImage = `${siteUrl}/images/profile.jpg`;

/**
 * Metadata per le pagine legali (privacy, cookie policy).
 *
 * Serve perché il canonical del layout è quello della home: senza questo
 * override ogni pagina legale si dichiarerebbe duplicato della homepage.
 */
export function buildLegalMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName,
      url,
      title: `${title} | ${siteName}`,
      description,
      locale: "it_IT",
    },
    robots: { index: true, follow: true },
  };
}

export function buildMetadata(lang: Locale): Metadata {
  const c = copy[lang];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: c.title,
      template: `%s | ${siteName}`,
    },
    description: c.description,
    alternates: {
      canonical: `${siteUrl}${localePath(lang)}`,
      languages: {
        it: `${siteUrl}/`,
        en: `${siteUrl}/en/`,
        es: `${siteUrl}/es/`,
        "x-default": `${siteUrl}/`,
      },
    },
    openGraph: {
      locale: c.locale,
      type: "website",
      siteName,
      url: `${siteUrl}${localePath(lang)}`,
      title: c.title,
      description: c.description,
      // TODO: sostituire con una OG image dedicata 1200×630.
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: [ogImage],
    },
  };
}
