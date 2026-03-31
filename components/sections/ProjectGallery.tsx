import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Static imports — Next.js auto-detects dimensions & generates blur placeholder
import imgInterior from "@/public/gallery/home-renovation-interior-central-florida.webp"
import imgCollage from "@/public/gallery/home-renovation-project-collage-central-florida.webp"
import imgBathInsulation from "@/public/gallery/bathroom-insulation-rough-in-renovation-orlando.webp"
import imgExteriorArch from "@/public/gallery/home-exterior-renovation-stucco-arched-entry-orlando.webp"
import imgRoomDrywall from "@/public/gallery/room-addition-drywall-installation-central-florida.webp"
import imgExteriorGarage from "@/public/gallery/florida-home-exterior-renovation-painted-brick-garage.webp"
import imgCloset from "@/public/gallery/custom-closet-shelving-installation-orlando.webp"
import imgBathDemo from "@/public/gallery/bathroom-gut-renovation-demo-orlando-fl.webp"
import imgSlidingDoor from "@/public/gallery/sliding-glass-door-installation-central-florida.webp"
import imgDoorTrim from "@/public/gallery/contractor-door-trim-installation-painting-orlando.webp"

interface Project {
  label: string
  location: string
  src: StaticImageData
  alt: string
  objectPos?: string
  priority: boolean
}

const PROJECTS: Project[] = [
  {
    label: "Interior Living Room Renovation",
    location: "Orlando, FL",
    src: imgInterior,
    alt: "Completed interior living room renovation with fireplace, built-in shelving and recessed lighting — Central Florida Renovations Orlando FL",
    objectPos: "object-center",
    priority: true,
  },
  {
    label: "Kitchen & Home Remodel Collage",
    location: "Orlando, FL",
    src: imgCollage,
    alt: "Kitchen remodel and home renovation project collage showing before and after — Central Florida Renovations Orlando FL",
    objectPos: "object-center",
    priority: true,
  },
  {
    label: "Master Bath Renovation",
    location: "Winter Park, FL",
    src: imgBathInsulation,
    alt: "Master bathroom renovation with new insulation, rough-in plumbing and window — Orlando FL contractor",
    objectPos: "object-top",
    priority: true,
  },
  {
    label: "Home Exterior Remodel",
    location: "Kissimmee, FL",
    src: imgExteriorArch,
    alt: "Home exterior renovation with painted stucco, arched entry and landscaping — Central Florida Renovations",
    objectPos: "object-center",
    priority: false,
  },
  {
    label: "Room Addition & Drywall",
    location: "Lake Mary, FL",
    src: imgRoomDrywall,
    alt: "Room addition with drywall and coffered ceiling framing installation — Central Florida",
    objectPos: "object-top",
    priority: false,
  },
  {
    label: "Exterior Paint & Brick",
    location: "Oviedo, FL",
    src: imgExteriorGarage,
    alt: "Florida home exterior renovation with painted brick and two-car garage — Central Florida Renovations",
    objectPos: "object-center",
    priority: false,
  },
  {
    label: "Custom Closet Install",
    location: "Sanford, FL",
    src: imgCloset,
    alt: "Custom closet shelving and hanging rod installation — Orlando FL home renovation",
    objectPos: "object-top",
    priority: false,
  },
  {
    label: "Bathroom Gut & Demo",
    location: "Orlando, FL",
    src: imgBathDemo,
    alt: "Bathroom gut renovation demolition showing exposed studs and bathtub — Orlando FL",
    objectPos: "object-top",
    priority: false,
  },
  {
    label: "Sliding Door Installation",
    location: "Winter Garden, FL",
    src: imgSlidingDoor,
    alt: "Black sliding glass door installation in progress — Central Florida home renovation",
    objectPos: "object-center",
    priority: false,
  },
  {
    label: "Front Door & Trim Work",
    location: "Altamonte Springs, FL",
    src: imgDoorTrim,
    alt: "Contractor installing and painting front door trim on ladder — Central Florida Renovations",
    objectPos: "object-top",
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
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2
              id="gallery-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white mt-1"
            >
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
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer bg-[#1B2B4B]"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover ${project.objectPos ?? "object-center"} group-hover:scale-105 transition-transform duration-500`}
                placeholder="blur"
                priority={project.priority}
                loading={project.priority ? undefined : "lazy"}
              />
              {/* Gradient overlay — readable text without hiding the photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-display font-bold text-base leading-tight">
                  {project.label}
                </p>
                <p className="text-[#D4922A] text-sm mt-0.5">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
