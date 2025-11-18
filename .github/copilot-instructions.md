## Quick context

- This is a React + TypeScript single-page app scaffolded with Vite (SWC plugin) and Tailwind.
- Primary source: `src/` — UI components are under `src/components/` and top-level route pages are in `src/pages/`.
- Static assets (images, logos, gifs) are in `public/` and referenced at runtime via `/assets/...` or `/orgs/...` paths (see `src/components/layout/Navbar.tsx` which uses `/assets/templogo.png`).

## How to run / build (exact commands)

- Install: npm ci or npm install
- Dev server (HMR): npm run dev (Vite serves on port 8080 by default per `vite.config.ts`)
- Production build: npm run build (runs `tsc -b` then `vite build`)
- Preview built output: npm run preview
- Lint: npm run lint

These scripts are configured in `package.json`.

## Big-picture architecture & important files

- Entry: `src/main.tsx` — mounts `<App />` and imports global `index.css`.
- Routing: `src/App.tsx` — React Router v7 style `Routes`/`Route` with files in `src/pages/` (examples: `Index`, `AboutUs`, `Festival`, `Gallery`, `Supporters`, `NotFound`).
- Layout components: `src/components/layout/` (e.g. `Navbar.tsx`, `Footer.tsx`) — these demonstrate Tailwind utility classes and common patterns for header/footer.
- Page-specific components: `src/components/pages/` (home subfolder contains `Hero.tsx`, `Overview.tsx`, etc.).
- Styles: global css in `src/index.css`, component styles in `src/*` (plain css + Tailwind). There is also `App.css`.

## Key conventions and patterns (do not break these)

- TypeScript + default exports: most components use `export default`. Keep added components consistent.
- Routing: new pages belong in `src/pages/` and must be added to `src/App.tsx` routes. The `Navbar` hard-codes a list of links — update it when adding routes.
- Styling: Tailwind utility classes are used inline via `className`; avoid introducing CSS Modules unless intentionally shifting styles.
- Assets: Put images in `public/` and reference via `/assets/...`. Do not import large image files into bundle unless needed.
- Animations: project uses `motion` (Motion One), `@gsap/react`, and `embla-carousel` — follow existing usage in `src/components/` for patterns.

## Integration points & external deps to be careful with

- Vite + SWC plugin: `vite.config.ts` uses `@vitejs/plugin-react-swc`. Avoid introducing Babel-only plugins without adjusting Vite config.
- Tailwind via `@tailwindcss/vite` plugin — updating PostCSS/Tailwind config may change global styles.
- React Router v7 — routes use `element={<Page />}` and `Routes` (not the older Switch API).

## Typical small edits and examples

- Add a new page:

  1. Create `src/pages/MyPage.tsx` exporting React component (default export).
  2. Add a Route in `src/App.tsx`: <Route path="/mypage" element={<MyPage />} />
  3. Add a link in `src/components/layout/Navbar.tsx` (follow existing list mapping pattern).

- Update header logo path example: `src/components/layout/Navbar.tsx` uses `<img src="/assets/templogo.png" />` — use the same pattern for public assets.

## What an AI assistant should not change without approval

- Global build config: `vite.config.ts`, `tsconfig.*.json`, and `package.json` scripts — these affect all contributors; propose changes as PRs explaining rationale.
- Tailwind/PostCSS setup — can have wide visual impact; prefer small, targeted style changes.

## Where to look for more context

- `package.json` — scripts and dependency list.
- `vite.config.ts` — dev server settings (host, port, plugins).
- `src/App.tsx`, `src/main.tsx` — routing and bootstrapping.
- `src/components/layout/Navbar.tsx` — canonical example for routes, links, assets, and Tailwind usage.

## Short checklist for small PRs

1. Run `npm run dev` and verify the page that changed loads correctly (port 8080 by default).
2. Update `src/App.tsx` routes if adding or renaming pages.
3. Update `src/components/layout/Navbar.tsx` if navigation links changed.
4. Keep changes focused and explain any build-config edits in the PR description.

---

If anything here is unclear or you want me to include more examples (e.g., preferred test approach or style conventions), tell me which area to expand and I'll iterate.
