import { clinicalReview } from "@/content/clinical-review";

export function MedicalReviewPanel({ references }: { references?: string[] }) {
  return (
    <div className="rounded-2xl border border-line bg-cream-2 p-7 text-sm text-slate">
      <h2 className="font-serif text-lg text-ink">About this information</h2>
      <dl className="mt-3 grid gap-2 sm:grid-cols-2">
        <div>
          <dt className="font-medium text-ink">Written by</dt>
          <dd>{clinicalReview.writtenBy}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Medically reviewed by</dt>
          <dd>
            {clinicalReview.medicallyReviewedBy}, {clinicalReview.reviewerRole}
            <br />
            {clinicalReview.reviewerQualifications} · {clinicalReview.gmcNumber}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Last reviewed</dt>
          <dd>{clinicalReview.lastReviewed}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Last updated</dt>
          <dd>{clinicalReview.lastUpdated}</dd>
        </div>
      </dl>
      {references && references.length > 0 ? (
        <div className="mt-4 border-t border-line pt-4">
          <p className="font-medium text-ink">References</p>
          <ul className="mt-1.5 list-inside list-disc space-y-1">
            {references.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-4 border-t border-line pt-4 text-xs text-slate-light">
        This page is for general information and does not replace a clinical assessment. It does
        not constitute a diagnosis or a treatment recommendation.
      </p>
    </div>
  );
}
