import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SuitabilityChecker } from "@/components/home/suitability-checker";
import { JourneyTimeline } from "@/components/sections/journey-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Check My Suitability",
  description:
    "A short, non-diagnostic tool to help you explore which vision-correction pathways may be worth discussing with the clinical team.",
  alternates: { canonical: `${siteConfig.url}/suitability` },
};

export default function SuitabilityPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Suitability", href: "/suitability" }]} />
      <PageHero
        eyebrow="Explore your options"
        title="Which vision-correction pathway may be relevant?"
        description="Answer a few simple questions to explore which treatment options may be appropriate to discuss with the clinical team."
      />
      <section className="border-b border-line bg-paper py-14 sm:py-16">
        <Container className="max-w-3xl">
          <SuitabilityChecker variant="full" />
        </Container>
      </section>

      <section aria-labelledby="suitability-next-heading" className="border-b border-line bg-cream-2 py-14 sm:py-16">
        <Container>
          <SectionHeading
            id="suitability-next-heading"
            eyebrow="What happens next"
            title="From this tool to a confirmed treatment plan"
          />
          <div className="mt-8">
            <JourneyTimeline />
          </div>
        </Container>
      </section>
    </>
  );
}
