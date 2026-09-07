import type { Metadata } from "next"
import { COMPANY } from "./constants"

const BRAND = "S&S FL Renovations LLC"
const TAGLINE = "Deltona's Renovation & Painting Contractor"

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
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url,
      siteName: BRAND,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
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
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
  }
}

export function buildServiceMetadata(serviceName: string, slug: string): Metadata {
  return buildMetadata({
    title: `${serviceName} Deltona & Volusia County FL | 4.9★ Licensed`,
    description: `Expert ${serviceName.toLowerCase()} in Deltona & Volusia County, FL. Licensed & insured, 500+ projects, ⭐4.9 (127 reviews). Call ${COMPANY.phone}. Se Habla Español.`,
    slug: `services/${slug}`,
    keywords: [
      `${serviceName.toLowerCase()} Deltona FL`,
      `${serviceName.toLowerCase()} Volusia County`,
      `${serviceName.toLowerCase()} near me`,
      `${serviceName.toLowerCase()} Central Florida`,
      `best ${serviceName.toLowerCase()} contractor`,
      `${serviceName.toLowerCase()} DeBary FL`,
      `${serviceName.toLowerCase()} Orange City FL`,
      `${serviceName.toLowerCase()} contractor free estimate`,
    ],
  })
}

export function buildLocationMetadata(cityName: string, slug: string): Metadata {
  return buildMetadata({
    title: `${cityName}, FL Home Renovation Contractor | 4.9★ Free Estimate`,
    description: `Top-rated home renovation & remodeling in ${cityName}, FL. Kitchen, bathroom, painting & flooring. ⭐4.9 (127 reviews). Licensed & insured. Call ${COMPANY.phone}. Se Habla Español.`,
    slug: `locations/${slug}`,
    keywords: [
      `home renovation ${cityName} FL`,
      `renovation contractor ${cityName}`,
      `remodeling ${cityName} FL`,
      `home remodeling ${cityName}`,
      `painting contractor ${cityName} FL`,
      `kitchen remodeling ${cityName}`,
      `bathroom renovation ${cityName}`,
      `home improvement ${cityName} FL`,
      `remodeling services ${cityName}`,
      `remodeling company ${cityName}`,
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
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  }
}
