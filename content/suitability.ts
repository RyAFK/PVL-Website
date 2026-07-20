export interface SuitabilityOption {
  id: string;
  label: string;
}

export interface SuitabilityQuestion {
  id: string;
  question: string;
  options: SuitabilityOption[];
}

export const openingQuestion: SuitabilityQuestion = {
  id: "goal",
  question: "Which of these best describes your situation?",
  options: [
    { id: "freedom", label: "Freedom from glasses or contact lenses" },
    { id: "reading-after-40", label: "Reading vision after 40" },
    { id: "high-prescription", label: "A high prescription" },
    { id: "cataracts", label: "Cataracts or cloudy vision" },
    { id: "told-not-suitable", label: "I have been told laser may not be suitable" },
    { id: "not-sure", label: "I am not sure" },
  ],
};

export const followUpQuestions: Record<string, SuitabilityQuestion> = {
  freedom: {
    id: "age-band",
    question: "Are you over 40?",
    options: [
      { id: "under-40", label: "Under 40" },
      { id: "40-plus", label: "40 or over" },
      { id: "not-sure", label: "Not sure / prefer not to say" },
    ],
  },
  "high-prescription": {
    id: "told-before",
    question: "Has a previous clinic told you that laser treatment may not be an option?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" },
      { id: "not-sure", label: "Not sure" },
    ],
  },
  "reading-after-40": {
    id: "distance-vision",
    question: "Do you also have noticeable short sight or long sight, as well as reading difficulty?",
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No, mainly reading vision" },
      { id: "not-sure", label: "Not sure" },
    ],
  },
};

export interface SuitabilityResult {
  headline: string;
  pathways: string[]; // treatment slugs
  rationale: string;
}

export function resolveSuitabilityResult(
  answers: Record<string, string>
): SuitabilityResult {
  const goal = answers.goal;

  if (goal === "cataracts") {
    return {
      headline: "Cataract-related pathways may be relevant to discuss",
      pathways: ["cataract-surgery", "lens-replacement"],
      rationale:
        "Cloudy or blurred vision, glare or faded colours can be signs of a cataract. A clinical assessment can confirm this and discuss lens options.",
    };
  }

  if (goal === "told-not-suitable") {
    return {
      headline: "Lens-based pathways may be worth exploring",
      pathways: ["icl", "lens-replacement"],
      rationale:
        "Being told laser treatment may not be suitable doesn't rule out vision correction altogether. ICL and refractive lens exchange are lens-based alternatives that a consultant can assess for your eyes.",
    };
  }

  if (goal === "not-sure") {
    return {
      headline: "A full assessment is the best next step",
      pathways: ["laser-eye-surgery", "icl", "lens-replacement"],
      rationale:
        "A diagnostic assessment can map your prescription, corneal thickness and overall eye health, and your consultant can talk through which pathways may apply to you.",
    };
  }

  if (goal === "high-prescription") {
    const toldBefore = answers["told-before"];
    if (toldBefore === "yes") {
      return {
        headline: "ICL may be a relevant alternative to discuss",
        pathways: ["icl", "lens-replacement"],
        rationale:
          "Higher prescriptions can sometimes fall outside safe laser treatment parameters. ICL corrects vision using an implantable lens rather than reshaping the cornea, which may be worth discussing.",
      };
    }
    return {
      headline: "Several pathways may be relevant to discuss",
      pathways: ["icl", "laser-eye-surgery"],
      rationale:
        "Whether laser treatment or ICL is more appropriate for a higher prescription depends on your corneal thickness and shape, which a full assessment can confirm.",
    };
  }

  if (goal === "reading-after-40") {
    const distance = answers["distance-vision"];
    if (distance === "yes") {
      return {
        headline: "Lens replacement may be worth discussing alongside laser options",
        pathways: ["lens-replacement", "laser-eye-surgery"],
        rationale:
          "Where reading vision changes are combined with short or long sight, your consultant may discuss both lens-based and laser pathways with you.",
      };
    }
    return {
      headline: "Lens replacement may be relevant to discuss",
      pathways: ["lens-replacement"],
      rationale:
        "Age-related reading vision changes (presbyopia) are a common reason adults over 40 consider refractive lens exchange, which can support distance, intermediate and reading vision depending on the lens chosen.",
    };
  }

  // goal === "freedom"
  const ageBand = answers["age-band"];
  if (ageBand === "40-plus") {
    return {
      headline: "A few pathways may be worth discussing",
      pathways: ["laser-eye-surgery", "lens-replacement"],
      rationale:
        "From 40 onwards, both laser eye surgery and lens-based options can be relevant, depending on your prescription and any age-related reading vision changes.",
    };
  }
  return {
    headline: "Laser eye surgery or ICL may be worth discussing",
    pathways: ["laser-eye-surgery", "icl"],
    rationale:
      "For adults under 40 seeking freedom from glasses or contact lenses, laser eye surgery or ICL are typically the first pathways discussed, depending on your prescription and corneal measurements.",
  };
}

export const suitabilityDisclaimer =
  "This tool does not provide a diagnosis or confirm suitability. A full clinical assessment is required before any treatment recommendation.";
