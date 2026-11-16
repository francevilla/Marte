import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { MotionBoot } from "@/components/motion-boot";
import { buildSchema } from "@/lib/schema";
import type { Lang, Translations } from "@/lib/translations";

export function Landing({ lang, T }: { lang: Lang; T: Translations }) {
  const schema = buildSchema(lang, T);

  return (
    <div className="flex min-h-dvh flex-col bg-white text-ink">
      <MotionBoot />
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {T.nav.contact}
      </a>
      <Navigation lang={lang} T={T} />

      <main className="flex-grow">
        {/* HERO */}
        <section id="hero" className="px-4 pb-16 pt-12 md:pt-16">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-[44px] font-serif font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[56px] lg:text-[72px]" data-reveal>
              {T.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#475569] md:text-xl" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              {T.hero.sub}
            </p>
            <Link
              href="#contact"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 font-semibold text-white transition-colors hover:bg-[#14203a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
            >
              {T.hero.cta} →
            </Link>
          </div>
        </section>

        <figure className="w-full" data-reveal>
          <img
            src="/images/bologna-str-maggiore-portico.jpg"
            alt="Portico di Strada Maggiore a Bologna, con la torre della basilica dei Servi"
            width="1920"
            height="1281"
            className="h-[42vh] w-full object-cover md:h-[52vh]"
            loading="eager"
            decoding="async"
          />
        </figure>

        {/* ABOUT */}
        <section id="about" className="bg-brand-cream px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <SectionHeader title={T.about.title} sub={T.about.sub} />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative h-72 overflow-hidden lg:h-96" data-reveal>
                <img
                  src="/images/profile.jpg"
                  alt="Marinelys Marte"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width="800"
                  height="800"
                  decoding="async"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#475569]">
                  {T.about.bio}
                </p>
                <p className="text-sm font-semibold text-ink">
                  {T.footer.legal}
                </p>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {T.about.badge}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <SectionHeader title={T.services.title} sub={T.services.sub} />
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="grid gap-x-12 gap-y-10 md:grid-cols-2" data-reveal>
                {T.services.items.map((s) => (
                  <div key={s.title}>
                    <h3 className="font-serif text-xl font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#475569]">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
              <img
                src="/images/bologna-via-irnerio-portico.jpg"
                alt="Portico di Via Irnerio a Bologna nel pomeriggio"
                width="1920"
                height="1440"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-brand-cream px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <SectionHeader title={T.process.title} sub={T.process.sub} />
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <img
                src="/images/bologna-piazza-maggiore-1.jpg"
                alt="Palazzo Re Enzo e la torre in Piazza Maggiore a Bologna"
                width="1600"
                height="1200"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-x-12 gap-y-10 md:grid-cols-2" data-reveal>
                {T.process.steps.map((step) => (
                  <div key={step.title}>
                    <h3 className="font-serif text-xl font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#475569]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title={T.faq.title} />
            <div className="space-y-8">
              {T.faq.items.map((item) => (
                <div key={item.q} data-reveal>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#475569]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-brand-navy px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl" data-reveal>
            <SectionHeader
              title={T.contact.title}
              sub={T.contact.sub}
              variant="dark"
            />
            <ContactForm lang={lang} T={T} />
          </div>
        </section>
      </main>

      <Footer lang={lang} T={T} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
