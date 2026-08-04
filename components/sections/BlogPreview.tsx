import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const FEATURED_POSTS = [
  {
    title: "How Much Does a Kitchen Remodel Cost in Florida? (2026 Guide)",
    slug: "how-much-does-kitchen-remodel-cost-in-florida",
    category: "Cost Guides",
    excerpt: "Planning a kitchen renovation in Florida? Get realistic cost estimates, what affects pricing, and how to budget for your Central Florida kitchen remodel.",
    date: "2026-03-01",
    readTime: "8 min read",
    image: "/images/blog/kitchen-cost.jpg",
  },
  {
    title: "Best Flooring for Florida Humidity & Heat (Homeowner's Guide)",
    slug: "best-flooring-for-florida-humidity-and-heat",
    category: "Flooring",
    excerpt: "Florida's climate demands specific flooring materials. Learn which options hold up best against humidity, heat, and high traffic in Central Florida homes.",
    date: "2026-02-20",
    readTime: "6 min read",
    image: "/images/blog/flooring-guide.jpg",
  },
  {
    title: "Hurricane-Proof Home Improvements for Central Florida Homeowners",
    slug: "hurricane-proof-home-improvements-central-florida",
    category: "Hurricane Protection",
    excerpt: "Protect your investment before storm season. Discover the most effective upgrades — from impact windows to reinforced roofing — for Florida homes.",
    date: "2026-02-10",
    readTime: "7 min read",
    image: "/images/blog/hurricane-protection.jpg",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Renovation Tips</span>
            <h2 id="blog-heading" className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mt-1">
              Latest From Our Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-[#1B2B4B] font-semibold hover:text-[#D4922A] transition-colors shrink-0"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post) => (
            <article key={post.slug} className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[#1B2B4B]/10 relative overflow-hidden">
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B2B4B] to-[#2D4A7A] flex items-center justify-center">
                  <span className="text-[#D4922A] font-accent font-bold text-lg text-center px-4">{post.category}</span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 gap-3">
                <span className="text-[#D4922A] text-xs font-semibold uppercase tracking-wide">{post.category}</span>
                <h3 className="font-display font-bold text-[#1B2B4B] text-lg leading-snug group-hover:text-[#D4922A] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
