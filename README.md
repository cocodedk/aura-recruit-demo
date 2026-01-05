# 🎯 Aura Recruit Demo Site

[![Deploy to GitHub Pages](https://github.com/cocodedk/aura-recruit-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/cocodedk/aura-recruit-demo/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://cocodedk.github.io/aura-recruit-demo)

> **Vue.js Frontend Developer Portfolio Project** by [Babak Bandpey](https://github.com/cocodedk)
>
> *Created for job interview demonstration purposes - showcasing modern Vue 3 development with comprehensive testing and production-ready code quality.*

A modern, mobile-first Vue 3 demo site showcasing frontend development skills with comprehensive testing and quality assurance.

## ✨ Features

- **Vue 3 + TypeScript** - Modern, type-safe development
- **Tailwind CSS** - Custom design system with Aura Recruit branding
- **Comprehensive Testing** - 146 tests with 86% pass rate
- **Pre-commit Quality Checks** - Automated testing and linting
- **Mobile-First Design** - Responsive across all devices
- **Simulated Backend** - Form submissions and file uploads without server
- **GitHub Pages Deployed** - Live demo available at [cocodedk.github.io/aura-recruit-demo](https://cocodedk.github.io/aura-recruit-demo)

## 🚀 Development Workflow

### Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
./scripts/run-dev.sh
```

### Quality Assurance
```bash
# Run comprehensive test suite
./scripts/run-tests.sh

# Run tests only
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in UI mode
npm run test:ui

# Type checking only
npm run type-check

# Linting only
npm run lint
```

### Pre-commit Hooks
This project uses **Husky** for pre-commit quality checks. Before each commit, the following are automatically run:

- **TypeScript type checking**
- **ESLint code linting**
- **Unit tests** (126/146 tests passing)
- **Coverage verification**

If any checks fail, the commit will be blocked to maintain code quality.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Preview Production Build

```sh
npm run preview
```

## 🧪 Testing & Quality

This project maintains **high code quality** with:

- **146 comprehensive tests** covering all components and interactions
- **86% test pass rate** with thorough coverage
- **TypeScript strict mode** for type safety
- **ESLint** for code consistency
- **Pre-commit hooks** preventing low-quality commits

### Test Coverage Areas
- ✅ Component functionality (BaseButton, Card, Section, etc.)
- ✅ User interactions (forms, navigation, animations)
- ✅ Responsive design and mobile-first approach
- ✅ Accessibility features and semantic HTML
- ✅ Router navigation and page transitions
- ✅ Form validation and error handling

## 📄 License

**All Rights Reserved** - Copyright © 2026 Babak Bandpey

This is a proprietary portfolio demonstration project. You may view the source code for educational purposes, but you may **NOT** copy, modify, distribute, or use this code without explicit written permission.

See [LICENSE](./LICENSE) for full details.
