<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview
Smile Design Clinic - Next.js 16.2.4 website for a cosmetic dental clinic in Guadalajara. Features services, gallery, and Instagram integration.

## Technology Stack
- Next.js 16.2.4 (App Router)
- TypeScript 5 (strict mode)
- React 19.2.4
- Tailwind CSS 4 + PostCSS
- ESLint 9 (flat config)

## Key Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint validation

## Conventions
- Component directory: `Componentes/` (Spanish naming)
- File naming: PascalCase (e.g., `Services.tsx`)
- Path alias: `@/*` maps to root
- Language: Spanish UI content
- Domain: Cosmetic dentistry (implants, orthodontics, smile design)

## Styling Rules
- Use hardcoded hex colors in className (NO Tailwind presets)
- **Official Color Palette**:
  - Dark backgrounds: `#0a0a0a` (primary), `#0f0d08` (cards), `#070707` (sections)
  - Gold accent: `#c9a84c` (primary), `#daa844` (hover), `#e0bf6a` (light)
  - Text: `#f0e8d8` (primary), `#a89070` (secondary), `#7a6a50` (tertiary), `#5a4e38` (muted)
  - Borders: `#2a2218` (primary), `#1e1a10` (secondary)
  - Success state: `#5a8a40` (green for "Después" badge)
- Typography: Geist Sans, letter spacing (tracking-[3px] for headers)
- Responsive: Mobile-first with `md:` breakpoints
- Shadows: Use `shadow-[0_0_10px_rgba(201,168,76,0.15)]` for subtle gold glow

## Component Patterns
- Server Components (no 'use client')
- No props currently (hardcoded data)
- Card styling: `bg-[#0f0d08] border border-[#1e1a10] rounded-md p-6 hover:border-[#c9a84c]`
- Button: `bg-[#c9a84c] text-[#0a0a0a] uppercase tracking-[1.5px] py-3 px-6 rounded-sm hover:bg-[#e0bf6a]`

## Pitfalls
- Don't create Tailwind color variables—use inline hex
- Don't add props without state management
- Watch unused imports (strict TS)
- Check Next.js docs for version 16 changes

## Links
- [README.md](README.md) - Project setup
- [package.json](package.json) - Dependencies and scripts
