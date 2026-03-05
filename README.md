# Gaming Website (Vite + React + TypeScript)

## Requirements

- Node.js 20+

## Environment Variables

This app reads its config from `VITE_*` environment variables (see [src/config.ts](src/config.ts)).

- For local development: copy [.env.example](.env.example) to `.env.local` and fill in values.
- For Vercel: set the same keys in **Project Settings → Environment Variables** and redeploy.
	- Vite injects `VITE_*` variables at build time.

## Scripts

- `npm run dev` (or `npm start`): run the Vite dev server
- `npm test`: strict gate (`tsc --noEmit` + `eslint`)
- `npm run build`: production build (outputs to `dist/`)
- `npm run preview`: preview the production build locally
