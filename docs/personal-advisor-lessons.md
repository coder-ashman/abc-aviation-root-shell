# Project Rebuild Lessons: LifeNexus (Personal Advisory System)

We’ll rebuild a platform like this repo from scratch, but for a new idea: LifeNexus — a personal advisory system split into micro‑frontends.

Starter templates live at `templates/lifenexus/`.

- Finance (budgeting, goals)
- Health (habits, check‑ins)
- Calendar & Email (scheduling + inbox preview)
- Media (TV & Movies tracker)
- Messaging (texts/DMs hub)

Each lesson is bite‑sized, explains a core concept (referencing “Single‑SPA for Dummies”), and ends with a hands‑on lab. Use the templates as a base where available.

## Lesson 1 — The Mall and the Stores (Concepts + Shell)
- Goal: Understand the big picture and scaffold a Single‑SPA shell.
- Read: “Single‑SPA for Dummies” sections: Big Ideas, How It Boots Up.
- Do:
  1. Create a new folder `lifenexus-root-shell`.
  2. Add an `index.html` with an import map (empty for now), header, and `<single-spa-router>` layout with `<main id="main-slot">` and `<aside id="aside-slot">`.
  3. Add `src/root-config.js` that imports `single-spa`, constructs routes from the router element, and calls `start()`.
- Checkpoint: Load `http://localhost:9000` and see an empty shell with a header and content area.

## Lesson 2 — Import Maps 101 (Pointing Names to URLs)
- Goal: Load a stub “Hello World” micro‑frontend.
- Read: “Import Map” in Dummies guide.
- Do:
  1. Create a tiny ESM file `http://localhost:5001/hello.js` that exports single‑spa lifecycles (`bootstrap/mount/unmount`) and appends a `<div>Hello LifeNexus</div>`.
  2. In the shell import map, add `"@lifenexus/hello": "http://localhost:5001/hello.js"`.
  3. In `root-config.js`, `registerApplication({ name: '@lifenexus/hello', app: () => import('@lifenexus/hello'), activeWhen: ['/'] })`.
- Checkpoint: Visit `/` and see “Hello LifeNexus.”

## Lesson 3 — Better Layout with the Layout Engine
- Goal: Use `single-spa-layout` to declare routes in HTML.
- Read: Dummies guide: “Where Everything Lives → Root Shell.”
- Do:
  1. Add `<route path="/"> <application name="@lifenexus/hello"></application> </route>` inside `<single-spa-router>`.
  2. In `root-config.js`, construct routes with `constructRoutes` and activate `layoutEngine`.
- Checkpoint: Same view, but now layout is declarative.

## Lesson 4 — Theming with CSS Variables
- Goal: Create a global theme using CSS variables.
- Read: Dummies guide: “Theming.”
- Do:
  1. Add `src/theme.css` with `:root` variables like `--color-primary-rgb`.
  2. Add a simple brand switcher that changes `data-brand` on `<html>` and stores choice in `localStorage`.
- Checkpoint: Clicking the brand switcher changes shell header colors.

## Lesson 5 — Parcels: Always‑On Widgets
- Goal: Add a notifications parcel that always appears in the sidebar.
- Read: Dummies guide: “Parcels.”
- Do:
  1. Create `/parcels/notifications.js` exporting single‑spa parcel lifecycles.
  2. In the shell, manually mount it via `mountRootParcel` to `#aside-slot`.
- Checkpoint: Sidebar shows “Notifications” and updates every few seconds.

## Lesson 6 — LifeNexus Finance (React + Module Federation)
- Goal: Build the Finance app in React and expose it over Module Federation.
- Read: Dummies guide: “Owner Portal (React + MF).”
- Do:
  1. Scaffold `apps/finance-web` with Vite React.
  2. Configure Module Federation to expose `./root` lifecycle and `./BudgetWidget`.
  3. `yarn build && yarn preview --port 5174`.
  4. Import map: `"@lifenexus/finance": "http://localhost:5174/remoteEntry.js"`.
  5. In the shell, register `@lifenexus/finance` at `/finance`.
- Lab: Render a simple monthly budget chart and expose a small widget remote.
- Checkpoint: `/finance` mounts correctly and loads chunks from `/assets/*`.

## Lesson 7 — LifeNexus Health (Angular + single‑spa)
- Goal: Build the Health app with Angular lifecycles.
- Read: Dummies guide: “Training A (Angular).”
- Do:
  1. Scaffold Angular app `apps/health`.
  2. Add `src/main.single-spa.ts` lifecycles using `single-spa-angular`.
  3. Build: `ng build` → serve `dist/main.single-spa.js` on port 4200.
  4. Register at `/health`.
