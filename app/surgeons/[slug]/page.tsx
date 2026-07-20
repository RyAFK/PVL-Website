import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { surgeons, getSurgeonBySlug } from "@/content/surgeons";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { CTA } from "@/content/ctas";
import { CheckIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPhysicianSchema } from "@/lib/structured-data";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return surgeons.map((surgeon) => ({ slug: surgeon.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const surgeon = getSurgeonBySlug(slug);
  if (!surgeon) return {};
  return {
    title: surgeon.name,
    description: `${surgeon.name}, ${surgeon.role} at Precision Vision London, Harley Street.`,
    alternates: { canonical: `${siteConfig.url}/surgeons/${surgeon.slug}` },
  };
}

export default async function SurgeonProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const surgeon = getSurgeonBySlug(slug);
  if (!surgeon) notFound();

  const initials = surgeon.name
    .replace(/^(Mr|Ms|Mrs|Dr|Mx)\.?\s/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <JsonLd data={buildPhysicianSchema(surgeon)} />
      <Breadcrumbs items={[{ name: "Surgeons", href: "/surgeons" }, { name: surgeon.name, href: `/surgeons/${surgeon.slug}` }]} />
      <PageHero eyebrow={surgeon.role} title={surgeon.name}>
        <CtaLink href="/contact#book" eventName="book_consultation_click" eventPayload={{ location: `surgeon_${surgeon.slug}` }}>
          {CTA.primary}
        </CtaLink>
      </PageHero>

      <section className="border-b border-line bg-paper py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex justify-center lg:justify-start">
            <span
              className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-ink to-ink-2 font-serif text-5xl text-cream shadow-card"
              aria-hidden="true"
            >
              {initials}
            </span>
          </div>

          <div>
            <dl className="grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Qualifications
                </dt>
                <dd className="mt-1 text-sm text-ink">{surgeon.qualifications.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  GMC number
                </dt>
                <dd className="mt-1 text-sm text-ink">{surgeon.gmcNumber}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Years of experience
                </dt>
                <dd className="mt-1 text-sm text-ink">{surgeon.yearsExperience}+ years</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  Procedure experience
                </dt>
                <dd className="mt-1 text-sm text-ink">{surgeon.procedureExperienceLabel}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                Specialist interests
              </p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {surgeon.specialistInterests.map((interest) => (
                  <li key={interest} className="flex items-start gap-2 text-sm text-slate">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-3">
              {surgeon.bio.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-slate">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
