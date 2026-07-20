import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { WhyPvlSection } from "@/components/home/why-pvl-section";
import { SurgeonIntroSection } from "@/components/home/surgeon-intro-section";
import { LocationPreviewSection } from "@/components/home/location-preview-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Precision Vision London",
  description:
    "Precision Vision London is a consultant-led vision-correction clinic on Harley Street, offering laser eye surgery, ICL, lens replacement and cataract treatment.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <PageHero
        eyebrow="About us"
        title="A Harley Street clinic built around one relationship"
        description="Precision Vision London brings assessment, treatment and aftercare together under a single named consultant, rather than passing patients between departments."
      />
      <section className="border-b border-line bg-paper py-20 sm:py-24">
        <Container className="max-w-3xl space-y-4 text-sm leading-relaxed text-slate">
          <p>
            We focus on a small number of vision-correction pathways — laser eye surgery, ICL,
            refractive lens exchange and cataract surgery — so that every recommendation comes
            from deep, current experience with each technique, rather than a broad but shallow
            menu of treatments.
          </p>
          <p>
            Every assessment uses the same diagnostic process: detailed corneal and eye-health
            measurements, an unhurried conversation about your prescription and lifestyle, and
            clear information about alternatives and risks before any recommendation is made.
          </p>
        </Container>
      </section>
      <WhyPvlSection />
      <SurgeonIntroSection />
      <LocationPreviewSection />
      <FinalCtaSection />
    </>
  );
}
