import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { COMPANY } from "@/lib/constants"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import StatsCounter from "@/components/sections/StatsCounter"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import { Shield, Award, Users, MapPin } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "About S&S FL Renovations LLC — Deltona, FL Renovation & Painting Contractor",
  description: `Learn about ${COMPANY.name} — Deltona's locally based home renovation and painting contractor since ${COMPANY.founded}. Serving all of Volusia County. Licensed, insured, ${COMPANY.reviewCount}+ five-star reviews.`,
  slug: "about",
})

export default function AboutPage() {
  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "About Us", href: "/about" }]} />

      {/* Hero */}
      <section className="py-20 bg-[#1B2B4B] section-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">
            Est. {COMPANY.founded}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            About S&S FL Renovations LLC
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            For over a decade, we've been transforming homes across Deltona, DeBary, Orange City, DeLand, and all of Volusia County — with expert craftsmanship, honest pricing, and a commitment to your satisfaction that goes beyond the final coat of paint.
          </p>
        </div>
      </section>

      <StatsCounter />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl font-bold text-[#1B2B4B] mt-2 mb-5">
                Built on Trust, Driven by Craftsmanship
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
                <p>
                  S&S FL Renovations LLC was founded in {COMPANY.founded} with a simple mission: deliver big-city renovation quality with small-company personal service. We are proudly based right here in Deltona, FL — your Volusia County neighbor — and we treat every home we work on like it's our own.
                </p>
                <p>
                  We understand that your home is your biggest investment. Every project — whether it's cabinet painting, popcorn ceiling removal, a bathroom remodel, or a complete whole-home renovation — receives the same level of care, precision, and professionalism that has earned us {COMPANY.reviewCount}+ five-star reviews.
                </p>
                <p>
                  Today, our team serves 20+ communities across Volusia County and nearby areas — including DeBary, Orange City, DeLand, Sanford, Lake Helen, Edgewater, Port Orange, and Daytona Beach — bringing expert renovation and painting services right to your doorstep.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Shield, title: "Licensed & Insured", desc: "Full general liability and workers' comp coverage on every job." },
                { icon: Award, title: "Award-Winning Quality", desc: "Recognized by the BBB and local homeowner associations." },
                { icon: Users, title: "In-House Team", desc: "No subcontractors — our dedicated crew handles every project." },
                { icon: MapPin, title: "Locally Rooted in Deltona", desc: "We live and work right here in Deltona, FL — your Volusia County neighbor, not a call center." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-[#F7F6F2] rounded-xl p-5 flex flex-col gap-3">
                  <Icon size={24} className="text-[#D4922A]" />
                  <h3 className="font-display font-bold text-[#1B2B4B] text-base">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs dark={false} />
      <CTASection />
    </>
  )
}
