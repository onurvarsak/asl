import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/asl",
  assetPrefix: "/asl/",
  images: { unoptimized: true } // GitHub Pages için önemli
}

export default nextConfig
