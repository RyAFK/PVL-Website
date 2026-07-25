// Dr CT Pillai's name, role, qualifications and bio are verified against the
// approved source content. His GMC number remains PLACEHOLDER pending
// confirmation. Ms Sarah Collins is unverified PLACEHOLDER content in full —
// replace with real, approved details before launch.
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
    slug: "dr-ct-pillai",
    name: "Dr CT Pillai",
    role: "Founder & Medical Director",
    isLead: true,
    qualifications: ["MD", "DO", "FRCS(Ed)", "FRCOphth"],
    gmcNumber: "GMC 0000000", // PLACEHOLDER — publish only the real, approved GMC number
    specialistInterests: [
      "Laser vision correction",
      "Cataract surgery",
      "Keratoconus and corneal treatments",
      "Refractive lens exchange",
    ],
    yearsExperience: 30,
    procedureExperienceLabel:
      "Personally performs the laser vision correction, cataract and corneal procedures he oversees",
    bio: [
      "Dr CT Pillai is the founder and medical director of Precision Vision London, with more than 30 years of experience in corneal and refractive surgery.",
      "He founded the practice on Harley Street and personally performs the laser vision correction, cataract and corneal procedures he oversees.",
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
