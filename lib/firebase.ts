// lib/firebase.ts
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics, isSupported as analyticsSupported, type Analytics } from 
"firebase/analytics";
import { getPerformance, initializePerformance } from "firebase/performance";

/** Read from .env.local */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]!;
}

/** Core exports */
export const auth = getAuth(app);
export const db = getFirestore(app);

/** Optional browser-only instrumentation (safe no-ops on server) */
if (typeof window !== "undefined") {
  // Analytics (gated by isSupported)
  analyticsSupported()
    .then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    })
    .catch(() => {
      /* ignore */
    });

  // Performance (no isSupported export; wrap in try/catch)
  try {
    initializePerformance(app);
    // Optionally: getPerformance(app); // starts performance monitoring
    getPerformance(app);
  } catch {
    /* ignore */
  }
}

