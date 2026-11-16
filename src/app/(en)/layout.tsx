import type { Metadata } from "next";
import "../globals.css";
import { fontSans, fontSerif } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("en");

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSerif.variable} ${fontSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" />
        <noscript>
          <style>{`[data-reveal]{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
