import type { Metadata } from "next"
import { COMPANY } from "./constants"

const BRAND = "S&S FL Renovations LLC"

interface SEOProps {
  title: string
  description: string
  slug?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  slug = "",
  image,
  keywords = [],
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${COMPANY.domain}${slug ? `/${slug}` : ""}`
  const ogImage = image ?? `${COMPANY.domain}/og/default.jpg`

  return {
    title: `${title} | ${BRAND}`,
    description,
    keywords: keywords.join(", "),
    metadataBase: new URL(COMPANY.domain),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url,
      siteName: BRAND,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
  }
}

// Per-slug title overrides driven by GSC query data
const SERVICE_TITLE_OVERRIDES: Record<string, string> = {
  "whole-home-remodeling":  "Whole Home Remodeling Volusia County FL | Licensed Renovation Contractor",
  "kitchen-remodeling":     "Kitchen Remodeling Deltona & Volusia County FL | 4.9★ Free Estimate",
  "bathroom-renovation":    "Bathroom Renovation Deltona & Volusia County FL | 4.9★ Free Estimate",
  "painting-finishing":     "Painting Contractor Deltona & Volusia County FL | Interior & Exterior",
  "flooring-installation":  "Flooring Installation Deltona & Volusia County FL | Licensed Contractor",
  "roofing":                "Roofing Contractor Deltona & Volusia County FL | Replacement & Repair",
  "hvac":                   "HVAC Installation & Replacement Deltona, FL | Volusia County Contractor",
  "outdoor-renovations":    "Outdoor Renovations Deltona FL | Patios, Lanais & Screen Enclosures",
  "hurricane-protection":   "Hurricane Impact Windows & Protection Deltona, FL | Volusia County",
  "interior-renovation":    "Interior Renovation Deltona FL | Painting, Drywall & Remodeling",
  "room-additions":         "Room Additions Deltona & Volusia County FL | Licensed Contractor",
}

export function buildServiceMetadata(serviceName: string, slug: string): Metadata {
  const title = SERVICE_TITLE_OVERRIDES[slug]
    ?? `${serviceName} Deltona & Volusia County FL | Licensed Contractor`

  return buildMetadata({
    title,
    description: `Expert ${serviceName.toLowerCase()} in Volusia County & Central Florida. 500+ projects completed, ⭐${COMPANY.rating} (${COMPANY.reviewCount} reviews). Licensed & insured. Free estimate: ${COMPANY.phone}. Se Habla Español.`,
    slug: `services/${slug}`,
    keywords: [
      `${serviceName.toLowerCase()} Deltona FL`,
      `${serviceName.toLowerCase()} Volusia County`,
      `${serviceName.toLowerCase()} near me`,
      `${serviceName.toLowerCase()} Central Florida`,
      `best ${serviceName.toLowerCase()} contractor`,
      `${serviceName.toLowerCase()} DeBary FL`,
      `${serviceName.toLowerCase()} Orange City FL`,
      `${serviceName.toLowerCase()} Lake Mary FL`,
      `${serviceName.toLowerCase()} contractor free estimate`,
      `${serviceName.toLowerCase()} remodeling contractor`,
    ],
  })
}

// GSC data shows "remodeling" dominates location queries — title leads with it
export function buildLocationMetadata(cityName: string, slug: string): Metadata {
  return buildMetadata({
    title: `${cityName} Remodeling & Home Renovation Contractor, FL | Free Estimate`,
    description: `Top-rated remodeling company in ${cityName}, FL — kitchen remodeling, bathroom renovation, exterior remodeling, painting & home improvement. ⭐${COMPANY.rating} (${COMPANY.reviewCount} reviews) · Licensed & insured · Call ${COMPANY.phone}.`,
    slug: `locations/${slug}`,
    keywords: [
      `${cityName} remodeling services`,
      `remodeling company ${cityName}`,
      `home remodeling ${cityName} FL`,
      `home improvement company ${cityName}`,
      `home renovation ${cityName} FL`,
      `renovation contractor ${cityName}`,
      `exterior remodeling ${cityName}`,
      `kitchen remodeling ${cityName}`,
      `bathroom renovation ${cityName}`,
      `home remodeling contractor ${cityName}`,
      `remodeling contractor ${cityName} FL`,
    ],
  })
}

export function buildBlogMetadata({
  title,
  excerpt,
  slug,
  date,
}: {
  title: string
  excerpt: string
  slug: string
  date: string
}): Metadata {
  const url = `${COMPANY.domain}/blog/${slug}`
  const ogImage = `${COMPANY.domain}/og/blog-${slug}.jpg`
  return {
    title: `${title} | ${BRAND}`,
    description: excerpt,
    metadataBase: new URL(COMPANY.domain),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: excerpt,
      url,
      siteName: BRAND,
      type: "article",
      publishedTime: date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  }
}
