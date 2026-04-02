import { COMPANY, CITIES } from "./constants"

/** Escape `<` to prevent XSS in inline JSON-LD script tags (per Next.js docs). */
export function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c")
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    alternateName: "S&S FL Renovations",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: COMPANY.domain,
    logo: `${COMPANY.domain}/images/logo.webp`,
    image: `${COMPANY.domain}/og/default.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1757 S Village Dr",
      addressLocality: "Deltona",
      addressRegion: "FL",
      postalCode: "32725",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.9005,
      longitude: -81.2637,
    },
    areaServed: CITIES.map((c) => ({
      "@type": "City",
      name: c.name,
      containedInPlace: { "@type": "State", name: "Florida" },
    })),
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    foundingDate: String(COMPANY.founded),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(COMPANY.rating),
      reviewCount: String(COMPANY.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: `Florida Contractor License ${COMPANY.licenseNumber}`,
    },
    sameAs: [COMPANY.domain],
  }
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${COMPANY.domain}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function buildServiceSchema({
  name,
  description,
  slug,
  image,
}: {
  name: string
  description: string
  slug: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      url: COMPANY.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1757 S Village Dr",
        addressLocality: "Deltona",
        addressRegion: "FL",
        postalCode: "32725",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Deltona", containedInPlace: { "@type": "AdministrativeArea", name: "Volusia County" } },
      { "@type": "City", name: "DeBary", containedInPlace: { "@type": "AdministrativeArea", name: "Volusia County" } },
      { "@type": "City", name: "Orange City", containedInPlace: { "@type": "AdministrativeArea", name: "Volusia County" } },
      { "@type": "City", name: "DeLand", containedInPlace: { "@type": "AdministrativeArea", name: "Volusia County" } },
      { "@type": "AdministrativeArea", name: "Volusia County" },
    ],
    serviceType: name,
    url: `${COMPANY.domain}/services/${slug}`,
    image: image ?? `${COMPANY.domain}/og/services-${slug}.jpg`,
  }
}

export function buildBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${COMPANY.domain}${item.href}`,
    })),
  }
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
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
  }
}

export function buildArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ?? `${COMPANY.domain}/og/blog-${slug}.jpg`,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.domain,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.domain}/images/logo.webp`,
      },
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: `${COMPANY.domain}/blog/${slug}`,
  }
}

export function buildReviewSchema(
  reviews: { author: string; rating: number; text: string; date: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(COMPANY.rating),
      reviewCount: String(COMPANY.reviewCount),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  }
}

export function buildCityServiceSchema({
  serviceName,
  cityName,
  citySlug,
  serviceSlug,
}: {
  serviceName: string
  cityName: string
  citySlug: string
  serviceSlug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${cityName}, FL`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY.name,
      url: COMPANY.domain,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1757 S Village Dr",
        addressLocality: "Deltona",
        addressRegion: "FL",
        postalCode: "32725",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    url: `${COMPANY.domain}/locations/${citySlug}`,
    serviceType: serviceName,
  }
}
