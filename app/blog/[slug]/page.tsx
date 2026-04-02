import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { COMPANY } from "@/lib/constants"
import { buildArticleSchema, safeJsonLd } from "@/lib/schema"
import { buildBlogMetadata } from "@/lib/seo"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import { BLOG_POSTS } from "../page"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const revalidate = 86400

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return buildBlogMetadata({ title: post.title, excerpt: post.excerpt, slug, date: post.date })
}

// Blog post content map — add full content per post
const POST_CONTENT: Record<string, string> = {
  "how-much-does-kitchen-remodel-cost-in-florida": `
## Kitchen Remodel Cost in Florida — 2026 Overview

Planning a kitchen renovation in Central Florida? Understanding realistic cost ranges helps you budget effectively and avoid sticker shock. Here's what Florida homeowners are spending in 2026.

### Average Kitchen Remodel Costs in Florida

**Minor Kitchen Update (Cosmetic Refresh):** $8,000–$20,000
- Cabinet refacing or painting
- New countertops (laminate or entry-level quartz)
- New fixtures and hardware
- Fresh paint and backsplash tile

**Mid-Range Kitchen Remodel:** $20,000–$50,000
- Semi-custom or stock cabinet replacement
- Quartz or granite countertops
- Tile backsplash
- New appliances
- Updated lighting and electrical
- New flooring

**Full Custom Kitchen Renovation:** $50,000–$120,000+
- Custom cabinetry from floor to ceiling
- High-end countertops (Calacatta marble, quartzite)
- Professional-grade appliances
- Open-concept wall removal
- Full plumbing and electrical update
- Premium flooring (hardwood or large-format tile)

### What Affects Kitchen Remodel Cost in Florida?

**Size of the Kitchen**
Florida homes built in the 1980s–2000s typically have 10'×12' to 12'×16' kitchens. Larger footprints mean more cabinets, countertops, and flooring — the three biggest line items.

**Layout Changes**
Keeping the same layout is most affordable. Moving the sink requires rerouting plumbing ($1,500–$4,000). Removing a wall to create an open concept adds $3,000–$15,000 depending on whether it's load-bearing.

**Cabinet Quality**
Cabinets alone can consume 30–40% of your kitchen budget. Stock cabinets run $75–$150 per linear foot installed; semi-custom $150–$300; fully custom $300–$600+.

**Florida-Specific Considerations**
- **Humidity-resistant materials** are a must — avoid MDF cabinet boxes (opt for plywood) and use moisture-resistant countertops
- **Hurricane season prep** — if you're doing a remodel, consider upgrading to impact-resistant windows at the same time
- **Permit costs** vary by county — Orange County permits typically add $500–$1,500 to project costs

### Is a Kitchen Remodel Worth It in Florida?

According to Remodeling Magazine's 2025 Cost vs. Value Report for the South Atlantic region:
- **Minor kitchen remodel:** 83% ROI at resale
- **Mid-range kitchen remodel:** 72% ROI
- **Major kitchen remodel:** 53% ROI

Even if you don't sell immediately, a well-done kitchen dramatically improves daily quality of life — especially for Florida families who entertain year-round.

### Get an Accurate Quote for Your Kitchen

Every kitchen is different. The only way to know your exact cost is a free in-home consultation with our team. We measure your space, discuss your goals, and provide a detailed written quote — with no hidden fees and no obligation.

**Call us at [(213) 841-6924](tel:+12138416924) or [request a free estimate online](/free-estimate).**
  `,

  "best-flooring-for-florida-humidity-and-heat": `
## Best Flooring for Florida Homes — Humidity & Heat Guide

Choosing flooring for a Florida home isn't like choosing flooring anywhere else. Our climate — high humidity, intense heat, and the occasional flood risk — eliminates several popular options and makes others essential.

### The Challenge: Florida's Climate

Central Florida averages 90%+ relative humidity in summer months. During hurricane season, storm surges and flooding are a real risk for many homes. Any flooring you choose needs to handle:

- **Constant humidity** (expansion, warping, mold risk)
- **Heat cycling** (expansion and contraction)
- **Moisture intrusion** from storms or groundwater
- **Heavy foot traffic** from families and pets

### Best Flooring Options for Florida

**1. Luxury Vinyl Plank (LVP) — Our Top Recommendation**
100% waterproof, dimensionally stable, and incredibly durable — LVP is the #1 choice for Florida homeowners. Modern LVP looks identical to hardwood but won't warp, swell, or buckle.

- Cost: $4–$12/sq ft installed
- Durability: 20–30 year lifespan
- Best for: All rooms including bathrooms and laundry rooms

**2. Porcelain or Ceramic Tile**
The classic Florida choice — and for good reason. Tile is completely waterproof, stays cool underfoot, and holds up beautifully in the heat.

- Cost: $7–$20/sq ft installed (large format tile is pricier)
- Durability: 50+ years
- Best for: Bathrooms, kitchens, living areas, and pool decks

**3. Engineered Hardwood**
Real wood veneer over a plywood core — more dimensionally stable than solid hardwood, but still sensitive to extreme humidity. Use a whole-home dehumidifier if you go this route.

- Cost: $8–$20/sq ft installed
- Best for: Living rooms and bedrooms (not bathrooms or kitchens)
- Caution: Not recommended for slab-on-grade construction in Florida

**4. Laminate**
More affordable than LVP but NOT waterproof — laminate swells immediately when wet. We generally don't recommend laminate for most Florida applications.

### What to Avoid in Florida

- **Solid hardwood flooring** — virtually impossible to keep stable in Florida's humidity without constant HVAC control
- **Carpet in bathrooms or kitchens** — moisture trap and mold risk
- **Standard laminate** — not waterproof, will swell and buckle

### Flooring Recommendations by Room

| Room | Best Choice | Runner-Up |
|------|-------------|-----------|
| Kitchen | LVP or large tile | Engineered hardwood |
| Bathroom | Porcelain tile | LVP |
| Living Room | LVP or engineered hardwood | Large tile |
| Bedroom | LVP or engineered hardwood | Carpet (with proper humidity control) |
| Outdoor/Patio | Porcelain tile | Travertine |

### Get Expert Flooring Installation in Central Florida

S&S FL Renovations installs all flooring types across Orlando and Central Florida. Get a free estimate for your flooring project — we'll help you choose the right material for your home and climate.

**Call [(213) 841-6924](tel:+12138416924) or [request a free estimate](/free-estimate).**
  `,
}

