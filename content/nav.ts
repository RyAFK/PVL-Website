export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const primaryNav: NavItem[] = [
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "All treatments", href: "/treatments", description: "Compare every pathway" },
      { label: "Laser eye surgery", href: "/treatments/laser-eye-surgery", description: "LASIK, LASEK and PRK" },
      { label: "LASIK", href: "/treatments/lasik" },
      { label: "LASEK", href: "/treatments/lasek" },
      { label: "PRK", href: "/treatments/prk" },
      { label: "ICL", href: "/treatments/icl", description: "Implantable lens" },
      { label: "Refractive lens exchange", href: "/treatments/lens-replacement" },
      { label: "Cataract surgery", href: "/treatments/cataract-surgery" },
    ],
  },
  { label: "Suitability", href: "/suitability" },
  { label: "About", href: "/about" },
  { label: "Surgeons", href: "/surgeons" },
  { label: "Patient stories", href: "/patient-stories" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  treatments: [
    { label: "Laser eye surgery", href: "/treatments/laser-eye-surgery" },
    { label: "ICL", href: "/treatments/icl" },
    { label: "Refractive lens exchange", href: "/treatments/lens-replacement" },
    { label: "Cataract surgery", href: "/treatments/cataract-surgery" },
  ],
  clinic: [
    { label: "About Precision Vision London", href: "/about" },
    { label: "Our surgeons", href: "/surgeons" },
    { label: "Patient stories", href: "/patient-stories" },
    { label: "Pricing and finance", href: "/pricing" },
  ],
  resources: [
    { label: "Resources and articles", href: "/resources" },
    { label: "Suitability check", href: "/suitability" },
    { label: "Contact the clinic", href: "/contact" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms of use", href: "/terms" },
    { label: "Complaints procedure", href: "/complaints-procedure" },
  ],
};
