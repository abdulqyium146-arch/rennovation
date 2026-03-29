import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const PROJECTS = [
  {
    label: "Kitchen Remodel",
    location: "Orlando, FL",
    src: "/gallery/home-renovation-project-collage-central-florida.webp",
    alt: "Kitchen remodel and home renovation project collage — Central Florida Renovations Orlando FL",
    priority: true,
  },
  {
    label: "Master Bath Renovation",
    location: "Winter Park, FL",
    src: "/gallery/bathroom-insulation-rough-in-renovation-orlando.webp",
    alt: "Master bathroom renovation rough-in with new insulation and window — Orlando FL contractor",
    priority: true,
  },
  {
    label: "Home Exterior Remodel",
    location: "Kissimmee, FL",
    src: "/gallery/home-exterior-renovation-stucco-arched-entry-orlando.webp",
    alt: "Home exterior renovation with painted stucco and arched entry — Central Florida Renovations",
    priority: true,
  },
  {
    label: "Room Addition & Drywall",
    location: "Lake Mary, FL",
    src: "/gallery/room-addition-drywall-installation-central-florida.webp",
    alt: "Room addition with drywall and coffered ceiling framing installation — Central Florida",
    priority: false,
  },
  {
    label: "Exterior Paint & Brick",
    location: "Oviedo, FL",
    src: "/gallery/florida-home-exterior-renovation-painted-brick-garage.webp",
    alt: "Florida home exterior renovation with painted brick and two-car garage — Central Florida Renovations",
    priority: false,
  },
  {
    label: "Custom Closet Install",
    location: "Sanford, FL",
    src: "/gallery/custom-closet-shelving-installation-orlando.webp",
    alt: "Custom closet shelving and hanging rod installation — Orlando FL home renovation",
    priority: false,
  },
  {
    label: "Bathroom Gut & Demo",
    location: "Orlando, FL",
    src: "/gallery/bathroom-gut-renovation-demo-orlando-fl.webp",
    alt: "Bathroom gut renovation demolition showing exposed studs and bathtub — Orlando FL",
    priority: false,
  },
  {
    label: "Sliding Door Installation",
    location: "Winter Garden, FL",
    src: "/gallery/sliding-glass-door-installation-central-florida.webp",
    alt: "Black sliding glass door installation in progress — Central Florida home renovation",
    priority: false,
  },
  {
    label: "Front Door & Trim Work",
    location: "Altamonte Springs, FL",
    src: "/gallery/contractor-door-trim-installation-painting-orlando.webp",
    alt: "Contractor installing and painting front door trim on ladder — Central Florida Renovations",
    priority: false,
  },
]

interface ProjectGalleryProps {
  title?: string
  showAll?: boolean
}

export default function ProjectGallery({
  title = "Our Recent Projects",
  showAll = false,
}: ProjectGalleryProps) {
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 6)

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
          {displayed.map((project, i) => (
            <div
              key={i}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer bg-[#1B2B4B]"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={project.priority}
                loading={project.priority ? undefined : "lazy"}
              />
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
