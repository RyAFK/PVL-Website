export type TreatmentCategory = "laser-hub" | "laser" | "lens";

export interface Treatment {
  slug: string;
  name: string;
  shortName: string;
  category: TreatmentCategory;
  isHub?: boolean;
  eyebrow: string;
  summary: string;
  typicallyConsideredBy: string;
  mayHelpWith: string[];
  keyDifferentiator: string;
  options?: string;
  cardCta: string;
  howItWorks: string[];
  suitabilityNotes: string[];
  recovery: string;
  risksAndLimitations: string[];
  alternatives: { slug: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "laser-eye-surgery",
    name: "Laser Eye Surgery",
    shortName: "Laser eye surgery",
    category: "laser-hub",
    isHub: true,
    eyebrow: "An overview of LASIK, LASEK and PRK",
    summary:
      "Laser eye surgery reshapes the cornea to change how light focuses on the retina. LASIK, LASEK and PRK are different techniques for achieving this, and the right one depends on your prescription, corneal thickness and lifestyle.",
    typicallyConsideredBy: "Adults with a stable prescription",
    mayHelpWith: ["Short sight", "Long sight", "Astigmatism"],
    keyDifferentiator:
      "One consultation compares LASIK, LASEK and PRK so you and your consultant can agree the most appropriate technique together.",
    options: "LASIK, LASEK and PRK",
    cardCta: "Explore laser treatment",
    howItWorks: [
      "A detailed corneal and prescription assessment measures corneal thickness, shape and overall eye health.",
      "Your consultant discusses which technique — LASIK, LASEK or PRK — suits your cornea and lifestyle.",
      "On treatment day, a laser reshapes the cornea to correct focusing power under local anaesthetic drops.",
      "Vision typically stabilises over subsequent days to weeks, with scheduled aftercare reviews.",
    ],
    suitabilityNotes: [
      "A stable prescription for at least 12 months is typically required.",
      "Corneal thickness and shape must fall within safe treatment parameters.",
      "Certain eye conditions or very high prescriptions may mean an alternative pathway, such as ICL, is more appropriate.",
    ],
    recovery:
      "Recovery timelines differ by technique. LASIK often allows a faster return to normal activities, while LASEK and PRK typically involve a longer initial healing period. Your consultant will set expectations specific to your treatment plan.",
    risksAndLimitations: [
      "As with any surgical procedure, laser eye surgery carries risks, including dry eye, glare, halos or under/over-correction.",
      "A small proportion of patients may need an enhancement procedure.",
      "Not everyone is suitable for laser treatment — a full diagnostic assessment is required before any recommendation.",
    ],
    alternatives: [
      { slug: "icl", label: "ICL (implantable lens)" },
      { slug: "lens-replacement", label: "Refractive lens exchange" },
    ],
    faqs: [
      {
        question: "What is the difference between LASIK, LASEK and PRK?",
        answer:
          "All three reshape the cornea using a laser. LASIK creates a thin corneal flap before reshaping; LASEK and PRK work on or without a surface layer, which can suit thinner corneas or certain lifestyles. Your consultant will explain which is appropriate after your assessment.",
      },
      {
        question: "Am I too old, or too young, for laser eye surgery?",
        answer:
          "Suitability depends more on prescription stability and eye health than age alone. Most clinics look for a stable prescription over the previous 12 months, typically from the early twenties onwards.",
      },
    ],
  },
  {
    slug: "lasik",
    name: "LASIK",
    shortName: "LASIK",
    category: "laser",
    eyebrow: "Laser eye surgery",
    summary:
      "LASIK (laser-assisted in situ keratomileusis) creates a thin corneal flap before reshaping the underlying tissue with a laser, then repositions the flap. It is one of the most established forms of laser eye surgery.",
    typicallyConsideredBy: "Adults with a stable prescription and sufficient corneal thickness",
    mayHelpWith: ["Short sight", "Long sight", "Astigmatism"],
    keyDifferentiator:
      "A precise corneal flap allows many patients a comparatively fast visual recovery.",
    cardCta: "Explore LASIK",
    howItWorks: [
      "Diagnostic scans map your corneal thickness and surface shape.",
      "A femtosecond laser creates a thin corneal flap, which is gently lifted.",
      "An excimer laser reshapes the underlying corneal tissue according to your prescription.",
      "The flap is repositioned, acting as a natural bandage during healing.",
    ],
    suitabilityNotes: [
      "Requires sufficient corneal thickness to safely create a flap.",
      "A stable prescription is typically required for at least 12 months beforehand.",
      "Some corneal shapes or very dry eyes may make an alternative technique more suitable.",
    ],
    recovery:
      "Many patients notice improved vision within a day or two, though full stabilisation and healing continue over subsequent weeks. Aftercare reviews monitor healing and flap position.",
    risksAndLimitations: [
      "Possible dry eye, glare, halos or fluctuating vision during healing.",
      "Flap-related complications are uncommon but are a specific consideration with LASIK.",
      "A small proportion of patients may require an enhancement.",
    ],
    alternatives: [
      { slug: "lasek", label: "LASEK" },
      { slug: "prk", label: "PRK" },
      { slug: "icl", label: "ICL" },
    ],
    faqs: [
      {
        question: "How long does LASIK surgery take?",
        answer:
          "The laser treatment itself is typically brief per eye, though your total time at the clinic on treatment day will be longer to allow for preparation and initial post-treatment checks.",
      },
      {
        question: "Will I need glasses again after LASIK?",
        answer:
          "LASIK aims to reduce dependence on glasses or contact lenses for most everyday tasks. Natural age-related changes to reading vision can still occur later in life, which is a normal part of ageing rather than a treatment failure.",
      },
    ],
  },
  {
    slug: "lasek",
    name: "LASEK",
    shortName: "LASEK",
    category: "laser",
    eyebrow: "Laser eye surgery",
    summary:
      "LASEK (laser epithelial keratomileusis) gently repositions a thin surface layer of the cornea before laser reshaping, rather than creating a deeper corneal flap. It can be a considered alternative when corneal thickness or shape make LASIK less suitable.",
    typicallyConsideredBy: "Adults with thinner corneas or certain corneal shapes",
    mayHelpWith: ["Short sight", "Long sight", "Astigmatism"],
    keyDifferentiator:
      "Works on the corneal surface without creating a deeper flap, which some patients and consultants prefer for thinner corneas.",
    cardCta: "Explore LASEK",
    howItWorks: [
      "The surface epithelial layer of the cornea is loosened and moved aside.",
      "An excimer laser reshapes the corneal tissue beneath.",
      "The epithelial layer is repositioned and a protective contact lens bandage is typically worn during initial healing.",
    ],
    suitabilityNotes: [
      "Often considered when corneal thickness makes LASIK less appropriate.",
      "Requires a stable prescription and healthy ocular surface.",
      "Recovery is typically slower than LASIK, which is a relevant lifestyle consideration.",
    ],
    recovery:
      "Initial healing is usually longer than LASIK, with some discomfort and light sensitivity in the first few days as the surface layer heals. Vision continues to improve over the following weeks.",
    risksAndLimitations: [
      "Discomfort and light sensitivity are more common in the initial days than with LASIK.",
      "Dry eye, glare or under/over-correction are possible, as with any laser procedure.",
      "Full visual stabilisation can take longer than LASIK.",
    ],
    alternatives: [
      { slug: "lasik", label: "LASIK" },
      { slug: "prk", label: "PRK" },
      { slug: "icl", label: "ICL" },
    ],
    faqs: [
      {
        question: "Why would I be offered LASEK instead of LASIK?",
        answer:
          "LASEK may be suggested when your corneal thickness, shape or occupation make a surface-based technique more appropriate than creating a corneal flap. Your consultant will explain the specific reasoning for your eyes.",
      },
    ],
  },
  {
    slug: "prk",
    name: "PRK",
    shortName: "PRK",
    category: "laser",
    eyebrow: "Laser eye surgery",
    summary:
      "PRK (photorefractive keratectomy) removes the thin outer epithelial layer entirely before reshaping the cornea with a laser. The surface layer then regenerates naturally during healing.",
    typicallyConsideredBy: "Adults for whom a flap-free surface technique is preferred",
    mayHelpWith: ["Short sight", "Long sight", "Astigmatism"],
    keyDifferentiator:
      "A well-established, flap-free technique with a long clinical track record.",
    cardCta: "Explore PRK",
    howItWorks: [
      "The outer epithelial layer is removed.",
      "An excimer laser reshapes the exposed corneal tissue.",
      "A protective contact lens bandage supports the ocular surface while the epithelium regenerates naturally.",
    ],
    suitabilityNotes: [
      "Often considered for thinner corneas or certain occupational or lifestyle factors.",
      "Requires a stable prescription and healthy ocular surface.",
      "Involves a longer initial recovery than LASIK.",
    ],
    recovery:
      "The regenerating surface layer typically causes some discomfort and light sensitivity for several days, with vision gradually improving over the following weeks.",
    risksAndLimitations: [
      "Discomfort and light sensitivity in the days following treatment.",
      "Dry eye, glare or under/over-correction are possible, as with any laser procedure.",
      "Visual recovery is typically slower than LASIK.",
    ],
    alternatives: [
      { slug: "lasik", label: "LASIK" },
      { slug: "lasek", label: "LASEK" },
      { slug: "icl", label: "ICL" },
    ],
    faqs: [
      {
        question: "Is PRK safer than LASIK?",
        answer:
          "PRK and LASIK have different risk profiles rather than one being universally safer. PRK avoids flap-related considerations but typically involves more initial discomfort and a slower recovery. Your consultant will discuss which is more appropriate for your eyes.",
      },
    ],
  },
  {
    slug: "icl",
    name: "ICL",
    shortName: "ICL",
    category: "lens",
    eyebrow: "Implantable lens",
    summary:
      "An Implantable Collamer Lens (ICL) is a small lens placed inside the eye, in front of the natural lens, to correct vision without permanently removing corneal tissue. It can be a considered option for higher prescriptions or thinner corneas.",
    typicallyConsideredBy: "Younger adults, including some people with higher prescriptions",
    mayHelpWith: ["Short sight", "Higher prescriptions", "Certain cases unsuitable for laser treatment"],
    keyDifferentiator:
      "An implantable lens is used without permanently removing corneal tissue, and can, in principle, be removed or exchanged.",
    cardCta: "Explore ICL",
    howItWorks: [
      "Detailed eye measurements determine the correct lens power and size.",
      "A small incision allows the lens to be folded and placed within the eye.",
      "The lens unfolds into position in front of the natural lens, and the incision self-seals or is closed with minimal sutures.",
    ],
    suitabilityNotes: [
      "Often considered when corneal thickness or shape make laser treatment less suitable.",
      "Anterior chamber depth and other eye measurements must fall within safe treatment parameters.",
      "A full assessment determines the correct lens size and power for your eyes.",
    ],
    recovery:
      "Many patients notice improved vision within a day or two, with follow-up reviews to monitor eye pressure and lens position in the following weeks.",
    risksAndLimitations: [
      "As with any intraocular procedure, risks include infection, raised eye pressure or, rarely, cataract formation.",
      "Long-term monitoring of eye health is recommended.",
      "Not suitable for every eye shape or prescription — assessment is required.",
    ],
    alternatives: [
      { slug: "laser-eye-surgery", label: "Laser eye surgery" },
      { slug: "lens-replacement", label: "Refractive lens exchange" },
    ],
    faqs: [
      {
        question: "Is ICL reversible?",
        answer:
          "Unlike laser treatment, an ICL can in principle be removed or exchanged by a surgeon, since no corneal tissue is permanently removed. This does not mean removal is risk-free or routine — it remains a surgical procedure.",
      },
      {
        question: "Why might ICL be suggested instead of laser eye surgery?",
        answer:
          "ICL may be considered when a prescription is higher than laser treatment can safely correct, or when corneal thickness or shape make laser treatment less appropriate. A full assessment determines which pathway fits your eyes.",
      },
    ],
  },
  {
    slug: "lens-replacement",
    name: "Refractive Lens Exchange",
    shortName: "Lens replacement",
    category: "lens",
    eyebrow: "Lens-based treatment",
    summary:
      "Refractive lens exchange replaces the eye's natural lens with an artificial intraocular lens, typically considered by adults experiencing age-related changes to reading and focusing vision.",
    typicallyConsideredBy: "Adults experiencing age-related changes in reading vision",
    mayHelpWith: ["Reading vision after 40", "Long sight", "Reducing dependence on varifocal glasses"],
    keyDifferentiator:
      "Lens options may support distance, intermediate and reading vision, depending on the lens selected with your consultant.",
    cardCta: "Explore lens replacement",
    howItWorks: [
      "A detailed assessment measures your eyes and discusses lens options suited to your lifestyle.",
      "The natural lens is gently removed through a small incision.",
      "A chosen artificial intraocular lens is placed in its place to focus light onto the retina.",
    ],
    suitabilityNotes: [
      "Typically considered for adults over 40 experiencing presbyopia (age-related reading vision changes).",
      "Lens choice depends on lifestyle priorities, such as distance versus near vision.",
      "A full assessment determines whether this or an alternative pathway is more appropriate.",
    ],
    recovery:
      "Many patients notice improved vision within a few days, with the eye continuing to settle over subsequent weeks. Scheduled aftercare reviews monitor healing and lens position.",
    risksAndLimitations: [
      "As with any intraocular procedure, risks include infection, inflammation or lens-positioning issues.",
      "Some multifocal lens designs can be associated with glare or halos in low light for some patients.",
      "This procedure permanently replaces the natural lens, which is an important and irreversible consideration.",
    ],
    alternatives: [
      { slug: "icl", label: "ICL" },
      { slug: "laser-eye-surgery", label: "Laser eye surgery" },
    ],
    faqs: [
      {
        question: "What is the difference between lens replacement and cataract surgery?",
        answer:
          "The surgical technique is closely related, but lens replacement is typically chosen electively to reduce dependence on glasses, while cataract surgery is performed because the natural lens has become cloudy and is affecting vision.",
      },
    ],
  },
  {
    slug: "cataract-surgery",
    name: "Cataract Surgery",
    shortName: "Cataract surgery",
    category: "lens",
    eyebrow: "Lens-based treatment",
    summary:
      "Cataract surgery removes the eye's natural lens once it has become cloudy, replacing it with a clear artificial intraocular lens to restore vision.",
    typicallyConsideredBy: "People experiencing vision changes caused by cataracts",
    mayHelpWith: ["Cloudy or blurred vision", "Glare and halos from cataracts", "Faded colour vision"],
    keyDifferentiator:
      "Removes the cloudy natural lens and replaces it with an artificial lens, and can often be combined with correction for short sight, long sight or astigmatism.",
    cardCta: "Explore cataract surgery",
    howItWorks: [
      "A full eye examination confirms the cataract and assesses overall eye health.",
      "The cloudy natural lens is removed using a small-incision technique under local anaesthetic.",
      "A clear artificial intraocular lens is placed to restore focused vision.",
    ],
    suitabilityNotes: [
      "Considered once a cataract is significantly affecting vision or daily life.",
      "Lens options may also address existing short sight, long sight or astigmatism, where appropriate.",
      "A full assessment confirms diagnosis and the most suitable lens choice.",
    ],
    recovery:
      "Many patients notice improved vision within days, with full healing over the following weeks and scheduled aftercare reviews.",
    risksAndLimitations: [
      "As with any intraocular procedure, risks include infection, inflammation or lens-positioning issues.",
      "Some patients may still need glasses for certain tasks depending on the lens chosen.",
      "Underlying eye conditions can affect the final visual outcome.",
    ],
    alternatives: [
      { slug: "lens-replacement", label: "Refractive lens exchange" },
    ],
    faqs: [
      {
        question: "How do I know if I have a cataract?",
        answer:
          "Common signs include increasingly cloudy or blurred vision, glare from lights, and colours appearing faded. Only a clinical assessment can confirm a cataract diagnosis.",
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}

export const laserTreatments = treatments.filter((t) => t.category === "laser");
export const lensTreatments = treatments.filter((t) => t.category === "lens");
export const treatmentCards = treatments.filter((t) => !t.isHub);

// The four outcome-led pathways shown on the homepage: the laser hub plus
// each lens-based option, avoiding a crowded six-card grid there.
export const homepageTreatmentCards = treatments.filter((t) =>
  ["laser-eye-surgery", "icl", "lens-replacement", "cataract-surgery"].includes(t.slug)
);