function getDefaultContent(post: typeof BLOG_POSTS[0]) {
  return `
## ${post.title}

${post.excerpt}

This comprehensive guide is designed for Central Florida homeowners planning home renovations in the Orlando metro and surrounding cities.

### Key Takeaways for Central Florida Homeowners

Florida's unique climate — high humidity, intense sun, and hurricane season — requires renovation decisions that go beyond standard national guides. Every material, design choice, and contractor you select should account for Florida's specific demands.

S&S FL Renovations LLC has been helping Central Florida homeowners make smart renovation decisions since ${COMPANY.founded}. With 500+ completed projects across 24 cities, we understand what works — and what doesn't — in Florida homes.

### Ready to Start Your Project?

Get a free, no-obligation estimate from our licensed and insured team. We serve Orlando, Kissimmee, Winter Park, Sanford, Lake Mary, and all of Central Florida.

**Call [(213) 841-6924](tel:+12138416924) or [request a free estimate online](/free-estimate).**
  `
}

function renderMarkdown(content: string) {
  // Simple markdown-to-JSX conversion for blog posts
  const lines = content.trim().split("\n")
  return lines.map((line, i) => {
    if (line.startsWith("## ")) {
      return <h2 key={i} className="font-display text-2xl font-bold text-[#1B2B4B] mt-8 mb-4">{line.slice(3)}</h2>
    }
    if (line.startsWith("### ")) {
      return <h3 key={i} className="font-display text-xl font-bold text-[#1B2B4B] mt-6 mb-3">{line.slice(4)}</h3>
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      return <p key={i} className="font-semibold text-[#1B2B4B] mt-4 mb-2">{line.slice(2, -2)}</p>
    }
    if (line.startsWith("- ")) {
      return <li key={i} className="ml-5 text-gray-700 list-disc">{line.slice(2)}</li>
    }
    if (line.startsWith("| ")) {
      return null // Skip table rows for simplicity
    }
    if (line === "") {
      return <div key={i} className="my-2" />
    }
    return <p key={i} className="text-gray-700 leading-relaxed mb-3">{line}</p>
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const content = POST_CONTENT[slug] ?? getDefaultContent(post)

  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug,
    datePublished: post.date,
  })

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />
      <TrustBar />
      <BreadcrumbNav
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-8">
            <span className="text-[#D4922A] text-sm font-semibold uppercase tracking-wider">{post.category}</span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mt-2 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime} read
              </span>
              <span>By {COMPANY.name}</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#D4922A] pl-4 italic">
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div className="prose-custom">
            {renderMarkdown(content)}
          </div>

          {/* CTA inline */}
          <div className="mt-12 bg-[#1B2B4B] text-white rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-display font-bold text-xl">Ready to Start Your Renovation?</h3>
            <p className="text-gray-300 text-sm">Get a free estimate from Central Florida's most trusted renovation contractor.</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/free-estimate"
                className="inline-flex items-center gap-2 bg-[#D4922A] text-white font-bold px-5 py-3 rounded-lg hover:bg-[#F0B84A] transition-colors text-sm"
              >
                Free Estimate <ArrowRight size={15} />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-[#F7F6F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-[#1B2B4B] mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <div key={p.slug} className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col gap-3">
                <span className="text-[#D4922A] text-xs font-semibold uppercase">{p.category}</span>
                <h3 className="font-display font-bold text-[#1B2B4B] text-base line-clamp-2 leading-snug">
                  <Link href={`/blog/${p.slug}`} className="hover:text-[#D4922A] transition-colors">
                    {p.title}
                  </Link>
                </h3>
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex items-center gap-1 text-[#D4922A] text-sm font-semibold mt-auto"
                >
                  Read More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
