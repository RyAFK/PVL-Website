import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TreatmentGrid } from "@/components/sections/treatment-grid";
import { homepageTreatmentCards } from "@/content/treatments";
import { CtaLink } from "@/components/ui/cta-link";

export function TreatmentPathwaysSection() {
  return (
    <section aria-labelledby="pathways-heading" className="border-b border-line bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="pathways-heading"
            eyebrow="Treatment pathways"
            title="Outcome-led options, explained clearly"
            description="Every pathway below is typically considered for specific circumstances. A full clinical assessment confirms what applies to you."
          />
          <CtaLink href="/treatments" variant="ghost" className="px-0">
            View all treatments
          </CtaLink>
        </div>
        <div className="mt-10">
          <TreatmentGrid treatments={homepageTreatmentCards} />
        </div>
      </Container>
    </section>
  );
}
