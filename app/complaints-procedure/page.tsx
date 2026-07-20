import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints Procedure",
  description: `How to raise a concern or complaint with ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/complaints-procedure` },
};

// PLACEHOLDER — requires review by the clinic's registered manager / CQC
// compliance lead before launch.
export default function ComplaintsProcedurePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Complaints procedure", href: "/complaints-procedure" }]} />
      <PageHero
        eyebrow="Patient rights"
        title="Complaints procedure"
        description="Pending compliance review — placeholder content."
      />
      <section className="border-b border-line bg-paper py-14 sm:py-16">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-slate">
          <p>
            We aim to provide the highest standard of care, and want to hear from you if
            something falls short. In the first instance, contact the patient care team directly
            at{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.telephoneDisplay}.
          </p>
          <p>
            Complaints are acknowledged promptly and investigated by the clinical management
            team. If you remain unsatisfied with our response, you may escalate your concern to
            the relevant independent regulator.
          </p>
          <p className="text-xs text-slate-light">
            This is placeholder text pending review by Precision Vision London&apos;s registered
            manager and compliance lead. Do not rely on this page as a finished policy.
          </p>
        </Container>
      </section>
    </>
  );
}
