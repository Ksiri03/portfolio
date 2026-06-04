# Siri Vennela Kammari — AI Engineer Portfolio

A premium, production-ready personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Features a minimalist luxury aesthetic with dark/light mode, smooth animations, command palette, and full accessibility compliance.

**Live:** [sirivennelakammariportfolio.netlify.app](https://sirivennelakammariportfolio.netlify.app)
**GitHub:** [github.com/Ksiri03/portfolio](https://github.com/Ksiri03/portfolio)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Architecture](#architecture)
- [Components](#components)
- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Browser Support](#browser-support)
- [License](#license)

---

## Overview

This portfolio showcases the work and skills of Siri Vennela Kammari, an AI Engineer and Machine Learning enthusiast. It is designed to compete with portfolios of top software engineering and AI candidates, featuring:

- 9 fully animated sections
- Dark/light theme with semantic color tokens
- Command palette (Ctrl+K) for power users
- Real-time skill search and project filtering
- Contact form with Formspree integration
- Canvas-based particle background
- Full WCAG AA accessibility compliance
- SEO optimized with OpenGraph, Twitter cards, sitemap, and robots.txt
- Responsive from 320px to ultrawide displays

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.2.6 | React framework with App Router, SSR, static generation |
| **TypeScript** | 5.x | Type safety, better DX, fewer runtime errors |
| **React** | 19.2.4 | UI library |

### Styling

| Technology | Version | Purpose |
|---|---|---|
| **Tailwind CSS** | 4.x | Utility-first CSS framework (CSS-based config, no tailwind.config) |
| **CSS Custom Properties** | — | Semantic color tokens for theme system |
| **@tailwindcss/postcss** | 4.x | PostCSS integration for Tailwind v4 |

### Animation & Interaction

| Technology | Version | Purpose |
|---|---|---|
| **Framer Motion** | 12.40.0 | Declarative animations, layout transitions, gesture handling |
| **Canvas API** | — | Particle background rendering |
| **IntersectionObserver** | — | Scroll-triggered animations, active section tracking |

### Theming

| Technology | Version | Purpose |
|---|---|---|
| **next-themes** | 0.4.6 | Dark/light mode with localStorage persistence |

### Utilities

| Technology | Version | Purpose |
|---|---|---|
| **clsx** | 2.1.1 | Conditional className joining |
| **tailwind-merge** | 3.6.0 | Intelligent Tailwind class deduplication |
| **lucide-react** | 1.17.0 | Icon library (used for most icons) |

### Forms

| Technology | Purpose |
|---|---|
| **Formspree** | Serverless contact form backend |

### Development

| Tool | Purpose |
|---|---|
| **ESLint** | Code linting with Next.js and accessibility rules |
| **TypeScript Compiler** | Type checking |
| **Turbopack** | Fast bundler (Next.js 16 default) |

---

## Design System

### Design Philosophy

The design follows a **minimalist luxury aesthetic** inspired by Apple, Linear, and Notion. Key principles:

- **Whitespace-first**: Generous padding and margins create breathing room
- **Typography-driven hierarchy**: Font weight and size establish visual order
- **Subtle interactions**: Micro-animations that feel natural, not distracting
- **Consistent spacing**: 4px/8px grid system throughout
- **Muted color palette**: No bright blues, purples, neons, or flashy gradients

### Color Palette

#### Light Theme

| Token | Hex | Usage | WCAG Contrast |
|---|---|---|---|
| `--background` | `#FAF9F6` | Page background (warm off-white) | — |
| `--surface` | `#FFFFFF` | Cards, panels, modals | 1.08:1 on bg |
| `--surface-alt` | `#F5F3EF` | Alternating section backgrounds | 1.05:1 on bg |
| `--foreground` | `#1A1A1A` | Headings, primary text | **15.4:1** on bg ✅ |
| `--foreground-secondary` | `#4B5563` | Body text | **7.5:1** on bg ✅ |
| `--foreground-muted` | `#6B7280` | Captions, hints, placeholders | **4.6:1** on bg ✅ |
| `--accent` | `#8B7355` | Buttons, highlights, links | **4.6:1** on bg ✅ |
| `--accent-foreground` | `#FFFFFF` | Text on accent buttons | **4.6:1** on accent ✅ |
| `--border` | `#E5E5E5` | Borders, dividers | — |
| `--ring` | `rgba(139,115,85,0.3)` | Focus rings | — |

#### Dark Theme

| Token | Hex | Usage | WCAG Contrast |
|---|---|---|---|
| `--background` | `#0A0A0A` | Page background (deep black) | — |
| `--surface` | `#171717` | Cards, panels, modals | 1.18:1 on bg |
| `--surface-alt` | `#1E1E1E` | Alternating section backgrounds | 1.28:1 on bg |
| `--foreground` | `#F5F5F5` | Headings, primary text | **17.4:1** on bg ✅ |
| `--foreground-secondary` | `#D1D5DB` | Body text | **13.5:1** on bg ✅ |
| `--foreground-muted` | `#9CA3AF` | Captions, hints, placeholders | **6.9:1** on bg ✅ |
| `--accent` | `#B8A088` | Buttons, highlights, links | **7.5:1** on bg ✅ |
| `--accent-foreground` | `#0A0A0A` | Text on accent buttons | **7.5:1** on accent ✅ |
| `--border` | `#2A2A2A` | Borders, dividers | — |
| `--ring` | `rgba(184,160,136,0.3)` | Focus rings | — |

All foreground/background pairs meet **WCAG AA** (4.5:1 minimum for normal text).

### Typography

| Element | Font | Weight | Size | Tracking |
|---|---|---|---|---|
| H1 (Name) | Geist Sans | 300 (Light) | 48–84px | Tight |
| H2 (Section) | Geist Sans | 300 (Light) | 30–60px | Tight |
| H3 (Card title) | Geist Sans | 500 (Medium) | 16–20px | Normal |
| Body text | Geist Sans | 400 (Regular) | 14–16px | Normal |
| Caption | Geist Sans | 400 (Regular) | 12px | Wide (uppercase) |
| Code/typing | Geist Mono | 500 (Medium) | 18px | Normal |

### Spacing Scale

Based on a 4px grid: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px`

### Border Radius

| Element | Radius |
|---|---|
| Buttons | `9999px` (full/pill) |
| Cards | `16px` (2xl) |
| Inputs | `12px` (xl) |
| Badges | `9999px` (full) |
| Modals | `16px` (2xl) |

### Shadows

| Level | Usage |
|---|---|
| `shadow-lg` | Card hover state |
| `shadow-2xl` | Profile image, modals |
| No shadow | Default card state (border-only) |

---

## Architecture

### Directory Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg              # Profile photo (user-supplied)
│   ├── projects/
│   │   ├── sentiment.svg             # Project thumbnail
│   │   ├── chatbot.svg
│   │   ├── classifier.svg
│   │   ├── dashboard.svg
│   │   └── portfolio.svg
│   ├── resume/
│   │   └── Siri_Vennela_Kammari_Resume.pdf
│   ├── og-image.svg                  # OpenGraph social preview
│   ├── robots.txt                    # Search engine directives
│   └── sitemap.xml                   # XML sitemap
│
├── src/
│   ├── app/
│   │   ├── globals.css               # Theme tokens, base styles, animations
│   │   ├── layout.tsx                # Root layout, metadata, fonts, ThemeProvider
│   │   ├── page.tsx                  # Main page assembling all sections
│   │   └── not-found.tsx             # Custom 404 page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Fixed nav, active section, mobile menu
│   │   │   └── Footer.tsx            # Social links, copyright, back-to-top
│   │   │
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx      # next-themes wrapper
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Name, title, typing effect, CTA buttons
│   │   │   ├── About.tsx             # Story + animated stat cards
│   │   │   ├── Skills.tsx            # 4 categories + search
│   │   │   ├── Experience.tsx        # Timeline with Viswam.ai internship
│   │   │   ├── Projects.tsx          # Filterable cards + detail modals
│   │   │   ├── Hackathons.tsx        # Horizontal timeline + detail modals
│   │   │   ├── Certifications.tsx    # Animated certificate cards
│   │   │   ├── Achievements.tsx      # Achievement cards with icons
│   │   │   └── Contact.tsx           # Formspree form + social links
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx            # Primary/secondary/ghost variants
│   │       ├── CommandPalette.tsx     # Ctrl+K command palette
│   │       ├── Icons.tsx             # Custom GitHub/LinkedIn SVGs
│   │       ├── LoadingScreen.tsx      # Animated loading spinner
│   │       ├── Particles.tsx         # Canvas particle network
│   │       ├── ProfileImage.tsx      # Circular portrait with fallback
│   │       ├── ScrollProgress.tsx    # Top scroll progress bar
│   │       ├── SectionHeading.tsx    # Reusable section header
│   │       └── ThemeToggle.tsx       # Sun/moon toggle button
│   │
│   ├── hooks/
│   │   └── useTypingEffect.ts        # Typing animation hook
│   │
│   └── lib/
│       ├── config.ts                 # Central config (all links & personal info)
│       ├── constants.ts              # Data: skills, projects, hackathons, etc.
│       └── utils.ts                  # cn() utility (clsx + tailwind-merge)
│
├── .gitignore
├── CLAUDE.md                         # AI assistant context
├── eslint.config.mjs                 # ESLint configuration
├── next.config.ts                    # Next.js configuration
├── package.json
├── postcss.config.mjs                # PostCSS configuration
└── tsconfig.json                     # TypeScript configuration
```

### Data Flow

```
src/lib/config.ts          ← Central config (name, email, links, Formspree)
       ↓
src/lib/constants.ts       ← Imports config, exports typed data arrays
       ↓
src/components/sections/*  ← Import constants, render sections
       ↓
src/app/page.tsx           ← Assembles all sections into the page
       ↓
src/app/layout.tsx         ← Wraps with ThemeProvider, fonts, metadata
```

### Component Architecture

```
RootLayout (layout.tsx)
├── ThemeProvider (next-themes)
│   └── Home (page.tsx)
│       ├── LoadingScreen        ← Shown for 1.8s on load
│       ├── ScrollProgress       ← Fixed top bar, tracks scroll
│       ├── Particles            ← Fixed canvas, z-index 0
│       ├── Navbar               ← Fixed header, z-index 50
│       ├── main (z-index 10)
│       │   ├── Hero (#hero)
│       │   ├── About (#about)
│       │   ├── Skills (#skills)
│       │   ├── Experience (#experience)
│       │   ├── Projects (#projects)
│       │   ├── Hackathons (#hackathons)
│       │   ├── Certifications (#certifications)
│       │   ├── Achievements (#achievements)
│       │   └── Contact (#contact)
│       ├── Footer
│       └── CommandPalette       ← Fixed, z-index 150
```

---

## Components

### Layout Components

#### Navbar (`src/components/layout/Navbar.tsx`)

- **Position**: Fixed top, full width
- **Background**: Transparent when at top, `bg-background/80 backdrop-blur-xl` when scrolled
- **Active section**: IntersectionObserver tracks visible section, animated underline via `layoutId`
- **Mobile**: Hamburger menu with full nav list, animated open/close
- **Z-index**: 50

**Features:**
- Smooth scroll to any section
- Active section highlighting with animated indicator
- Logo scrolls to top
- Theme toggle integrated
- Contact button (desktop)
- Mobile responsive menu

#### Footer (`src/components/layout/Footer.tsx`)

- Copyright with dynamic year
- GitHub, LinkedIn, Email social links (all open in new tab)
- Back-to-top button
- All links use semantic tokens

### Section Components

#### Hero (`src/components/sections/Hero.tsx`)

- Large name heading (responsive: 4xl → 7xl)
- Title subtitle
- Typing animation cycling through 4 strings
- 3 CTA buttons: View Projects, Download Resume, Contact Me
- Profile image with decorative rotating ring
- Scroll indicator at bottom

#### About (`src/components/sections/About.tsx`)

- 4-paragraph professional story
- 4 animated stat cards (Certifications, Hackathons, Internship, Languages)
- Stats animate on hover (lift + scale)
- Accent line expands on hover

#### Skills (`src/components/sections/Skills.tsx`)

- 4 category cards: Programming, AI & ML, Tools, Databases
- Real-time search input with clear button
- Each skill is a pill badge with hover animation
- Icon changes color on card hover

#### Experience (`src/components/sections/Experience.tsx`)

- Vertical timeline with animated dot
- Card shows period badge, title, company, description, highlights
- CheckCircle icons for each highlight
- Responsive: timeline center on desktop, left-aligned on mobile

#### Projects (`src/components/sections/Projects.tsx`)

- 5 project cards in responsive grid (1→2→3 columns)
- Category filter buttons: All, AI, ML, Python, Web
- Cards show image placeholder, title, description, tech badges
- "Featured" badge on selected projects
- Click opens detail modal with full description, GitHub, Live Demo buttons
- Disabled buttons show "Coming Soon" tooltip on hover

#### Hackathons (`src/components/sections/Hackathons.tsx`)

- Horizontal scrolling timeline
- 3 hackathon cards with Trophy icons
- Click opens detail modal with highlights
- Result badge shown on each card

#### Certifications (`src/components/sections/Certifications.tsx`)

- 4 certificate cards in responsive grid
- Award icon with hover color transition
- Title, issuer, date, description
- Optional verify link

#### Achievements (`src/components/sections/Achievements.tsx`)

- 4 achievement cards in 2-column grid
- Each has a unique icon (Trophy, Briefcase, Award, GraduationCap)
- Icon changes to accent fill on hover

#### Contact (`src/components/sections/Contact.tsx`)

- Contact info side: email, GitHub, LinkedIn, location
- Form side: name, email, subject, message
- Form validation with inline error messages
- Formspree integration with loading spinner, success/error states
- All fields have `aria-invalid`, `aria-describedby`, `role="alert"`

### UI Components

#### Button (`src/components/ui/Button.tsx`)

3 variants:
- **Primary**: `bg-accent text-accent-fg` (champagne gold with white/black text)
- **Secondary**: `border border-border bg-surface text-foreground`
- **Ghost**: `text-fg-secondary hover:text-foreground`

3 sizes: `sm` (h-9), `md` (h-11), `lg` (h-12)

Supports: `href` (renders as `<a>`), `target`, `download`, `disabled`, `icon`

#### CommandPalette (`src/components/ui/CommandPalette.tsx`)

- Opens with `Ctrl+K` or click on floating button
- 11 commands across 3 sections: Navigation, Actions, Links
- Real-time search filtering
- Keyboard navigation (Escape to close)
- Click outside to close
- Each command executes: scroll to section, open resume, toggle theme, open social link

#### ThemeToggle (`src/components/ui/ThemeToggle.tsx`)

- Sun/Moon icon with rotation animation
- Persists preference to localStorage via next-themes
- Handles hydration mismatch with mounted state

#### ProfileImage (`src/components/ui/ProfileImage.tsx`)

- Loads from `public/images/profile.jpg`
- Graceful fallback: shows User icon + "Add your photo" text
- Decorative rotating dashed ring
- Animated accent dot

#### Particles (`src/components/ui/Particles.tsx`)

- Canvas-based particle network
- 40 particles (scaled to viewport width)
- Particles connect with lines when within 150px
- Color adapts to theme (black in light, white in dark)
- Very low opacity (0.1–0.4) for subtlety
- `aria-hidden="true"` for accessibility

#### ScrollProgress (`src/components/ui/ScrollProgress.tsx`)

- Framer Motion `useScroll` + `useSpring`
- 2px tall accent-colored bar at top of viewport
- Smooth spring physics

#### LoadingScreen (`src/components/ui/LoadingScreen.tsx`)

- Shows for 1.8 seconds on page load
- Rotating border spinner with accent color
- "Loading" text below
- Fades out with AnimatePresence
- `role="status"` for screen readers

---

## Features

### 1. Dark/Light Mode

- **Toggle**: Sun/moon button in navbar
- **Persistence**: localStorage via next-themes
- **System detection**: Disabled (defaults to light)
- **Transition**: Smooth CSS transitions on color changes
- **Coverage**: Every component uses semantic tokens — no hardcoded colors

### 2. Command Palette

- **Trigger**: `Ctrl+K` (or `Cmd+K` on Mac)
- **Commands**: Home, About, Skills, Experience, Projects, Certifications, Contact, Download Resume, Toggle Theme, Go to GitHub, Go to LinkedIn
- **Search**: Real-time filtering as you type
- **Close**: Escape key or click outside

### 3. Typing Animation

- **Location**: Hero section
- **Strings**: "AI Engineer", "ML Developer", "Problem Solver", "Hackathon Participant"
- **Speed**: 80ms typing, 40ms deleting, 2s pause
- **Implementation**: Custom `useTypingEffect` hook

### 4. Scroll Progress

- **Location**: Fixed top bar
- **Implementation**: Framer Motion `useScroll` with spring physics
- **Color**: Accent color

### 5. Active Section Tracking

- **Implementation**: IntersectionObserver per section
- **Root margin**: `-30% 0px -60% 0px` (triggers when section is in middle of viewport)
- **Visual**: Animated underline via `layoutId`

### 6. Project Filtering

- **Categories**: All, AI, ML, Python, Web
- **Animation**: Framer Motion `AnimatePresence` with `popLayout`
- **State**: `useMemo` for efficient re-rendering

### 7. Skill Search

- **Location**: Skills section
- **Implementation**: Real-time filtering with `useMemo`
- **Clear button**: Appears when query is non-empty
- **Empty state**: "No skills matching X" message

### 8. Contact Form

- **Backend**: Formspree (endpoint: `xlgvqode`)
- **Validation**: Name required, email format, subject required, message min 10 chars
- **States**: Idle, submitting (spinner), success (green), error (red)
- **Accessibility**: `aria-invalid`, `aria-describedby`, `role="alert"`

### 9. Particle Background

- **Implementation**: HTML5 Canvas
- **Count**: 40 particles (scaled to viewport)
- **Connections**: Lines between particles within 150px
- **Theme-aware**: Black particles on light, white on dark
- **Performance**: `requestAnimationFrame`, cleaned up on unmount

### 10. Loading Screen

- **Duration**: 1.8 seconds
- **Animation**: Rotating spinner + fade out
- **Accessibility**: `role="status"`, `aria-label="Loading"`

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/Ksiri03/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Configuration

All personal information, links, and settings are in **one file**: `src/lib/config.ts`

```typescript
export const config = {
  personal: {
    name: "Siri Vennela Kammari",
    title: "AI Engineer | Machine Learning Enthusiast",
    tagline: "Building intelligent systems through AI...",
    email: "sirivennela.635@gmail.com",
    location: "Hyderabad, Telangana, India",
    resumePath: "/resume/Siri_Vennela_Kammari_Resume.pdf",
    profileImage: "/images/profile.jpg",
  },
  socials: {
    github: "https://github.com/Ksiri03",
    linkedin: "https://www.linkedin.com/in/siri-vennela-9375a42b8/",
  },
  formspree: {
    endpoint: "https://formspree.io/f/xlgvqode",
  },
  typingStrings: [
    "AI Engineer",
    "ML Developer",
    "Problem Solver",
    "Hackathon Participant",
  ],
};
```

### Adding Your Profile Photo

1. Place your photo at `public/images/profile.jpg`
2. Recommended: 800×800px, square aspect ratio
3. The component automatically falls back to a placeholder if the file is missing

### Adding Your Resume

1. Place your PDF at `public/resume/Siri_Vennela_Kammari_Resume.pdf`
2. The filename must match `resumePath` in `config.ts`

### Updating Project Data

Edit `src/lib/constants.ts` — the `PROJECTS` array:

```typescript
{
  id: "my-project",
  title: "Project Name",
  description: "Short description",
  longDescription: "Detailed description for modal",
  image: "/projects/my-project.svg",
  technologies: ["Python", "TensorFlow"],
  category: "AI",           // Must match FILTERS: All, AI, ML, Python, Web
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",   // Optional — shows "Coming Soon" if missing
  featured: true,           // Shows "Featured" badge
}
```

### Setting Up Contact Form

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the form ID (e.g., `xlgvqode`)
4. Update `formspree.endpoint` in `src/lib/config.ts`

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — zero configuration needed
5. Vercel auto-detects Next.js and optimizes the build

### Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Add new site → Import from GitHub
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Click **Deploy**

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## Performance

### Optimizations Applied

| Optimization | Implementation |
|---|---|
| **Static Generation** | All pages pre-rendered at build time |
| **Font Optimization** | `next/font` with Geist Sans + Geist Mono (subset, preload) |
| **Image Optimization** | Next.js Image component ready (for future photos) |
| **Code Splitting** | Automatic per-route splitting via Next.js |
| **Tree Shaking** | Lucide-react imports only used icons |
| **CSS Purging** | Tailwind removes unused classes in production |
| **Reduced Motion** | `prefers-reduced-motion` media query disables all animations |
| **Canvas Efficiency** | `requestAnimationFrame` with cleanup on unmount |
| **Memoization** | `useMemo` for filtered projects and skills |
| **Lazy Evaluation** | Typing effect uses `useCallback` for stable references |

### Bundle Size

- **First Load JS**: ~100KB (gzipped)
- **CSS**: ~15KB (Tailwind purged)
- **Total**: ~115KB initial load

---

## Accessibility

### WCAG AA Compliance

| Requirement | Status |
|---|---|
| Color contrast (4.5:1 for text) | ✅ All pairs tested |
| Keyboard navigation | ✅ Tab, Enter, Escape |
| Focus indicators | ✅ 2px accent ring on all interactive elements |
| Screen reader support | ✅ ARIA labels, roles, live regions |
| Reduced motion | ✅ `prefers-reduced-motion` kills all animations |
| Semantic HTML | ✅ `<nav>`, `<main>`, `<section>`, `<footer>`, `<header>` |

### ARIA Implementation

| Element | ARIA Attributes |
|---|---|
| Navbar | `role="menubar"`, `role="menuitem"`, `aria-current`, `aria-expanded` |
| Modals | `role="dialog"`, `aria-modal="true"`, `aria-label` |
| Filter buttons | `aria-pressed` |
| Form fields | `aria-invalid`, `aria-describedby` |
| Error messages | `role="alert"` |
| Loading screen | `role="status"`, `aria-label` |
| Decorative elements | `aria-hidden="true"` |
| Social links | `aria-label` |
| Command palette | `aria-label="Open command palette"` |

### Keyboard Navigation

| Key | Action |
|---|---|
| `Tab` | Move focus between interactive elements |
| `Enter` / `Space` | Activate buttons, links, cards |
| `Escape` | Close modals, command palette |
| `Ctrl+K` | Open command palette |

---

## SEO

### Metadata

```typescript
// layout.tsx
{
  metadataBase: new URL("https://sirivennelakammariportfolio.netlify.app"),
  title: { default: "Siri Vennela Kammari — AI Engineer", template: "%s | ..." },
  description: "Portfolio of Siri Vennela Kammari...",
  keywords: ["AI Engineer", "Machine Learning", "Portfolio", ...],
  authors: [{ name: "Siri Vennela Kammari" }],
  openGraph: { type, locale, url, siteName, title, description, images },
  twitter: { card: "summary_large_image", title, description, images },
  robots: { index: true, follow: true },
}
```

### Files

| File | Purpose |
|---|---|
| `public/robots.txt` | Allows all crawlers, points to sitemap |
| `public/sitemap.xml` | Lists main URL with priority 1.0 |
| `public/og-image.svg` | Social preview image (1200×630) |

---

## Browser Support

| Browser | Version |
|---|---|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Edge | 90+ |
| Mobile Safari | 15+ |
| Chrome Android | 90+ |

---

## License

This project is personal portfolio code. Feel free to use it as inspiration for your own portfolio, but please don't use the personal content, resume, or profile image.

---

## Author

**Siri Vennela Kammari**
- 🌐 [sirivennelakammariportfolio.netlify.app](https://sirivennelakammariportfolio.netlify.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/siri-vennela-9375a42b8/)
- 🐙 [GitHub](https://github.com/Ksiri03)
- 📧 [sirivennela.635@gmail.com](mailto:sirivennela.635@gmail.com)
