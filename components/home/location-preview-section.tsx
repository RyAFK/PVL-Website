import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LocationSection } from "@/components/sections/location-section";

export function LocationPreviewSection() {
  return (
    <section aria-labelledby="location-heading" className="border-b border-line bg-cream-2 py-24 sm:py-28">
      <Container>
        <SectionHeading
          id="location-heading"
          eyebrow="Visit us"
          title="A dedicated Harley Street clinic"
        />
        <div className="mt-10">
          <LocationSection />
        </div>
      </Container>
    </section>
  );
}
