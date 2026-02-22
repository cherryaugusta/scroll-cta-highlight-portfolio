# React + TypeScript – Scroll CTA Highlight

## Overview
This subproject demonstrates a scroll-triggered CTA highlight using React + TypeScript (Vite).

---

## Installation
```
npm install
npm run dev
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

## Testing
```
npm test
```

---

## Project Structure
```
scroll-cta-highlight-react/
├── LICENSE
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── components/
│       ├── ScrollCta.tsx
│       └── ScrollCta.test.tsx
```

---

## Props / Options (React)
Prop	Default	Description
threshold	500	ScrollY value to trigger highlight
defaultClass	default-style	Normal button style
highlightClass	highlight-style	Highlighted button style
label	Sign Up	Button text
onClick	undefined	Optional click handler

---

## License
MIT License – see LICENSE

---