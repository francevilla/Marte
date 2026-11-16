import { Fraunces, Manrope } from "next/font/google";

/**
 * Type system del brandbook: serif per i titoli, sans per il testo.
 * Le variabili CSS sono referenziate da `tailwind.config.ts`.
 */
export const fontSerif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const fontSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
