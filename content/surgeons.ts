// PLACEHOLDER — names, qualifications, GMC numbers and figures below must be
// replaced with the real, approved details for each surgeon before launch.
export interface Surgeon {
  slug: string;
  name: string;
  role: string;
  isLead?: boolean;
  qualifications: string[];
  gmcNumber: string;
  specialistInterests: string[];
  yearsExperience: number;
  procedureExperienceLabel: string;
  bio: string[];
}

export const surgeons: Surgeon[] = [
  {
    slug: "adam-whitfield",
    name: "Mr Adam Whitfield",
    role: "Lead Consultant Ophthalmic Surgeon",
    isLead: true,
    qualifications: ["MB BS", "FRCOphth", "Cert LRS"],
    gmcNumber: "GMC 0000000",
    specialistInterests: [
      "Laser vision correction (LASIK, LASEK, PRK)",
      "Implantable Collamer Lenses (ICL)",
      "Refractive lens exchange",
      "Cataract surgery",
    ],
    yearsExperience: 22,
    procedureExperienceLabel: "Has personally performed several thousand refractive and cataract procedures",
    bio: [
      "Mr Whitfield trained in ophthalmology within the NHS before completing fellowship training in corneal and refractive surgery.",
      "He leads the clinical team at Precision Vision London, overseeing treatment planning from initial assessment through to aftercare.",
      "He has a specialist interest in complex prescriptions and cases referred after being told elsewhere that laser treatment may not be suitable.",
    ],
  },
  {
    slug: "sarah-collins",
    name: "Ms Sarah Collins",
    role: "Consultant Ophthalmic Surgeon",
    qualifications: ["MB ChB", "FRCOphth"],
    gmcNumber: "GMC 0000001",
    specialistInterests: [
      "Cataract surgery",
      "Refractive lens exchange",
      "Presbyopia (age-related reading vision changes)",
    ],
    yearsExperience: 15,
    procedureExperienceLabel: "Has personally performed several thousand cataract and lens-based procedures",
    bio: [
      "Ms Collins specialises in lens-based treatment, including cataract surgery and refractive lens exchange for patients over 40.",
      "She works closely with patients to select lens options suited to their lifestyle and visual priorities.",
    ],
  },
];

export const leadSurgeon = surgeons.find((s) => s.isLead) ?? surgeons[0];

export function getSurgeonBySlug(slug: string): Surgeon | undefined {
  return surgeons.find((s) => s.slug === slug);
}
