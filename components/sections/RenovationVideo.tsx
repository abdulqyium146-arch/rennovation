import Script from "next/script"

interface RenovationVideoProps {
  title?: string
  subtitle?: string
}

const VIDEO_SRC = "/videos/home-renovation-contractors-at-work-orlando-fl.mp4"
const VIDEO_THUMBNAIL = "/gallery/home-remodeling-before-after-demo-to-dream-central-florida.webp"
const PAGE_URL = "https://centralfloridarenovations.com/gallery"

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Home Renovation Contractors at Work — Orlando, FL | Central Florida Renovations",
  description:
    "Watch Central Florida Renovations' expert contractors in action — bathroom remodels, drywall installation, exterior work, and whole-home renovations across Orlando and Central Florida.",
  thumbnailUrl: `https://centralfloridarenovations.com${VIDEO_THUMBNAIL}`,
  contentUrl: `https://centralfloridarenovations.com${VIDEO_SRC}`,
  uploadDate: "2026-03-27T00:00:00.000Z",
  duration: "PT1M",
  embedUrl: PAGE_URL,
  publisher: {
    "@type": "Organization",
    name: "Central Florida Renovations",
    url: "https://centralfloridarenovations.com",
    logo: {
      "@type": "ImageObject",
      url: "https://centralfloridarenovations.com/icon-512.png",
    },
  },
  inLanguage: "en-US",
  regionsAllowed: "US",
  keywords:
    "home renovation Orlando, bathroom remodel Central Florida, kitchen renovation Orlando FL, contractors Orlando, S&S FL Renovations",
}

export default function RenovationVideo({
  title = "Watch Our Team at Work",
  subtitle = "Real renovation projects across Orlando and Central Florida — from demo to dream.",
}: RenovationVideoProps) {
  return (
    <>
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section
        className="py-20 bg-[#F7F6F2]"
        aria-labelledby="video-section-heading"
        itemScope
        itemType="https://schema.org/VideoObject"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">
              See the Craft
            </span>
            <h2
              id="video-section-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mt-2"
            >
              {title}
            </h2>
            <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* Video container */}
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video
              /* SEO / accessibility */
              title="Home Renovation Contractors at Work — Orlando FL | Central Florida Renovations"
              aria-label="Video showing Central Florida Renovations contractors performing home renovation work in Orlando FL"
              itemProp="contentUrl"
              /* Playback behaviour */
              controls
              playsInline
              preload="none"
              poster={VIDEO_THUMBNAIL}
              /* Performance */
              loading="lazy"
              /* Layout */
              className="w-full aspect-video object-cover"
            >
              <source
                src={VIDEO_SRC}
                type="video/mp4"
              />
              {/* Accessibility fallback */}
              Your browser does not support HTML5 video. Please{" "}
              <a
                href={VIDEO_SRC}
                download
                className="text-[#D4922A] underline"
              >
                download the video
              </a>{" "}
              to watch it.
            </video>
          </div>

          {/* Caption */}
          <p
            className="text-center text-sm text-gray-500 mt-4"
            itemProp="description"
          >
            Central Florida Renovations — Serving Orlando, Kissimmee, Winter Park & surrounding areas.
            Licensed &amp; Insured. Call{" "}
            <a href="tel:+12138416924" className="text-[#D4922A] font-semibold">
              (213) 841-6924
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
