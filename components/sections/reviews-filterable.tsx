"use client";

import { useState } from "react";
import { reviews, reviewTags, ReviewTag } from "@/content/reviews";
import { ReviewCard } from "@/components/sections/review-card";

export function ReviewsFilterable() {
  const [activeTag, setActiveTag] = useState<ReviewTag | "all">("all");

  const filtered = activeTag === "all" ? reviews : reviews.filter((r) => r.treatment === activeTag);

  return (
    <div>
      <div role="group" aria-label="Filter reviews by treatment" className="flex flex-wrap gap-2">
        <FilterButton label="All" active={activeTag === "all"} onClick={() => setActiveTag("all")} />
        {reviewTags.map((tag) => (
          <FilterButton
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {filtered.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
        active
          ? "border-ink bg-ink text-cream"
          : "border-line bg-paper text-ink hover:border-gold"
      }`}
    >
      {label}
    </button>
  );
}
