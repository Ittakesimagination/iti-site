// Firebase v9+ modular initialization (v12 compatible) with safe browser-only analytics

import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Replace with your actual config or env vars
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "",
};

export const app: FirebaseApp =
  getApps().length ? getApp() : initializeApp(firebaseConfig);

// Optional: lazy init analytics only in the browser and only if supported
let analyticsInitPromise: Promise<void> | null = null;
export function initAnalyticsLazy() {
  if (analyticsInitPromise || typeof window === "undefined") return;
  analyticsInitPromise = isSupported().then((ok) => {
    if (ok) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const analyticsInstance = getAnalytics(app);
      // You can export or use analyticsInstance as needed.
    }
  });
}

