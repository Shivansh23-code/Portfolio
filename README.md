# Shivansh Tiwari — Portfolio (Frontend)

A backend-engineer's portfolio with a clean, modern-SaaS feel — deep-navy dark mode
with an indigo/violet accent and a teal→cyan logo gradient, plus a full **light mode**
you can toggle (preference is remembered). Friendly geometric type, soft rounded cards,
generous space. Inspired by Privoraa / Linear / Stripe.

**Stack:** React 18 · Vite 5 · TypeScript · React Router 6 · Tailwind CSS v4 · Framer Motion · lucide-react

This is a **multi-page app** (client-side routing), not a single scroll:
`/` home · `/about` · `/stack` · `/experience` · `/work` · `/extras` · `/contact`.
Pages animate in/out, scroll resets on navigation, and `vercel.json` rewrites
deep links so a refresh on `/work` doesn't 404.

> `npm install` pulls everything including React Router — there is nothing else to install.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build    # type-checks, then outputs to /dist
npm run preview  # preview the built site
```

---

## Update your content (the only file you need)

Everything — summary, skills, experience, projects, achievements, links — lives in:

```
src/data/content.ts
```

Edit that file and the whole site updates. No component changes needed.

- **Add a project:** push a new object into the `projects` array.
- **Add a job:** push into `experience` (set `status: "running"` to make it pulse live).
- **Change the uptime start date:** `profile.careerStart`.
- **Enable the résumé button:** drop your PDF in `/public` and point `contact.resumeUrl` at it.

---

## Backend hook (Phase 2)

The contact form posts to `${VITE_API_URL}/api/contact` when `VITE_API_URL` is set
(see `.env.example`). Until then it falls back to opening your mail client — so it
works today, and goes live the moment the Spring Boot backend is wired up.

---

## Changing the accent color (one line)

Open `src/index.css`. Near the top, change `--color-signal` (and `--color-signal-dim`).
A handful of ready-made company-style presets are listed right below it as comments
(Vercel blue, Stripe indigo, GitHub green, Apple blue) — paste one over the active lines.

---

## Accessibility / performance notes

- Respects `prefers-reduced-motion` (reveals, count-ups, and the live dot all calm down).
- Background is a single static layer (faded grid + soft glow) — no canvas, no loops, cheap to render.
- Fully responsive from ~320px phones to ultrawide/4K: fluid headline via `clamp()`,
  content capped and centered (`max-w-6xl`), spacing that scales by breakpoint.

---

## Project structure

```
src/
├── App.tsx              # routes + page transitions
├── main.tsx             # BrowserRouter entry
├── data/content.ts      # ← edit this to update everything
├── index.css            # tokens, light/dark themes, buttons (Tailwind v4 @theme)
├── pages/               # one file per route (Home, About, Stack, …)
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── StackPage.tsx
│   ├── ExperiencePage.tsx
│   ├── WorkPage.tsx
│   ├── ExtrasPage.tsx
│   └── ContactPage.tsx
└── components/
    ├── Background.tsx    # static grid + glow layer
    ├── Navbar.tsx        # routed nav + theme toggle
    ├── Footer.tsx        # page map + social
    ├── ThemeToggle.tsx   # light / dark switch (persists)
    ├── ScrollToTop.tsx   # reset scroll on route change
    ├── PageTransition.tsx# shared page entrance + nav clearance
    ├── Highlights.tsx    # home "explore" cards
    ├── Hero.tsx
    ├── About.tsx · Stack.tsx · Experience.tsx
    ├── Work.tsx · Extras.tsx · Contact.tsx
    └── ui/primitives.tsx
```
