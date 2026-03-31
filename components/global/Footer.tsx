import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Star, Shield, Clock } from "lucide-react"
import { COMPANY, SERVICES, CITIES } from "@/lib/constants"

export default function Footer() {
  const year = new Date().getFullYear()
  const primaryCities = CITIES.slice(0, 12)

  return (
    <footer className="bg-[#0F1923] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link href="/" aria-label={`${COMPANY.name} — Home`}>
                <div className="inline-flex items-center bg-white rounded-xl overflow-hidden px-2 py-1 shadow-md">
                  <Image
                    src="/images/logo.webp"
                    alt="S&S FL Renovations LLC — Home Renovation Contractor in Orlando, FL"
                    width={140}
                    height={48}
                    className="h-12 w-auto object-contain"
                    style={{ maxWidth: "140px" }}
                  />
                </div>
              </Link>
              <p className="text-[#D4922A] text-xs mt-2">Central Florida's Premier Contractor</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Full-service home renovation company proudly serving Orlando and all of Central Florida since {COMPANY.founded}. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-[#D4922A] hover:text-[#F0B84A] transition-colors font-semibold">
                <Phone size={14} />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={14} />
                {COMPANY.email}
              </a>
              <span className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                {COMPANY.address}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#D4922A] text-[#D4922A]" />
              ))}
              <span className="text-sm text-gray-300">{COMPANY.rating} ({COMPANY.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-gray-400 hover:text-[#D4922A] text-sm transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[#D4922A] text-sm font-medium hover:text-[#F0B84A] transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-lg">Service Areas</h3>
            <ul className="space-y-2">
              {primaryCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="text-gray-400 hover:text-[#D4922A] text-sm transition-colors"
                  >
                    {city.name}, FL
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-[#D4922A] text-sm font-medium hover:text-[#F0B84A] transition-colors">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links + trust */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Free Estimate", href: "/free-estimate" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-[#D4922A] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Trust badges */}
            <div className="bg-[#1B2B4B]/60 rounded-lg p-4 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield size={14} className="text-[#D4922A]" />
                <span>License: {COMPANY.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield size={14} className="text-[#D4922A]" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock size={14} className="text-[#D4922A]" />
                <span>Open 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
