# LifeNexus Templates

Starter templates for the lessons in `docs/personal-advisor-lessons.md`.

Contents:
- `root-shell/` — Minimal Single‑SPA shell with import map, layout, and theme.
- `apps/finance-web/` — React + Vite + Module Federation exposing `./root`.
- `apps/messages/` — React Native Web style, but ships plain single‑spa lifecycles.
- `apps/media-vue/` — Vue 3 library build + single‑spa‑vue lifecycles.

Note: The Angular Health and Calendar/email apps are framework‑choice lessons — use these as patterns.

Quick start example (Finance + Messages + Media + Shell):

1) Finance Web
cd templates/lifenexus/apps/finance-web
yarn && yarn build && yarn preview --port 5174

2) Messages
cd ../messages
yarn && yarn build && npx serve dist -l 4201

3) Media (Vue)
cd ../media-vue
yarn && yarn build && yarn preview --port 4202

4) Shell
cd ../../root-shell
npm i -g serve
serve -l 9001

Then open http://localhost:9001 and update the import map URLs as needed.

