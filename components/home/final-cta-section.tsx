import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-ink py-16 text-cream sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 id="final-cta-heading" className="max-w-2xl text-balance font-serif text-3xl sm:text-4xl">
          Start with a consultation, not a commitment
        </h2>
        <p className="max-w-xl text-balance text-cream/75">
          Meet your consultant, review your diagnostic results and discuss which pathway may be
          appropriate — with no obligation to proceed.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink
            href="/contact#book"
            size="lg"
            className="bg-gold-light text-ink hover:brightness-95"
            eventName="book_consultation_click"
            eventPayload={{ location: "final_cta" }}
          >
            {CTA.primary}
          </CtaLink>
          <CtaLink
            href="/suitability"
            variant="outline-light"
            size="lg"
            eventName="suitability_start"
            eventPayload={{ location: "final_cta" }}
          >
            {CTA.secondary}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