- Lab: Show habits list with add/remove.
- Checkpoint: Navigation to `/health` mounts Angular app.

## Lesson 8 — LifeNexus Messages (React Native Web + single‑spa)
- Goal: Build the Messages app with React Native primitives compiled to web.
- Read: Dummies guide: “Training B (RN Web).”
- Do:
  1. Scaffold `apps/messages` with Vite React.
  2. Create a plain ESM `dist/main.single-spa.js` implementing lifecycles that render DOM.
  3. Serve on port 4201 and register at `/messages`.
- Lab: Simulate a conversation list; add a “New message” button.
- Checkpoint: `/messages` mounts and unmounts cleanly.

## Lesson 9 — LifeNexus Media (Vue + single‑spa‑vue)
- Goal: Build the Media app with Vue and dynamic CSS injection.
- Read: Dummies guide: “Maintenance (Vue).”
- Do:
  1. Scaffold `apps/media` with Vite Vue in library mode.
  2. Export lifecycles from `src/main.ts` via `single-spa-vue`.
  3. Inject `style.css` on mount; remove on unmount.
  4. Serve `dist/main.js` on port 4202; register `/media`.
- Lab: List shows you’re tracking and a watchlist.
- Checkpoint: `/media` shows cards with proper Vue styling.

## Lesson 10 — LifeNexus Calendar & Email (Choose Your Framework)
- Goal: Add Calendar & Email as your preferred framework (React/Angular/Vue).
- Read: Any of the previous framework sections.
- Do:
  1. Scaffold and expose lifecycles.
  2. Register at `/calendar`.
- Lab: Calendar grid and simple inbox preview.
- Checkpoint: `/calendar` route works.

## Lesson 11 — Shared Libraries (UI + Domain Rules)
- Goal: Create framework‑agnostic UI and logic shared across MFEs.
- Read: Dummies guide: “Shared UI Library” and “Shared domain rules.”
- Do:
  1. Create `libs/shared-ui` with simple HTML/CSS components.
  2. Create `libs/domain-rules` with pure functions (e.g., budget math, health scores).
  3. Import and use them from at least two MFEs.
- Lab: Move any duplicate logic into `domain-rules`.
- Checkpoint: UI looks consistent and logic is reused.

## Lesson 12 — Dynamic Import Map Overrides
- Goal: Swap remote URLs without rebuilding the shell.
- Read: Dummies guide: “Dynamic Import Map Overrides.”
- Do:
  1. Integrate `import-map-overrides` UI in your shell.
  2. Use a dev script to rewrite the import map to local servers.
- Lab: Flip Finance from prod to local preview.
- Checkpoint: You can point to different versions live.

## Lesson 13 — Routing, Nav, and Active Links
- Goal: Client‑side navigation that updates highlighting and prevents full reloads.
- Read: Dummies guide: “Shell header navigation.”
- Do:
  1. Add `shell-header.js` logic similar to this repo.
  2. Highlight the active link; pushState without reloading.
- Lab: Add hash and search param handling.
- Checkpoint: Links feel SPA‑smooth.

## Lesson 14 — Tenant/Brand Themes
- Goal: Swap CSS variables based on brand selection or route.
- Read: Dummies guide: “Brand switcher.”
- Do:
  1. Add 2–3 brands and auto‑apply based on route (e.g., `/finance` gets “MoneyGreen”).
  2. Store manual selection in localStorage.
- Lab: Create a “Dark Mode” variant using a data attribute.
- Checkpoint: Theme changes instantly across MFEs.

## Lesson 15 — Troubleshooting and Quality Gates
- Goal: Establish a reliable dev workflow.
- Read: Dummies guide: “Troubleshooting Cheatsheet.”
- Do:
  1. Scripts to build + preview each MFE on fixed ports.
  2. Shell proxy for `/assets/*` to avoid 404s.
  3. Version pinning for shared libs and React/Vue singletons.
- Lab: Intentionally break an import map URL and diagnose the failure.
- Checkpoint: You can recover quickly from common issues.

---

By the end of these lessons, you will have:
- A reusable shell that can host any framework.
- 5+ micro‑frontends mounted by URL.
- Shared UI and domain logic across apps.
- Dynamic theming and import map overrides.
- A mental model that lets you extend LifeNexus (or this aviation platform) with confidence.
