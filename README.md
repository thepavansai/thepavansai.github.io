# G. Pavan Sai Sriram — Portfolio

An editorial, high-contrast monochrome portfolio site engineered for **G. Pavan Sai Sriram** ([@thepavansai](https://github.com/thepavansai)).

Live at: **[pavansai.is-a.dev](https://pavansai.is-a.dev/)**

---

## Overview & Philosophy

Built with an editorial magazine aesthetic inspired by high-end design archives (Awwwards, Toools, and Swiss typography). Designed with a focus on systems architecture, deterministic state routing, and typography rather than generic templates.

- **Monochrome & High Contrast:** Pure light (`#FAFAFA`) and dark (`#0D0D0D`) themes with custom CSS variables and glassmorphism nav capsules.
- **Architectural Visualizations:** Real-time canvas-based distributed systems topology graph with dynamic request routing and node health telemetry.
- **Responsive Architecture:** Clean desktop navigation pill with dedicated mobile drawer menu and zero layout shift.
- **Performance:** Sub-second First Contentful Paint with Vite and optimized WebGL/Canvas pipelines.

---

## System Architecture

```
portfolio/
├── .github/workflows/
│   └── deploy.yml          # Automated Vite build & GitHub Pages deployment
├── public/
│   ├── CNAME               # Custom domain configuration (pavansai.is-a.dev)
│   ├── favicon.svg         # Architectural monogram favicon
│   └── projects/           # High-resolution project previews & assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Capsule navigation with mobile drawer & theme switcher
│   │   ├── Hero.jsx        # Editorial headline with live system topology visualizer
│   │   ├── HeroVisual.jsx  # Canvas-based distributed node network simulation
│   │   ├── About.jsx       # Systems philosophy, timeline, and writing index
│   │   ├── Projects.jsx    # Engineering showcases with interactive architecture specs
│   │   ├── Skills.jsx      # Career timeline, tech competencies, and verified credentials
│   │   ├── Contact.jsx     # Live Hyderabad (IST) clock and PGP/secure inquiry channels
│   │   ├── Footer.jsx      # Minimalist editorial footer
│   │   └── ScrambleText.jsx# Kinetic typographic matrix reveal
│   ├── context/
│   │   └── ThemeContext.jsx# Dark/light mode persistence via localStorage
│   ├── App.jsx             # Root layout with custom cursor
│   ├── index.css           # Global typography, CSS design tokens, and layout utilities
│   └── main.jsx            # Application entrypoint
├── index.html              # HTML shell with meta tags and OpenGraph headers
└── vite.config.js          # Vite build pipeline with Tailwind CSS v4 plugin
```

---

## Featured Engineering Projects

1. **[Change Impact Analyzer](https://github.com/thepavansai/change-impact-analyzer)**
   - AST-based static dependency analysis for Java repositories.
   - Computes deterministic diff blast-radii to optimize test execution cycles.
2. **[Cric-Auction System](https://github.com/thepavansai/cric-auction)**
   - Real-time multiplayer auction engine with sub-50ms bids synchronization.
   - Event-driven WebSocket architecture with optimistic UI reconciliation.
3. **[Ascendant Backend](https://github.com/thepavansai/ascendant-backend)**
   - Distributed microservices platform built for high concurrency.
   - Scalable auth, rate limiting, and structured logging.
4. **[HealthNest](https://github.com/thepavansai/HealthNest)**
   - Secure digital healthcare portal with appointment booking and prescription history.
5. **[MicroCM](https://github.com/thepavansai/microcm)**
   - Minimalist, embeddable configuration management engine.

---

## Tech Stack

- **Core:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Typography:** [Framer Motion](https://www.framer.com/motion/), Custom Canvas Visualizers
- **Icons:** [React Icons (Feather)](https://react-icons.github.io/react-icons/)
- **Deployment:** [GitHub Actions](https://github.com/features/actions) → [GitHub Pages](https://pages.github.com/)

---

## Local Development

### Prerequisites
- Node.js 20+
- npm 10+

### Setup
```bash
# Clone the repository
git clone git@github.com:thepavansai/thepavansai.github.io.git
cd thepavansai.github.io

# Switch to active branch
git checkout nova

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Build optimized static distribution
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment Pipeline

Deployment is fully automated using GitHub Actions (`.github/workflows/deploy.yml`):

1. Pushes to the `nova` branch trigger the CI/CD pipeline.
2. Dependencies are installed cleanly via `npm ci`.
3. Vite compiles production assets into `./dist` (including `dist/CNAME`).
4. The artifact is deployed directly to GitHub Pages with HTTPS enforcement at `https://pavansai.is-a.dev/`.

---

## Contact

- **Domain:** [pavansai.is-a.dev](https://pavansai.is-a.dev/)
- **GitHub:** [@thepavansai](https://github.com/thepavansai)
- **LinkedIn:** [in/thepavansai](https://www.linkedin.com/in/thepavansai)
- **Email:** `thepavansai@duck.com`
