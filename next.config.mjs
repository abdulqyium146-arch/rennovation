import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root so Next.js doesn't pick up a parent-directory lockfile
  outputFileTracingRoot: __dirname,
}

export default nextConfig
