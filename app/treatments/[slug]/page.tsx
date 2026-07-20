import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { treatments, getTreatmentBySlug, laserTreatments } from "@/content/treatments";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { CheckIcon, ChevronRightIcon } from "@/components/ui/icons";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { MedicalReviewPanel } from "@/components/sections/medical-review-panel";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMedicalProcedureSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};

  return {
    title: treatment.name,
    description: treatment.summary,
    alternates: { canonical: `${siteConfig.url}/treatments/${treatment.slug}` },
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const alternatives = treatment.alternatives
    .map((alt) => getTreatmentBySlug(alt.slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={buildMedicalProcedureSchema(treatment)} />
      <Breadcrumbs
        items={[
          { name: "Treatments", href: "/treatments" },
          { name: treatment.name, href: `/treatments/${treatment.slug}` },
        ]}
      />
      <PageHero eyebrow={treatment.eyebrow} title={treatment.name} description={treatment.summary}>
        <div className="flex flex-wrap gap-3">
          <CtaLink
            href="/contact#book"
            eventName="book_consultation_click"
            eventPayload={{ location: `treatment_${treatment.slug}` }}
          >
            {CTA.primary}
          </CtaLink>
          <CtaLink href="/suitability" variant="secondary">
            {CTA.secondary}
          </CtaLink>
        </div>
      </PageHero>

      <section className="border-b border-line bg-paper py-12 sm:py-16">
        <Container className="grid gap-4 sm:grid-cols-3">
          <FactCard label="Typically considered by" value={treatment.typicallyConsideredBy} />
          <FactCard label="May help with" value={treatment.mayHelpWith.join(", ")} />
          <FactCard label="Key point" value={treatment.keyDifferentiator} />
        </Container>
      </section>

      {treatment.isHub ? (
        <section aria-labelledby="techniques-heading" className="border-b border-line bg-cream-2 py-12 sm:py-16">
          <Container>
            <SectionHeading
              id="techniques-heading"
              eyebrow="Choose a technique"
              title="LASIK, LASEK and PRK compared"
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {laserTreatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-soft hover:shadow-card"
                  >
                    <div>
                      <h3 className="font-serif text-lg text-ink">{t.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{t.summary}</p>
                    </div>
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink">
                      {t.cardCta}
                      <ChevronRightIcon className="h-4 w-4 text-gold" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section aria-labelledby="how-it-works-heading" className="border-b border-line bg-paper py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="how-it-works-heading" eyebrow="The procedure" title="How it works" />
            <ol className="mt-6 space-y-4">
              {treatment.howItWorks.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-cream">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading eyebrow="Recovery" title="What to expect afterwards" as="h3" />
            <p className="mt-4 text-sm leading-relaxed text-slate">{treatment.recovery}</p>

            <SectionHeading eyebrow="Suitability" title="Suitability considerations" as="h3" />
            <ul className="mt-4 space-y-2.5">
              {treatment.suitabilityNotes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-sm text-slate">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="risks-heading" className="border-b border-line bg-cream-2 py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            id="risks-heading"
            eyebrow="Important information"
            title="Risks and limitations"
            description="As with any medical procedure, this treatment has risks and is not right for everyone. Your consultant will discuss these fully before any decision is made."
          />
          <ul className="mt-6 space-y-3">
            {treatment.risksAndLimitations.map((risk) => (
              <li key={risk} className="rounded-xl border border-line bg-paper p-4 text-sm leading-relaxed text-slate">
                {risk}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {alternatives.length > 0 ? (
        <section aria-labelledby="alternatives-heading" className="border-b border-line bg-paper py-12 sm:py-16">
          <Container>
            <SectionHeading id="alternatives-heading" eyebrow="Alternatives" title="Other pathways to consider" />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {alternatives.map((alt) => (
                <li key={alt!.slug}>
                  <Link
                    href={`/treatments/${alt!.slug}`}
                    className="flex items-center justify-between rounded-xl border border-line bg-cream-2 p-5 hover:border-gold"
                  >
                    <span>
                      <span className="block font-serif text-lg text-ink">{alt!.name}</span>
                      <span className="block text-sm text-slate">{alt!.keyDifferentiator}</span>
                    </span>
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {treatment.faqs.length > 0 ? (
        <section aria-labelledby="treatment-faq-heading" className="border-b border-line bg-cream-2 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <SectionHeading id="treatment-faq-heading" eyebrow="Questions" title={`${treatment.shortName} FAQs`} />
            <div className="mt-6">
              <FaqAccordion faqs={treatment.faqs} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-b border-line bg-paper py-12 sm:py-16">
        <Container className="max-w-3xl">
          <MedicalReviewPanel />
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-cream-2 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">{label}</p>
      <p className="mt-1.5 text-sm text-ink">{value}</p>
    </div>
  );
}
