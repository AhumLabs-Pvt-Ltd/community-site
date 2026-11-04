# Ahum community site

The landing page for the Ahum open maritime developer community. Built with React, Vite,
Tailwind CSS and Framer Motion, in plain JavaScript.

The page copy is in `src/content.js`. It uses the Ahum hand-drawn style: wobbly ink lines,
paper with a dot grid, Gochi Hand and Shantell Sans, and animal mascots. Further design
direction will be written in [BRIEF.md](BRIEF.md).

## 10-minute quickstart

You need Git and Node.js 22 or newer.

1. Clone and install (3 min):

   ```sh
   git clone https://github.com/AhumLabs-Pvt-Ltd/community-site.git
   cd community-site
   corepack enable
   pnpm install
   ```

2. Turn on the secret scan hook (2 min). Install [pre-commit](https://pre-commit.com) and
   [gitleaks](https://github.com/gitleaks/gitleaks#installing), then run
   `pre-commit install`.

3. Run it (1 min):

   ```sh
   pnpm dev
   ```

   Open the URL it prints (usually http://localhost:5173). Edits reload instantly.

4. Change something (3 min). Page text is in `src/content.js`. Each section is a file in
   `src/sections/`.

5. Check it (1 min):

   ```sh
   pnpm lint
   pnpm test
   pnpm build
   ```

## Layout

| Path                         | What it is                                                |
| ---------------------------- | --------------------------------------------------------- |
| `src/App.jsx`                | Puts the sections in order                                |
| `src/sections/Hero.jsx`      | Top banner                                                |
| `src/sections/Building.jsx`  | What we're building                                       |
| `src/sections/Repos.jsx`     | Links to the repositories                                 |
| `src/sections/BuildDays.jsx` | Build days                                                |
| `src/sections/Join.jsx`      | Join the community                                        |
| `src/sections/Footer.jsx`    | Footer with contributor credits                           |
| `src/sections/Section.jsx`   | Shared section wrapper with a scroll-in animation         |
| `src/content.js`             | All page text, repo list and contributor list             |
| `src/index.css`              | Fonts, Tailwind, the hand-drawn kit and token names       |
| `src/scenes.js`              | The drawings for each section (critters, boat, table)     |
| `src/handdrawn/`             | The hand-drawn kit (CSS, JS), `Drawing` and the boil hook |
| `test/`                      | Vitest and Testing Library tests                          |

## Rules for this site

- **No forms that collect personal data** (no sign-up, newsletter or contact forms) until
  Ahum Labs has a privacy policy for them. A test fails if a form or input is added.
- **Contributor credits:** add yourself to `contributors` in `src/content.js` with only the
  name or handle you want public. No emails, ages, schools or locations.
- No API keys or secrets. The site needs none.
- No tracking or analytics scripts without maintainer approval.

## License

[Apache-2.0](LICENSE).

## The hand-drawn style

- `src/handdrawn/handdrawn.css` and `handdrawn.js` are the Ahum hand-drawn kit, copied in
  unchanged (Prettier skips them). Update them by copying a new version, not by editing.
- Drawings are SVG strings built in `src/scenes.js` with `critter()`, `props` and
  `ahumTriangle()`, rendered by `<Drawing>`. Each area keeps one animal: fox (lead), owl
  (knowledge review), beaver (schemas), otter (sandbox fleet), raccoon (agent setup).
- Keep motion small: at most three kinds of moving things on screen (now: the sail sways,
  the hero fox works, critters blink). Nothing moves in text. Reduced-motion turns it all off.
- Sound is off by default. The header toggle turns it on and the choice is remembered on
  that device.
- Fonts are self-hosted through `@fontsource`, so the page makes no third-party requests.
