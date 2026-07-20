import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { trustRowItems } from "@/content/trust-stats";
import { CheckIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <Container className="relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Surgeon-led care on Harley Street
          </p>
          <h1 className="mt-4 text-balance font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Personalised Laser Eye Surgery in London
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate">
            Explore LASIK, LASEK, PRK, ICL and lens-based alternatives with an experienced
            consultant-led team, advanced diagnostics and comprehensive aftercare.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href="/contact#book"
              size="lg"
              eventName="book_consultation_click"
              eventPayload={{ location: "hero" }}
            >
              {CTA.primary}
            </CtaLink>
            <CtaLink
              href="/suitability"
              variant="secondary"
              size="lg"
              eventName="suitability_start"
              eventPayload={{ location: "hero" }}
            >
              {CTA.secondary}
            </CtaLink>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
            {trustRowItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckIcon className="h-4 w-4 flex-shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-1 flex aspect-[16/11] items-center justify-center overflow-hidden rounded-[1.75rem] lg:order-2 lg:aspect-[4/5] lg:rounded-[2.5rem]">
          <Image
            src="/images/hero-eye-illustration.svg"
            alt=""
            fill
            priority
            unoptimized
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-cream/95 p-4 shadow-soft backdrop-blur sm:bottom-8 sm:left-8 sm:right-8">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
              Diagnostic-led planning
            </p>
            <p className="mt-1 text-sm text-ink">
              Corneal mapping and prescription analysis guide every treatment plan.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
