"use client";

import Link from "next/link";
import { Treatment } from "@/content/treatments";
import { ChevronRightIcon } from "@/components/ui/icons";
import { trackEvent } from "@/lib/analytics";

export function TreatmentGrid({ treatments }: { treatments: Treatment[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment.slug} treatment={treatment} />
      ))}
    </div>
  );
}

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-soft transition-shadow hover:shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold">
        {treatment.eyebrow}
      </p>
      <h3 className="mt-2 font-serif text-xl text-ink">{treatment.name}</h3>

      <dl className="mt-4 flex flex-1 flex-col gap-3 text-sm">
        <div>
          <dt className="font-medium text-ink">Typically considered by</dt>
          <dd className="mt-0.5 text-slate">{treatment.typicallyConsideredBy}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">May help with</dt>
          <dd className="mt-0.5 text-slate">{treatment.mayHelpWith.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Key point</dt>
          <dd className="mt-0.5 text-slate">{treatment.keyDifferentiator}</dd>
        </div>
        {treatment.options ? (
          <div>
            <dt className="font-medium text-ink">Options</dt>
            <dd className="mt-0.5 text-slate">{treatment.options}</dd>
          </div>
        ) : null}
      </dl>

      <Link
        href={`/treatments/${treatment.slug}`}
        onClick={() => trackEvent("treatment_card_click", { slug: treatment.slug })}
        className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-ink-2"
      >
        {treatment.cardCta}
        <ChevronRightIcon className="h-4 w-4 text-gold" />
      </Link>
    </article>
  );
}
