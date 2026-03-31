"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Star, Shield, CheckCircle, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"

interface HeroSectionProps {
  heading: string
  subheading: string
  primaryCTA?: string
  primaryCTAHref?: string
}

export default function HeroSection({
  heading,
  subheading,
  primaryCTA = "Get My Free Estimate",
  primaryCTAHref = "/free-estimate",
}: HeroSectionProps) {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" })

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden"
      aria-label="Hero — S&S FL Renovations"
    >
      {/* CSS gradient background — no missing image dependency */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0A1628 0%, #1B2B4B 40%, #12223A 70%, #0F1923 100%)",
        }}
        aria-hidden="true"
      />

      {/* Animated geometric accent shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4922A 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #2D4A7A 0%, transparent 70%)" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — main content */}
          <div>
            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#D4922A]/15 border border-[#D4922A]/40 text-[#F0B84A] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#D4922A] rounded-full animate-pulse" />
              Now Booking {currentMonth} — Limited Slots Available
            </motion.div>

            {/* H1 — geo-targeted, keyword-rich */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-white leading-[1.12] mb-5"
            >
              {heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              {subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href={primaryCTAHref}
                className="group inline-flex items-center justify-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-2xl shadow-[#D4922A]/30 hover:shadow-[#D4922A]/50 hover:-translate-y-0.5"
              >
                {primaryCTA}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg border border-white/25 hover:border-white/50 transition-all duration-200"
              >
                <Phone size={20} className="text-[#D4922A]" />
                {COMPANY.phone}
              </a>
            </motion.div>

            {/* Quick trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: CheckCircle, text: "Free Estimate" },
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "24-hr Response" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Icon size={14} className="text-[#D4922A]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — featured photo + social proof */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* ── Featured renovation photo (LCP element) ── */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/gallery/home-renovation-interior-central-florida.webp"
                alt="Completed interior home renovation — living room with fireplace, built-in shelving and recessed lighting by Central Florida Renovations, Orlando FL"
                fill
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                itemProp="image"
              />
              {/* Dark scrim — only bottom 30% so photo stays visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* After badge */}
              <span className="absolute top-4 left-4 bg-[#D4922A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide z-10">
                ✓ Completed Project
              </span>
              {/* Caption — bottom only */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 z-10">
                <p className="text-white font-semibold text-sm leading-tight">Interior Living Room Renovation</p>
                <p className="text-[#D4922A] text-xs">Orlando, FL · Central Florida Renovations</p>
              </div>
            </div>

            {/* Google Reviews card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                {/* Google "G" logo */}
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                  <span className="font-bold text-lg" style={{ color: "#4285F4" }}>G</span>
                </div>
                <div>
                  <p className="font-bold text-[#1B2B4B] text-sm">Google Reviews</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-[#D4922A] text-[#D4922A]" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{COMPANY.rating} · {COMPANY.reviewCount} reviews</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed italic border-l-2 border-[#D4922A] pl-3">
                "S&S FL completely transformed our kitchen. They finished early, stayed on budget, and the quality is stunning. Best contractor in Central Florida."
              </blockquote>
              <p className="text-xs text-gray-400 mt-2">— Maria R., Orlando, FL</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Projects Done" },
                { value: "10+", label: "Years Experience" },
                { value: "24", label: "Cities Served" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-xl p-4 text-center">
                  <p className="font-accent text-2xl font-bold text-[#D4922A]">{value}</p>
                  <p className="text-white/70 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Serving cities snippet */}
            <div className="bg-[#1B2B4B]/60 border border-white/10 rounded-xl px-5 py-4">
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">Serving</p>
              <p className="text-white text-sm leading-relaxed">
                Orlando · Kissimmee · Winter Park · Sanford · Lake Mary · Oviedo · Apopka · Clermont · Deltona
                <Link href="/locations" className="text-[#D4922A] hover:text-[#F0B84A] ml-1 text-xs font-semibold transition-colors">
                  +15 more cities →
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none" height="40">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
