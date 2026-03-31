"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Star, Shield, CheckCircle, Clock, Play } from "lucide-react"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import imgInterior from "@/public/gallery/home-renovation-interior-central-florida.webp"

const HERO_VIDEO = "/videos/central-florida-home-renovation-hero-orlando-fl.mp4"
const HERO_POSTER = "/gallery/home-renovation-interior-central-florida.webp"

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
      aria-label="Central Florida Renovations — Home Renovation Contractor Orlando FL"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* ── Layer 1: Dark gradient base (always visible / mobile fallback) ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0A1628 0%, #1B2B4B 40%, #12223A 70%, #0F1923 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 2: Background video — desktop only, hidden on mobile to save bandwidth ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[1] hidden lg:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER}
        aria-hidden="true"
        itemProp="video"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* ── Layer 3: Dark overlay — keeps text readable over video ── */}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-r from-black/80 via-black/60 to-black/40 hidden lg:block"
        aria-hidden="true"
      />

      {/* ── Layer 4: Decorative accent shapes (sit above overlay) ── */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #D4922A 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2D4A7A 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Layer 5: All content ── */}
      <div className="relative z-[4] max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — main copy */}
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
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg border border-white/25 hover:border-white/50 transition-all duration-200"
                itemProp="telephone"
              >
                <Phone size={20} className="text-[#D4922A]" />
                {COMPANY.phone}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: CheckCircle, text: "Free Estimate" },
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "24/7 Available" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Icon size={14} className="text-[#D4922A]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — video card + social proof (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* ── Video showcase card ── */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-black">
              {/* Poster image shown while video buffering */}
              <div className="relative h-[240px]">
                <Image
                  src={imgInterior}
                  alt="Home renovation completed — interior living room with fireplace by Central Florida Renovations Orlando FL"
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  placeholder="blur"
                  itemProp="image"
                />
                {/* Video plays inline on hover/interaction via the real video tag below */}
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                >
                  <source src={HERO_VIDEO} type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Play badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4922A]/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play size={22} className="text-white ml-1" fill="white" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 z-10">
                  <span className="inline-block bg-[#D4922A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-1">
                    ✓ Real Project
                  </span>
                  <p className="text-white font-semibold text-sm leading-tight">
                    Central Florida Renovation — See Our Work
                  </p>
                  <p className="text-[#D4922A] text-xs">Orlando, FL · Central Florida Renovations</p>
                </div>
              </div>
            </div>

            {/* Google Reviews card */}
            <div className="bg-white rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 shrink-0">
                  <span className="font-bold text-base" style={{ color: "#4285F4" }}>G</span>
                </div>
                <div>
                  <p className="font-bold text-[#1B2B4B] text-sm">Google Reviews</p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#D4922A] text-[#D4922A]" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      {COMPANY.rating} · {COMPANY.reviewCount} reviews
                    </span>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed italic border-l-2 border-[#D4922A] pl-3">
                "S&S FL completely transformed our kitchen. They finished early, stayed on budget,
                and the quality is stunning. Best contractor in Central Florida."
              </blockquote>
              <p className="text-xs text-gray-400 mt-2">— Maria R., Orlando, FL</p>
            </div>

            {/* Stats + Cities row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Projects Done" },
                { value: "10+", label: "Yrs Experience" },
                { value: "24", label: "Cities Served" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur border border-white/15 rounded-xl p-3 text-center"
                >
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
        <svg
          viewBox="0 0 1440 60"
          className="w-full fill-white"
          preserveAspectRatio="none"
          height="40"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
