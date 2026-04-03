import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Star, Shield, Clock } from "lucide-react"
import { COMPANY, SERVICES, CITIES } from "@/lib/constants"

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1AvPRMiJqS/?mibextid=wwXIfr",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ssflrenovationsllc?igsh=MTlncXV4OWl6a3ptNA%3D%3D&utm_source=qr",
    Icon: InstagramIcon,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const primaryCities = CITIES.slice(0, 12)

  return (
    <footer
      className="bg-[#0F1923] text-white"
      itemScope
      itemType="https://schema.org/HomeAndConstructionBusiness"
    >
      {/* Hidden machine-readable address for local SEO */}
      <div className="hidden" aria-hidden="true">
        <span itemProp="name">{COMPANY.name}</span>
        <span itemProp="telephone">{COMPANY.phone}</span>
        <span itemProp="email">{COMPANY.email}</span>
        <span itemProp="url">{COMPANY.domain}</span>
        <span itemProp="priceRange">$$</span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">1757 S Village Dr</span>
          <span itemProp="addressLocality">Deltona</span>
          <span itemProp="addressRegion">FL</span>
          <span itemProp="postalCode">32725</span>
          <span itemProp="addressCountry">US</span>
        </div>
        <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
          <span itemProp="latitude">28.9005</span>
          <span itemProp="longitude">-81.2637</span>
        </div>
        <span itemProp="areaServed">Deltona, FL</span>
        <span itemProp="areaServed">DeBary, FL</span>
        <span itemProp="areaServed">Orange City, FL</span>
        <span itemProp="areaServed">DeLand, FL</span>
        <span itemProp="areaServed">Sanford, FL</span>
        <span itemProp="areaServed">Volusia County, FL</span>
        <a itemProp="sameAs" href="https://www.facebook.com/share/1AvPRMiJqS/?mibextid=wwXIfr">Facebook</a>
        <a itemProp="sameAs" href="https://www.instagram.com/ssflrenovationsllc?igsh=MTlncXV4OWl6a3ptNA%3D%3D&utm_source=qr">Instagram</a>
      </div>

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
                    alt="S&S FL Renovations LLC — Renovation & Painting Contractor Deltona, FL"
                    width={140}
                    height={48}
                    className="h-12 w-auto object-contain"
                    style={{ maxWidth: "140px" }}
                  />
                </div>
              </Link>
              <p className="text-[#D4922A] text-xs mt-2">Deltona's Renovation &amp; Painting Contractor</p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Full-service home renovation and painting company locally based in Deltona, FL — proudly serving Volusia County since {COMPANY.founded}. Licensed, insured, and committed to excellence.
            </p>

            <address className="not-italic flex flex-col gap-2.5 text-sm">
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-[#D4922A] hover:text-[#F0B84A] transition-colors font-semibold">
                <Phone size={14} aria-hidden="true" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={14} aria-hidden="true" />
                {COMPANY.email}
              </a>
              <span className="flex items-start gap-2 text-gray-400">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>1757 S Village Dr,<br />Deltona, FL 32725</span>
              </span>
            </address>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#D4922A] text-[#D4922A]" />
              ))}
              <span className="text-sm text-gray-300">{COMPANY.rating} ({COMPANY.reviewCount} reviews)</span>
            </div>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${COMPANY.name} on ${label}`}
                  className="w-9 h-9 rounded-lg bg-[#1B2B4B] hover:bg-[#D4922A] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
              <span className="text-gray-500 text-xs ml-1">Follow us</span>
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
                <Shield size={14} className="text-[#D4922A]" aria-hidden="true" />
                <span>License: {COMPANY.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield size={14} className="text-[#D4922A]" aria-hidden="true" />
                <span>Fully Insured — Volusia County</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock size={14} className="text-[#D4922A]" aria-hidden="true" />
                <span>Open 24/7 — Free Estimates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={14} className="text-[#D4922A]" aria-hidden="true" />
                <span>Based in Deltona, FL 32725</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {year} {COMPANY.name}. All rights reserved. · Deltona, FL 32725</p>
          <div className="flex gap-5 flex-wrap justify-center">
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
