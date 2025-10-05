# ABC Aviation Root Shell

This repository contains the single‑spa **root shell** for the ABC Aviation platform.  It hosts the import map, layout engine template, global navigation and theme definitions.  Micro‑frontends for the owner portal, training, maintenance and shared parcels are loaded dynamically via import maps.

## Features

* **Import Maps** with `imports` and `scopes` to map micro‑frontends and per‑tenant overrides.
* **Layout Engine** using `single-spa-layout` to declaratively map routes to DOM slots.
* **Brand Switcher** that updates CSS variables based on tenant selection.  The root stylesheet defines variables for multiple brands (A, B, C, Atlantic, Pacific).
* **Parcels** for notifications and chat that mount persistently across all routes.
* Integrated with `import-map-overrides` and the single‑spa inspector for a great developer experience.

## Getting started

Install dependencies and start a simple HTTP server:

```bash
yarn install
yarn start
```

Then open `http://localhost:9000` in your browser.  Use the brand switcher to change themes and observe how the CSS variables propagate to child applications.

This shell is intended to be consumed by downstream micro‑frontends.  The import map points to local files under `owner-portal-web`, `training-a`, `maintenance` etc.  Replace these paths with your deployed remote URLs in production.