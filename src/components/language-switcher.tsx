import Link from "next/link";
import type { Lang } from "@/lib/translations";

const languages: { code: Lang; label: string; name: string; href: string }[] = [
  { code: "it", label: "IT", name: "Italiano", href: "/" },
  { code: "en", label: "EN", name: "English", href: "/en/" },
  { code: "es", label: "ES", name: "Español", href: "/es/" },
];

/**
 * Selettore di lingua: tre link reali verso le route localizzate.
 * Ogni lingua è un'URL diverso, quindi i crawler le scoprono senza
 * bisogno di JavaScript e `hreflang` resta coerente con `site.ts`.
 */
export function LanguageSwitcher({
  lang,
  label,
  variant = "light",
  className = "",
}: {
  lang: Lang;
  label: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const activeClass =
    variant === "dark"
      ? "px-2 py-1 text-sm font-semibold text-white underline decoration-brand-gold decoration-2 underline-offset-4"
      : "px-2 py-1 text-sm font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4";
  const idleClass =
    variant === "dark"
      ? "px-2 py-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
      : "px-2 py-1 text-sm font-medium text-[#64748B] transition-colors hover:text-brand-navy";

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-1">
        {languages.map((l) => {
          const active = l.code === lang;
          return (
            <li key={l.code} className="flex items-center gap-1">
              <Link
                href={l.href}
                hrefLang={l.code}
                lang={l.code}
                aria-current={active ? "page" : undefined}
                title={l.name}
                className={active ? activeClass : idleClass}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
