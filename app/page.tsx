import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustSection } from "@/components/home/trust-section";
import { SuitabilityFinderSection } from "@/components/home/suitability-finder-section";
import { TreatmentPathwaysSection } from "@/components/home/treatment-pathways-section";
import { WhyPvlSection } from "@/components/home/why-pvl-section";
import { SurgeonIntroSection } from "@/components/home/surgeon-intro-section";
import { JourneySection } from "@/components/home/journey-section";
import { TechnologySection } from "@/components/home/technology-section";
import { ResultsEvidenceSection } from "@/components/home/results-evidence-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { PricingPreviewSection } from "@/components/home/pricing-preview-section";
import { FaqSection } from "@/components/home/faq-section";
import { LocationPreviewSection } from "@/components/home/location-preview-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Laser Eye Surgery London | Precision Vision Harley Street",
  description:
    "Explore personalised laser eye surgery, ICL, lens replacement and cataract treatment with a consultant-led team on Harley Street, London.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <SuitabilityFinderSection />
      <TreatmentPathwaysSection />
      <WhyPvlSection />
      <SurgeonIntroSection />
      <JourneySection />
      <TechnologySection />
      <ResultsEvidenceSection />
      <ReviewsSection />
      <PricingPreviewSection />
      <FaqSection />
      <LocationPreviewSection />
      <FinalCtaSection />
    </>
  );
}
