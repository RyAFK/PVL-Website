import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects personal and medical information.`,
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

// PLACEHOLDER — this page must be reviewed and approved by Precision Vision
// London's data protection lead / legal counsel before launch. It is
// intentionally generic and does not describe real data-processing detail.
export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy policy", href: "/privacy-policy" }]} />
      <PageHero eyebrow="Legal" title="Privacy policy" description="Pending legal review — placeholder content." />
      <section className="border-b border-line bg-paper py-14 sm:py-16">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-slate">
          <p>
            {siteConfig.name} is committed to protecting your privacy and handling personal and
            medical information in accordance with UK data protection law, including the UK GDPR
            and the Data Protection Act 2018.
          </p>
          <div>
            <h2 className="font-serif text-xl text-ink">Information we collect</h2>
            <p className="mt-2">
              This may include contact details you provide through our enquiry and booking forms,
              and clinical information you share directly with our clinical team during
              consultations — never through general enquiry forms or website analytics.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">How we use it</h2>
            <p className="mt-2">
              To respond to enquiries, arrange and deliver your care, and meet our legal and
              regulatory obligations as a medical provider.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">Your rights</h2>
            <p className="mt-2">
              You have rights to access, correct and, in some circumstances, request deletion of
              your personal data. Contact the clinic to exercise these rights.
            </p>
          </div>
          <p className="text-xs text-slate-light">
            This is placeholder text pending review by Precision Vision London&apos;s data
            protection lead and legal counsel. Do not rely on this page as a finished policy.
          </p>
        </Container>
      </section>
    </>
  );
}
