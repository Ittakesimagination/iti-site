
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported as analyticsSupported, type Analytics } 
from "firebase/analytics";
import { getPerformance, initializePerformance, type Performance } from 
"firebase/performance";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: 
process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

// Singleton app
let app: FirebaseApp;
if (getApps().length) {
  app = getApps()[0]!;
} else {
  app = initializeApp(firebaseConfig);
}

// Core exports used by the app
export const db = getFirestore(app);
export const auth = getAuth(app);

// Client-only helpers (safe to call; no-ops on server)
export async function initClientAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  try {
    const ok = await analyticsSupported();
    if (ok) {
      const analytics = getAnalytics(app);
      return analytics;
    }
  } catch {}
  return null;
}

export async function initClientPerformance(): Promise<Performance | null> 
{
  if (typeof window === "undefined") return null;
  try {
    return getPerformance(app);
  } catch {
    try {
      return initializePerformance(app);
    } catch {
      return null;
    }
  }
}

export default app;

