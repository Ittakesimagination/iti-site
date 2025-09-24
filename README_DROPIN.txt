DROP-IN INSTRUCTIONS (It Takes Imagination™)

1) Stop your dev server if running (Ctrl + C in Terminal).
2) Unzip this bundle at the ROOT of your Next.js project (same folder as package.json).
   - Allow it to CREATE new folders (app/, components/, config/, lib/, styles/, public/ sw.js).
   - Allow it to OVERWRITE files if asked (next.config.ts, etc.).
3) Ensure your /public contains:
   - manifest.webmanifest
   - W1_logo_192.png
   - W1_logo_512.png
   - favicon.ico (optional)
4) Start dev server again:
   npm run dev
5) Open http://localhost:3000 — you should see the ITI site (Hero, About, Projects, Contact).
6) Test Contact form — it will sign in anonymously and write to Firestore (rules already deployed).

Need help? Ping me with any console errors; I’ll pinpoint fixes fast.
