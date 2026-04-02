import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root so Next.js doesn't pick up a parent-directory lockfile
  outputFileTracingRoot: __dirname,

  // Strip X-Powered-By header — reduces attack surface
  poweredByHeader: false,

  // Enable gzip/brotli response compression
  compress: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Tell crawlers this site is indexable
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Basic referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Redirect www → non-www (canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.centralfloridarenovations.com" }],
        destination: "https://centralfloridarenovations.com/:path*",
        permanent: true,
      },
      // Strip trailing slash from all non-root paths
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
