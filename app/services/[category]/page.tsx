import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SERVICES, COMPANY, FAQ_GENERAL } from "@/lib/constants"
import { buildServiceMetadata } from "@/lib/seo"
import { servicePageSchema, howToSchema } from "@/lib/schemas"
import { SchemaMarkup } from "@/components/global/SchemaMarkup"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import FAQAccordion from "@/components/sections/FAQAccordion"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"

interface Props {
  params: Promise<{ category: string }>
}

export const revalidate = 86400

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ category: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const service = SERVICES.find((s) => s.slug === category)
  if (!service) return {}
  return buildServiceMetadata(service.name, service.slug)
}

interface ServiceContent {
  // 40–60 word definition paragraph — targets Google AI Overview & featured snippets
  aeoAnswer: string
  intro: string
  included: string[]
  process: { step: number; title: string; desc: string }[]
  pricing: { label: string; range: string }[]
  faqs: { question: string; answer: string }[]
}

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "kitchen-remodeling": {
    // Direct-answer paragraph: who + what + where + cost range for AEO
    aeoAnswer:
      "Kitchen remodeling is the process of renovating a home's cabinets, countertops, flooring, lighting, and layout to improve function and aesthetics. In Central Florida, a kitchen remodel costs $8,000–$100,000+ depending on scope and typically returns 60–80% of the investment at resale — one of the highest ROIs in home renovation.",
    intro: `A kitchen remodel is one of the highest-ROI investments a Central Florida homeowner can make — both in comfort and resale value. At S&S FL Renovations LLC, we handle everything from cabinet installation to full open-concept transformations. We've completed over 100 kitchen remodels across Deltona, DeBary, DeLand, and Volusia County, delivering stunning results that stand the test of Florida's climate.`,
    included: [
      "Custom cabinet design, supply & installation",
      "Countertop installation (granite, quartz, marble)",
      "Kitchen island design & build",
      "Backsplash tile installation",
      "Plumbing rough-in & fixture installation",
      "Electrical outlets, lighting & under-cabinet LED",
      "Flooring installation",
      "Drywall, paint & finishing work",
      "Permit management",
    ],
    process: [
      { step: 1, title: "Design Consultation", desc: "We visit your home, take measurements, and create a design plan aligned with your vision and budget." },
      { step: 2, title: "Material Selection", desc: "Choose from our curated catalog of cabinets, countertops, fixtures, and finishes." },
      { step: 3, title: "Permit & Demo", desc: "We pull permits, demo the existing kitchen, and prep for new construction." },
      { step: 4, title: "Build & Install", desc: "Our crew installs cabinets, countertops, plumbing, electrical, and finishes." },
      { step: 5, title: "Final Inspection", desc: "We do a thorough walkthrough with you to ensure everything meets our high standards." },
    ],
    pricing: [
      { label: "Minor Kitchen Refresh", range: "$8,000 – $20,000" },
      { label: "Mid-Range Kitchen Remodel", range: "$20,000 – $45,000" },
      { label: "Full Custom Kitchen Renovation", range: "$45,000 – $100,000+" },
    ],
    faqs: [
      { question: "How long does a kitchen remodel take in Central Florida?", answer: "A typical kitchen remodel takes 3–8 weeks depending on scope. A full custom kitchen may take 8–12 weeks. We provide a detailed timeline in your estimate and update you daily throughout the project." },
      { question: "Do you handle kitchen permits in Volusia County?", answer: "Yes. We manage all permits through Volusia County or the relevant municipality — permit costs are included in your project price. Structural, electrical, and plumbing work all require permits and we handle every step." },
      { question: "Can I stay in my home during the kitchen remodel?", answer: "Most homeowners stay during the renovation. We set up temporary cooking areas, protect adjacent rooms with dust barriers, and minimize disruption to daily life throughout the project." },
      { question: "What countertop materials do you install?", answer: "We install granite, quartz, quartzite, marble, butcher block, and more — helping you choose the best material for Florida's climate and your lifestyle. Quartz is our most popular choice for its durability and low maintenance in humid conditions." },
      { question: "What is the ROI on a kitchen remodel in Central Florida?", answer: "Kitchen remodels in Central Florida typically return 60–80% of the investment at resale, with minor refreshes returning closer to 80–85%. In Volusia County's housing market, an updated kitchen significantly reduces time-on-market and supports higher listing prices." },
    ],
  },
  "bathroom-renovation": {
    aeoAnswer:
      "Bathroom renovation is the process of updating a bathroom's tile, fixtures, plumbing, shower, and layout. In Central Florida, a bathroom remodel costs $4,000–$60,000+ depending on size and finish level. Florida's humidity makes proper waterproofing critical — a licensed contractor ensures materials and methods meet Florida Building Code.",
    intro: `Bathroom renovations deliver some of the best returns for Central Florida homeowners — and our team has the experience to transform any bathroom into a spa-like retreat. From master bath overhauls to ADA-compliant upgrades and walk-in shower conversions, S&S FL Renovations has completed hundreds of bathroom projects across Deltona, DeBary, and all of Volusia County.`,
    included: [
      "Full demolition & disposal",
      "Waterproofing & backer board installation",
      "Tile installation (floor, shower, walls)",
      "Walk-in shower or tub installation",
      "Vanity, sink & faucet installation",
      "Toilet installation",
      "Lighting, exhaust fan & electrical",
      "Plumbing rough-in & fixture upgrade",
      "Paint, trim & finishing",
    ],
    process: [
      { step: 1, title: "Consultation & Design", desc: "Review your space, discuss tile, fixture, and layout options." },
      { step: 2, title: "Demo & Waterproofing", desc: "Safe demolition, proper waterproofing membrane installation." },
      { step: 3, title: "Plumbing & Electrical", desc: "Rough-in plumbing and electrical updated to code." },
      { step: 4, title: "Tile & Fixtures", desc: "Tile installation, vanity, shower, toilet, and all finish fixtures." },
      { step: 5, title: "Final Walkthrough", desc: "Complete inspection and walkthrough before project sign-off." },
    ],
    pricing: [
      { label: "Guest Bathroom Refresh", range: "$4,000 – $10,000" },
      { label: "Mid-Range Bathroom Remodel", range: "$10,000 – $25,000" },
      { label: "Luxury Master Bath", range: "$25,000 – $60,000+" },
    ],
    faqs: [
      { question: "How long does a bathroom remodel take in Central Florida?", answer: "Guest bathrooms typically take 1–2 weeks. Master bathroom remodels take 2–4 weeks. Complex renovations with custom tile work or layout changes may take 4–6 weeks. We provide a firm timeline in your written estimate." },
      { question: "Do you handle waterproofing in Florida bathrooms?", answer: "Yes — proper waterproofing is critical in Florida's humid climate. We use Schluter Systems and industry-standard waterproofing membranes on all wet areas. Skipping this step is the most common cause of shower leaks and mold in Florida homes." },
      { question: "Can you do a tub-to-shower conversion in Volusia County?", answer: "Absolutely. This is one of our most popular services. We handle all plumbing changes, tiling, and glass enclosure installation. A permit is required for plumbing relocation and we manage that process for you." },
      { question: "Do you need a permit for a bathroom remodel in Volusia County?", answer: "Yes — any bathroom remodel involving plumbing moves, new electrical circuits, or structural changes requires a permit through Volusia County or your local municipality. S&S FL Renovations manages all permits as part of your project at no extra charge." },
      { question: "What tile is best for Florida bathrooms?", answer: "Porcelain and glazed ceramic tiles are ideal for Florida bathrooms due to their moisture resistance and durability in humid conditions. We recommend 12×24 or larger format rectified porcelain for modern aesthetics and fewer grout lines — our most popular choice for walk-in showers in Volusia County homes." },
    ],
  },
  "painting-finishing": {
    aeoAnswer:
      "Painting and finishing services cover interior painting, exterior painting, cabinet refinishing, drywall finishing, and texture work. In Florida's intense UV climate, exterior paint lasts 7–10 years with proper prep. Professional painting is one of the highest-ROI improvements for Central Florida homeowners — refreshing a home's appearance without structural renovation.",
    intro: `From fresh exterior paint that protects your home against Florida's intense UV rays and summer storms, to flawless interior finishes and structural framing renovations — S&S FL Renovations LLC delivers expert painting and finishing services across Deltona and all of Central Florida. Our skilled crews use premium paints, proper surface preparation, and proven techniques to ensure beautiful, long-lasting results in Florida's demanding climate.`,
    included: [
      "Exterior painting — full prep, prime & paint",
      "Interior painting — walls, ceilings, trim & doors",
      "Pressure washing & surface preparation",
      "Drywall finishing — taping, mudding & sanding",
      "Smooth and textured wall finishes",
      "Popcorn ceiling removal & resurfacing",
      "Framing renovations — walls, partitions & structural updates",
      "Wood rot repair before painting",
      "Color consultation included",
      "Clean, protected worksite — furniture covered",
    ],
    process: [
      { step: 1, title: "Color & Scope Consultation", desc: "We assess your surfaces, discuss color options, and identify any repairs needed before painting." },
      { step: 2, title: "Surface Preparation", desc: "Pressure washing, sanding, caulking, priming, and drywall repairs — the foundation of a lasting finish." },
      { step: 3, title: "Framing & Drywall Work", desc: "Any structural framing or drywall finishing is completed before paint application." },
      { step: 4, title: "Professional Paint Application", desc: "Two-coat application with premium exterior or interior paints suited for Florida's climate." },
      { step: 5, title: "Final Inspection & Touch-Up", desc: "We walk through every surface with you to ensure perfection before signing off." },
    ],
    pricing: [
      { label: "Interior Painting (avg. home)", range: "$2,500 – $6,000" },
      { label: "Exterior Painting (avg. home)", range: "$3,500 – $9,000" },
      { label: "Drywall Finishing + Paint", range: "$1,500 – $5,000" },
    ],
    faqs: [
      { question: "What exterior paint do you use for Florida's climate?", answer: "We use 100% acrylic latex paints rated for Florida's UV intensity and humidity — brands like Sherwin-Williams Emerald Exterior and Benjamin Moore Aura Exterior. These resist fading, peeling, and mildew in our climate." },
      { question: "How long does exterior paint last in Florida?", answer: "With proper prep and premium paint, exterior paint in Florida typically lasts 7–10 years. Homes with heavy sun exposure on west and south-facing walls may need touch-up around year 5–7. Proper priming and surface prep are the most critical factors for longevity." },
      { question: "Do I need to leave my home during interior painting?", answer: "Not required. We use low-VOC paints and maintain excellent ventilation. Most homeowners stay home — we work room by room and protect all furniture and floors with drop cloths throughout the project." },
      { question: "What is drywall finishing?", answer: "Drywall finishing is the process of taping seams, applying joint compound (mud), sanding, and preparing the surface for paint. We achieve level 4 or level 5 finishes depending on your preference and lighting conditions." },
      { question: "What are framing renovations?", answer: "Framing renovations involve modifying the structural wood framing of your home — adding or removing walls, creating openings, building partitions, or repairing damaged framing. All our framing work is permitted and code-compliant in Volusia County." },
    ],
  },
}

