# dimy.dev

Minimal personal portfolio built with Next.js (App Router).

## Content model

The homepage intentionally stays simple:
- Name
- Photo
- Summary
- Links (GitHub, LinkedIn)
- Projects (stacked vertically)

Core files:
- `app/page.tsx`: page content and project items
- `app/globals.css`: styling/theme
- `public/photo.png`: profile photo

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Run the full release gate:

```bash
npm run gate
```

## Tests

This repo includes a lightweight smoke test in `tests/smoke.test.mjs` that checks
the homepage source for required sections and key links.
