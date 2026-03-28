import type { Metadata } from "next"
import { COMPANY } from "./constants"

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
    title: `${title} | Central Florida Renovations`,
    description,
    keywords: keywords.join(", "),
    metadataBase: new URL(COMPANY.domain),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Central Florida Renovations`,
      description,
      url,
      siteName: "Central Florida Renovations",
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
      title: `${title} | Central Florida Renovations`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },
  }
}

export function buildServiceMetadata(serviceName: string, slug: string): Metadata {
  return buildMetadata({
    title: `${serviceName} in Central Florida`,
    description: `Expert ${serviceName.toLowerCase()} in Orlando & Central Florida. Central Florida Renovations — licensed, insured, 500+ projects completed. Free estimate: ${COMPANY.phone}.`,
    slug: `services/${slug}`,
    keywords: [
      `${serviceName.toLowerCase()} Orlando`,
      `${serviceName.toLowerCase()} Central Florida`,
      `${serviceName.toLowerCase()} contractor Florida`,
      "central florida renovations",
      "home renovation Orlando FL",
    ],
  })
}

export function buildLocationMetadata(cityName: string, slug: string): Metadata {
  return buildMetadata({
    title: `Home Renovation Contractor in ${cityName}, FL`,
    description: `Top-rated home renovation contractor in ${cityName}, FL — Central Florida Renovations. Kitchen, bathroom, outdoor & full home remodeling. Licensed & insured. Free estimate: ${COMPANY.phone}.`,
    slug: `locations/${slug}`,
    keywords: [
      `home renovation ${cityName}`,
      `home remodeling ${cityName} FL`,
      `renovation contractor ${cityName} Florida`,
      `kitchen remodeling ${cityName}`,
      `bathroom renovation ${cityName}`,
      "central florida renovations",
    ],
  })
}
