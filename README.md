# Shivansh Tiwari — Portfolio

A single-page developer portfolio with a clean, modern-SaaS feel — Privoraa-inspired:
indigo/violet accent on deep navy, Inter + Orbitron type, soft rounded cards, generous
space, and tasteful motion. Light/dark follows your operating-system preference
automatically.

🔗 **Live:** https://portfolioshivansh-gamma.vercel.app/

**Stack:** React 18 · Vite 5 · TypeScript · vanilla CSS (no framework) · lucide-react

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build    # type-checks (tsc --noEmit), then outputs to /dist
npm run preview  # preview the built site
```

---

## Update your content (the only file you need)

Everything — summary, skills, experience, projects, achievements, links — lives in:

```
src/data/content.ts
```

Edit that file and the whole site updates. No component changes needed.

- **Add a project:** push a new object into the `projects` array (set `status: "live"` to make its dot pulse).
- **Add a job:** push into `experience` (set `status: "running"` to make it pulse live).
- **Change skills:** edit the `stack` layers — they drive both the Stack section and the marquee.

The three "What I do" cards and the hero sub-line are written inline in
`src/components/Features.tsx` and `src/components/Hero.tsx`.

---

## Theming

Light is the `:root` default; the dark palette lives in a
`@media (prefers-color-scheme: dark)` block in `src/index.css`, so the site matches
the OS theme with **zero JavaScript** and switches live if you change it. All colours
are CSS variables (`--color-primary`, `--color-bg`, `--color-accent-fg`, …) — change
them in one place to re-skin everything.

---

## Animations

All GPU-friendly (transform/opacity/filter) and disabled under
`prefers-reduced-motion`:

- Scroll progress bar, blur-in scroll reveals, count-up hero stats
- Cursor spotlight + 3D tilt on cards, magnetic CTA buttons, global cursor glow
- Animated gradient headline, button sheen sweep, pulsing live dots
- Floating hero icon, drifting aurora background, infinite tech marquee, nav underlines

---

## SEO

- Rich meta + Open Graph + Twitter cards and **JSON-LD** (`Person` + `WebSite`) in `index.html`
- `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `public/og-image.svg`
- The live domain is referenced in `index.html`, `robots.txt` and `sitemap.xml` — update all
  three if the deploy URL changes, then submit the sitemap in Google Search Console.

---

## Project structure

```
index.html               # SEO head (meta, OG, JSON-LD), fonts, theme-color
public/                   # robots.txt, sitemap.xml, site.webmanifest, og-image.svg, favicon
src/
├── main.tsx              # React entry
├── App.tsx               # page composition + card/magnetic cursor effects
├── index.css             # full vanilla-CSS design system (tokens, components, animations)
├── data/content.ts       # ← edit this to update everything
└── components/
    ├── ScrollProgress.tsx · CursorGlow.tsx   # global motion
    ├── Header.tsx · Footer.tsx
    ├── Hero.tsx · Marquee.tsx
    ├── Features.tsx · Stack.tsx · Experience.tsx · Projects.tsx · Extras.tsx · Contact.tsx
    ├── Reveal.tsx · CountUp.tsx               # scroll/animation helpers
```
