# Klingström Group — Website

Marketing site for Klingström Group, a Scandinavian family holding company.
Built with **React + Vite + React Router**.

## Run

```bash
npm install
npm run dev
```

Dev server: http://localhost:5173 (also configured in `.claude/launch.json` as `site`).

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Design

“Modern heritage”, editorial cut: warm paper, deep green, Newsreader serif, brass
small-caps labels. Structure comes from asymmetric offset layouts, scale and whitespace —
deliberately not from hairline rules or symmetric card grids.

- **Identity**: the interlocked KG monogram (Playfair Display **regular/400** glyph
  outlines; the G is cut with an SVG mask where the K's leg crosses it, `CUT = 46`
  units in a 1000-unit em) — inline SVG in `src/components/icons.jsx` (`KMark`), used
  in the header, footer and favicon. To swap in the original artwork, replace
  `K_PATH`/`G_PATH` there. Keep the weight at 400: heavier cuts (500+) read as a blob
  at header size and out-weigh the serif wordmark beside it.
- **Palette**: warm paper `#F7F5EF`, ink `#1A1915`, green `#16402B`, brass `#8F7A4B`
- **Type**: [Newsreader](https://fonts.google.com/specimen/Newsreader) (display serif)
  and [Inter](https://fonts.google.com/specimen/Inter) (text/labels), from Google Fonts
- **Layout system**: `.offset` — a sticky brass label column left, content right; big
  serif statements with stepped supporting paragraphs; principles/tenets as stacked
  entries with italic serif numerals; holdings as a typographic index; facts as one
  composed serif passage instead of a stat grid
- **Header**: three-zone — small-caps links left, centered KG + serif wordmark,
  quiet Contact link right; renders white over the home hero, flips to paper on scroll
- **Hero video**: `public/hero.mp4` — aerial Nordic forest, 4.8 s at 1600 px,
  H.264 CRF 26 (~1.3 MB). Muted loop with scrim; pauses under `prefers-reduced-motion`;
  `public/hero-poster.jpg` paints first.
- **Family-principle band**: `public/road.jpg` — a Swedish tree-lined country road at
  golden hour, full-bleed behind the proverb, under a dark green-cast overlay
  (`.band--image::before`) so the cream serif stays legible. `.band--tall` gives the
  photograph extra height to breathe.
- **Founder's note**: the signed first-person letter on `/about`. Copy lives in
  `src/pages/About.jsx` under `.note`.
- All design tokens live at the top of `src/styles/global.css` in `:root`

## Structure

```
index.html                  Vite entry (fonts, favicon, meta)
src/
  main.jsx                  App bootstrap (router + global CSS)
  App.jsx                   Routes
  styles/global.css         The entire design system
  hooks/usePageTitle.js     Per-page document titles
  components/
    Layout.jsx              Header/footer shell, scroll reset, scroll-reveal observer
    Header.jsx              Sticky nav + mobile menu
    Footer.jsx
    icons.jsx               Brand mark + arrows
  pages/
    Home.jsx                Hero, principles, holdings preview, family principle, figures
    Holdings.jsx            Operating companies, principal investments, criteria
    Approach.jsx            Five tenets, three forms of ownership
    About.jsx               The name, the founder, timeline, governance
    Contact.jsx             Correspondence guidance and addresses
```

## Editing the portfolio

Each holding is one `.index-row` block — in `src/pages/Holdings.jsx` (full entry) and
`src/pages/Home.jsx` (preview list). Duplicate a block and change name / category /
description / link. Use `index-row--placeholder` (a `div`, not a link) for
unannounced positions.

## Branches

| Branch | Contents | Deploys |
|---|---|---|
| `production` | Under-construction holding page (`index.html`, no React) | **Yes** → klingstromgroup.com |
| `dev` | The full site — everything below | No |
| `main` | Shared ancestor of the two | No |

Work on `dev`. Nothing you push there can change the live site: the workflow
only triggers on `production`.

To launch, merge `dev` into `production` and take dev's `index.html` — that one
file is the entire difference between the branches:

```bash
git checkout production && git merge dev
git checkout dev -- index.html && git commit && git push
```

## Deploying

### GitHub Pages (configured)

`.github/workflows/deploy.yml` builds and publishes on every push to `production`.
In the repo, set **Settings → Pages → Build and deployment → Source: GitHub Actions**
once; after that every push deploys.

Two details make a Vite SPA work on Pages, both already handled:

- **Base path.** A project site is served from `/<repo>/`, so the workflow passes
  `VITE_BASE` from `actions/configure-pages`, `vite.config.js` normalises it, and
  `BrowserRouter` takes `basename={import.meta.env.BASE_URL}`. Files in `public/` are
  referenced through the `asset()` helper in `src/lib/asset.js` for the same reason —
  a bare `/hero.mp4` would 404 under a subpath.
- **Client-side routing.** The workflow copies `dist/index.html` to `dist/404.html`;
  Pages serves that for unknown paths and React Router resolves the URL, so
  `/about` works on a hard refresh.

### Custom domain (klingstromgroup.com)

`public/CNAME` holds the domain and ships in the Pages artifact, which is what sets the
custom domain — so it lives in git rather than only in a settings panel.

DNS at Squarespace points the apex at GitHub's four Pages IPs and `www` at
`klingstromnicho.github.io`. After the first green deploy, tick **Enforce HTTPS** under
Settings → Pages once the certificate is issued.

`vite.config.js` reads `public/CNAME` directly to decide the base path. It deliberately
does not trust the workflow's `base_path`: on the first deploy Pages does not know about
the domain yet and still reports `/klingstr-mgroup`, which would ship assets pointing at
a path the custom domain never serves.

### Anywhere else

`npm run build` produces a static SPA in `dist/`. On Vercel/Netlify SPA fallback is
automatic (on Netlify, `/* /index.html 200`).
