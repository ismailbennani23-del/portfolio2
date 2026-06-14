# Ismail Bennani — Portfolio

A premium, finance-oriented personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Positioned for internships and entry-level roles in finance, data analytics, business intelligence, accounting operations, consulting, and financial services.

Your photo and résumé are **already wired in** — you can run it and deploy as-is, then customize from there.

---

## ⚡ Quick start (run locally)

> Requires **Node.js 18.17+** (Node 20 LTS recommended). Install Node from https://nodejs.org if you don't have it.

```bash
npm install      # 1. install dependencies
npm run dev      # 2. start the dev server
# 3. open http://localhost:3000
```

Other commands: `npm run build` (production build), `npm run start` (serve the build), `npm run lint`.

---

## 🚀 Publish it for free (recommended: Vercel)

Vercel is the easiest — it's made by the team behind Next.js and needs zero configuration.

**Step by step (first time):**

1. Create a free account at **github.com**, then create a new empty repository (e.g. `portfolio`).
2. Upload this project to that repo. Easiest from your computer:
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   (Or use GitHub Desktop, or drag-and-drop upload on github.com.)
3. Go to **vercel.com**, sign up with your GitHub account.
4. Click **Add New → Project**, choose your `portfolio` repo, and click **Import**.
5. Vercel detects Next.js automatically. Leave everything default and click **Deploy**.
6. In ~2 minutes you get a live link like `https://portfolio-yourname.vercel.app`. Share it!
7. Every time you push a change to GitHub, Vercel redeploys automatically.
8. After you know your final link, open `src/app/layout.tsx` and set `siteUrl` to it (for SEO/preview tags), then push again.

**Netlify** and **GitHub Pages** also work, but Vercel is the smoothest for Next.js — start there.

---

## 🗂 Where things live

```
src/
├── app/
│   ├── layout.tsx        ← fonts + SEO title/description (edit siteUrl after deploy)
│   ├── page.tsx          ← the order sections appear in
│   └── globals.css       ← Tailwind layers + custom styles
├── components/           ← one file per section (Hero, About, Education, Experience,
│   │                       Projects, Skills, Leadership, Resume, Contact, Footer,
│   │                       Navbar) + Reveal (animation) + SectionHeading
└── lib/
    ├── data.ts           ← ★ ALL your text/content lives here — edit this file ★
    └── text.tsx          ← renders **bold** inside copy strings
public/
├── profile.png           ← your headshot (already added)
├── profile-square.jpg    ← square headshot for link previews
└── resume.pdf            ← your résumé (already added)
```

**To change any wording, a date, a metric, a bullet, or a link → open `src/lib/data.ts`.** Everything is there.

---

## 🎨 Design system

**Palette — navy + restrained gold (premium, finance-grade).**

| Token | Hex | Use |
|---|---|---|
| Ink 900 | `#071626` | Hero / dark sections |
| Ink 800 | `#0C2438` | Buttons, card headers |
| Navy | `#0C2236` | Primary text |
| Gold (accent) | `#C9A24B` | The single accent — rings, markers, highlights |
| Brass | `#846B22` | Accent text on light backgrounds |
| Mist | `#F4F6F8` | Alternating section background |
| Line | `#E5E9ED` | Hairline borders |

**Type:** **Newsreader** (serif) for headlines → trust/finance · **Manrope** (sans) for body/UI → modern · **IBM Plex Mono** for metrics, dates, and labels → the data signature.

**Motion:** hero entrance stagger, scroll-reveal per section, hover lift on cards. Respects `prefers-reduced-motion`.

To recolor the accent, change `accent` in `tailwind.config.ts` and the `--accent` value in `src/app/globals.css`.

---

## ✉️ Make the contact form send email

Out of the box, the form opens the visitor's email app pre-filled to your address — so it works immediately. To collect messages directly instead:

1. Go to **formspree.io**, sign up (free), create a form, copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
2. Open `src/components/Contact.tsx` and paste it into `FORMSPREE_ENDPOINT`, replacing `YOUR_FORM_ID`.
3. Done — submissions now arrive in your Formspree inbox and email.

---

## ✍️ Brand copy (reuse on LinkedIn, etc.)

**Tagline:** Finance, with the data to back it up.

**Brand statement:**
> Finance and Data Analytics candidate at Augustana College pairing hands-on accounting and tax experience with the analytical toolkit — Excel, Power BI, SQL, Python, and R — to turn financial and operational data into clear, defensible insight.

**SEO title:** Ismail Bennani — Finance & Data Analytics Candidate

---

## ✅ Customize before you apply (checklist)

- [x] Headshot added (`public/profile.png`)
- [x] Résumé added (`public/resume.pdf`)
- [x] Email + LinkedIn + phone filled in (`src/lib/data.ts`)
- [ ] **Project links** — each project's `link` in `src/lib/data.ts` is `#`. Point them to GitHub repos or short write-ups (or remove the "View project" link if you'd rather not show one yet).
- [ ] **Verify the Business Office start date** — your résumé says "May 2026 – Present" (future-dated). Confirm that's intended.
- [ ] **Connect the contact form to Formspree** (optional — see above).
- [ ] **Deploy and set `siteUrl`** in `src/app/layout.tsx` to your live link.
- [ ] (Optional) Add `og-image.png` (1200×630) for nicer link previews.

---

## 🔧 Make it stronger over time

1. **Project detail pages** — give each project its own page (`/projects/[slug]`) with charts, methodology, and a downloadable write-up. This is the single biggest upgrade for analytics credibility.
2. **A live chart** — render the portfolio project's returns/risk with `recharts` so recruiters see real analysis, not just a description.
3. **GitHub links** — publish the R/Python/Excel projects and link them; it signals you can ship.
4. **Vercel Analytics** — one line to see how many recruiters visit and what they read.
5. **A short "now" line** — keep the About snapshot current (what you're studying / seeking this term).
6. **Testimonials** — a line from a manager at H&R Block or the Business Office adds trust.
7. **Run Lighthouse** in Chrome DevTools and keep Performance/Accessibility/SEO green.

---

Built for Ismail Bennani · Finance & Data Analytics.
