# Single‑SPA for Dummies: A Friendly Guide to This Repo

This guide explains the entire workspace in simple, practical language. If you can browse the web and use a code editor, you can understand how this micro‑frontend platform works.

Think of the app like a shopping mall:
- The mall building is the Shell — it sets up the map and provides the signs, lighting, and theme colors.
- Each store is a Micro‑Frontend — a separate app that can open and close without shutting down the mall.
- Shared aisles and signs are Shared Libraries — reusable parts that every store can use.

Below you’ll see what each part does and how they all fit together.

## What We’re Building

The ABC Aviation platform is built from multiple micro‑frontends (MFEs):
- Owner Portal (React + Module Federation)
- Training A (Angular, single‑spa lifecycles)
- Training B (React Native Web + single‑spa)
- Maintenance (Vue + single‑spa‑vue)
- Always‑on Parcels for Notifications and Chat

All of these load into a single web page controlled by the Root Shell using a framework called Single‑SPA.

## The Big Ideas (No Buzzwords Needed)

- Single‑SPA: Lets multiple apps live on one page and mount/unmount based on the URL. Each app exports `bootstrap`, `mount`, and `unmount` functions.
- Import Map: A JSON map in the HTML that says “the name @owner-portal/web means load this URL.”
- Module Federation: A way for a bundle to expose modules (like components) to others at runtime. We only use it for the React Owner Portal.
- Preview vs Dev: For Owner Portal we must serve the built files with `vite preview` so `remoteEntry.js` exists and loads properly in the shell.
- Parcels: Small widgets that can be mounted anywhere on the page, separate from big apps (we use these for notifications and chat).
- Theming: We use CSS variables on the `<html>` element to define brand colors. Switching brand = switching variables.

## Where Everything Lives (Codebase Tour)

Paths are relative to the root: `…/abc-aviation-root-shell` is the shell. Other apps sit alongside it.

### Root Shell (abc-aviation-root-shell)
- `index.html` — Global import map, navigation, and layout slots.
  - `index.html:10-33` defines the import map. Entries like `"@owner-portal/web": "http://localhost:4173/remoteEntry.js"` tell the browser where to fetch each app.
  - `index.html:50-55` top navigation links (Owner, Training A/B, Maintenance).
  - `index.html:64-87` defines the page layout using `<single-spa-router>` slots.
- `src/root-config.js` — Registers apps with Single‑SPA.
  - `src/root-config.js:10-16` ensures `/training` redirects to `/training/a`.
  - `src/root-config.js:21-38` Owner Portal registration using Module Federation container.
  - `src/root-config.js:39-48` Training A/B registration.
  - `src/root-config.js:49-53` Maintenance registration.
  - `src/root-config.js:56` activates the layout engine.
- `src/routes.layout.html` — Declarative routes for the layout engine.
  - `src/routes.layout.html:7-13` Training routes for A and B.
- `src/theme.css` — Defines theme variables per brand (A, B, C, Atlantic, Pacific).
  - We set `data-brand` on `<html>` to switch theme globally.
- `src/brand-switcher.js` — The dropdown that changes the brand and auto‑applies “Atlantic” for `/training/a` and “Pacific” for `/training/b`.
  - `src/brand-switcher.js:7-11` route‑to‑brand rules.
  - `src/brand-switcher.js:13-23` initial brand resolution and guard.
- `src/shell-header.js` — Click‑to‑navigate links, import‑map overrides button, and “reset overrides.”
- `src/dynamic-import-map.js` — In dev on localhost, rewrites the import map to point to local preview servers.
  - Uses `DEV_SERVERS` to change entries like `@crew/training-a` and `@maintenance/app`.
- `scripts/prebuild.js` — A node script run before serve/build to inject the correct URLs for dev or prod.
- `proxy-server.js` — Express server that proxies `/assets/*` to Owner Portal preview to avoid 404s and CORS.
- `parcels/` — Small always‑on widgets.
  - `parcels/notifications.js` and `parcels/chat.js` each export `bootstrap/mount/unmount` and append DOM to the aside slot.

### Owner Portal (owner-portal/apps/owner-portal-web)
- React 18 + Vite + Module Federation.
- Built with `vite build` and served with `vite preview --port 4173`.
- `vite.config.mts` exposes `./root` (app lifecycle) and `./OwnerDashboardWidget` via Module Federation and marks React as a singleton.
- `dist/remoteEntry.js` serves as the MF entry and references hashed JS chunks in `dist/assets`.

### Owner Portal Native (owner-portal/apps/owner-portal-native)
- React Native (Re.Pack) sample app that lazily imports a widget from Owner Portal web.
- Shows code sharing with `@shared/domain-rules` and `@shared/ui`.

### Shared UI Library (owner-portal/libs/shared-ui)
- Framework‑agnostic UI: exports `PilotCard`, `StatusChip`, `TrainingStatusTile`, `Button`, `ThemeProvider`.
- The `ThemeProvider` is a no‑op wrapper here because the shell’s CSS variables drive theme.

### Training A (training-a)
- Angular app that exports single‑spa lifecycles from `src/main.single-spa.ts`.
- Built to `dist/main.single-spa.js`. Import map points to that file.

### Training B (training-b)
- React Native Web app compiled via Vite to a simple `dist/main.single-spa.js` that exports lifecycles.
- We implemented the lifecycle file as plain ESM so single‑spa can import it directly.

### Maintenance (maintenance)
- Vue 3 app built in library mode to `dist/main.js`, with lifecycles exported from `src/main.ts` via `single-spa-vue`.
- Injects its generated `style.css` dynamically on mount and cleans up on unmount.

## How It All Boots Up

1. Browser loads `abc-aviation-root-shell/index.html`.
2. Import map tells the browser where `@owner-portal/web`, `@crew/training-a`, etc. live.
3. `src/root-config.js` registers the apps, telling single‑spa: “Mount this app when the URL starts with `/training/a`, etc.”
4. When you click a link, single‑spa loads that app’s module, calls `bootstrap()`, then `mount()` and puts its UI in the main slot.
5. Change the brand in the header (or navigate to training A/B) and the CSS variables swap, recoloring everything.

## Local Development Ports (Memorize These)

- Shell: 9000 (served with `serve` script or custom proxy server)
- Owner Portal Web: 4173 (vite preview — production build)
- Training A: 4200 (static server with CORS; serves `main.single-spa.js`)
- Training B: 4201 (static server with CORS; serves `main.single-spa.js`)
- Maintenance: 4202 (vite preview — production build)

Tip: If something 404s, check the port and path in the import map.

## Troubleshooting Cheatsheet

- “MF remoteEntry not found” → Ensure Owner Portal runs in preview mode, not dev.
- “LOADING_SOURCE_CODE undefined” → Import map URL is wrong (404), or preview server isn’t running.
- Vue errors for `process.env` → Define it in build or polyfill it (we do both).
- Missing styles in Vue maintenance → Ensure `style.css` is injected on mount.
- Parcels not visible → Make sure they’re manually mounted (or verify aside slot exists).

You’ve got this. The shell is the mall, the MFEs are stores, and the import map is your directory of stores.

