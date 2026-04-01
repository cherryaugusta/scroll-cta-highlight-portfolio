# Scroll CTA Highlight Portfolio

## About
**Repository Name:** `scroll-cta-highlight-portfolio`  
**Description:** Frontend portfolio project demonstrating scroll-triggered CTA highlights using ES Module + TypeScript and React + TypeScript.  
**Topics/Tags:** `typescript`, `react`, `esmodule`, `scroll-cta`, `frontend`, `portfolio`, `vitest`, `eslint`, `prettier`

**Disclaimer:** This project is intended for educational use and portfolio presentation. It demonstrates implementation patterns, testing, and tooling setup for frontend interaction design. It is not presented as a production deployment artifact.

---

## Project Overview

This repository contains two independent implementations of a scroll-triggered Call-to-Action (CTA) highlight pattern:

1. **ES Module + TypeScript** — framework-agnostic implementation for vanilla browser usage  
2. **React + TypeScript (Vite)** — component-based implementation for modern frontend applications  

Both implementations are designed to demonstrate:

- scroll-based CTA state changes after a configurable threshold
- configurable default and highlighted styling
- optional click interaction handling
- automated testing with Vitest and jsdom
- linting and formatting with ESLint and Prettier
- maintainable frontend project structure suitable for portfolio review

---

## Why This Repository Exists

This project is designed to showcase frontend engineering fundamentals through a focused UI interaction pattern. It highlights:

- TypeScript-based UI logic
- reusable component and module design
- scroll-driven state management
- accessibility-aware interaction design
- testable frontend behavior
- consistent linting and formatting practices
- clean separation between framework-agnostic and framework-specific implementations

---

## Key Technical Signals

This repository demonstrates the following engineering themes:

- **Type-safe frontend implementation** using TypeScript in both vanilla and React contexts
- **modular design** through isolated CTA highlight behavior
- **framework comparison** by implementing equivalent behavior in ES Modules and React
- **testing discipline** with Vitest and jsdom
- **tooling quality** with ESLint and Prettier
- **portfolio readiness** through a clear repository structure and documented usage paths

---

## Features

- **Scroll Highlight:** CTA visual state changes after scrolling beyond a threshold
- **Configurable Threshold:** Highlight trigger point can be adjusted
- **Custom Styling Hooks:** Default and highlight classes can be supplied
- **Optional Click Handler:** Supports CTA interaction behavior
- **Accessible Interaction Pattern:** Includes focus styling and reduced-motion awareness
- **Two Implementations:** ES Module version and React version in the same repository
- **Automated Testing:** Unit tests verify scroll behavior and click interaction

---

## Folder Structure

```text
scroll-cta-highlight-portfolio/
├── .venv/                       # Optional Python virtual environment
├── LICENSE
├── README.md
├── es-module
│   ├── LICENSE
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── vitest.config.ts
│   ├── demo
│   │   └── index.html
│   ├── src
│   │   ├── index.ts
│   │   ├── core
│   │   │   ├── createScrollCta.ts
│   │   │   ├── scrollHandler.ts
│   │   │   └── types.ts
│   │   └── styles
│   │       └── scrollCta.css
│   └── tests
│       └── scrollCta.test.ts
└── react
    └── scroll-cta-highlight-react
        ├── .eslintrc.cjs
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── LICENSE
        ├── package.json
        ├── package-lock.json
        ├── README.md
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        ├── vite.config.ts
        ├── .vscode
        │   ├── extensions.json
        │   └── settings.json
        ├── public
        │   └── vite.svg
        └── src
            ├── App.css
            ├── App.tsx
            ├── index.css
            ├── main.tsx
            ├── setupTests.ts
            ├── assets
            │   └── react.svg
            └── components
                ├── ScrollCta.test.tsx
                └── ScrollCta.tsx
````

---

## Prerequisites

Install the following before running the project:

* Node.js 20 or newer
* npm 9 or newer
* Visual Studio Code
* Git
* Optional: Python 3.10 or newer for `.venv`

Verify your environment:

```bash
node --version
npm --version
git --version
```

---

## Installation

### ES Module implementation

```bash
cd es-module
npm install
npm run build
```

### React implementation

```bash
cd react/scroll-cta-highlight-react
npm install
npm run dev
```

If a command hangs or needs to be interrupted, press:

```text
CTRL + C
```

---

## Usage Examples

### ES Module

```ts
import { createScrollCta } from './core/createScrollCta.js';

createScrollCta({
  buttonSelector: '#cta-button',
  threshold: 300,
  highlightClass: 'highlight-style',
  defaultClass: 'default-style'
});
```

### React

```tsx
import ScrollCta from './components/ScrollCta';

function App() {
  return (
    <div style={{ height: '2000px', padding: '50px' }}>
      <ScrollCta
        threshold={300}
        label="Sign Up"
        onClick={() => alert('Button clicked!')}
      />
    </div>
  );
}

export default App;
```

---

## Configuration Reference

| Option / Prop    | Default           | Description                                    |
| ---------------- | ----------------- | ---------------------------------------------- |
| `threshold`      | `500`             | `scrollY` value that triggers CTA highlighting |
| `defaultClass`   | `default-style`   | Default CTA button class                       |
| `highlightClass` | `highlight-style` | Highlighted CTA button class after threshold   |
| `label`          | `Sign Up`         | Button text for the React component only       |
| `onClick`        | `undefined`       | Optional click handler for the React component |
| `buttonSelector` | `#cta-button`     | DOM selector for the ES Module implementation  |

---

## Testing

### ES Module

```bash
cd es-module
npm test
```

### React

```bash
cd react/scroll-cta-highlight-react
npm test
```

Testing coverage is intended to verify:

* highlight state changes after scroll threshold
* default state before threshold
* click handler behavior where applicable

---

## Linting and Formatting

Run the following from the relevant package directory:

```bash
npm run lint
npm run format
```

This repository uses:

* ESLint for linting
* Prettier for code formatting
* shared TypeScript configuration for maintainability

---

## CI Workflow

GitHub Actions can be used to automatically:

1. install dependencies
2. run ESLint
3. build the project
4. run tests

Example workflow:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Dependencies
        run: npm install

      - name: Run Lint
        run: npx eslint src --ext .ts,.tsx

      - name: Build Project
        run: npm run build

      - name: Run Tests
        run: npm test
```

---

## Suggested Repository Metadata

For stronger GitHub presentation, use:

* **Repository name:** `scroll-cta-highlight-portfolio`
* **Description:** `Frontend portfolio project demonstrating scroll-triggered CTA highlights with ES Modules, TypeScript, React, and Vitest`
* **Topics:** `typescript`, `react`, `esmodule`, `frontend`, `portfolio`, `vitest`, `eslint`, `prettier`, `ui-interaction`, `scroll-cta`

---

## Notes

* The root `LICENSE` file applies to the repository as a whole.
* Subproject `LICENSE` files may be retained if you want each package to remain explicitly self-contained.
* `.venv/` is optional and not required for the Node-based implementations.
* This repository is most effective as a portfolio artifact showing frontend interaction engineering rather than as a standalone product.

---

## License

This repository is licensed under the MIT License.

Copyright (c) 2026 Cherry Augusta

See the [LICENSE](./LICENSE) file for full details.

---