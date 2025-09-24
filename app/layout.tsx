import type { Metadata, Viewport } from "next";
import React from "react";
import Providers from "./providers";
import { siteConfig } from "@/config/config";
import "@/styles/globals.css";

/**
 * Site-wide metadata for SEO/social.
 * Keep viewport OUT of this object in Next.js 15+.
 */
export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL(siteConfig.meta.url),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.url,
    images: [{ url: siteConfig.meta.ogImage }],
    siteName: siteConfig.meta.title,
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { url: "/W1_logo_192.png" },
    { url: "/W1_logo_512.png" },
  ],
  manifest: "/manifest.webmanifest",
};

/** Viewport must be exported separately */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3D91",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Extensions may inject attributes; suppress to avoid hydration warnings */}
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

