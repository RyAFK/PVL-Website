export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface Article {
  slug: string;
  title: string;
  dek: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  sections: ArticleSection[];
  references: string[];
}

export const articles: Article[] = [
  {
    slug: "understanding-lasik-risks-recovery-alternatives",
    title: "Understanding LASIK: risks, recovery and alternatives",
    dek: "A plain-English guide to what LASIK involves, who it typically suits, and the questions worth asking before you decide.",
    datePublished: "2026-05-12", // PLACEHOLDER
    dateModified: "2026-06-01", // PLACEHOLDER
    readingTime: "6 min read",
    sections: [
      {
        heading: "What LASIK involves",
        body: [
          "LASIK (laser-assisted in situ keratomileusis) reshapes the cornea to change how light focuses onto the retina. A thin corneal flap is created, the underlying tissue is reshaped with an excimer laser, and the flap is then repositioned.",
          "It is one of the most established forms of laser eye surgery, with decades of clinical use worldwide.",
        ],
      },
      {
        heading: "Who typically considers LASIK",
        body: [
          "LASIK is typically considered by adults with a stable prescription for short sight, long sight or astigmatism, and with corneal thickness sufficient to safely create a flap.",
          "It is not automatically suitable for everyone — corneal shape, dryness, and certain eye conditions can mean an alternative technique or a lens-based procedure is more appropriate.",
        ],
      },
      {
        heading: "Recovery",
        body: [
          "Many patients notice improved vision within a day or two, though full stabilisation continues over subsequent weeks. Scheduled aftercare reviews monitor healing and flap position during this period.",
        ],
      },
      {
        heading: "Risks and limitations",
        body: [
          "As with any surgical procedure, LASIK carries risks, including dry eye, glare, halos, or under- or over-correction. Flap-related complications are uncommon but are a specific consideration with LASIK rather than surface techniques.",
          "A small proportion of patients may need an enhancement procedure to fine-tune the result.",
        ],
      },
      {
        heading: "Alternatives worth knowing about",
        body: [
          "LASEK and PRK are surface-based alternatives that avoid creating a corneal flap, which can suit thinner corneas or particular occupations. ICL and refractive lens exchange are lens-based alternatives, typically considered when laser treatment is not appropriate.",
        ],
      },
    ],
    references: [
      "Royal College of Ophthalmologists — patient information on refractive surgery (see rcophth.ac.uk)",
      "NICE guidance on photorefractive (laser) surgery for the correction of refractive errors",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
