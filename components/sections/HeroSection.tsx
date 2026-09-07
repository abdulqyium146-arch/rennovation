"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Star, Shield, CheckCircle, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"

const HERO_BG = "/gallery/home-renovation-project-collage-central-florida.webp"

interface HeroSectionProps {
  heading: string
  subheading: string
  primaryCTA?: string
  primaryCTAHref?: string
  // kept for API compatibility — unused in pay-per-call mode
}

export default function HeroSection({
  heading,
  subheading,
}: HeroSectionProps) {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" })

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden"
      aria-label="S&S FL Renovations — Renovation & Painting Contractor Deltona FL"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* ── Layer 1: Background image (all devices) ── */}
      <Image
        src={HERO_BG}
        alt="Home renovation projects completed by S&S FL Renovations LLC — Deltona, FL"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
        itemProp="image"
      />

      {/* ── Layer 2: Dark overlay ── */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/75 to-black/55"
        aria-hidden="true"
      />

      {/* ── Layer 3: Accent glows ── */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#D4922A 0%,transparent 70%)" }} />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#2D4A7A 0%,transparent 70%)" }} />
      </div>

      {/* ── Layer 4: Content ── */}
      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT — copy + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#D4922A]/15 border border-[#D4922A]/40 text-[#F0B84A] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#D4922A] rounded-full animate-pulse" />
              Now Booking {currentMonth} — Limited Slots Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-white leading-[1.12] mb-5"
              itemProp="name"
            >
              {heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              itemProp="description"
            >
              {subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex mb-8"
            >
              <a
                href={COMPANY.phoneHref}
                className="relative group inline-flex items-center justify-center gap-2.5 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-10 py-5 rounded-xl text-xl transition-all duration-200 shadow-2xl shadow-[#D4922A]/40 hover:shadow-[#D4922A]/60 hover:-translate-y-0.5"
                itemProp="telephone"
                aria-label={`Call ${COMPANY.name} now at ${COMPANY.phone}`}
              >
                <span className="absolute inset-0 rounded-xl animate-ping bg-[#D4922A]/30 pointer-events-none" />
                <Phone size={22} className="relative shrink-0" />
                <span className="relative">Call Now — {COMPANY.phone}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: CheckCircle, text: "Free Estimate" },
                { icon: Shield,       text: "Licensed & Insured" },
                { icon: Clock,        text: "24/7 Available" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Icon size={14} className="text-[#D4922A]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — pay-per-call conversion card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* White call card */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl">
              {/* Gold accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#D4922A] via-[#F0B84A] to-[#D4922A]" />

              <div className="p-6 text-center">
                {/* Live availability badge */}
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 border border-green-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  We&apos;re Available Now — Call Us
                </div>

                <p className="text-[#1B2B4B] font-bold text-xl mb-1">Talk to a Renovation Expert</p>
                <p className="text-gray-500 text-sm mb-5">
                  Free in-home estimate · No pressure · Licensed &amp; Insured
                </p>

                {/* Big pulsing phone button */}
                <a
                  href={COMPANY.phoneHref}
                  className="relative group flex items-center justify-center gap-3 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold py-5 px-6 rounded-xl text-2xl transition-all shadow-xl shadow-[#D4922A]/30 hover:shadow-[#D4922A]/50 hover:-translate-y-0.5 mb-2"
                  aria-label={`Call ${COMPANY.name} at ${COMPANY.phone}`}
                >
                  <span className="absolute inset-0 rounded-xl animate-ping bg-[#D4922A]/20 pointer-events-none" />
                  <Phone size={28} className="relative shrink-0" />
                  <span className="relative">{COMPANY.phone}</span>
                </a>

                <p className="text-gray-400 text-xs mb-5">⚡ Average response: under 2 minutes</p>

                {/* Google stars */}
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4922A] text-[#D4922A]" />
                  ))}
                  <span className="text-sm font-semibold text-[#1B2B4B] ml-1.5">{COMPANY.rating}</span>
                </div>
                <p className="text-gray-400 text-xs">{COMPANY.reviewCount}+ verified Google reviews</p>
              </div>

              {/* Review quote */}
              <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                <blockquote className="text-gray-600 text-sm leading-relaxed italic text-center">
                  "They repainted our whole house and refinished the kitchen cabinets — stunning results. Locally based right here in Deltona and it shows."
                </blockquote>
                <p className="text-xs text-gray-400 mt-1.5 text-center">— Maria R., Deltona, FL</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Projects Done" },
                { value: "10+",  label: "Yrs Experience" },
                { value: "20+",  label: "Cities Served" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-xl p-3 text-center">
                  <p className="font-accent text-xl font-bold text-[#D4922A]">{value}</p>
                  <p className="text-white/70 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-[4]" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none" height="40">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
