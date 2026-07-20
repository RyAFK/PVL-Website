import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TreatmentGrid } from "@/components/sections/treatment-grid";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { homepageTreatmentCards, laserTreatments } from "@/content/treatments";
import { siteConfig } from "@/lib/site";
import { ChevronRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Compare laser eye surgery, ICL, refractive lens exchange and cataract surgery pathways available at Precision Vision London on Harley Street.",
  alternates: { canonical: `${siteConfig.url}/treatments` },
};

export default function TreatmentsIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Treatments", href: "/treatments" }]} />
      <PageHero
        eyebrow="Vision-correction pathways"
        title="Every pathway, explained in plain English"
        description="Each option below is typically considered for specific circumstances. Your consultant confirms what's appropriate after a full diagnostic assessment."
      />

      <section className="border-b border-line bg-paper py-14 sm:py-16">
        <Container>
          <TreatmentGrid treatments={homepageTreatmentCards} />
        </Container>
      </section>

      <section aria-labelledby="laser-compare-heading" className="border-b border-line bg-cream-2 py-14 sm:py-16">
        <Container>
          <SectionHeading
            id="laser-compare-heading"
            eyebrow="Laser eye surgery in detail"
            title="Compare LASIK, LASEK and PRK"
            description="These are three techniques within laser eye surgery, not three unrelated treatments. Your consultant will recommend one based on your corneal measurements and lifestyle."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {laserTreatments.map((treatment) => (
              <li key={treatment.slug}>
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-soft hover:shadow-card"
                >
                  <div>
                    <h3 className="font-serif text-lg text-ink">{treatment.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{treatment.summary}</p>
                  </div>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {treatment.cardCta}
                    <ChevronRightIcon className="h-4 w-4 text-gold" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
