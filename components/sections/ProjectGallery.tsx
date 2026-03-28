import Link from "next/link"
import { ArrowRight, Camera } from "lucide-react"

const PROJECTS = [
  { label: "Kitchen Remodel", location: "Orlando, FL", category: "kitchen" },
  { label: "Master Bath", location: "Winter Park, FL", category: "bathroom" },
  { label: "Screen Enclosure", location: "Kissimmee, FL", category: "outdoor" },
  { label: "Open Concept Kitchen", location: "Lake Mary, FL", category: "kitchen" },
  { label: "Pool Deck", location: "Oviedo, FL", category: "outdoor" },
  { label: "Flooring", location: "Sanford, FL", category: "flooring" },
]

const CATEGORY_COLORS: Record<string, string> = {
  kitchen: "from-[#1B2B4B] to-[#2D4A7A]",
  bathroom: "from-[#2D4A7A] to-[#1B2B4B]",
  outdoor: "from-[#0F1923] to-[#1B2B4B]",
  flooring: "from-[#1B2B4B] to-[#0F1923]",
}

interface ProjectGalleryProps {
  title?: string
  showAll?: boolean
}

export default function ProjectGallery({
  title = "Our Recent Projects",
  showAll = false,
}: ProjectGalleryProps) {
  return (
    <section className="py-20 bg-[#0F1923]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 id="gallery-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
              {title}
            </h2>
          </div>
          {!showAll && (
            <Link
              href="/gallery"
              className="flex items-center gap-1 text-[#D4922A] font-semibold hover:text-[#F0B84A] transition-colors shrink-0"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`relative h-64 rounded-xl overflow-hidden group cursor-pointer bg-gradient-to-br ${CATEGORY_COLORS[project.category] ?? "from-[#1B2B4B] to-[#0F1923]"}`}
            >
              {/* Placeholder — replace with next/image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity">
                <Camera size={36} className="text-[#D4922A]" />
                <span className="text-white text-xs">Project Photo</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-display font-bold text-lg">{project.label}</p>
                <p className="text-[#D4922A] text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
