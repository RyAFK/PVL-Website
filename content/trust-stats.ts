// A single, internally-consistent set of proof points.
// PLACEHOLDER figures — replace with verified data before launch, and keep
// "years of surgical experience" and "procedures performed" clearly
// distinguished per surgeon (see content/surgeons.ts) rather than merged
// into one ambiguous headline number.
export interface TrustStat {
  value: string;
  label: string;
  detail?: string;
}

export const trustStats: TrustStat[] = [
  {
    value: "22+ years",
    label: "Lead surgeon experience",
    detail: "Mr Adam Whitfield's surgical career, including NHS and private practice",
  },
  {
    value: "Harley Street",
    label: "Central London clinic",
    detail: "Consultations, diagnostics and treatment under one roof",
  },
  {
    value: "1 year",
    label: "Included aftercare guarantee",
    detail: "Scheduled reviews and support included after treatment",
  },
  {
    value: "Consultant-led",
    label: "Every stage of care",
    detail: "Assessment, treatment and aftercare led by your named consultant",
  },
];

export const trustRowItems: string[] = [
  "Harley Street clinic",
  "22+ years' surgical experience",
  "One-year care guarantee",
  "Consultant-led care",
  "Independently reviewed by patients",
];
