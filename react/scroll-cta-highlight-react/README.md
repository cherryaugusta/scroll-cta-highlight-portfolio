# Scroll CTA Highlight – React + TypeScript

## About
This subproject provides a **React component** implementation of a scroll-triggered Call-to-Action (CTA) highlight feature using TypeScript and Vite.

**License:** MIT – see [LICENSE](../LICENSE)

---

## Features
- Scroll Highlight: Button changes style after scrolling past threshold
- Optional `onClick` handler
- Configurable scroll threshold and styles
- Accessible: Focus outlines, reduced-motion support
- Unit tested with Vitest + @testing-library/react

---

## Folder Structure

scroll-cta-highlight-react/
├── public/ # Root HTML
├── src/
│ ├── components/ # ScrollCta.tsx
│ ├── App.tsx
│ ├── main.tsx # ReactDOM entry
│ └── index.css # Styles
├── package.json
├── tsconfig.json
├── vite.config.ts
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

## Installation & Development

```
cd react/scroll-cta-highlight-react
npm install
npm run dev
Open http://localhost:5173 to view in browser.
```

---

## Usage
```
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

## Props
Prop	Default	Description
threshold	500	ScrollY value to trigger highlight
defaultClass	default-style	Normal button style
highlightClass	highlight-style	Highlighted button style
label	Sign Up	Button text
onClick	undefined	Optional click handler

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
