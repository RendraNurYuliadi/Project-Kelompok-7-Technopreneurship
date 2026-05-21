# Digisolve Studio — Starter Landing (Vite + React + Tailwind + Framer Motion)

Features:
- React 18 + Vite
- Tailwind CSS (dark mode via class)
- Framer Motion animations
- Responsive, mobile-first layout
- Ambient audio player, floating buttons, WhatsApp quick link

Run:

```bash
npm install
npm run dev
```

This is a starter scaffold for the Digisolve Studio single-page landing. Components are located in `src/components` and designed to be extended.

## Repository & Vercel Deployment

1. Initialize git locally:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a GitHub repository and push:
   ```bash
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
3. Deploy to Vercel:
   - Connect the GitHub repo in the Vercel dashboard.
   - Use build command: `npm run build`
   - Use output directory: `dist`

A `vercel.json` file is included to support this Vite + React static site deployment.
