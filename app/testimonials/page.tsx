import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { COMPANY, TESTIMONIALS } from "@/lib/constants"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import ReviewStars from "@/components/global/ReviewStars"
import { buildReviewSchema } from "@/lib/schema"

export const metadata: Metadata = buildMetadata({
  title: "Customer Reviews & Testimonials",
  description: `Read ${COMPANY.reviewCount}+ five-star reviews for ${COMPANY.name}. See why Central Florida homeowners trust us for kitchen, bathroom & home renovations.`,
  slug: "testimonials",
})

export default function TestimonialsPage() {
  const reviewSchema = buildReviewSchema(
    TESTIMONIALS.map((t) => ({ author: t.name, rating: t.rating, text: t.text, date: t.date }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Testimonials", href: "/testimonials" }]} />

      <section className="py-16 bg-[#1B2B4B] section-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Real Reviews</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4">
            What Our Customers Say
          </h1>
          <div className="flex items-center justify-center gap-3">
            <ReviewStars rating={COMPANY.rating} size={24} />
            <span className="text-xl font-bold">{COMPANY.rating}/5</span>
            <span className="text-gray-400">({COMPANY.reviewCount} reviews)</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                <ReviewStars rating={t.rating} />
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 bg-[#1B2B4B] rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2B4B] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.city}, FL · {t.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join 500+ Happy Homeowners"
        subtitle="Experience the S&S FL Renovations difference. Get your free estimate today."
      />
    </>
  )
}
