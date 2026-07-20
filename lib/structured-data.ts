import { siteConfig } from "@/lib/site";
import { surgeons } from "@/content/surgeons";
import type { Treatment } from "@/content/treatments";
import type { Faq } from "@/content/faqs";

export function buildMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.hours.split(" - ")[0],
      closes: entry.hours.split(" - ")[1],
    })),
    medicalSpecialty: "Ophthalmic",
    employee: surgeons.map((surgeon) => ({
      "@type": "Physician",
      name: surgeon.name,
      jobTitle: surgeon.role,
    })),
  };
}

export function buildPhysicianSchema(surgeon: (typeof surgeons)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: surgeon.name,
    jobTitle: surgeon.role,
    medicalSpecialty: "Ophthalmic",
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildMedicalProcedureSchema(treatment: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.summary,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    howPerformed: treatment.howItWorks.join(" "),
    status: "https://schema.org/EventScheduled",
  };
}

export function buildFaqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(article: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
