"use client";
import React from "react";

/**
 * Global Providers wrapper.
 * Note: Firebase analytics/performance are initialized in lib/firebase.ts
 * on the client side; no need to import/init them here.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

