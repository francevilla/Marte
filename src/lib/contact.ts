/**
 * Dati di contatto e legali — UNICO punto da aggiornare.
 *
 * ⚠️ ATTENZIONE: i valori di fallback sono SEGNAPOSTO.
 * Prima del lancio vanno impostati su Vercel (o in `.env.local`):
 *
 *   NEXT_PUBLIC_PHONE="+39 ..."
 *   NEXT_PUBLIC_EMAIL="..."
 *   NEXT_PUBLIC_VAT="01234567890"
 *   NEXT_PUBLIC_REA="BO-123456"
 *   NEXT_PUBLIC_SITE_URL="https://dominio.it"
 *
 * Con `NEXT_PUBLIC_FORM_ENDPOINT` il form invia davvero (Formspree/Formsubmit/Resend);
 * senza, ricade sul vecchio `mailto:`.
 */
export const contact = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+39 333 000 0000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@marinelysmarte.it",
  vat: process.env.NEXT_PUBLIC_VAT ?? "00000000000",
  rea: process.env.NEXT_PUBLIC_REA ?? "BO-000000",
  locality: "Bologna",
  country: "IT",
  countryName: "Italia",
} as const;

export const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;
export const emailHref = `mailto:${contact.email}`;

export const isPlaceholderData =
  contact.phone.includes("000 000") ||
  contact.vat === "00000000000" ||
  contact.rea === "BO-000000";
