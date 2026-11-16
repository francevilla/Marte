/**
 * Unica fonte di verità per l'URL del sito.
 *
 * Finché non esiste un dominio definitivo, usa l'URL di produzione Vercel
 * (o `NEXT_PUBLIC_SITE_URL` dalle env). Quando il dominio sarà attivo,
 * basta impostare `NEXT_PUBLIC_SITE_URL=https://dominio.it` su Vercel:
 * canonical, hreflang, sitemap, robots e JSON-LD si aggiornano da soli.
 */
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

const fallback = vercelHost
  ? `https://${vercelHost}`
  : "https://marte-bpdz0xpu5-francevilla.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? fallback
).replace(/\/$/, "");

export const siteName = "Marinelys Marte";

export const locales = ["it", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export function localePath(lang: Locale): string {
  return lang === "it" ? "/" : `/${lang}/`;
}
