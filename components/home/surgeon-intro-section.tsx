import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import { leadSurgeon } from "@/content/surgeons";
import { CheckIcon } from "@/components/ui/icons";

export function SurgeonIntroSection() {
  const initials = leadSurgeon.name
    .replace(/^(Mr|Ms|Mrs|Dr|Mx)\.?\s/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <section aria-labelledby="surgeon-heading" className="border-b border-line bg-paper py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-ink to-ink-2 shadow-card sm:h-64 sm:w-64"
            aria-hidden="true"
          >
            <span className="font-serif text-5xl text-cream">{initials}</span>
            <span className="absolute inset-0 rounded-full border border-gold-light/40" />
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Your lead surgeon" title="Meet the consultant who plans your care" />
          <div className="mt-6">
            <p className="font-serif text-2xl text-ink">{leadSurgeon.name}</p>
            <p className="text-sm font-medium text-gold">{leadSurgeon.role}</p>
            <p className="mt-1 text-sm text-slate-light">
              {leadSurgeon.qualifications.join(", ")} · {leadSurgeon.gmcNumber}
            </p>
          </div>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {leadSurgeon.specialistInterests.map((interest) => (
              <li key={interest} className="flex items-start gap-2 text-sm text-slate">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                {interest}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate">
            {leadSurgeon.yearsExperience}+ years in ophthalmic surgery. {leadSurgeon.procedureExperienceLabel}.
          </p>

          <div className="mt-6">
            <CtaLink href={`/surgeons/${leadSurgeon.slug}`} variant="secondary">
              Meet your surgeon
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
