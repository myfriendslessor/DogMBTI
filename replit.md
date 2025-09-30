# Dog MBTI Test - Personality Test for Dogs

## Overview

A Korean-language web application that provides an MBTI-style personality test for dogs. Users answer 60 questions about their dog's behavior to discover one of 16 personality types, complete with detailed characteristics, recommended activities, and social sharing features. The application is designed with a playful, viral-ready aesthetic inspired by successful Korean personality test platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for state management and data fetching
- Tailwind CSS for utility-first styling with custom design system

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library (New York style variant) for consistent, customizable UI elements
- Custom theme system with CSS variables for light/dark mode support
- Korean-optimized typography using Noto Sans KR and Jua fonts

**Design System**
- Warm, dog-themed color palette (Primary: HSL 45 85% 60% - golden orange)
- Custom border radius values (lg: 9px, md: 6px, sm: 3px)
- Elevation system using transparent overlays for depth
- Responsive design with mobile-first approach

**Application Structure**
- Three main pages: Home (landing), Test (quiz flow), Result (personality display)
- Component-based architecture with reusable UI elements (QuestionCard, ProgressBar, PersonalityCard, ShareButtons)
- Path aliases configured for clean imports (@/ for client, @shared/ for shared code)

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API endpoints
- HTTP server setup with request/response logging middleware
- Error handling middleware for consistent error responses
- Development-only Vite integration for HMR and SSR

**Data Storage Strategy**
- In-memory storage implementation (MemStorage class) for user data
- Interface-based storage abstraction (IStorage) allowing easy database migration
- UUID generation for user IDs using Node.js crypto module
- Drizzle ORM configured for PostgreSQL (schema defined but not yet connected to database)

**API Design**
- RESTful API prefix (/api/*) for backend routes
- Centralized route registration system
- CRUD operations abstracted through storage interface

### Database Schema

**Current Implementation**
- Drizzle ORM configured with PostgreSQL dialect
- Users table with UUID primary key, username, and password fields
- Zod schema validation for user insertion
- Migration support configured (output to ./migrations directory)
- Note: Database is schema-defined but using in-memory storage currently

**Personality Test Data**
- Questions and personality types stored as TypeScript modules in shared directory
- 60 questions with multiple choice answers, each containing MBTI dimension weights
- 16 personality types with detailed characteristics, traits, and recommendations
- Client-side MBTI calculation algorithm based on accumulated dimension scores

### External Dependencies

**Core UI Libraries**
- @radix-ui/* - Complete set of accessible UI primitives (20+ components)
- class-variance-authority - Type-safe variant styling
- tailwindcss - Utility-first CSS framework with custom configuration
- cmdk - Command palette component
- embla-carousel-react - Touch-friendly carousel implementation

**Database & Backend**
- @neondatabase/serverless - Serverless PostgreSQL driver
- drizzle-orm - TypeScript ORM with Zod integration
- drizzle-zod - Schema validation bridge
- connect-pg-simple - PostgreSQL session store (configured but not actively used)

**Development Tools**
- @replit/vite-plugin-* - Replit-specific development enhancements (runtime error overlay, cartographer, dev banner)
- tsx - TypeScript execution for server
- esbuild - Production build bundler for server code

**Form & Validation**
- react-hook-form - Form state management
- @hookform/resolvers - Validation resolver integration
- zod - Runtime type validation

**Utilities**
- date-fns - Date manipulation and formatting
- nanoid - Compact unique ID generation
- wouter - Minimalist routing library (1KB alternative to React Router)

**Asset Management**
- Static assets stored in attached_assets directory
- Questions data partially stored as text file (suggests migration from external source)
- Generated images for hero sections and visual elements