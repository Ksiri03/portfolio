# Siri Vennela Kammari — Portfolio

## Project Overview
Next.js 15 portfolio website for an AI Engineer.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (CSS-based config, no tailwind.config)
- Framer Motion
- next-themes (dark/light mode)

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — serve production build

## Architecture
- `src/app/` — Next.js App Router pages
- `src/components/sections/` — page sections (Hero, About, Skills, etc.)
- `src/components/ui/` — reusable UI components
- `src/components/layout/` — Navbar, Footer
- `src/components/providers/` — ThemeProvider
- `src/hooks/` — custom React hooks
- `src/lib/` — constants, utilities, **central config**

## Central Configuration
All personal info, links, and social URLs are in `src/lib/config.ts`.
Edit that ONE file to update everything across the site.

## Theme
- Light: #FAF9F6 bg, #1A1A1A text, #8B7355 accent
- Dark: #0A0A0A bg, #F5F5F5 text, #B8A088 accent

## Notes
- GitHub/LinkedIn icons are custom SVGs in `src/components/ui/Icons.tsx` (lucide-react removed them)
- All sections use `"use client"` for Framer Motion animations
- Command palette: Ctrl+K
- Contact form uses Formspree — set endpoint in `src/lib/config.ts`
- Profile image: `public/images/profile.jpg`
- Resume: `public/resume/Siri_Vennela_Kammari_Resume.pdf`
