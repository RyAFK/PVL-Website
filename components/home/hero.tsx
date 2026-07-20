import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { trustRowItems } from "@/content/trust-stats";
import { CheckIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-eye-illustration.svg"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(24,36,48,0.35)_100%)]" />
      </div>

      <Container className="relative flex min-h-[640px] flex-col items-center justify-center py-24 text-center sm:min-h-[720px] sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-light">
          Surgeon-led care on Harley Street
        </p>
        <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
          Personalised Laser Eye Surgery in London
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream/85">
          Explore LASIK, LASEK, PRK, ICL and lens-based alternatives with an experienced
          consultant-led team, advanced diagnostics and comprehensive aftercare.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <CtaLink
            href="/contact#book"
            variant="gold"
            size="lg"
            eventName="book_consultation_click"
            eventPayload={{ location: "hero" }}
          >
            {CTA.primary}
          </CtaLink>
          <CtaLink
            href="/suitability"
            variant="outline-light"
            size="lg"
            eventName="suitability_start"
            eventPayload={{ location: "hero" }}
          >
            {CTA.secondary}
          </CtaLink>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-cream/20 pt-6">
          {trustRowItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-cream/90">
              <CheckIcon className="h-4 w-4 flex-shrink-0 text-gold-light" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
