# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Brenscot Builder Website (`artifacts/brenscot-builder`)
- Professional industrial warehouse developer website for Brenscot Builders
- Multi-page React + Vite app with wouter routing (presentation-first, no backend)
- Serves at `/` (root)
- Pages: Home (`/`), Projects (`/projects`), About (`/about`), Partners (`/partners`), Contact (`/contact`)
- Home sections: Hero, Video placeholder, Services, Projects grid, About, Careers, Partners, Footer
- Contact page: clean white background, CPG-inspired minimal layout with "Get In Touch" heading, Head Office address, and underline-style form
- NavBar supports `lightBackground` prop for white-background pages (e.g. Contact)
- Navbar breakpoint: desktop nav at `lg:` (1024px+), hamburger below
- Uses framer-motion for animations, lucide-react for icons
- Color palette: dark navy (#0b1526), gold accent (#C8A24A), white
- Fonts: Playfair Display (serif headings), Barlow (body)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
