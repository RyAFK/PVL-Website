import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JourneyTimeline } from "@/components/sections/journey-timeline";

export function JourneySection() {
  return (
    <section aria-labelledby="journey-heading" className="border-b border-line bg-cream-2 py-24 sm:py-28">
      <Container>
        <SectionHeading
          id="journey-heading"
          eyebrow="Your journey"
          title="A clear path from enquiry to aftercare"
          description="Every stage is explained in advance, including who you'll meet and whether you're under any obligation to continue."
        />
        <div className="mt-10">
          <JourneyTimeline />
        </div>
      </Container>
    </section>
  );
}
