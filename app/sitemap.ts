import type { MetadataRoute } from "next"
import { CITIES, SERVICES } from "@/lib/constants"

const BASE = "https://centralfloridarenovations.com"
const NOW = new Date().toISOString()

// Blog posts — keep in sync with app/blog/page.tsx BLOG_POSTS
const BLOG_SLUGS = [
  "how-much-does-kitchen-remodel-cost-in-florida",
  "best-flooring-for-florida-humidity-and-heat",
  "hurricane-proof-home-improvements-central-florida",
  "home-renovation-permits-orlando-florida-guide",
  "average-bathroom-renovation-cost-florida-2026",
  "how-much-does-cabinet-painting-cost-deltona-fl",
  "popcorn-ceiling-removal-cost-volusia-county",
  "best-exterior-paint-florida-humidity",
  "cabinet-painting-vs-replacement-deltona",
  "fence-staining-debary-fl-cost",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE}/free-estimate`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/about`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/contact`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/services`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/locations`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blog`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/gallery`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE}/testimonials`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.65,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  const subServicePages: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    s.subServices.map((sub) => ({
      url: `${BASE}/services/${s.slug}/${sub.slug}`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  )

  const locationPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BASE}/locations/${c.slug}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.75,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...subServicePages,
    ...locationPages,
    ...blogPages,
  ]
}
