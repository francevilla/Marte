"use strict";

import type { Translations } from "@/lib/translations";

export function SectionHeader({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16">
      <h2 className="text-[36px] font-serif font-bold text-[#0F172A] mb-4 tracking-tight">
        {title}
      </h2>
      {sub && (
        <p className="text-lg text-[#64748B] leading-relaxed">{sub}</p>
      )}
      <span className="inline-block mt-6 h-[2px] w-16 bg-[#C9A96A] rounded" aria-hidden="true" />
    </div>
  );
}
