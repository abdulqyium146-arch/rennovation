import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SERVICES, COMPANY } from "@/lib/constants"
import { buildServiceMetadata } from "@/lib/seo"
import { buildServiceSchema } from "@/lib/schema"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import FAQAccordion from "@/components/sections/FAQAccordion"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"

interface Props {
  params: Promise<{ category: string; service: string }>
}

export async function generateStaticParams() {
  return SERVICES.flatMap((svc) =>
    svc.subServices.map((sub) => ({
      category: svc.slug,
      service: sub.slug,
    }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service: serviceSlug } = await params
  const parent = SERVICES.find((s) => s.slug === category)
  const sub = parent?.subServices.find((s) => s.slug === serviceSlug)
  if (!sub) return {}
  return buildServiceMetadata(sub.name, `${category}/${serviceSlug}`)
}

export default async function SubServicePage({ params }: Props) {
  const { category, service: serviceSlug } = await params
  const parent = SERVICES.find((s) => s.slug === category)
  const sub = parent?.subServices.find((s) => s.slug === serviceSlug)
  if (!parent || !sub) notFound()

  const serviceSchema = buildServiceSchema({
    name: sub.name,
    description: `Professional ${sub.name.toLowerCase()} services in Central Florida.`,
    slug: `${category}/${serviceSlug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <TrustBar />
      <BreadcrumbNav
        items={[
          { name: "Services", href: "/services" },
          { name: parent.name, href: `/services/${category}` },
          { name: sub.name, href: `/services/${category}/${serviceSlug}` },
        ]}
      />

      {/* Hero */}
      <section className="py-20 bg-[#1B2B4B] section-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">
              {parent.name} · Central Florida
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-5">
              {sub.name} in Orlando & Central Florida
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Professional {sub.name.toLowerCase()} services by S&S FL Renovations LLC. Licensed, insured, and serving all of Central Florida with 10+ years of experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-6 py-4 rounded-lg transition-colors shadow-xl"
              >
                Get Free Estimate <ArrowRight size={18} />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-6 py-4 rounded-lg transition-colors"
              >
                <Phone size={18} /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#1B2B4B] mb-5">
              Expert {sub.name} in Central Florida
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                S&S FL Renovations LLC provides professional {sub.name.toLowerCase()} services throughout Orlando and all of Central Florida. Our licensed and insured crew brings expert craftsmanship to every project, no matter the size.
              </p>
              <p>
                Whether you're upgrading your home for comfort, resale value, or Florida's unique climate demands, our team delivers results you'll love — on time and on budget.
              </p>
              <p>
                We serve Orange, Seminole, Osceola, Volusia, Lake, Polk, and Brevard counties. Get your free estimate today.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#1B2B4B] text-2xl mb-5">Why Choose S&S FL Renovations</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Licensed Florida contractor — " + COMPANY.licenseNumber,
                "Fully insured — general liability & workers' comp",
                "In-house crew — no subcontractors",
                `${COMPANY.rating}★ Google rating with ${COMPANY.reviewCount}+ reviews`,
                "Transparent pricing — no hidden fees",
                "2-year labor warranty on all work",
                "Permit management included",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#D4922A] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related sub-services */}
      <section className="py-12 bg-[#F7F6F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-xl text-[#1B2B4B] mb-5">
            More {parent.name} Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {parent.subServices
              .filter((s) => s.slug !== serviceSlug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${category}/${s.slug}`}
                  className="bg-white border border-gray-200 hover:border-[#D4922A] text-[#1B2B4B] hover:text-[#D4922A] text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            <Link
              href={`/services/${category}`}
              className="bg-[#1B2B4B] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2D4A7A] transition-colors"
            >
              View All {parent.name} →
            </Link>
          </div>
        </div>
      </section>

      <FAQAccordion title={`${sub.name} — FAQ`} />
      <CTASection
        title={`Ready to Start Your ${sub.name} Project?`}
        subtitle="Get your free, no-obligation estimate from Central Florida's most trusted renovation team."
      />
    </>
  )
}
