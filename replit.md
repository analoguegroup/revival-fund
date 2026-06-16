# The Revival Fund

## Overview

The Revival Fund is a grant and investment program website that connects researchers, scientists, and entrepreneurs interested in reviving dormant scientific research with funding opportunities. The platform provides information about the fund's mission, application process, and frequently asked questions through a clean, light-themed interface (light gray neutral background with a cobalt/indigo blue accent) inspired by professional research foundations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- React with TypeScript for component-based UI development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query for server state management and data fetching
- Tailwind CSS for styling with a custom light theme configuration (light gray neutral background, cobalt/indigo blue accent)

**UI Component Strategy**
- Uses shadcn/ui component library (Radix UI primitives with custom styling)
- Components follow the "New York" style variant with custom theming
- All UI components are located in `client/src/components/ui/`
- Design system emphasizes a clean light aesthetic (neutral gray surfaces, blue accent) with professional credibility

**Routing Structure**
- Home page (`/`) - About page content (the fund introduction; there is no separate landing page)
- Learn page (`/learn`) - Detailed information about the fund and research areas
- Portfolio page (`/portfolio`) - Lists projects supported by the fund
- FAQ page (`/faq`) - Accordion-based frequently asked questions
- Apply page (`/apply`) - Application information (external Typeform link)
- 404 page for unmatched routes

**Styling Approach**
- Light mode by default; a `.dark` token set is also defined in `index.css` for optional dark theming
- Custom Tailwind configuration with HSL-based color system
- Consistent spacing using Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24)
- Typography uses Inter font family (loaded via Google Fonts)
- Custom CSS variables for theming (`--background`, `--foreground`, etc.)

### Backend Architecture

**Server Framework**
- Express.js for HTTP server
- TypeScript for type safety across the stack
- Separation of concerns with distinct routing and storage layers

**Development vs Production**
- Vite middleware integration in development for HMR (Hot Module Replacement)
- Static file serving in production from built assets
- Custom request logging middleware for API routes

**Storage Layer**
- Abstracted storage interface (`IStorage`) for flexibility
- In-memory storage implementation (`MemStorage`) as default
- User schema defined with username/password fields (currently unused in application)

**Database Schema**
- Drizzle ORM configured for PostgreSQL
- Schema location: `shared/schema.ts`
- Single `users` table defined but not actively used
- Migration support via `drizzle-kit`

### External Dependencies

**Third-Party Services**
- Typeform: External application form (`https://natfwqew5yc.typeform.com/to/tW9UK4yY`)
- Google Fonts: Inter font family for typography

**Database**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Connection configured through `DATABASE_URL` environment variable
- Drizzle ORM for schema management and queries

**Development Tools**
- Replit-specific plugins for development experience:
  - Runtime error overlay
  - Cartographer (code navigation)
  - Dev banner
- ESBuild for production server bundling

**Key NPM Packages**
- Form handling: `react-hook-form` with `@hookform/resolvers` for validation
- Date utilities: `date-fns`
- Schema validation: `zod` with `drizzle-zod` integration
- UI primitives: Full Radix UI suite for accessible components
- Carousel: `embla-carousel-react`
- Session management: `connect-pg-simple` (not currently implemented)

**Asset Management**
- Static assets referenced via `@assets` alias pointing to `attached_assets/`
- Design guidelines documented in `design_guidelines.md`
- Content sourced from text file describing fund mission and research areas