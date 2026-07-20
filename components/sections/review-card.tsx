"use client";

import { Review } from "@/content/reviews";
import { StarIcon } from "@/components/ui/icons";
import { trackEvent } from "@/lib/analytics";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-paper p-7 shadow-soft">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
          {review.treatment}
        </span>
        {review.rating ? (
          <span className="flex items-center gap-0.5" aria-label={`Rated ${review.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                filled={index < review.rating!}
                className="h-3.5 w-3.5 text-gold"
              />
            ))}
          </span>
        ) : null}
      </div>

      <p className="mt-4 flex-1 text-balance font-serif text-lg leading-snug text-ink">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-light">
        <span>{review.initials}</span>
        <span>via {review.platform}</span>
      </div>

      {review.fullStory ? (
        <details className="group mt-3 border-t border-line pt-3">
          <summary
            onClick={() => trackEvent("review_expand", { id: review.id })}
            className="cursor-pointer list-none text-sm font-semibold text-ink underline underline-offset-4"
          >
            Read full story
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate">{review.fullStory}</p>
        </details>
      ) : null}
    </article>
  );
}
