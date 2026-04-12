# aura-recruit-demo

Demo recruitment platform built with Vue 3, TypeScript, and Vite. Showcases modern candidate management UI with filtering, search, and job board features.

[![Deploy to GitHub Pages](https://github.com/cocodedk/aura-recruit-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/cocodedk/aura-recruit-demo/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://cocodedk.github.io/aura-recruit-demo)

## Website

- [English](https://cocodedk.github.io/aura-recruit-demo/)
- [فارسی (Persian)](https://cocodedk.github.io/aura-recruit-demo/fa/)

## Features

- Candidate management through hiring pipeline stages
- Job board with detailed listings
- Advanced filtering by skills, status, and role
- Vue 3 Composition API with `<script setup>`
- Full TypeScript support
- Vitest unit tests

## Build from Source

**Prerequisites:** Node.js 20+, npm

```bash
git clone https://github.com/cocodedk/aura-recruit-demo.git
cd aura-recruit-demo
npm install
npm run dev
```

**Commands:**
```bash
npm run dev           # Start dev server
npm run build         # Build for production
npm run lint          # Lint
npm run test:run      # Run unit tests (vitest)
npm run test:coverage # Test with coverage
```

## Architecture

```
aurarecruit/
├── src/
│   ├── components/   # Vue components
│   ├── views/        # Page-level components
│   ├── stores/       # Pinia state stores
│   ├── composables/  # Reusable composition functions
│   └── types/        # TypeScript type definitions
└── public/           # Static assets
```

| Layer | Tech |
|---|---|
| Frontend | Vue 3, TypeScript, Vite |
| State | Pinia |
| Testing | Vitest |
| Deployment | GitHub Pages |

## Docker

```bash
docker pull ghcr.io/cocodedk/aura-recruit-demo:latest
```

## Author

**Babak Bandpey** — [cocode.dk](https://cocode.dk) | [LinkedIn](https://linkedin.com/in/babakbandpey) | [GitHub](https://github.com/cocodedk)

Apache-2.0 | &copy; 2026 [Cocode](https://cocode.dk) | Created by [Babak Bandpey](https://linkedin.com/in/babakbandpey)
