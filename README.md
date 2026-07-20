# CompanyOS website

A pure client-side React website for CompanyOS. Vite compiles it into static
HTML, CSS, and JavaScript that can be published directly on GitHub Pages.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Vite prints both the local and LAN addresses when it starts.

## Production build

```bash
npm test
```

The deployable site is written to `dist/`. The build also copies the `CNAME`
and `distribution/` release files and creates `.nojekyll` for GitHub Pages.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and publishes `dist/` on
pushes to `master`. In the repository settings, set **Pages → Source** to
**GitHub Actions** before the first deployment.
