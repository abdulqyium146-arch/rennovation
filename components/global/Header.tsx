"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { COMPANY, SERVICES } from "@/lib/constants"
import PhoneButton from "./PhoneButton"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled ? "bg-[#1B2B4B] shadow-2xl" : "bg-[#1B2B4B]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* ── LOGO — SEO-optimized next/image ── */}
            <Link
              href="/"
              className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4922A] rounded"
              aria-label={`${COMPANY.name} — Home Renovation Contractor in Orlando, FL`}
              title="S&S FL Renovations LLC — Orlando's #1 Home Renovation Contractor"
            >
              {/*
                SEO notes:
                - filename: logo.webp (keyword-rich original name preserved in public/images)
                - alt: describes business + primary geo keyword (helps Google image search + entity association)
                - priority: preloads as LCP-critical resource (no lazy load on above-fold logo)
                - width/height: explicit dimensions prevent CLS (Core Web Vitals)
                - White background logo shown on white rounded pill so it reads on dark header
              */}
              <div className="relative h-12 lg:h-14 w-auto bg-white rounded-xl overflow-hidden px-1 shadow-md flex items-center">
                <Image
                  src="/images/logo.webp"
                  alt="S&S FL Renovations LLC logo — Home Renovation Contractor serving Orlando and Central Florida"
                  width={160}
                  height={56}
                  priority
                  className="h-12 lg:h-14 w-auto object-contain"
                  style={{ maxWidth: "160px" }}
                />
              </div>

              {/* "Se Habla Español" badge — visible desktop only, helps Local SEO for Spanish searches */}
              <span className="hidden xl:inline-flex items-center ml-2 text-[10px] font-semibold bg-[#D4922A]/20 text-[#F0B84A] border border-[#D4922A]/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                Se Habla Español
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.mega ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-[#F0B84A] transition-colors rounded",
                        pathname.startsWith("/services") && "text-[#D4922A]"
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-3">
                        {SERVICES.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="group flex flex-col gap-0.5 p-3 rounded-xl hover:bg-[#F7F6F2] transition-colors"
                          >
                            <span className="text-[#1B2B4B] font-semibold text-sm group-hover:text-[#D4922A] transition-colors leading-snug">
                              {svc.name}
                            </span>
                            <span className="text-gray-400 text-xs line-clamp-1">{svc.description}</span>
                          </Link>
                        ))}
                        <div className="col-span-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                          <Link href="/services" className="text-[#1B2B4B] font-semibold text-sm hover:text-[#D4922A] transition-colors">
                            View All Services →
                          </Link>
                          <Link
                            href="/free-estimate"
                            className="bg-[#D4922A] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#F0B84A] transition-colors"
                          >
                            Get Free Estimate
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium text-white/90 hover:text-[#F0B84A] transition-colors rounded",
                      pathname === link.href && "text-[#D4922A]"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-white hover:text-[#F0B84A] transition-colors text-sm font-semibold"
                aria-label={`Call S&S FL Renovations at ${COMPANY.phone}`}
              >
                <Phone size={15} className="text-[#D4922A]" />
                {COMPANY.phone}
              </a>
              <Link
                href="/free-estimate"
                className="bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap shadow-lg"
              >
                Free Estimate
              </Link>
            </div>

            {/* ── Mobile: phone + hamburger ── */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-1.5 text-white text-sm font-semibold"
                aria-label={`Call ${COMPANY.phone}`}
              >
                <Phone size={16} className="text-[#D4922A]" />
                <span className="hidden sm:inline">{COMPANY.phone}</span>
              </a>
              <button
                className="text-white p-2 ml-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0F1923] border-t border-white/10 px-4 pb-6 max-h-[80vh] overflow-y-auto">
            {/* Logo repeat in mobile menu for branding */}
            <div className="py-4 border-b border-white/10 mb-2">
              <div className="bg-white rounded-xl overflow-hidden px-2 py-1 inline-flex">
                <Image
                  src="/images/logo.webp"
                  alt="S&S FL Renovations LLC"
                  width={120}
                  height={42}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-3 py-3 text-white/90 hover:text-[#D4922A] font-medium transition-colors border-b border-white/5 text-sm",
                      pathname === link.href && "text-[#D4922A]"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.mega && (
                    <div className="pl-4 mt-1 grid grid-cols-2 gap-1 mb-2">
                      {SERVICES.slice(0, 8).map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          className="text-xs text-gray-400 hover:text-[#D4922A] py-1.5 transition-colors"
                        >
                          {svc.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 border-2 border-[#D4922A] text-[#D4922A] font-bold py-3 rounded-lg text-sm"
              >
                <Phone size={16} /> {COMPANY.phone}
              </a>
              {/* Second phone */}
              <a
                href={COMPANY.phone2Href}
                className="flex items-center justify-center gap-2 border border-white/20 text-white/80 font-medium py-2.5 rounded-lg text-sm"
              >
                <Phone size={15} className="text-[#D4922A]" /> {COMPANY.phone2}
              </a>
              <Link
                href="/free-estimate"
                className="w-full text-center bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-4 py-3.5 rounded-lg transition-colors text-sm"
              >
                Get Free Estimate — It's Free
              </Link>
              <p className="text-center text-[#D4922A] text-xs font-medium">Se Habla Español</p>
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile sticky bottom call bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="grid grid-cols-2">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center justify-center gap-2 bg-[#1B2B4B] text-white font-bold py-4 text-sm border-r border-white/10"
            aria-label={`Call ${COMPANY.name}`}
          >
            <Phone size={16} className="text-[#D4922A]" />
            {COMPANY.phone}
          </a>
          <a
            href={COMPANY.phone2Href}
            className="flex items-center justify-center gap-2 bg-[#D4922A] text-white font-bold py-4 text-sm"
            aria-label="Second phone line"
          >
            <Phone size={16} />
            {COMPANY.phone2}
          </a>
        </div>
      </div>
    </>
  )
}
