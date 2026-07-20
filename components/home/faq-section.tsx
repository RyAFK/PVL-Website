import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { homepageFaqs } from "@/content/faqs";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="border-b border-line bg-paper py-16 sm:py-20">
      <Container className="mx-auto max-w-3xl">
        <SectionHeading
          id="faq-heading"
          eyebrow="Frequently asked questions"
          title="Common questions before your consultation"
          align="center"
        />
        <div className="mt-10">
          <FaqAccordion faqs={homepageFaqs} />
        </div>
      </Container>
    </section>
  );
}
