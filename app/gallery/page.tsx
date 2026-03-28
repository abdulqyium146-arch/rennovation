import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import ProjectGallery from "@/components/sections/ProjectGallery"

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery — Home Renovations in Central Florida",
  description: "Browse our portfolio of completed kitchen, bathroom, outdoor & whole-home renovations across Orlando and Central Florida. 500+ projects completed.",
  slug: "gallery",
})

export default function GalleryPage() {
  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Gallery", href: "/gallery" }]} />

      <section className="py-16 bg-[#F7F6F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1B2B4B] mt-2 mb-4">
            Renovation Projects Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore before & after photos from 500+ completed renovation projects across Orlando, Kissimmee, Winter Park and all of Central Florida.
          </p>
        </div>
      </section>

      <ProjectGallery title="Featured Projects" showAll />
      <CTASection
        title="Love What You See?"
        subtitle="Let's build something amazing for your home. Get your free estimate today."
      />
    </>
  )
}
