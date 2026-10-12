# Metrecon Industries website (React + Vite)

## Run locally
```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Build for production
```bash
npm run build      # output goes to /dist
npm run preview    # test the production build
```

## Where to edit things
- `src/data.js`: industries, FAQ, sustainability steps, phone/email/address.
- `src/components/`: one file per page section (Hero, Industries, Silcon, Calculator, ...).
- `src/styles.css`: all styling. Brand colours are the CSS variables at the top (`--purple`, `--blue`, ...).
- `src/assets/`: logo and photos. Replace the .jpg files with the original high-resolution photos (keep the same file names).

## Notes
- The quote form opens the visitor's email app (mailto). For enquiries that land directly in your inbox, connect a form service (Formspree, Web3Forms, or your own API) in `src/components/Contact.jsx`.
- The calculator's dosage range (3 to 15%, default 8%) is an assumption. Have your technical team confirm it.
