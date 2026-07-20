import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { trustRowItems } from "@/content/trust-stats";
import { CheckIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
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

        <div className="relative hidden aspect-[4/5] items-center justify-center lg:flex" aria-hidden="true">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-ink via-ink-2 to-[#284763]" />
          <div className="absolute inset-6 rounded-[2rem] border border-cream/15" />
          <div className="relative h-56 w-56 rounded-full border border-gold-light/40">
            <div className="absolute inset-6 rounded-full border border-gold-light/50" />
            <div className="absolute inset-[42%] rounded-full bg-gold-light/90 shadow-[0_0_60px_10px_rgba(201,171,119,0.35)]" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-cream/95 p-4 shadow-soft backdrop-blur">
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
