import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${siteConfig.name} website.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
};

// PLACEHOLDER — requires legal review before launch.
export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of use", href: "/terms" }]} />
      <PageHero eyebrow="Legal" title="Terms of use" description="Pending legal review — placeholder content." />
      <section className="border-b border-line bg-paper py-20 sm:py-24">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-slate">
          <p>
            This website provides general information about vision-correction treatments offered
            by {siteConfig.name}. It is not medical advice, and does not create a
            doctor-patient relationship or confirm your suitability for any treatment.
          </p>
          <p>
            Content, including the non-diagnostic suitability tool, is intended to support — not
            replace — a full clinical assessment carried out by a qualified consultant.
          </p>
          <p className="text-xs text-slate-light">
            This is placeholder text pending review by Precision Vision London&apos;s legal
            counsel. Do not rely on this page as a finished policy.
          </p>
        </Container>
      </section>
    </>
  );
}
