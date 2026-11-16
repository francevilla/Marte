import type { Translations } from "@/lib/translations";

export function SectionHeader({
  title,
  sub,
  variant = "light",
}: {
  title: string;
  sub?: string;
  variant?: "light" | "dark";
}) {
  const titleColor = variant === "dark" ? "text-white" : "text-ink";
  const subColor = variant === "dark" ? "text-white/80" : "text-[#475569]";

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center" data-reveal>
      <h2
        className={`text-[32px] font-serif font-bold tracking-tight md:text-[40px] ${titleColor}`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-3 text-lg leading-relaxed ${subColor}`}>{sub}</p>
      )}
    </div>
  );
}
