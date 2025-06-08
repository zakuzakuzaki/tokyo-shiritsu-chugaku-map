# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev      # Start development server with HMR (http://localhost:5173)
npm run build    # Production build (TypeScript compilation + Vite bundling)
npm run preview  # Preview production build
npm run lint     # ESLint code quality check (zero warnings policy)
```

## Architecture Overview

This is a **React + TypeScript + Leaflet** mapping application displaying Tokyo private middle schools with search/filter capabilities.

### Core Architecture Patterns

**State Management**: Uses React Hooks (useState, useMemo) with single source of truth in App.tsx
- `schools`: Static school data loaded from JSON
- `selectedSchool`: Currently selected school for detail view  
- `filters`: Search and filter criteria
- Derived state: `filteredSchools` and `wards` computed via useMemo

**Data Flow**: JSON data → filtering logic → map markers + sidebar display
- Filter changes trigger useMemo recalculation
- Map interactions update selectedSchool state
- Props drilling for parent-child communication

**Component Structure**: Container/Presentational pattern
- App.tsx: State management and business logic container
- Components: Pure UI components receiving props and callbacks
- ErrorBoundary: Top-level error handling wrapper

### Key Technical Decisions

**TypeScript Types**: Core domain models in `/src/types/school.ts`
- `School`: Main data structure with required/optional fields
- `SearchFilters`: Filter state interface with typed ranges
- `SchoolType`: Union type for school categories

**Styling Strategy**: Tailwind CSS utility-first approach
- Custom primary color palette (blue theme) in tailwind.config.js
- Responsive design with mobile-first methodology
- Component-scoped styling without CSS modules

**Map Implementation**: Leaflet with React-Leaflet wrapper
- Custom marker icons based on school type (color-coded)
- Popup integration with school detail cards
- Tokyo-centered map bounds (35.6762, 139.6503)

### Data Structure

School data stored in `/src/data/schools.json` with 20 prestigious schools including:
- Geographic coordinates for accurate map positioning
- Comprehensive school metadata (fees, deviation scores, features)
- Japanese text content throughout (ward names, school types)

### Build Pipeline

Two-stage build process:
1. TypeScript compilation (`tsc`) with strict mode enabled
2. Vite bundling with React plugin and Tailwind processing
3. Output to `/dist` directory for static hosting

### Performance Optimizations

- useMemo for expensive filtering operations
- Component memoization prevents unnecessary re-renders
- Vite's fast refresh for development iteration
- Tree-shaking enabled for production bundles