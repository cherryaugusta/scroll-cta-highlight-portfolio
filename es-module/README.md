# Scroll CTA Highlight – ES Module + TypeScript

## About
This subproject provides a **vanilla JavaScript / TypeScript ES module** implementation of a scroll-triggered Call-to-Action (CTA) highlight feature.

**License:** MIT – see [LICENSE](../LICENSE)

---

## Features
- Scroll Highlight: Button changes style after scrolling past threshold
- Configurable scroll threshold and styles
- Optional click handler via `buttonSelector`
- Accessible: Focus outlines, reduced-motion support
- Unit tested with Vitest + jsdom

---

## Folder Structure

es-module/
├── demo/ # Demo page
├── dist/ # Compiled TypeScript output
├── node_modules/
├── src/
│ ├── core/ # Main logic (createScrollCta, scrollHandler, types)
│ ├── index.ts # Exports
│ └── styles/ # scrollCta.css
├── tests/ # Vitest + jsdom tests
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── .eslintrc.cjs
├── .prettierrc
├── .editorconfig
├── LICENSE
└── README.md

---

## Prerequisites
- Node.js ≥ 20  
- npm ≥ 9  

---

## Installation

```bash
cd es-module
npm install
npm run build
```

---

## Usage
Open demo/index.html or import the module:
```
import { createScrollCta } from './core/createScrollCta.js';

createScrollCta({
  buttonSelector: '#cta-button',
  threshold: 300,
  highlightClass: 'highlight-style',
  defaultClass: 'default-style'
});
```

---

## Options
Option	Default	Description
buttonSelector	#cta-button	Selector for CTA button
threshold	500	ScrollY value to trigger highlight
defaultClass	default-style	Normal button style
highlightClass	highlight-style	Highlighted button style

---

## Testing
```
npm test
```

---

## Linting & Formatting
```
npm run lint
npm run format
```
Configured via ESLint, Prettier, and .editorconfig.

---
