import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/asl",
  assetPrefix: "/asl",
  images: { unoptimized: true }, // GitHub Pages için önemli
  trailingSlash: true, // GitHub Pages için önemli
  env: {
    NEXT_PUBLIC_BASE_PATH: "/asl"
  }
}

export default nextConfig
