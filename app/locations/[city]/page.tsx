import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CITIES, SERVICES, COMPANY } from "@/lib/constants"
import { buildLocationMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema } from "@/lib/schema"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import FAQAccordion from "@/components/sections/FAQAccordion"
import ServicesGrid from "@/components/sections/ServicesGrid"
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react"

interface Props {
  params: Promise<{ city: string }>
}

export const revalidate = 86400

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = CITIES.find((c) => c.slug === citySlug)
  if (!city) return {}
  return buildLocationMetadata(city.name, city.slug)
}

// City-specific content for SEO uniqueness
const CITY_CONTENT: Record<string, {
  intro: string
  highlights: string[]
  landmarks: string[]
}> = {
  deltona: {
    intro: `Deltona is home base for S&S FL Renovations LLC — we're located right here at 1757 S Village Dr, Deltona, FL 32725. As Volusia County's largest city, Deltona has a diverse mix of established neighborhoods, HOA communities, and older homes that are prime candidates for renovation and painting upgrades. From cabinet painting in Spring-to-Spring Trail area homes to popcorn ceiling removal across Deltona Lakes, our crew knows this community intimately and treats every project like it's our own home.`,
    highlights: ["Locally based in Deltona — faster response than any other contractor", "HOA-compliant exterior painting and renovation work", "Specialists in popcorn ceiling removal for Deltona's older homes"],
    landmarks: ["Deltona Lakes", "Deltona Hills", "Spring-to-Spring Trail corridor", "Saxon Boulevard area"],
  },
  debary: {
    intro: `DeBary, FL is one of Volusia County's most desirable communities — just minutes from our Deltona headquarters. Known for its riverfront neighborhoods, St. Johns River access, and well-maintained subdivisions, DeBary homeowners invest in renovations that reflect the community's character. S&S FL Renovations LLC has completed cabinet painting, bathroom remodels, screen enclosure installations, and exterior painting projects throughout DeBary, delivering results that stand up to Florida's demanding climate.`,
    highlights: ["Just minutes from our Deltona base — fast scheduling", "Cabinet painting and kitchen upgrades for DeBary homes", "Exterior painting built for DeBary's riverfront humidity"],
    landmarks: ["DeBary Hall Historic Site area", "Gemini Springs corridor", "River Edge community", "St. Johns River waterfront neighborhoods"],
  },
  "orange-city": {
    intro: `Orange City, FL is a charming Volusia County community just north of DeLand and minutes from our Deltona headquarters. Orange City's established neighborhoods feature many homes built in the 1980s–2000s that are ideal for popcorn ceiling removal, interior painting, and bathroom upgrades. S&S FL Renovations LLC proudly serves Orange City homeowners with the same craftsmanship and transparent pricing that has earned us 127+ five-star reviews across Volusia County.`,
    highlights: ["Popcorn ceiling removal specialists for Orange City's older homes", "Interior and exterior painting across all Orange City neighborhoods", "Free estimates within 48 hours for all Orange City homeowners"],
    landmarks: ["Blue Spring State Park adjacent neighborhoods", "Orange City downtown area", "Volusia County Fairgrounds corridor"],
  },
  deland: {
    intro: `DeLand, FL — the county seat of Volusia County — is a historic city with a vibrant downtown, Stetson University, and beautiful residential neighborhoods ranging from Victorian-era homes to modern subdivisions. S&S FL Renovations LLC serves DeLand homeowners with expert renovation and painting services, including cabinet painting, drywall repair, interior repaints, and outdoor renovations. We're just 15 minutes away in Deltona and offer free in-home estimates with no pressure.`,
    highlights: ["Cabinet painting and kitchen renovations for DeLand historic homes", "Full interior and exterior painting — Volusia County licensed", "Free estimates and flexible scheduling for DeLand homeowners"],
    landmarks: ["Stetson University neighborhood", "DeLand historic downtown area", "Athens Theatre corridor", "Volusia County Government Center area"],
  },
  sanford: {
    intro: `Sanford, FL — the seat of Seminole County — sits just across the Volusia County line and is well within our 25-mile service radius from Deltona. Sanford's historic downtown, Lake Monroe waterfront, and growing residential developments make it a prime market for renovation and painting services. S&S FL Renovations LLC brings the same quality and transparency to Sanford homeowners that we're known for across Volusia County — with no extra travel fees.`,
    highlights: ["Serving all Sanford neighborhoods — no travel surcharge", "Kitchen remodeling and bathroom renovations for Sanford homes", "Fence & deck staining for Sanford's outdoor living spaces"],
    landmarks: ["Historic Sanford downtown", "Lake Monroe waterfront", "Celery City Historic District", "Rinehart Road corridor"],
  },
  "lake-helen": {
    intro: `Lake Helen, FL is one of Volusia County's most picturesque small towns — with tree-lined streets, historic homes, and a close-knit community that takes pride in their properties. S&S FL Renovations LLC is proud to serve Lake Helen homeowners, offering renovation and painting services with almost zero local competition. Whether you need interior painting, cabinet refinishing, or popcorn ceiling removal in your historic Lake Helen home, our Deltona-based crew is just a short drive away.`,
    highlights: ["Almost zero renovation competition in Lake Helen — easier scheduling", "Historic home renovation specialists for Lake Helen's older properties", "Free estimates for all Lake Helen homeowners"],
    landmarks: ["Lake Helen historic district", "Spirit Lake area", "Volusia County small-town communities"],
  },
}


