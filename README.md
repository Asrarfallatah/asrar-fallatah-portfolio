# Asrar Fallatah Portfolio

A bilingual React + Vite portfolio built around Asrar's logo identity: orbit, signal, star mark, backend systems, and smooth motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The Vite base is configured for the repository name `asrar-fallatah-portfolio`.

```bash
npm run deploy
```

If the repository name changes, update `base` in `vite.config.js` and the `basename` in `src/main.jsx`.

## Notes

- Do not commit `node_modules` or `dist`.
- Public certificate files were removed; certificate links use bundled safe image previews.
- A GitHub Pages `404.html` fallback is included so archive routes can recover after refresh.