function getDefaultContent(serviceName: string): ServiceContent {
  return {
    // Generic AEO answer — specific services override above
    aeoAnswer: `${serviceName} is a professional home improvement service that enhances your property's function, appearance, and value. S&S FL Renovations LLC provides expert ${serviceName.toLowerCase()} in Central Florida — serving Deltona, DeBary, DeLand, and all of Volusia County with licensed crews and transparent pricing.`,
    intro: `S&S FL Renovations LLC provides professional ${serviceName.toLowerCase()} services throughout Deltona, DeBary, Orange City, DeLand, and all of Volusia County. Our licensed, insured team has completed 500+ renovation projects — bringing expert craftsmanship to every job, from initial design to final walkthrough.`,
    included: [
      `Professional ${serviceName.toLowerCase()} design & planning`,
      "Licensed and insured installation",
      "High-quality materials sourced and supplied",
      "Permit management included",
      "Clean, professional worksite",
      "Final inspection and walkthrough",
      "2-year labor warranty",
    ],
    process: [
      { step: 1, title: "Free Consultation", desc: "In-home visit to assess your space and discuss your vision." },
      { step: 2, title: "Detailed Quote", desc: "Transparent, itemized estimate with no hidden fees." },
      { step: 3, title: "Project Execution", desc: "Our skilled crew completes work on schedule." },
      { step: 4, title: "Final Walkthrough", desc: "We don't consider the job done until you're 100% satisfied." },
    ],
    pricing: [
      { label: "Basic", range: "Contact for quote" },
      { label: "Standard", range: "Contact for quote" },
      { label: "Premium", range: "Contact for quote" },
    ],
    faqs: FAQ_GENERAL.slice(0, 5),
  }
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category } = await params
  const service = SERVICES.find((s) => s.slug === category)
  if (!service) notFound()

  const content = SERVICE_CONTENT[category] ?? getDefaultContent(service.name)
  const serviceUrl = `${COMPANY.domain}/services/${category}`

  // Service + HowTo schemas bundled together — BreadcrumbNav injects BreadcrumbList,
  // FAQAccordion injects FAQPage, so we only need Service + HowTo here
  const schemas = [
    servicePageSchema({
      serviceName: service.name,
      serviceUrl,
      description: service.description,
      subServices: service.subServices.map((sub) => ({
        name: sub.name,
        url: `${COMPANY.domain}/services/${category}/${sub.slug}`,
      })),
    }),
    howToSchema({
      name: `How ${service.name} Works — Our Process`,
      description: `Step-by-step ${service.name.toLowerCase()} process for Deltona and Volusia County homeowners.`,
      steps: content.process.map((p) => ({ name: p.title, text: p.desc })),
    }),
  ]

  return (
    <>
      <SchemaMarkup schema={schemas as Record<string, unknown>[]} />
      <TrustBar />
      <BreadcrumbNav
        items={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${category}` },
        ]}
      />

      {/* Hero */}
      <section className="py-20 bg-[#1B2B4B] section-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">
              Deltona &amp; Volusia County, FL
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-5 leading-tight">
              {service.name} in Deltona, FL &amp; Volusia County
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {service.description} Locally based in Deltona — serving DeBary, Orange City, DeLand, Sanford, and all of Volusia County with licensed crews and transparent pricing.
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

      {/* Intro + What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#1B2B4B] mb-5">
              Expert {service.name} in Deltona &amp; Volusia County
            </h2>

            {/* AEO quick-answer: 40–60 word definition paragraph.
                Targets "What is [service]?" queries in AI Overviews & featured snippets. */}
            <aside
              className="mb-5 border-l-4 border-[#D4922A] pl-4 py-1"
              aria-label={`What is ${service.name}?`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">{content.aeoAnswer}</p>
            </aside>

            <p className="text-gray-600 leading-relaxed text-base">{content.intro}</p>

            {service.subServices.length > 0 && (
              <div className="mt-8">
                <h3 className="font-display font-bold text-[#1B2B4B] text-xl mb-4">Related Services</h3>
                <div className="grid grid-cols-2 gap-2">
                  {service.subServices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${category}/${sub.slug}`}
                      className="flex items-center gap-2 text-sm text-[#1B2B4B] hover:text-[#D4922A] font-medium transition-colors"
                    >
                      <ArrowRight size={12} className="text-[#D4922A]" />
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-display font-bold text-[#1B2B4B] text-2xl mb-5">What&apos;s Included</h3>
            <ul className="flex flex-col gap-3">
              {content.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#D4922A] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process — id attributes anchor HowTo schema step URLs */}
      <section className="py-16 bg-[#F7F6F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-[#1B2B4B] text-center mb-12">
            Our {service.name} Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.process.map(({ step, title, desc }) => (
              <div
                key={step}
                id={`step-${step}`}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-[#1B2B4B] rounded-full flex items-center justify-center text-white font-bold font-accent text-lg">
                  {step}
                </div>
                <h3 className="font-display font-bold text-[#1B2B4B]">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-[#1B2B4B] text-center mb-4">
            {service.name} Cost Guide
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Prices vary based on scope, materials, and home size. These ranges represent typical Deltona and Volusia County projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {content.pricing.map(({ label, range }) => (
              <div key={label} className="border-2 border-gray-100 hover:border-[#D4922A] rounded-xl p-6 text-center transition-colors">
                <p className="text-gray-500 text-sm font-medium mb-2">{label}</p>
                <p className="font-accent text-2xl font-bold text-[#1B2B4B]">{range}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Get an accurate quote for your specific project.{" "}
            <Link href="/free-estimate" className="text-[#D4922A] font-semibold hover:underline">
              Request a free estimate →
            </Link>
          </p>
        </div>
      </section>

      <TestimonialsCarousel dark />

      {/* Trust signals */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-8 text-center">
          {[
            { label: "Google Rating", value: `${COMPANY.rating}★` },
            { label: "Reviews", value: `${COMPANY.reviewCount}+` },
            { label: "Projects Completed", value: "500+" },
            { label: "Years in Business", value: "10+" },
            { label: "License", value: COMPANY.licenseNumber },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-accent text-2xl font-bold text-[#1B2B4B]">{value}</p>
              <p className="text-gray-500 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQAccordion injects FAQPage schema internally via includeSchema prop (default: true) */}
      <FAQAccordion faqs={content.faqs} title={`${service.name} — FAQ`} />

      {/* Nearby service links */}
      <section className="py-12 bg-[#F7F6F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-xl text-[#1B2B4B] mb-5">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {SERVICES.filter((s) => s.slug !== category).slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white border border-gray-200 hover:border-[#D4922A] text-[#1B2B4B] hover:text-[#D4922A] text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Start Your ${service.name} Project in Deltona or Nearby`}
        subtitle="Get a free, detailed estimate for your Volusia County home renovation project — we respond within 24 hours."
      />
    </>
  )
}
