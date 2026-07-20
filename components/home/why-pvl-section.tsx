import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckIcon } from "@/components/ui/icons";

const pillars = [
  {
    title: "Consultant-led throughout",
    description:
      "The same named consultant oversees your assessment, treatment planning and aftercare, rather than handing you between different clinicians.",
  },
  {
    title: "Diagnostic-first approach",
    description:
      "Corneal mapping, prescription and eye-health measurements inform every recommendation before any treatment is proposed.",
  },
  {
    title: "Clear, unhurried explanations",
    description:
      "Alternatives, risks and realistic recovery timelines are explained before you decide whether to proceed.",
  },
  {
    title: "Included aftercare",
    description:
      "A defined schedule of follow-up reviews is included within the one-year care guarantee, rather than treated as an add-on.",
  },
];

export function WhyPvlSection() {
  return (
    <section aria-labelledby="why-pvl-heading" className="border-b border-line bg-cream-2 py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="why-pvl-heading"
          eyebrow="Why Precision Vision London"
          title="An approach built around clarity, not pressure"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl bg-paper p-6 shadow-soft">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15">
                <CheckIcon className="h-4 w-4 text-gold" />
              </span>
              <h3 className="mt-4 font-serif text-lg text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
