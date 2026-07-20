// PLACEHOLDER reviews — replace with real, permission-cleared patient
// feedback and verified platform ratings before launch. Do not alter the
// meaning of genuine patient feedback when it is supplied.
export type ReviewTag =
  | "LASIK"
  | "ICL"
  | "Lens replacement"
  | "Cataract"
  | "High prescription"
  | "Over-40 vision";

export interface Review {
  id: string;
  quote: string;
  initials: string;
  treatment: ReviewTag;
  platform: string;
  rating?: number;
  hasVideo?: boolean;
  fullStory?: string;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    quote:
      "The assessment was thorough and nothing was rushed. I understood exactly why LASIK was recommended before agreeing to go ahead.",
    initials: "R. H.",
    treatment: "LASIK",
    platform: "Trustpilot",
    fullStory:
      "R. H. had worn contact lenses for over a decade before an initial suitability enquiry led to a full diagnostic assessment at the clinic. The consultant talked through corneal thickness results and why LASIK was considered appropriate, alongside the alternatives that had been ruled out and why. Aftercare reviews continued for several months following treatment.",
  },
  {
    id: "review-2",
    quote:
      "I'd been told elsewhere that my prescription was too high for laser treatment. The team explained ICL as an alternative and answered every question.",
    initials: "M. K.",
    treatment: "ICL",
    platform: "Google",
    fullStory:
      "M. K. had a high prescription that a previous clinic had said made laser treatment unsuitable. A detailed assessment at Precision Vision London confirmed ICL as a considered option, with the surgeon explaining lens sizing, the procedure itself and the follow-up schedule in detail before any decision was made.",
  },
  {
    id: "review-3",
    quote:
      "Reading vision had become difficult after 40. Lens replacement was explained clearly, including the realistic trade-offs between lens types.",
    initials: "J. P.",
    treatment: "Lens replacement",
    platform: "Trustpilot",
    fullStory:
      "J. P. had noticed increasing difficulty with reading vision and relied on varifocals for years. The consultation covered several lens options, their respective benefits for near and distance vision, and what to realistically expect from each, before agreeing on refractive lens exchange.",
  },
  {
    id: "review-4",
    quote:
      "My cataract surgery was explained step by step, and the aftercare reviews meant I always knew what was happening next.",
    initials: "D. S.",
    treatment: "Cataract",
    platform: "Google",
    hasVideo: true,
    fullStory:
      "D. S. was referred for cataract surgery after noticing increasing glare while driving at night. The clinical team explained the diagnosis, the lens options available, and scheduled aftercare reviews throughout recovery.",
  },
  {
    id: "review-5",
    quote:
      "The suitability check online was a useful starting point before my consultation, and it was clear it wasn't a diagnosis.",
    initials: "A. T.",
    treatment: "High prescription",
    platform: "Trustpilot",
  },
  {
    id: "review-6",
    quote:
      "Every stage, from first enquiry to my final review appointment, was with the same consultant, which made a real difference.",
    initials: "L. N.",
    treatment: "Over-40 vision",
    platform: "Google",
  },
];

export const reviewTags: ReviewTag[] = [
  "LASIK",
  "ICL",
  "Lens replacement",
  "Cataract",
  "High prescription",
  "Over-40 vision",
];
