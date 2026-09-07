import { NextResponse } from "next/server"
import { CITIES, SERVICES } from "@/lib/constants"

const KEY = "centralfloridarenovations2026"
const HOST = "centralfloridarenovations.com"
const BASE = `https://${HOST}`

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

function buildUrlList(): string[] {
  const static_ = [
    BASE,
    `${BASE}/free-estimate`,
    `${BASE}/contact`,
    `${BASE}/about`,
    `${BASE}/services`,
    `${BASE}/locations`,
    `${BASE}/blog`,
    `${BASE}/gallery`,
    `${BASE}/testimonials`,
  ]

  const services = SERVICES.flatMap((s) => [
    `${BASE}/services/${s.slug}`,
    ...s.subServices.map((sub) => `${BASE}/services/${s.slug}/${sub.slug}`),
  ])

  const locations = CITIES.map((c) => `${BASE}/locations/${c.slug}`)

  const blogs = BLOG_SLUGS.map((slug) => `${BASE}/blog/${slug}`)

  return [...static_, ...services, ...locations, ...blogs]
}

// POST /api/indexnow — submits all URLs to IndexNow (Bing, Yandex, etc.)
export async function POST() {
  const urlList = buildUrlList()

  const body = { host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList }

  const [bing, indexnow] = await Promise.allSettled([
    fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    }),
    fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    }),
  ])

  return NextResponse.json({
    submitted: urlList.length,
    bing: bing.status === "fulfilled" ? bing.value.status : "error",
    indexnow: indexnow.status === "fulfilled" ? indexnow.value.status : "error",
    urls: urlList,
  })
}

// GET — read-only status check
export async function GET() {
  const urlList = buildUrlList()
  return NextResponse.json({ total: urlList.length, key: KEY, host: HOST, urls: urlList })
}
