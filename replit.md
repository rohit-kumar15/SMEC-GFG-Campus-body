# Overview

This is a full-stack React application for the St. Martin's GeeksforGeeks Campus Body website. The project is built as a frontend-only React application using modern web technologies including React, TailwindCSS, and React Router. The application features a dark-themed design with a custom color palette focused on green tones, representing the GeeksforGeeks brand identity. The website serves as a platform for the campus body to showcase events, resources, and community information for students interested in competitive programming and technology.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a component-based React architecture with functional components and hooks. The codebase is organized into logical directories:
- **Pages**: Route-level components (Home, Events, Resources) that serve as main content containers
- **Components**: Reusable UI components including Header, Footer, and specialized cards (EventCard, ResourceCard)
- **UI Components**: Comprehensive shadcn/ui component library for consistent design patterns
- **Hooks**: Custom React hooks for mobile detection and toast notifications

## Routing System
The application uses React Router DOM for client-side routing with three main routes:
- `/` - Home page with hero section, about section, and campus body information
- `/events` - Events listing page with registration functionality
- `/resources` - Learning resources and educational content

## Styling and Design System
Built with TailwindCSS using a custom configuration that extends the default theme:
- **Custom Color Palette**: Ocean green (#3ab284), GFG green (#00895e), light mint (#d5f6e4), deep green (#265645), near black (#0e201b)
- **Typography**: Google Fonts integration with Outfit, Poppins, and Space Grotesk font families
- **Dark Theme**: Exclusively dark mode design with glowing text effects and gradient backgrounds
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Component Library
Utilizes shadcn/ui for consistent UI components including:
- Form elements (Input, Button, Checkbox, Select)
- Layout components (Card, Dialog, Sheet, Accordion)
- Feedback components (Toast, Alert, Progress)
- Navigation components (Tooltip, Popover, Dropdown Menu)

## State Management
Uses React Query (@tanstack/react-query) for server state management and data fetching, though currently implemented as a frontend-only application with no active API endpoints.

## Backend Infrastructure (Prepared but Unused)
The project includes a prepared Express.js backend setup with:
- **Express Server**: RESTful API structure ready for implementation
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions for user management
- **Storage Interface**: Abstracted storage layer with in-memory implementation and database-ready interface
- **Session Management**: PostgreSQL session store configuration

# External Dependencies

## Core Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **React Router DOM**: Client-side routing for single-page application navigation
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **@tanstack/react-query**: Server state management and data fetching library

## UI Component Library
- **@radix-ui/***: Comprehensive set of low-level UI primitives for accessibility and customization
- **shadcn/ui**: Pre-built component system built on top of Radix UI primitives
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: CSS class manipulation utilities

## Database and ORM (Prepared)
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL with schema generation
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connectivity
- **drizzle-zod**: Schema validation integration between Drizzle and Zod

## Development Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS & Autoprefixer**: CSS processing and vendor prefix automation

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **Zod**: TypeScript-first schema validation library

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-friendly unique string ID generator
- **embla-carousel-react**: Carousel component for image/content sliders

The application is structured to be easily scalable from a frontend-only website to a full-stack application by activating the prepared backend infrastructure and database integration.