/**
 * lib/schemas.ts — Canonical schema builders for centralfloridarenovations.com
 *
 * All functions return plain objects (not strings). Pass to <SchemaMarkup schema={...} />
 * which handles XSS-safe serialization.
 *
 * Existing lib/schema.ts is preserved for backward-compat with BreadcrumbNav +
 * FAQAccordion components that import from it. New page-level schemas use this file.
 */

import { COMPANY, CITIES, SERVICES } from "./constants"

// ─── Static exports ────────────────────────────────────────────────────────
// These never change at runtime — export as const so Next.js can tree-shake them.

/** Full HomeAndConstructionBusiness entity. Used on homepage + root layout. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  // @id lets other schemas reference this entity without repeating all fields
  "@id": `${COMPANY.domain}/#business`,
  name: COMPANY.name,
  alternateName: "Central Florida Renovations",
  description:
    "Licensed home renovation contractor serving Central Florida — kitchen remodeling, bathroom renovation, hurricane protection, flooring, roofing, outdoor living, and full-home remodels across Volusia, Seminole, and Orange counties.",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  url: COMPANY.domain,
  logo: {
    "@type": "ImageObject",
    url: `${COMPANY.domain}/images/logo.webp`,
    width: 400,
    height: 100,
  },
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
  // Each city modelled as a City→AdministrativeArea→State chain
  // so Google can resolve containment for local pack ranking
  areaServed: CITIES.map((c) => ({
    "@type": "City",
    name: `${c.name}, FL`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: `${c.county} County`,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
  })),
  // OfferCatalog signals service breadth to AI/entity graphs
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Renovation Services — Central Florida",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${COMPANY.domain}/services/${s.slug}`,
      },
    })),
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card, Financing",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  foundingDate: String(COMPANY.founded),
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 20,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(COMPANY.rating),
    reviewCount: String(COMPANY.reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Florida General Contractor License",
    identifier: COMPANY.licenseNumber,
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "Florida Department of Business and Professional Regulation",
    },
  },
  // knowsAbout helps LLMs associate the entity with topic clusters
  knowsAbout: [
    "Kitchen Remodeling",
    "Bathroom Renovation",
    "Hurricane Impact Windows",
    "Flooring Installation",
    "Roofing",
    "Room Additions",
    "Outdoor Renovations",
    "HVAC Installation",
    "Interior Painting",
    "Whole Home Remodeling",
    "Florida Building Code",
    "Volusia County Permits",
    "Seminole County Permits",
  ],
  // TODO: add real social profile URLs when accounts are created
  sameAs: [],
} as const

/** WebSite entity with SearchAction. Used on homepage alongside localBusinessSchema. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${COMPANY.domain}/#website`,
  name: COMPANY.name,
  url: COMPANY.domain,
  description:
    "Central Florida's trusted home renovation contractor — serving Deltona, Volusia County, and surrounding communities.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${COMPANY.domain}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    // Reference by @id — avoids duplicating all business fields
    "@id": `${COMPANY.domain}/#business`,
  },
} as const

/**
 * Organization entity — distinct from LocalBusiness.
 * Adds contactPoint (with Spanish language support), potentialAction (RequestQuote),
 * and a subOrganization link to the LocalBusiness #business entity.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${COMPANY.domain}/#organization`,
  name: COMPANY.name,
  alternateName: "Central Florida Renovations",
  url: COMPANY.domain,
  logo: {
    "@type": "ImageObject",
    url: `${COMPANY.domain}/images/logo.webp`,
    width: 400,
    height: 100,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "customer service",
      areaServed: "US-FL",
      // Se Habla Español — signals bilingual service to local search
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "ContactPoint",
      email: COMPANY.email,
      contactType: "sales",
      areaServed: "US-FL",
      availableLanguage: ["English", "Spanish"],
    },
  ],
  // potentialAction surfaces "Request a Quote" in Google's rich results
  potentialAction: {
    "@type": "RequestQuote",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${COMPANY.domain}/free-estimate`,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
  },
  // TODO: populate with real social profile URLs
  sameAs: [],
  subOrganization: {
    "@id": `${COMPANY.domain}/#business`,
  },
} as const

// ─── Function-based schemas ────────────────────────────────────────────────

/** Service schema for /services/[category] pages. */
export function servicePageSchema({
  serviceName,
  serviceUrl,
  description,
  subServices = [],
}: {
  serviceName: string
  serviceUrl: string
  description: string
  subServices?: { name: string; url: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: serviceName,
    description,
    url: serviceUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${COMPANY.domain}/#business`,
      name: COMPANY.name,
      telephone: COMPANY.phone,
      url: COMPANY.domain,
    },
    // Three-county coverage matches actual service area
    areaServed: [
      { "@type": "AdministrativeArea", name: "Volusia County, Florida" },
      { "@type": "AdministrativeArea", name: "Seminole County, Florida" },
      { "@type": "AdministrativeArea", name: "Orange County, Florida" },
    ],
    serviceType: serviceName,
    category: "Home Renovation",
    ...(subServices.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${serviceName} Services`,
        itemListElement: subServices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            url: s.url,
          },
        })),
      },
    }),
  }
}

/** FAQPage schema. Pass the same FAQ array rendered in the UI. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
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

/**
 * BreadcrumbList schema.
 * Always pass the full chain including Home, e.g.:
 *   breadcrumbSchema([
 *     { name: "Home", url: "/" },
 *     { name: "Services", url: "/services" },
 *     { name: "Kitchen Remodeling", url: "/services/kitchen-remodeling" },
 *   ])
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      // Accept both absolute URLs and root-relative paths
      item: item.url.startsWith("http")
        ? item.url
        : `${COMPANY.domain}${item.url}`,
    })),
  }
}

/** Article schema for /blog/[slug] pages. */
export function articleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
  image,
  authorName,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
  image?: string
  authorName?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    image: {
      "@type": "ImageObject",
      url: image ?? `${COMPANY.domain}/og/default.jpg`,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      "@id": `${COMPANY.domain}/#business`,
      name: authorName ?? COMPANY.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${COMPANY.domain}/#business`,
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.domain}/images/logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      // References WebSite entity by @id
      "@id": `${COMPANY.domain}/#website`,
    },
  }
}

