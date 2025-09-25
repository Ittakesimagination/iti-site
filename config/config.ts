import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  meta: {
    title: "It Takes Imagination™",
    description:
      "Driven by a Dream, a Dumpster, & a Damn Good Sense of Humor. The Real Weil Ride, Judge S.Q.U.I.R.R.E.L.™, NMBSE™, and the Roach Eviction Notice™ product line.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ogImage: "/W1_logo_512.png",
    twitter: "@ItTakesImagination"
  },
  socials: [
    { label: "YouTube", href: "https://youtube.com/@ItTakesImagination" },
    { label: "Instagram", href: "https://instagram.com/ittakesimagination" },
    { label: "Rumble", href: "https://rumble.com/c/ItTakesImagination" }
  ],
  hero: {
    kicker: "Join The Golden Nut Revolution",
    headline: "Truth. Comedy. Craft. Built from a Dumpster and a Dream.",
    subhead:
      "The Real Weil Ride, Judge S.Q.U.I.R.R.E.L.™ roasts, the NMBSE™ anthem, and products like Roach Eviction Notice™—all under one roof.",
    ctaLabel: "Watch Clips",
    ctaHref: "#projects"
  },
  about: {
    title: "About the Blueprint",
    body: [
      "I’m The Weil 1™—philosophy meets comedy with a right-leaning spine and a maker’s hands.",
      "This site is the control room: podcasts, shorts, merchandise, and peppermint-powered sprays (cinnamon-free).",
      "Tone spectrum: Backman → Weil 1™ → Judge S.Q.U.I.R.R.E.L.™ Nuclear Roast Mode."
    ]
  },
  projects: {
    title: "Projects & Drops",
    items: [
      {
        id: "real-weil-ride",
        title: "The Real Weil Ride — Show Hub",
        summary: "Monologues & roasts: politics, Hollywood, social media. #SquirrelSpeaks",
        href: "https://youtube.com/@ItTakesImagination",
        tags: ["video", "satire", "culture"]
      },
      {
        id: "judge-squirrel",
        title: "Judge S.Q.U.I.R.R.E.L.™",
        summary: "Commander of Botanical Defense Forces™—book a custom roast.",
        href: "#contact",
        tags: ["character", "booking", "roast"]
      },
      {
        id: "roach-eviction",
        title: "Roach Eviction Notice™",
        summary: "Peppermint-based repellent. Cinnamon-free—family friendly.",
        href: "#",
        tags: ["product", "peppermint", "spray"]
      },
      {
        id: "nmbse-anthem",
        title: "No More Bullshit Excuses™ — Anthem",
        summary: "Your correction song. Lyrics & download for studio sessions.",
        href: "#projects",
        tags: ["music", "anthem"]
      },
      {
        id: "infinity-jewelry",
        title: "Infinity Jewelry",
        summary: "Made-in-America symbolic pieces—gold acorn core.",
        href: "#projects",
        tags: ["merch", "jewelry"]
      },
      {
        id: "nutwork",
        title: "The Nutwork™",
        summary: "Members-only drops, early access, private prompts, behind the scenes.",
        href: "#contact",
        tags: ["community"]
      }
    ]
  },
  contact: {  
    heading: "Contact",  
    subheading: "Questions, roast bookings, or media inquiries",  
    description: "Drop a line and we’ll get back to you. Auth required; we’ll sign you in anonymously to protect the inbox.",  
    successMessage: "Thanks! Your message landed. We’ll get back to you."  
  },  

  theme: { brand: "#0B3D91", accent: "#C21807" }
};

