"use client"

import { useRef, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Phone, ArrowRight, Star, Shield, CheckCircle,
  Clock, Play, Pause, Volume2, VolumeX,
} from "lucide-react"
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

  // ── Background video (desktop full-bleed) ──────────────────────────────
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const [bgMuted, setBgMuted] = useState(true)

  const toggleBgMute = useCallback(() => {
    if (!bgVideoRef.current) return
    const next = !bgMuted
    bgVideoRef.current.muted = next
    bgVideoRef.current.volume = next ? 0 : 0.6
    setBgMuted(next)
  }, [bgMuted])

  // ── Card video (mobile + desktop right column) ─────────────────────────
  const cardVideoRef = useRef<HTMLVideoElement>(null)
  const [cardPlaying, setCardPlaying] = useState(false)
  const [cardMuted, setCardMuted] = useState(false)

  const toggleCardPlay = useCallback(() => {
    if (!cardVideoRef.current) return
    if (cardPlaying) {
      cardVideoRef.current.pause()
      setCardPlaying(false)
    } else {
      cardVideoRef.current.muted = false   // play with sound
      cardVideoRef.current.volume = 0.8
      cardVideoRef.current.play()
      setCardPlaying(true)
    }
  }, [cardPlaying])

  const toggleCardMute = useCallback(() => {
    if (!cardVideoRef.current) return
    const next = !cardMuted
    cardVideoRef.current.muted = next
    cardVideoRef.current.volume = next ? 0 : 0.8
    setCardMuted(next)
  }, [cardMuted])

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden"
      aria-label="S&S FL Renovations — Renovation & Painting Contractor Deltona FL"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* ── Layer 1: Dark gradient base (mobile + before video loads) ─── */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg,#0A1628 0%,#1B2B4B 40%,#12223A 70%,#0F1923 100%)" }}
        aria-hidden="true"
      />

      {/* ── Layer 2: Background video — desktop only ──────────────────── */}
      <video
        ref={bgVideoRef}
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

      {/* ── Layer 3: Dark overlay for text readability ────────────────── */}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-r from-black/85 via-black/65 to-black/40 hidden lg:block"
        aria-hidden="true"
      />

      {/* ── Layer 4: Accent glows ────────────────────────────────────── */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#D4922A 0%,transparent 70%)" }} />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle,#2D4A7A 0%,transparent 70%)" }} />
      </div>

      {/* ── Background video mute toggle (desktop only) ───────────────── */}
      <button
        onClick={toggleBgMute}
        aria-label={bgMuted ? "Unmute background video" : "Mute background video"}
        className="absolute bottom-14 right-5 z-[5] hidden lg:flex items-center gap-1.5 bg-black/40 hover:bg-black/60 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20 transition-colors"
      >
        {bgMuted
          ? <VolumeX size={13} className="text-[#D4922A]" />
          : <Volume2 size={13} className="text-[#D4922A]" />
        }
        <span>{bgMuted ? "Unmute" : "Mute"}</span>
      </button>

      {/* ── Layer 5: All content ─────────────────────────────────────── */}
      <div className="relative z-[4] max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT — main copy */}
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

          {/* RIGHT — video card (ALL screen sizes) + reviews/stats (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* ── Interactive video card ─────────────────────────────── */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
              aria-label="Renovation project video"
            >
              {/* Poster image (visible before play) */}
              <div className="relative aspect-video">
                {!cardPlaying && (
                  <Image
                    src={imgInterior}
                    alt="Home renovation completed by S&S FL Renovations — interior renovation and painting Deltona FL"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    placeholder="blur"
                    itemProp="image"
                  />
                )}

                {/* Actual video element */}
                <video
                  ref={cardVideoRef}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    cardPlaying ? "opacity-100" : "opacity-0"
                  }`}
                  playsInline
                  preload="metadata"
                  poster={HERO_POSTER}
                  onEnded={() => setCardPlaying(false)}
                  title="Deltona FL home renovation and painting — S&S FL Renovations"
                  aria-label="Video showing S&S FL Renovations contractors at work in Deltona FL — renovation and painting across Volusia County"
                  itemProp="contentUrl"
                >
                  <source src={HERO_VIDEO} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                {/* Dark scrim — bottom only */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Centre play / pause button */}
                <button
                  onClick={toggleCardPlay}
                  aria-label={cardPlaying ? "Pause renovation video" : "Play renovation video"}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#D4922A] hover:bg-[#F0B84A] rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D4922A] focus:ring-offset-2"
                >
                  {cardPlaying
                    ? <Pause size={26} className="text-white" fill="white" />
                    : <Play  size={26} className="text-white ml-1" fill="white" />
                  }
                </button>

                {/* Volume toggle — bottom-right, only visible when playing */}
                {cardPlaying && (
                  <button
                    onClick={toggleCardMute}
                    aria-label={cardMuted ? "Unmute video" : "Mute video"}
                    className="absolute bottom-14 right-3 w-9 h-9 bg-black/60 hover:bg-black/80 backdrop-blur rounded-full flex items-center justify-center border border-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {cardMuted
                      ? <VolumeX size={16} className="text-white" />
                      : <Volume2 size={16} className="text-[#D4922A]" />
                    }
                  </button>
                )}

                {/* Caption bar */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                  <span className="inline-block bg-[#D4922A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-1">
                    ✓ Real Project
                  </span>
                  <p className="text-white font-semibold text-sm leading-tight">
                    Deltona, FL Renovation & Painting — See Our Work
                  </p>
                  <p className="text-[#D4922A] text-xs">
                    Deltona, FL · S&S FL Renovations LLC
                  </p>
                </div>
              </div>
            </div>

            {/* Google Reviews — desktop only */}
            <div className="hidden lg:block bg-white rounded-2xl p-5 shadow-2xl">
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
                "They repainted our whole house and refinished the kitchen cabinets — stunning results. Locally based in Deltona and it shows. They genuinely care about this community."
              </blockquote>
              <p className="text-xs text-gray-400 mt-2">— Maria R., Deltona, FL</p>
            </div>

            {/* Stats — desktop only */}
            <div className="hidden lg:grid grid-cols-3 gap-3">
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
      <div className="absolute bottom-0 left-0 right-0 z-[5]" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none" height="40">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
