// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tells Next to generate /out at build time (replaces `next export`)
  output: "export",

  // Keep dev fast; we already switched CI to skip lint/type checks
  experimental: {
    optimizePackageImports: ["framer-motion", "zustand", "@headlessui/react"],
  },

  images: { unoptimized: true }, // recommended for static export
};

export default nextConfig;

