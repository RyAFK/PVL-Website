import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ReviewsFilterable } from "@/components/sections/reviews-filterable";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Stories",
  description:
    "Read patient reviews and stories covering LASIK, ICL, lens replacement and cataract surgery at Precision Vision London.",
  alternates: { canonical: `${siteConfig.url}/patient-stories` },
};

export default function PatientStoriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Patient stories", href: "/patient-stories" }]} />
      <PageHero
        eyebrow="Patient reviews and stories"
        title="Hearing from patients in their own words"
        description="Reviews are independently hosted on Trustpilot and Google. Filter by treatment to find a story closest to your own situation."
      />
      <section className="border-b border-line bg-paper py-20 sm:py-24">
        <Container>
          <ReviewsFilterable />
        </Container>
      </section>
      <FinalCtaSection />
    </>
  );
}
