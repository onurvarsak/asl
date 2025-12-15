import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/asl",
  images: { unoptimized: true }, // GitHub Pages için önemli
  trailingSlash: true // GitHub Pages için önemli
}

export default nextConfig