function getDefaultCityContent(cityName: string, county: string) {
  return {
    intro: `${cityName}, FL is a ${county} County community within our service area from our Deltona, FL headquarters. S&S FL Renovations LLC proudly serves ${cityName} homeowners with the same expert craftsmanship and transparent pricing that has earned us ${COMPANY.rating}★ and 127+ five-star reviews across Volusia County and surrounding areas. Whether you're planning a cabinet painting project, popcorn ceiling removal, bathroom renovation, or full home transformation, our locally based crew is just minutes away.`,
    highlights: [
      `Full-service renovation and painting in ${cityName} — no travel surcharge`,
      "Licensed & insured — compliant with Florida and local codes",
      "Free in-home consultation within 48 hours of your inquiry",
    ],
    landmarks: [`${cityName} neighborhoods`, `${county} County communities`],
  }
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = CITIES.find((c) => c.slug === citySlug)
  if (!city) notFound()

  const content = CITY_CONTENT[citySlug] ?? getDefaultCityContent(city.name, city.county)

  // Find adjacent cities (same county + nearby)
  const nearbyCities = CITIES
    .filter((c) => c.slug !== citySlug)
    .filter((c) => c.county === city.county || true)
    .slice(0, 8)

  const cityFaqs = [
    {
      question: `How much does a home renovation cost in ${city.name}, FL?`,
      answer: `Renovation costs in ${city.name} vary by project. Cabinet painting typically runs $1,500–$5,000, interior painting $2,500–$6,000, a bathroom remodel $8,000–$35,000, and kitchen renovations $15,000–$80,000+. Contact us for a free, itemized estimate with no pressure.`,
    },
    {
      question: `Do you offer free estimates in ${city.name}?`,
      answer: `Yes — always. We're based just minutes away in Deltona, FL and offer free in-home estimates to all ${city.name} homeowners. We typically schedule within 48 hours of your inquiry and provide a detailed written quote with no hidden fees.`,
    },
    {
      question: `Are you licensed to work in ${city.name}?`,
      answer: `Absolutely. We hold a valid Florida State Contractor License (${COMPANY.licenseNumber}) and carry full general liability insurance and workers' compensation. We pull all necessary permits through ${city.county} County for every project.`,
    },
    {
      question: `How quickly can you start my project in ${city.name}?`,
      answer: `Most projects begin within 2–4 weeks of signing the contract. We're locally based in Deltona — just minutes from ${city.name} — so scheduling is fast and flexible.`,
    },
    {
      question: `What other areas near ${city.name} do you serve?`,
      answer: `We serve all of Volusia County — including Deltona, DeBary, Orange City, DeLand, Lake Helen, Edgewater, Port Orange, New Smyrna Beach, and Daytona Beach — as well as nearby Seminole and Orange County communities within about 25 miles of our Deltona headquarters.`,
    },
  ]

  return (
    <>
      <TrustBar />
      <BreadcrumbNav
        items={[
          { name: "Locations", href: "/locations" },
          { name: `${city.name}, FL`, href: `/locations/${citySlug}` },
        ]}
      />

      {/* Hero */}
      <section className="py-20 bg-[#1B2B4B] section-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider mb-3">
              <MapPin size={14} />
              {city.county} County, Florida
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Home Renovation Contractor in {city.name}, FL
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Licensed, insured home renovation services in {city.name}. Kitchen remodeling, bathroom renovation, outdoor living & full-home remodels — serving all of {city.county} County.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-estimate"
                className="inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-6 py-4 rounded-lg transition-colors shadow-xl"
              >
                Get Free Estimate in {city.name} <ArrowRight size={18} />
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

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold text-[#1B2B4B] mb-5">
              Your Trusted Renovation Contractor in {city.name}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{content.intro}</p>
            <ul className="flex flex-col gap-3">
              {content.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#D4922A] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1B2B4B] text-white rounded-xl p-6 flex flex-col gap-4 h-fit">
            <h3 className="font-display font-bold text-xl">Get a Free Quote in {city.name}</h3>
            <p className="text-gray-300 text-sm">We respond within 24 hours and schedule in-home consultations usually within 48 hours.</p>
            <Link
              href="/free-estimate"
              className="bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-5 py-3 rounded-lg text-center transition-colors"
            >
              Request Free Estimate
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesGrid
        title={`Our Services in ${city.name}, FL`}
        subtitle={`Full-service home renovation in ${city.name} — licensed crew, transparent pricing, free estimates.`}
      />

      {/* City FAQ */}
      <FAQAccordion
        faqs={cityFaqs}
        title={`Home Renovation FAQ — ${city.name}, FL`}
        includeSchema
      />

      {/* Nearby cities */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-xl text-[#1B2B4B] mb-5">
            We Also Serve Nearby Cities
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="flex items-center gap-1.5 bg-[#F7F6F2] border border-gray-200 hover:border-[#D4922A] text-[#1B2B4B] hover:text-[#D4922A] text-sm font-medium px-3 py-2 rounded-lg transition-colors"
              >
                <MapPin size={11} />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Get Your Free Renovation Estimate in ${city.name}`}
        subtitle={`Serving ${city.name} and all of ${city.county} County. Call today or fill out our form.`}
      />
    </>
  )
}
