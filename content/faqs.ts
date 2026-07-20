export interface Faq {
  question: string;
  answer: string;
}

export const homepageFaqs: Faq[] = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "The non-diagnostic suitability tool on this site can help you explore which pathways may be worth discussing, but a full diagnostic assessment with a consultant is required before any treatment recommendation is made.",
  },
  {
    question: "Is laser eye surgery painful?",
    answer:
      "Treatment is carried out using local anaesthetic eye drops, so most patients describe pressure rather than pain during the procedure itself. Some mild discomfort during healing is common, particularly with surface techniques such as LASEK or PRK.",
  },
  {
    question: "What happens if I'm not suitable for laser treatment?",
    answer:
      "Not everyone is suitable for laser eye surgery. If this applies to you, your consultant will discuss alternatives such as ICL or refractive lens exchange, depending on your eyes and prescription.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Recovery varies by procedure. LASIK often allows a comparatively fast return to normal activities, while LASEK, PRK and lens-based procedures typically involve a longer initial healing period. Your consultant will set expectations specific to your treatment plan.",
  },
  {
    question: "What is included in the one-year care guarantee?",
    answer:
      "Scheduled aftercare reviews for one year following treatment are included as part of your care plan, so you have ongoing support while your vision stabilises.",
  },
  {
    question: "Will I need reading glasses again later in life?",
    answer:
      "Laser eye surgery corrects your prescription at the time of treatment, but it does not prevent natural age-related changes to reading vision (presbyopia), which affect most people from around their mid-40s onwards regardless of previous treatment.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "Why don't you show fixed prices online?",
    answer:
      "Vision correction pricing depends on your prescription, the technique recommended and, for lens-based procedures, the lens chosen. Your consultant confirms exact pricing once your treatment plan is agreed, following your assessment.",
  },
  {
    question: "Is the consultation fee deducted from treatment costs?",
    answer:
      "This is typically the case, and will be confirmed clearly when you book your consultation.",
  },
  {
    question: "Do you offer finance?",
    answer:
      "Finance options may be available, subject to eligibility and status. Ask the patient care team for current details.",
  },
];
