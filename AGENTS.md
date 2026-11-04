# AGENTS.md

Instructions for AI coding agents working in this repository.

## Install

```sh
corepack enable
pnpm install
```

No environment variables or API keys are needed.

## Test

All must pass before you finish:

```sh
pnpm lint     # oxlint and Prettier check
pnpm test     # Vitest + Testing Library
pnpm build    # production build
pnpm audit
gitleaks git --redact .   # if installed
```

## Run

```sh
pnpm dev        # dev server, usually http://localhost:5173
pnpm preview    # serve the production build
```

## Rules

- Copy is final in `src/content.js`; change it only when asked. Follow `BRIEF.md` for design once it is filled in.
- Page text goes in `src/content.js`; sections go in `src/sections/`.
- JavaScript (`.jsx`), not TypeScript. Tailwind classes for styling. Framer Motion for
  animation; respect `prefers-reduced-motion` when adding larger animations.
- Never add forms, inputs or scripts that collect personal data, and no analytics.
- Contributor credits: only the name or handle a person chose to make public.
- Plain, direct writing.
