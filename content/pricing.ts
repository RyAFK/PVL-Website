// No specific prices are included here by design: real, approved prices were
// not available in the source project, and the task instructions are explicit
// that prices must not be invented. Populate `guidePriceFrom` per treatment
// once Precision Vision London confirms current, approved figures — the
// pricing UI already supports displaying it.
export interface PricingPackage {
  treatmentSlug: string;
  treatmentName: string;
  guidePriceFrom?: string;
  includes: string[];
}

export const pricingPackages: PricingPackage[] = [
  {
    treatmentSlug: "laser-eye-surgery",
    treatmentName: "Laser eye surgery (LASIK, LASEK or PRK)",
    includes: [
      "Full diagnostic assessment",
      "Treatment with your consultant",
      "Scheduled aftercare reviews within the guarantee period",
    ],
  },
  {
    treatmentSlug: "icl",
    treatmentName: "ICL",
    includes: [
      "Full diagnostic assessment and lens measurements",
      "Treatment with your consultant",
      "Scheduled aftercare reviews within the guarantee period",
    ],
  },
  {
    treatmentSlug: "lens-replacement",
    treatmentName: "Refractive lens exchange",
    includes: [
      "Full diagnostic assessment and lens consultation",
      "Treatment with your consultant",
      "Scheduled aftercare reviews within the guarantee period",
    ],
  },
  {
    treatmentSlug: "cataract-surgery",
    treatmentName: "Cataract surgery",
    includes: [
      "Full diagnostic assessment",
      "Treatment with your consultant",
      "Scheduled aftercare reviews within the guarantee period",
    ],
  },
];

export const pricingNotes = {
  consultationFee:
    "A consultation and diagnostic assessment fee applies and will be confirmed when you book. This fee is typically deducted from treatment costs if you proceed.", // PLACEHOLDER wording — confirm actual policy
  finance:
    "Finance options may be available, subject to eligibility and status.", // PLACEHOLDER — confirm current finance partner and terms
  insurance:
    "Some treatments, such as cataract surgery, may be covered by private medical insurance. Refractive procedures such as LASIK are not typically covered.", // PLACEHOLDER — confirm accepted insurers
  aftercare:
    "Scheduled aftercare within the one-year guarantee period is included in your treatment package.",
};
