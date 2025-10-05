# Code Map: Files and What They Do

This is a practical, high‑level directory of the important files across the workspace. Use it when you’re trying to locate something or understand how pieces fit together.

## Root Shell — `abc-aviation-root-shell`

- `index.html` — Import map, header nav, Single‑SPA layout, theme link, and shell bootstrap.
- `index.html.backup` — Original template used by the prebuild script to restore.
- `README.md` — Shell features and getting started.
- `proxy-server.js` — Express proxy for `/assets/*` to Owner Portal preview; serves static shell files.
- `server.js` — Alternative simple static server (if present).
- `scripts/prebuild.js` — Rewrites import map URLs for dev/prod.
- `single-spa.mjs` / `single-spa-layout.mjs` — Local shims used by dev tooling.
- `assets/` — Optional prebuilt asset examples (not used by runtime directly when preview servers are running).
- `parcels/notifications.js` — Always‑on notifications widget lifecycles.
- `parcels/chat.js` — Always‑on chat widget lifecycles with simulated messages.
- `src/theme.css` — Global CSS variables for all brands and base shell styles.
- `src/mui.css` — MUI‑compatible CSS helpers for shared UI look/feel.
- `src/brand-switcher.js` — Dropdown and route‑based brand enforcement (Atlantic/Pacific for training A/B).
- `src/shell-header.js` — SPA navigation link handling + import‑map overrides UI toggles.
- `src/dynamic-import-map.js` — On localhost, rewrites import map entries to local dev/preview ports.
- `src/env-config.js` — Placeholder for environment flags prior to boot.
- `src/routes.layout.html` — Declarative routes for Single‑SPA layout engine.
- `src/root-config.js` — Registers micro‑frontends, redirects `/training` → `/training/a`, activates layout engine.

## Owner Portal — `owner-portal/apps/owner-portal-web`

- `vite.config.mts` — Module Federation config; exposes `./root` and widgets; marks React/ReactDOM as singletons.
- `src/` — React source (root lifecycle and widgets).
- `dist/remoteEntry.js` — MF container entry consumed by the shell.
- `dist/assets/*` — Hashed chunks referenced by `remoteEntry.js`.
- `index.html` — Vite template (not used by the shell directly in MF mode).

## Owner Portal Native — `owner-portal/apps/owner-portal-native`

- `App.js` — React Native app that lazy‑loads a widget from the web owner portal.
- `repack.config.js` — Remote configuration for module federation in the native bundler.
- `metro.config.js` / `babel.config.js` — RN bundler configs.
- `index.js` — Entry point for native app.

## Shared UI — `owner-portal/libs/shared-ui`

- `src/index.ts` — Exports framework‑agnostic UI components and `ThemeProvider`.
- `src/components/*.tsx` — Minimal components that rely on shell CSS variables.
- `dist/*` — Prebuilt output used by MFEs.
- `package.json` / `tsconfig.json` — Library metadata and TypeScript config.

## Training A — `training-a` (Angular)

- `src/main.single-spa.ts` — Exposes Angular lifecycles via `single-spa-angular`.
- `src/app/app.component.ts` — Demo component content.
- `dist/main.single-spa.js` — Built entry referenced by the shell import map.
- `angular.json` / `tsconfig.json` — Angular build configuration.
- `cors_server.py` — Simple CORS static server for `dist/` (port 4200 in examples).
- `README.md` — How to run/build this MFE.

## Training B — `training-b` (React Native Web)

- `src/main.single-spa.js` — Plain ESM lifecycles that render DOM (no framework runtime required).
- `src/App.tsx` / `src/main.tsx` — RN Web example app and entry when developing standalone.
- `dist/main.single-spa.js` — Built lifecycle module consumed by the shell.
- `simple_server.py` — Simple CORS server for `dist/` (port 4201 in examples).
- `vite.config.ts` — Vite build config for both standalone and single‑spa outputs.
- `README.md` — How to run/build this MFE.

## Maintenance — `maintenance` (Vue)

- `src/main.ts` — `single-spa-vue` lifecycles + runtime CSS injection + `process.env` guard.
- `dist/main.js` — Library build consumed by the shell.
- `dist/style.css` — Extracted CSS injected during `mount` and removed on `unmount`.
- `vite.config.ts` — Library build with `define: { 'process.env.NODE_ENV': '…' }` for stability.
- `README.md` — How to run/build this MFE.

## Parcels — `parcels`

- `notifications.js` — Parcel with simple UI and immediate mount.
- `chat.js` — Parcel that simulates new messages every 5 seconds.

## Top‑Level Utilities

- `start-dev.sh` / `stop-dev.sh` — Shell scripts to launch/stop multiple dev servers (if used in your environment).
- `*.zip` archives — Snapshots of the apps; not used at runtime.

