import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SuitabilityChecker } from "@/components/home/suitability-checker";

export function SuitabilityFinderSection() {
  return (
    <section
      id="suitability-finder"
      aria-labelledby="suitability-finder-heading"
      className="border-b border-line bg-cream-2 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          id="suitability-finder-heading"
          eyebrow="Explore your options"
          title="Which vision-correction pathway may be relevant?"
          description="Answer a few simple questions to explore which treatment options may be appropriate to discuss with the clinical team."
        />
        <div className="mt-8 max-w-3xl">
          <SuitabilityChecker variant="embedded" />
        </div>
      </Container>
    </section>
  );
}
