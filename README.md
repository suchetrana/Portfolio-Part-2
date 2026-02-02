# Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS 4.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light mode)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API routes
│   │   │   └── contact/        # Contact form endpoint
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── navbar.tsx      # Navigation bar
│   │   │   └── footer.tsx      # Site footer
│   │   ├── sections/           # Page sections
│   │   │   ├── hero.tsx        # Hero section
│   │   │   ├── about.tsx       # About section
│   │   │   ├── skills.tsx      # Skills section
│   │   │   ├── projects.tsx    # Projects section
│   │   │   └── contact.tsx     # Contact form
│   │   ├── ui/                 # Reusable UI components
│   │   │   └── project-card.tsx
│   │   └── providers/          # Context providers
│   │       └── theme-provider.tsx
│   ├── lib/                    # Utilities
│   │   └── utils.ts            # Helper functions
│   └── types/                  # TypeScript types
│       └── index.ts
├── public/                     # Static assets
│   ├── projects/               # Project images
│   ├── images/                 # General images
│   └── assets/                 # CV/PDF files
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Customization

### Personal Information
- Update metadata in `src/app/layout.tsx`
- Edit content in section components under `src/components/sections/`
- Replace placeholder links in `navbar.tsx` and `footer.tsx`

### Projects
- Edit the `projects` array in `src/components/sections/projects.tsx`
- Add project images to `public/projects/`

### Skills
- Modify `skillCategories` in `src/components/sections/skills.tsx`

### Styling
- CSS variables are defined in `src/app/globals.css`
- Customize colors, fonts, and theme values

### Contact Form
- Set up SMTP credentials in `.env.local`
- Uncomment email sending code in `src/app/api/contact/route.ts`

## 🚀 Deployment

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) for the best Next.js experience.

## 📄 License

MIT License - feel free to use this for your own portfolio!
