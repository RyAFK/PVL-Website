import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { Container } from "@/components/ui/container";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { surgeons } from "@/content/surgeons";
import { siteConfig } from "@/lib/site";
import { ChevronRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Our Surgeons",
  description:
    "Meet the consultant ophthalmic surgeons leading assessment, treatment and aftercare at Precision Vision London on Harley Street.",
  alternates: { canonical: `${siteConfig.url}/surgeons` },
};

export default function SurgeonsIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Surgeons", href: "/surgeons" }]} />
      <PageHero
        eyebrow="Our clinical team"
        title="Consultant-led care, by name"
        description="Every patient is under the named care of a consultant ophthalmic surgeon from assessment through to aftercare."
      />
      <section className="border-b border-line bg-paper py-20 sm:py-24">
        <Container className="grid gap-8 sm:grid-cols-2">
          {surgeons.map((surgeon) => {
            const initials = surgeon.name
              .replace(/^(Mr|Ms|Mrs|Dr|Mx)\.?\s/, "")
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2);
            return (
              <Link
                key={surgeon.slug}
                href={`/surgeons/${surgeon.slug}`}
                className="flex items-start gap-5 rounded-2xl border border-line bg-cream-2 p-7 shadow-soft hover:shadow-card"
              >
                <span
                  className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ink to-ink-2 font-serif text-xl text-cream"
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <span>
                  <span className="block font-serif text-xl text-ink">{surgeon.name}</span>
                  <span className="mt-0.5 block text-sm font-medium text-gold">{surgeon.role}</span>
                  <span className="mt-2 block text-sm text-slate">
                    {surgeon.specialistInterests.slice(0, 2).join(" · ")}
                  </span>
                  <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-ink">
                    View profile
                    <ChevronRightIcon className="h-4 w-4 text-gold" />
                  </span>
                </span>
              </Link>
            );
          })}
        </Container>
      </section>
      <FinalCtaSection />
    </>
  );
}
