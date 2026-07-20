import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import { pricingPackages, pricingNotes } from "@/content/pricing";
import { CheckIcon } from "@/components/ui/icons";

export function PricingPreviewSection() {
  return (
    <section aria-labelledby="pricing-heading" className="border-b border-line bg-cream-2 py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="pricing-heading"
            eyebrow="Pricing and finance"
            title="Transparent about what's included"
            description="Exact costs are confirmed at consultation, once your treatment plan is known. Every package includes aftercare within the guarantee period."
          />
          <CtaLink href="/pricing" variant="ghost" className="px-0">
            View pricing and finance
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPackages.map((pkg) => (
            <div key={pkg.treatmentSlug} className="rounded-2xl bg-paper p-7 shadow-soft">
              <h3 className="font-serif text-lg text-ink">{pkg.treatmentName}</h3>
              {pkg.guidePriceFrom ? (
                <p className="mt-2 font-serif text-2xl text-ink">{pkg.guidePriceFrom}</p>
              ) : (
                <p className="mt-2 text-sm font-medium text-slate-light">
                  Confirmed at consultation
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <dl className="mt-10 grid gap-6 rounded-2xl border border-line bg-paper p-8 sm:grid-cols-3">
          <div>
            <dt className="text-sm font-semibold text-ink">Consultation fee</dt>
            <dd className="mt-1 text-sm text-slate">{pricingNotes.consultationFee}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink">Finance</dt>
            <dd className="mt-1 text-sm text-slate">{pricingNotes.finance}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink">Insurance</dt>
            <dd className="mt-1 text-sm text-slate">{pricingNotes.insurance}</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
