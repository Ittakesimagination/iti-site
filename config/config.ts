// config/config.ts
import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  meta: {
    title: "It Takes Imagination",
    description: "Truth. Comedy. Craft. Built from a Dumpster and a 
Dream.",
    url: "https://ittakesimagination.lol",
    ogImage: "/W1_logo_512.png",
  },

  hero: {
    heading: "Join The Golden Nut Revolution",
    subheading:
      "Truth. Comedy. Craft. Built from a Dumpster and a Dream.",
    cta: "Watch Clips",
  },

  about: {
    heading: "About the Blueprint",
    body: "I’m The Weil 1™—philosophy meets comedy with a right-leaning 
spine and a maker’s hands. This site is the control room: podcasts, 
shorts, merchandise, and peppermint-powered sprays (cinnamon-free).",
  },

  projects: [
    {
      title: "The Real Weil Ride — Show Hub",
      description:
        "Monologues & roasts: politics, Hollywood, social media. 
#SquirrelSpeaks",
      tags: ["video", "satire", "culture"],
    },
    {
      title: "Judge S.Q.U.I.R.R.E.L.™",
      description:
        "Commander of Botanical Defense Forces™—book a custom roast.",
      tags: ["character", "booking", "roast"],
    },
    {
      title: "Roach Eviction Notice™",
      description:
        "Peppermint-based repellent. Cinnamon-free—family friendly.",
      tags: ["product", "peppermint", "spray"],
    },
    {
      title: "No More Bullshit Excuses™ — Anthem",
      description:
        "Your correction song. Lyrics & download for studio sessions.",
      tags: ["music", "anthem"],
    },
    {
      title: "Infinity Jewelry",
      description: "Made-in-America symbolic pieces—gold acorn core.",
      tags: ["merch", "jewelry"],
    },
    {
      title: "The Nutwork™",
      description:
        "Members-only drops, early access, private prompts, behind the 
scenes.",
      tags: ["community"],
    },
  ],

  contact: {  
    heading: "Contact",  
    subheading: "Questions, roast bookings, or media inquiries",  
    description: "Drop a line and we’ll get back to you. Auth required; 
we’ll sign you in anonymously to protect the inbox.",  
    successMessage: "Thanks! Your message landed. We’ll get back to you.",  
    errorMessage: "Hm, something went sideways. Please try again."  
  },  

  socials: [
    { name: "YouTube", href: "https://youtube.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Rumble", href: "https://rumble.com" },
  ],

  theme: { brand: "#0B3D91", accent: "#C21807" },
};

