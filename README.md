# Suchet Rana — Portfolio

> A distinctive, non-generic developer portfolio with a **"Bunker / Technocrat"** aesthetic. Built with Next.js 16, Tailwind CSS 4, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)

---

## ✨ Features

- **Industrial Design System** — Sharp corners, structural grid patterns, monospace typography
- **Safety Orange Accents** — One strong accent color for high-contrast callouts
- **Dark/Light Mode** — Smooth 500ms theme transitions
- **Orchestrated Motion** — Staggered reveals, parallax scrolling, mechanical easings
- **Fully Responsive** — Mobile-first design with desktop enhancements
- **SEO Optimized** — Open Graph, Twitter Cards, JSON-LD ready

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 (OKLCH color spaces) |
| **Animation** | Framer Motion 11 |
| **Icons** | Lucide React |
| **Fonts** | Fraunces (Headings), Outfit (Body), JetBrains Mono (Code) |
| **Theme** | next-themes |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/       # Contact form API route
│   ├── globals.css        # Theme variables & utilities
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage composition
│   └── not-found.tsx      # Custom 404 page
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Skills, Projects, Contact
│   ├── ui/                # Motion wrappers, reusable primitives
│   └── providers/         # ThemeProvider
├── data/
│   └── config.ts          # Site config, projects, skills data
├── lib/
│   └── utils.ts           # cn() helper
└── types/
    └── index.ts           # TypeScript interfaces
```

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/suchetrana/Portfolio-Part-2.git
cd Portfolio-Part-2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## ⚙️ Configuration

### Personal Data
All content is centralized in `src/data/config.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  location: 'Your Location',
  url: 'https://yoursite.com',
};

export const PROJECTS = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description...',
    image: '/images/project.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
  },
];

export const SKILLS = [
  { name: 'React', icon: 'react', category: 'frontend' },
  // ...
];
```

### Theme Colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: oklch(0.96 0.002 85);    /* Light mode */
  --accent: oklch(0.62 0.19 45);         /* Safety Orange */
}

.dark {
  --background: oklch(0.10 0.002 85);    /* Dark mode (Bunker) */
}
```

---

## 📦 Featured Project

### Miles & Smiles V1
Full-stack travel platform with real-time features.

**Tech Stack:**
- Frontend: React 19, Vite, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Redis
- Real-Time: Socket.IO, BullMQ
- DevOps: Docker, Nginx, Jest/Vitest

[View Repository →](https://github.com/udaylol/Miles-and-Smiles-V1)

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 📄 License

MIT © Suchet Rana

---

<p align="center">
  <sub>Designed & Built with precision.</sub>
</p>
