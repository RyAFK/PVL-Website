import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { LocationSection } from "@/components/sections/location-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Book a Consultation",
  description:
    "Book a consultation or speak to the patient care team at Precision Vision London, Harley Street, London.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Book a consultation or ask a question"
        description="Share a few details and a member of the patient care team will be in touch to arrange your assessment."
      />

      <section id="book" className="scroll-mt-24 border-b border-line bg-paper py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Enquiry form" title="Send an enquiry" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-cream-2 p-6 sm:p-8">
            <h2 className="font-serif text-xl text-ink">Prefer to talk it through?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              Call the patient care team directly, Monday to Saturday, to ask questions or book
              your consultation over the phone.
            </p>
            <a
              href={`tel:${siteConfig.telephone}`}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:bg-ink/5"
            >
              {siteConfig.telephoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-location-heading" className="border-b border-line bg-cream-2 py-14 sm:py-16">
        <Container>
          <SectionHeading id="contact-location-heading" eyebrow="Visit us" title="Harley Street clinic" />
          <div className="mt-8">
            <LocationSection />
          </div>
        </Container>
      </section>
    </>
  );
}
