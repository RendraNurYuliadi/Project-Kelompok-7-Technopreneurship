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

## 🔔 REMINDER: Form Backend Checklist

**⚠️ CHECK EVERY MONTH:**
- [ ] Verify Getform endpoint working: `https://getform.io/f/lb4s0n3vzd5`
- [ ] Confirm all form fields using Forminit naming (`fi-*` prefix):
  - Contact: `fi-sender-fullName`, `fi-sender-email`, `fi-text-whatsapp`, `fi-text-message`
  - Newsletter: `fi-sender-email`
- [ ] Check hidden field `fi-text-form-type` exists in both forms (Contact & Newsletter)
- [ ] Test form submissions in both Contact & Newsletter components
- [ ] Verify submissions appear in Getform dashboard with correct form-type values

**Files to Check:**
- `src/components/Contact.jsx` — Contact form
- `src/components/Newsletter.jsx` — Newsletter subscription

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
