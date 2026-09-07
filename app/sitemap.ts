import type { MetadataRoute } from "next"
import { CITIES, SERVICES } from "@/lib/constants"

const BASE = "https://centralfloridarenovations.com"
const TODAY = "2026-09-07T00:00:00.000Z"

// Must stay in sync with app/blog/page.tsx BLOG_POSTS
const BLOG_SLUGS = [
  "how-much-does-kitchen-remodel-cost-in-florida",
  "best-flooring-for-florida-humidity-and-heat",
  "hurricane-proof-home-improvements-central-florida",
  "home-renovation-permits-orlando-florida-guide",
  "average-bathroom-renovation-cost-florida-2026",
  "energy-efficient-home-upgrades-florida",
  "outdoor-kitchen-ideas-florida-homeowners",
  "aging-in-place-renovation-central-florida",
  "before-after-kitchen-remodels-orlando",
  "home-renovation-roi-florida-2026",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                       lastModified: TODAY, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/free-estimate`,    lastModified: TODAY, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/contact`,          lastModified: TODAY, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/services`,         lastModified: TODAY, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/locations`,        lastModified: TODAY, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/about`,            lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,             lastModified: TODAY, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/gallery`,          lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/testimonials`,     lastModified: TODAY, changeFrequency: "monthly", priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  const subServicePages: MetadataRoute.Sitemap = SERVICES.flatMap((s) =>
    s.subServices.map((sub) => ({
      url: `${BASE}/services/${s.slug}/${sub.slug}`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.75,
    }))
  )

  const locationPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BASE}/locations/${c.slug}`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...subServicePages,
    ...locationPages,
    ...blogPages,
  ]
}
