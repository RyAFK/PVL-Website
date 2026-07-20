import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { pricingPackages, pricingNotes } from "@/content/pricing";
import { pricingFaqs } from "@/content/faqs";
import { CheckIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing and Finance",
  description:
    "Understand what's included in laser eye surgery, ICL, lens replacement and cataract surgery packages at Precision Vision London, including finance and insurance information.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />
      <PageHero
        eyebrow="Pricing and finance"
        title="Clear about what's included, transparent about what isn't fixed"
        description="Because the right technique and lens depend on your eyes, exact pricing is confirmed at consultation rather than quoted online without an assessment."
      />

      <section className="border-b border-line bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPackages.map((pkg) => (
              <div key={pkg.treatmentSlug} className="rounded-2xl border border-line bg-cream-2 p-7">
                <h2 className="font-serif text-lg text-ink">{pkg.treatmentName}</h2>
                {pkg.guidePriceFrom ? (
                  <p className="mt-2 font-serif text-2xl text-ink">{pkg.guidePriceFrom}</p>
                ) : (
                  <p className="mt-2 text-sm font-medium text-slate-light">Confirmed at consultation</p>
                )}
                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <dl className="mt-10 grid gap-8 rounded-2xl border border-line bg-cream-2 p-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-sm font-semibold text-ink">Consultation fee</dt>
              <dd className="mt-1 text-sm text-slate">{pricingNotes.consultationFee}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">Finance</dt>
              <dd className="mt-1 text-sm text-slate">{pricingNotes.finance}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">Insurance</dt>
              <dd className="mt-1 text-sm text-slate">{pricingNotes.insurance}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">Aftercare</dt>
              <dd className="mt-1 text-sm text-slate">{pricingNotes.aftercare}</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section aria-labelledby="pricing-faq-heading" className="border-b border-line bg-cream-2 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading id="pricing-faq-heading" eyebrow="Questions" title="Pricing and finance FAQs" align="center" />
          <div className="mt-8">
            <FaqAccordion faqs={pricingFaqs} />
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
