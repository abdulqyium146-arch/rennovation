"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Calendar, Star, MapPin, DollarSign } from "lucide-react"
import Link from "next/link"
import { COMPANY } from "@/lib/constants"

const STATS = [
  {
    icon: Trophy,
    value: "500+",
    label: "Projects Completed",
    sub: "Across Central Florida",
    href: "/gallery",
  },
  {
    icon: Calendar,
    value: "10+",
    label: "Years in Business",
    sub: `Serving FL since ${COMPANY.founded}`,
    href: "/about",
  },
  {
    icon: Star,
    value: `${COMPANY.rating}★`,
    label: "Google Rating",
    sub: `${COMPANY.reviewCount}+ verified reviews`,
    href: "/testimonials",
  },
  {
    icon: MapPin,
    value: "24",
    label: "Cities Served",
    sub: "All of Central Florida",
    href: "/locations",
  },
  {
    icon: DollarSign,
    value: "0%",
    label: "Financing Available",
    sub: "For qualified homeowners",
    href: "/free-estimate",
  },
]

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1B2B4B 0%, #0F1923 100%)" }}
      aria-label="Company stats"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {STATS.map(({ icon: Icon, value, label, sub, href }, i) => (
            <Link
              key={label}
              href={href}
              className={`group flex flex-col items-center text-center px-6 py-8 bg-[#1B2B4B]/50 hover:bg-[#D4922A]/10 transition-colors duration-300 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transitionProperty: "opacity, background-color" }}
            >
              <div className="w-12 h-12 bg-[#D4922A]/15 group-hover:bg-[#D4922A]/25 rounded-full flex items-center justify-center mb-3 transition-colors">
                <Icon size={22} className="text-[#D4922A]" />
              </div>
              <span className="font-accent text-3xl sm:text-4xl font-bold text-white leading-none mb-1">
                {value}
              </span>
              <span className="font-semibold text-white text-sm mb-0.5">{label}</span>
              <span className="text-gray-500 text-xs">{sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
