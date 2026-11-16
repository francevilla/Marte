import { Landing } from "@/components/landing";
import { t } from "@/lib/translations";
import { CookieConsent } from "@/components/cookie-consent";

export default function EsPage() {
  return (
    <>
      <Landing lang="es" T={t.es} />
      <CookieConsent lang="es" T={t.es} />
    </>
  );
}
