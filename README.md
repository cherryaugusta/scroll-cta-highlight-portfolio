
# Scroll CTA Highlight Portfolio

## About
**Repository Name:** scroll-cta-highlight-portfolio  
**Description:** Frontend portfolio project demonstrating scroll-triggered CTA highlights using ES Module + TypeScript and React + TypeScript.  
**Topics/Tags:** `typescript`, `react`, `esmodule`, `scroll-cta`, `frontend`, `portfolio`, `vitest`, `eslint`, `prettier`  

**Disclaimer:** This project is for educational purposes and portfolio showcase only. Not intended for production use.

---

## Project Overview
This project demonstrates two independent implementations of a scroll-triggered Call-to-Action (CTA) highlight feature:

1. **ES Module + TypeScript** – vanilla JS/TS usage  
2. **React + TypeScript (Vite)** – React component for modern frameworks  

Both versions include:

- Dynamic CTA button highlighting on scroll past a configurable threshold  
- Configurable styling and scroll threshold  
- Optional click handlers for interaction  
- Automated testing with Vitest + jsdom  
- Linting and formatting with ESLint + Prettier  
- Continuous integration setup using GitHub Actions  

---

## Features
- **Scroll Highlight:** Button changes style after scrolling past threshold  
- **Click Handler:** Optional `onClick` function for CTA interaction  
- **Responsive & Accessible:** Focus outlines and reduced-motion support  
- **Independent Modules:** ES Module for vanilla JS, React component for modern frontend  
- **Testing:** Unit tests verifying highlight behavior and click interactions  

---

## Folder Structure

```

scroll-cta-highlight-portfolio/
├── .venv/                               # Optional Python virtual environment
├── .vscode/
│   ├── extensions.json                  # Recommended VS Code extensions
│   └── settings.json                    # Editor & formatting settings
├── es-module/                           # ES Module + TypeScript subproject
│   ├── demo/                            # Demo page
│   ├── dist/                            # Compiled output
│   ├── node_modules/
│   ├── src/
│   │   ├── core/                        # Main logic
│   │   ├── index.ts                      # Exports
│   │   └── styles/                       # CSS
│   ├── tests/                            # Vitest + jsdom tests
│   ├── package.json
│   ├── tsconfig.json
│   ├── vitest.config.ts
│   ├── .eslintrc.cjs
│   ├── .prettierrc
│   ├── .editorconfig
│   ├── LICENSE
│   └── README.md
├── react/
│   └── scroll-cta-highlight-react/      # React + TypeScript subproject
│       ├── public/                       # Root HTML
│       ├── src/
│       │   ├── components/              # ScrollCta.tsx
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css                 # Styles
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       ├── .eslintrc.cjs
│       ├── .prettierrc
│       ├── .editorconfig
│       ├── LICENSE
│       └── README.md
├── .gitignore
└── README.md

````

---

## Prerequisites
- Node.js ≥ 20  
- npm ≥ 9  
- Visual Studio Code  
- Git & GitHub account  
- Optional: Python ≥ 3.10 for `.venv`  

---

## Installation

### ES Module
```bash
cd es-module
npm install
npm run build
````

### React

```bash
cd react/scroll-cta-highlight-react
npm install
npm run dev
```

---

## Usage Examples

### ES Module

Open `demo/index.html` or import in your JS/TS:

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

## Props / Options

| Option / Prop    | Default           | Description                              |
| ---------------- | ----------------- | ---------------------------------------- |
| `threshold`      | `500`             | ScrollY value to trigger highlight       |
| `defaultClass`   | `default-style`   | Normal button style                      |
| `highlightClass` | `highlight-style` | Highlighted button style                 |
| `label`          | `Sign Up`         | Button text (React only)                 |
| `onClick`        | `undefined`       | Optional click handler (React only)      |
| `buttonSelector` | `#cta-button`     | Selector for CTA button (ES Module only) |

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

---

## Linting & Formatting

```bash
npm run lint
npm run format
```

Configured via ESLint, Prettier, and `.editorconfig`.

---

## CI/CD Workflow

GitHub Actions automatically:

1. Installs dependencies
2. Runs ESLint for linting
3. Builds the project
4. Runs unit tests

`.github/workflows/ci.yml`:

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

## License

MIT License – see [LICENSE](LICENSE)