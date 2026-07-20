import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckIcon } from "@/components/ui/icons";

const evidencePoints = [
  "Visual acuity and eye-health checks at defined intervals after treatment, not just a single follow-up.",
  "Outcomes are discussed against your own pre-treatment measurements, rather than a generic average.",
  "Individual results vary by prescription, eye health and the technique used — your consultant will set realistic expectations for your case.",
  "If healing doesn't progress as expected, this is reviewed with your consultant as part of your included aftercare.",
];

export function ResultsEvidenceSection() {
  return (
    <section aria-labelledby="results-heading" className="border-b border-line bg-cream-2 py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          id="results-heading"
          eyebrow="Results and clinical evidence"
          title="How outcomes are tracked, not just promised"
          description="We would rather explain how results are measured than lead with a headline number."
        />
        <ul className="grid gap-4">
          {evidencePoints.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl bg-paper p-4 shadow-soft">
              <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span className="text-sm leading-relaxed text-slate">{point}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
