## Keith Thomas Portfolio Website

Static portfolio website for Keith Thomas, built with Astro and deployed as a static site.

Live site:

```text
https://keiththomas.dev/
```

## Project Structure

- `src/pages/index.astro` - homepage.
- `src/pages/projects/index.astro` - full projects page.
- `src/layouts/BaseLayout.astro` - shared document shell, SEO metadata, and script includes.
- `src/components/` - shared header, footer, and project card components.
- `src/data/projects.js` - project listing data.
- `public/` - static CSS, JavaScript, images, PDF, and SEO files.
- `astro.config.mjs` - Astro static build and sitemap configuration.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The built static site is written to `dist/`.

## Cloudflare Pages

Use these Cloudflare Pages settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Production domain: `keiththomas.dev`

## SEO

The site includes:

- canonical URLs
- Open Graph metadata
- Twitter card metadata
- `robots.txt`
- generated Astro sitemap
- `Person`, `ProfessionalService`, and projects structured data
- descriptive image alt text for project cards

Credit to https://github.com/Anunay-Anand for the original template.