/**
 * HowTo schema for step-by-step process sections.
 * Maps directly to the process arrays in SERVICE_CONTENT.
 * `totalTime` is an ISO 8601 duration string, e.g. "P4W" (4 weeks).
 */
export function howToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string
  description?: string
  steps: { name: string; text: string }[]
  totalTime?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    ...(description && { description }),
    ...(totalTime && { totalTime }),
    // estimatedCost helps AI overviews surface price context
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "Contact for estimate",
    },
    tool: [
      { "@type": "HowToTool", name: "Licensed Renovation Contractor" },
      { "@type": "HowToTool", name: "Professional Grade Equipment" },
    ],
    supply: [
      { "@type": "HowToSupply", name: "Building Materials" },
      { "@type": "HowToSupply", name: "Florida-Code Compliant Components" },
    ],
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `#step-${i + 1}`,
    })),
  }
}

/**
 * SiteNavigationElement ItemList — signals site structure to Google's entity graph.
 * Place on the homepage only. Pass the primary nav items in order.
 */
export function siteNavigationSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "SiteNavigationElement",
      position: i + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${COMPANY.domain}${item.url}`,
    })),
  }
}

/**
 * VideoObject schema for hero/feature videos.
 * Keep server-rendered (not via next/script) so crawlers see it in initial HTML.
 */
export function videoObjectSchema({
  name,
  description,
  contentUrl,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
  keywords,
}: {
  name: string
  description: string
  contentUrl: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  embedUrl?: string
  keywords?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    contentUrl,
    thumbnailUrl,
    uploadDate,
    duration,
    inLanguage: "en-US",
    ...(embedUrl && { embedUrl }),
    ...(keywords && { keywords }),
    publisher: {
      "@type": "Organization",
      "@id": `${COMPANY.domain}/#organization`,
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.domain}/images/logo.webp`,
      },
    },
  }
}

/**
 * City-scoped LocalBusiness schema for /locations/[city] pages.
 * Creates a child entity referencing the main #business via parentOrganization.
 * Provides Google with city-specific areaServed + full service catalog.
 */
export function cityPageSchema({
  cityName,
  countyName,
  citySlug,
}: {
  cityName: string
  countyName: string
  citySlug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    // Distinct @id per city page — avoids merging with the root /#business entity
    "@id": `${COMPANY.domain}/locations/${citySlug}#business`,
    name: `${COMPANY.name} — ${cityName}, FL`,
    description: `Licensed home renovation contractor serving ${cityName}, FL — kitchen remodeling, bathroom renovation, flooring, roofing, painting, and full-home remodels. Free estimates for ${cityName} homeowners in ${countyName} County.`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: `${COMPANY.domain}/locations/${citySlug}`,
    logo: {
      "@type": "ImageObject",
      url: `${COMPANY.domain}/images/logo.webp`,
    },
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
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${countyName} County`,
        containedInPlace: { "@type": "State", name: "Florida" },
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Home Renovation Services in ${cityName}, FL`,
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${COMPANY.domain}/services/${s.slug}`,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(COMPANY.rating),
      reviewCount: String(COMPANY.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    // parentOrganization links back to the root entity without repeating all fields
    parentOrganization: {
      "@id": `${COMPANY.domain}/#business`,
    },
  }
}

/**
 * Service schema scoped to a specific city.
 * Used on /locations/[city]/[service] matrix pages and enriched city pages.
 */
export function locationServiceSchema({
  serviceName,
  cityName,
  countyName,
  citySlug,
  serviceSlug,
}: {
  serviceName: string
  cityName: string
  countyName: string
  citySlug: string
  serviceSlug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${cityName}, FL`,
    url: `${COMPANY.domain}/locations/${citySlug}/${serviceSlug}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${COMPANY.domain}/#business`,
      name: COMPANY.name,
      telephone: COMPANY.phone,
      url: COMPANY.domain,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${countyName} County`,
        containedInPlace: { "@type": "State", name: "Florida" },
      },
    },
    serviceType: serviceName,
  }
}
