import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["framer-motion", "zustand", "@headlessui/react"],
  },
};

export default nextConfig;

