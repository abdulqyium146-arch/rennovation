import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Home Renovation Blog — Central Florida Tips & Guides",
  description: "Expert home renovation tips, cost guides, and local insights for Central Florida homeowners. Kitchen, bathroom, outdoor & more from S&S FL Renovations.",
  slug: "blog",
})

export const BLOG_POSTS = [
  {
    title: "How Much Does a Kitchen Remodel Cost in Florida? (2026 Guide)",
    slug: "how-much-does-kitchen-remodel-cost-in-florida",
    category: "Cost Guides",
    categorySlug: "cost-guides",
    excerpt: "Planning a kitchen renovation in Florida? Get realistic cost estimates, what affects pricing, and how to budget for your Central Florida kitchen remodel in 2026.",
    date: "2026-03-01",
    readTime: "8 min",
  },
  {
    title: "Best Flooring for Florida Humidity & Heat (Homeowner's Guide)",
    slug: "best-flooring-for-florida-humidity-and-heat",
    category: "Flooring",
    categorySlug: "flooring",
    excerpt: "Florida's climate demands specific flooring materials. Learn which options hold up best against humidity, heat, and high traffic in Central Florida homes.",
    date: "2026-02-20",
    readTime: "6 min",
  },
  {
    title: "Hurricane-Proof Home Improvements for Central Florida Homeowners",
    slug: "hurricane-proof-home-improvements-central-florida",
    category: "Hurricane Protection",
    categorySlug: "florida-renovation-tips",
    excerpt: "Protect your investment before storm season. The most effective upgrades — from impact windows to reinforced roofing — for Florida homes.",
    date: "2026-02-10",
    readTime: "7 min",
  },
  {
    title: "Home Renovation Permits in Orlando, Florida — Complete Guide",
    slug: "home-renovation-permits-orlando-florida-guide",
    category: "Florida Tips",
    categorySlug: "florida-renovation-tips",
    excerpt: "Everything Orlando homeowners need to know about getting renovation permits from Orange County — what requires a permit, how to apply, and timelines.",
    date: "2026-01-28",
    readTime: "9 min",
  },
  {
    title: "Average Bathroom Renovation Cost in Florida (2026)",
    slug: "average-bathroom-renovation-cost-florida-2026",
    category: "Cost Guides",
    categorySlug: "cost-guides",
    excerpt: "Real numbers on Florida bathroom renovation costs — guest baths, master baths, ADA conversions, and what factors drive pricing up or down in 2026.",
    date: "2026-01-15",
    readTime: "7 min",
  },
  {
    title: "Energy-Efficient Home Upgrades for Florida Homeowners",
    slug: "energy-efficient-home-upgrades-florida",
    category: "Florida Tips",
    categorySlug: "florida-renovation-tips",
    excerpt: "Cut your energy bills year-round with these proven upgrades — impact windows, insulation, smart HVAC, and solar-ready roofing for Florida homes.",
    date: "2026-01-05",
    readTime: "8 min",
  },
  {
    title: "Outdoor Kitchen Ideas for Florida Homeowners",
    slug: "outdoor-kitchen-ideas-florida-homeowners",
    category: "Outdoor Living",
    categorySlug: "outdoor-living",
    excerpt: "Florida's weather makes outdoor kitchens a year-round luxury. Explore design ideas, materials, appliances, and cost ranges for your outdoor kitchen build.",
    date: "2025-12-18",
    readTime: "6 min",
  },
  {
    title: "Aging in Place Renovation Guide for Central Florida Homeowners",
    slug: "aging-in-place-renovation-central-florida",
    category: "Accessibility",
    categorySlug: "florida-renovation-tips",
    excerpt: "Practical modifications — grab bars, walk-in showers, wider doorways, and no-step entries — that allow Central Florida seniors to stay home safely.",
    date: "2025-12-05",
    readTime: "7 min",
  },
  {
    title: "Before & After: Kitchen Remodels in the Orlando Area",
    slug: "before-after-kitchen-remodels-orlando",
    category: "Kitchen Remodeling",
    categorySlug: "kitchen-remodeling",
    excerpt: "Real transformations from S&S FL Renovations projects across Orlando, Winter Park, and Lake Mary — see what a kitchen remodel can do for your home.",
    date: "2025-11-20",
    readTime: "5 min",
  },
  {
    title: "Home Renovation ROI in Florida — What Pays Off in 2026",
    slug: "home-renovation-roi-florida-2026",
    category: "Cost Guides",
    categorySlug: "cost-guides",
    excerpt: "Which renovations deliver the best return on investment in Florida's real estate market? Kitchen, bath, curb appeal, and hurricane protection ranked by ROI.",
    date: "2025-11-08",
    readTime: "8 min",
  },
]

const CATEGORIES = [
  "All", "Cost Guides", "Kitchen Remodeling", "Bathroom Renovation",
  "Outdoor Living", "Florida Tips", "Hurricane Protection", "Flooring",
]

export default function BlogPage() {
  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Blog", href: "/blog" }]} />

      <section className="py-16 bg-[#1B2B4B] section-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Renovation Resources</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Home Renovation Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Expert tips, cost guides, and local insights for Central Florida homeowners.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Category filter — static display, no JS filter needed for SSG */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-3 py-1.5 rounded-full text-sm font-medium cursor-default ${cat === "All" ? "bg-[#1B2B4B] text-white" : "bg-white border border-gray-200 text-gray-600"}`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
              >
                <div className="h-44 bg-gradient-to-br from-[#1B2B4B] to-[#2D4A7A] flex items-center justify-center">
                  <span className="text-[#D4922A] font-accent font-bold text-base px-6 text-center">{post.category}</span>
                </div>
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <span className="text-[#D4922A] text-xs font-semibold uppercase tracking-wide">{post.category}</span>
                  <h2 className="font-display font-bold text-[#1B2B4B] text-lg leading-snug line-clamp-2 hover:text-[#D4922A] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {post.readTime} read
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-[#D4922A] text-sm font-semibold hover:text-[#F0B84A] transition-colors"
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
