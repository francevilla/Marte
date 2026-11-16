import { Landing } from "@/components/landing";
import { t } from "@/lib/translations";
import { CookieConsent } from "@/components/cookie-consent";

export default function ItPage() {
  return (
    <>
      <Landing lang="it" T={t.it} />
      <CookieConsent lang="it" T={t.it} />
    </>
  );
}
