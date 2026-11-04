# Contributing

The organization-wide guide applies here:
[AhumLabs-Pvt-Ltd/.github CONTRIBUTING.md](https://github.com/AhumLabs-Pvt-Ltd/.github/blob/main/CONTRIBUTING.md).
It covers the Code of Conduct, secrets and the CLA.

## Setup

```sh
corepack enable
pnpm install
pre-commit install
pnpm dev
```

Before you open a pull request:

```sh
pnpm lint && pnpm test && pnpm build
```

Include a screenshot of any visual change in the pull request. Add yourself to
`contributors` in `src/content.js` if you like, with only the name or handle you want public.
