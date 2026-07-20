export const siteConfig = {
  name: "Precision Vision London",
  shortName: "Precision Vision",
  // PLACEHOLDER: confirm production domain before launch.
  url: "https://www.precisionvisionlondon.co.uk",
  description:
    "Explore personalised laser eye surgery, ICL, lens replacement and cataract treatment with a consultant-led team on Harley Street, London.",
  telephone: "+44 20 7000 0000", // PLACEHOLDER — replace with the clinic's published number.
  telephoneDisplay: "020 7000 0000",
  email: "enquiries@precisionvisionlondon.co.uk", // PLACEHOLDER
  address: {
    streetAddress: "1 Harley Street", // PLACEHOLDER — confirm exact suite/number
    addressLocality: "London",
    postalCode: "W1G 9QD", // PLACEHOLDER
    addressRegion: "Greater London",
    addressCountry: "GB",
  },
  geo: {
    // PLACEHOLDER coordinates for Harley Street, London — confirm exact clinic entrance.
    latitude: 51.5203,
    longitude: -0.1477,
  },
  openingHours: [
    { days: "Monday - Friday", hours: "08:30 - 18:00" }, // PLACEHOLDER — confirm actual hours
    { days: "Saturday", hours: "09:00 - 13:00" }, // PLACEHOLDER
  ],
  social: {
    // PLACEHOLDER — add verified profiles only.
  },
} as const;
