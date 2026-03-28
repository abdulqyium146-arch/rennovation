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
  orlando: {
    intro: `Orlando is Central Florida's largest city and home to a thriving residential renovation market. From the established neighborhoods of College Park and Baldwin Park to newer developments in Lake Nona and Dr. Phillips, S&S FL Renovations LLC has been transforming Orlando homes since ${COMPANY.founded}. Whether you're upgrading a vintage bungalow near Thornton Park or modernizing a new build in Horizon West, our licensed crew delivers exceptional results tailored to Orlando's climate and architecture.`,
    highlights: ["Kitchen & bathroom remodels in all Orlando neighborhoods", "Hurricane protection upgrades for Florida's storm season", "Outdoor living spaces perfect for Orlando's year-round sunshine"],
    landmarks: ["College Park", "Baldwin Park", "Lake Nona", "Dr. Phillips", "Windermere-adjacent"],
  },
  kissimmee: {
    intro: `Kissimmee, located in Osceola County just south of Orlando, is one of Central Florida's fastest-growing residential markets. Home to a diverse community of long-term residents and new arrivals, Kissimmee homeowners are increasingly investing in renovations to build equity and improve quality of life. S&S FL Renovations LLC has completed dozens of projects in Kissimmee, from kitchen overhauls in established neighborhoods near Downtown Kissimmee to bathroom renovations and screen enclosure installations throughout the Lake Toho corridor.`,
    highlights: ["Close proximity to Orlando — faster response times", "Experience with Kissimmee's humidity-challenged homes", "Bilingual team for Spanish-speaking homeowners"],
    landmarks: ["Downtown Kissimmee", "Lake Tohopekaliga area", "Celebration-adjacent communities", "Osceola Parkway corridor"],
  },
  "winter-park": {
    intro: `Winter Park is renowned as one of Orlando's most prestigious neighborhoods, featuring historic brick-lined streets, Park Avenue boutiques, and beautifully maintained homes that range from craftsman bungalows to custom estates. Homeowners in Winter Park expect renovation quality to match their property values — and that's exactly what S&S FL Renovations LLC delivers. We've completed luxury kitchen renovations, master bath transformations, and whole-home remodels throughout Winter Park's most desirable streets and lakefront communities.`,
    highlights: ["Experience with high-end luxury renovations", "Familiar with Winter Park's historic home requirements", "Premium material sourcing for upscale finishes"],
    landmarks: ["Park Avenue corridor", "Winter Park lakefront homes", "Hannibal Square", "Rollins College area"],
  },
  "lake-mary": {
    intro: `Lake Mary is one of Seminole County's premier suburban communities, featuring upscale residential neighborhoods, top-rated schools, and a professional demographic that values quality home upgrades. S&S FL Renovations LLC is a trusted renovation partner for Lake Mary homeowners, delivering kitchen transformations, outdoor living spaces, and whole-home renovations throughout this vibrant community.`,
    highlights: ["Serving Lake Mary's established neighborhoods", "Outdoor living expertise for Florida lifestyles", "Competitive pricing for Seminole County homeowners"],
    landmarks: ["Lake Mary Boulevard corridor", "Heathrow community", "Colonial TownPark area"],
  },
}

function getDefaultCityContent(cityName: string, county: string) {
  return {
    intro: `${cityName}, FL is a thriving ${county} County community where homeowners consistently invest in renovation upgrades to build equity and enjoy Florida's premium lifestyle. S&S FL Renovations LLC proudly serves ${cityName} with the same expert craftsmanship and transparent pricing that has earned us ${COMPANY.rating}★ across all of Central Florida. Whether you're planning a kitchen remodel, bathroom renovation, outdoor living upgrade, or whole-home transformation, our licensed crew is ready to bring your vision to life in ${cityName}.`,
    highlights: [
      `Full-service renovation in ${cityName} and nearby cities`,
      "Licensed & insured — compliant with local codes",
      "Free in-home consultation within 48 hours",
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
      answer: `Renovation costs in ${city.name} vary widely. A bathroom remodel typically runs $8,000–$35,000, kitchen remodels $15,000–$80,000+, and room additions $40,000–$120,000+. Contact us for a free, itemized estimate specific to your project.`,
    },
    {
      question: `Do you serve all of ${city.name}?`,
      answer: `Yes! We serve all neighborhoods throughout ${city.name} and ${city.county} County. Our crew travels throughout Central Florida with no additional travel fees within our service area.`,
    },
    {
      question: `Are you licensed to work in ${city.name}?`,
      answer: `Absolutely. We hold a valid Florida State Contractor License (${COMPANY.licenseNumber}) and carry full insurance. We pull all necessary permits through ${city.county} County for every project.`,
    },
    {
      question: `How quickly can you start my project in ${city.name}?`,
      answer: `Most projects begin within 2–4 weeks of signing the contract. We schedule a free in-home consultation within 48 hours of your inquiry.`,
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
