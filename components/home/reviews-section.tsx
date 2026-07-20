import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReviewCard } from "@/components/sections/review-card";
import { reviews } from "@/content/reviews";
import { CtaLink } from "@/components/ui/cta-link";

export function ReviewsSection() {
  const featured = reviews.slice(0, 3);

  return (
    <section aria-labelledby="reviews-heading" className="border-b border-line bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="reviews-heading"
            eyebrow="Patient reviews and stories"
            title="What patients say about their care"
          />
          <CtaLink href="/patient-stories" variant="ghost" className="px-0">
            Read more patient stories
          </CtaLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
