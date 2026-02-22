# ES Module + TypeScript – Scroll CTA Highlight

## Overview
This subproject demonstrates a scroll-triggered CTA highlight using a vanilla ES Module with TypeScript.

---

## Installation
```
npm install
npm run build
```

---

## Demo
Open demo/index.html in a browser to see the CTA button highlight after scrolling past the threshold.

---

## Usage
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

## Testing
```
npm test
```

---

## Project Structure
```
es-module/
├── LICENSE
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── demo/index.html
├── src
│   ├── index.ts
│   ├── core
│   │   ├── createScrollCta.ts
│   │   ├── scrollHandler.ts
│   │   └── types.ts
│   └── styles/scrollCta.css
└── tests/scrollCta.test.ts
```

---

## Props / Options (ES Module)
Option	Default	Description
buttonSelector	#cta-button	Selector for the CTA button
threshold	500	ScrollY value to trigger highlight
defaultClass	default-style	Normal button style
highlightClass	highlight-style	Highlighted button style

---

## License
MIT License – see LICENSE

---
