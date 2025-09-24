"use client";

import React, { useEffect } from "react";
import { initClientAnalytics, initClientPerformance } from "@/lib/firebase";

/**
 * Global Providers wrapper.
 * Boots optional Firebase Analytics/Performance on the client.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void initClientAnalytics();
    void initClientPerformance();
  }, []);

  return <>{children}</>;
}

