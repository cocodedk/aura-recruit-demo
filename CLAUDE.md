# CLAUDE.md — aura-recruit-demo

## Project Overview

Demo recruitment platform built with Vue 3, TypeScript, and Vite. Showcases modern candidate management UI with filtering, search, and job board features.

- **Language / Runtime**: TypeScript, Node.js 20+
- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Architecture**: Vite + Vue 3 SPA with Vitest for unit tests
- **Package manager**: npm

---

## Required Skills — ALWAYS Invoke These

These skills **must** be invoked when the relevant situation arises. Never skip them.

| Situation | Skill |
|-----------|-------|
| Before any new feature or screen | `superpowers:brainstorming` |
| Planning multi-step changes | `superpowers:writing-plans` |
| Writing or fixing core logic | `superpowers:test-driven-development` |
| First sign of a bug or failure | `superpowers:systematic-debugging` |
| Before completing a feature branch | `superpowers:requesting-code-review` |
| Before claiming any task done | `superpowers:verification-before-completion` |
| Working on UI / frontend | `frontend-design:frontend-design` |
| After implementing — reviewing quality | `simplify` |

---

## Architecture

```
aurarecruit/
├── src/
│   ├── components/   <- Vue components
│   ├── views/        <- Page-level components
│   ├── stores/       <- Pinia state stores
│   ├── composables/  <- Reusable composition functions
│   └── types/        <- TypeScript type definitions
├── public/           <- Static assets
└── scripts/          <- Utility scripts
```

### Layer Rules
- `views/` must not contain business logic — delegate to `stores/` or `composables/`
- `components/` must be pure UI — no direct API calls
- State management via Pinia stores only

---

## Coding Conventions

- TypeScript strict mode — no implicit `any`
- Vue 3 Composition API with `<script setup>` syntax
- Immutable state updates — use spread or Pinia actions
- No hardcoded strings — use constants

---

## Engineering Principles

### File Size
- **200-line maximum per file** — extract a composable or component when approaching the limit

### DRY · SOLID · KISS · YAGNI
- Extract shared logic into composables; never copy-paste
- Single Responsibility: one component does one thing
- Don't add features not yet needed
- Delete dead code immediately

### TDD
- Write the failing test first, make it pass, then refactor
- Test names describe behaviour: `"should filter candidates by status"`
- One assertion per test — keep tests focused and readable

### Commit hygiene
- Follow Conventional Commits: `feat: ...` / `fix: ...` / `chore: ...`
- The `commit-msg` hook enforces this automatically

---

## Build Commands

```bash
npm run dev           # Start dev server
npm run build         # Build for production
npm run lint          # Lint
npm run test:run      # Run unit tests (vitest)
npm run test:coverage # Test with coverage
```

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — project conventions and session startup |
| `version.txt` | Semantic version (MAJOR.MINOR.PATCH) |
| `.github/workflows/` | CI, release, and Pages automation |
| `.githooks/` | Pre-commit and commit-msg hooks |
| `scripts/install-hooks.sh` | One-time hook installer |

---

## Starting a New Session

1. Read this file
2. Run `npm run lint && npm run test:run` to confirm everything passes
3. Invoke `superpowers:brainstorming` before touching any feature
4. Follow the Required Skills table — every skill is mandatory, not optional
