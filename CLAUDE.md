# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page Vue 3 portfolio/press site for Peter Paige (writer/director/showrunner). Deployed to a custom domain (peterpaige.tv) via GitHub Pages.

## Commands

```sh
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # vite build, then copies 404.html into dist/ (see package.json "copy" script)
npm run preview   # preview the production build locally
npm run lint      # eslint . --fix
npm run format    # prettier --write src/
```

There is no test suite/runner configured in this repo.

Deployment is automatic: pushing to `main` triggers `.github/workflows/main.yml`, which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages.

## Architecture

Everything renders through one route. `src/router/index.js` defines a single real page (`Home` at `/`); `/contact` and any unmatched path redirect back to `/` (with `/contact` redirecting to the `#contact` hash). Navigation is done by scrolling to in-page section anchors, not by routing to separate pages — `NavBar.vue` and `AppFooter.vue` both link via `{ path: '/', hash: '#section-id' }`, and the router's `scrollBehavior` smooth-scrolls to the hash.

`src/views/Home.vue` is the page composition root: it hardcodes the content data (the `shows` and `films` arrays — title, blurb, image URL, IMDb link) inline in its `<script setup>` and passes it into presentational components as props, in this order: `HeroSection` → `ReelPlayer` (directing reel) → `MediaGrid` (television) → `MediaGrid` (filmography) → `ReelPlayer` (acting reel) → `AboutBlocks` → `ContactSection`. To add/edit/reorder shows or films, edit the arrays in `Home.vue` directly.

Components in `src/components/` are generic/reusable, driven entirely by props — they hold no content of their own (except `AboutBlocks.vue` and `ContactSection.vue`, which are static/single-use and hardcode their own copy):
- `ReelPlayer.vue` — embeds a Cloudflare Stream video (`videoId`) with a poster thumbnail, used for both the directing and acting reels.
- `MediaGrid.vue` — a 3-up card grid of titles linking out to IMDb; `tone` picks an accent color wash, `showFlags` controls whether a role badge overlays each poster.

`src/config/features.json` holds a single feature flag, `showRoleFlags`, passed into the television `MediaGrid` to toggle the role-badge overlay (e.g. "Co-creator") on/off without touching data.

### Styling / design tokens

All design tokens (colors, spacing, fonts, radii) are CSS custom properties defined in `src/assets/base.css` under `:root`, imported by `src/assets/main.css`. The site supports light/dark: tokens are redefined under `@media (prefers-color-scheme: light)` and again under explicit `:root[data-theme='dark']` / `:root[data-theme='light']` selectors for a manual override, though no theme toggle is currently wired up in the UI. Every component uses `<style scoped>` and consumes these tokens (`var(--accent)`, `var(--sp-6)`, etc.) rather than hardcoding values. Section max-width is consistently `1180px` with `clamp()` inline padding — match this when adding new sections.

### Path alias

`@/` resolves to `src/` (configured in both `vite.config.js` and `jsconfig.json`). Use it for imports instead of relative paths, matching existing code (e.g. `@/components/NavBar.vue`).

### Known TODO in the codebase

`src/components/ContactSection.vue` has a `// TODO` noting the contact email/representation info is a placeholder pending the real details.
