import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Export to /out for Firebase Hosting
  output: "export",

  // Skip ESLint during production build (we’ll fix types later)
  eslint: { ignoreDuringBuilds: true },

  experimental: {
    optimizePackageImports: ["framer-motion", "zustand", "@headlessui/react"],
  },

  // Remove custom headers for static export to avoid warnings
  // (Firebase Hosting will handle caching headers from firebase.json)
};

export default nextConfig;

