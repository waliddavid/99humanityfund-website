# 99humanityfund-website

The 99% Humanity Fund — documentary website.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Live site

Production: [99humanityfund.com](https://99humanityfund.com)  
Preview: [99humanityfund-website.pages.dev](https://99humanityfund-website.pages.dev)

## Project structure

```
src/
├── assets/         Images and other static assets used in content
├── content/
│   └── docs/       All article content as Markdown/MDX files
│       ├── part-1/
│       ├── part-2/
│       ├── part-3/
│       ├── index.mdx    (homepage)
│       └── about.md
├── styles/
│   └── custom.css  Custom theme overrides
└── content.config.ts
```

## Adding new articles

New articles are Markdown files placed in the appropriate part directory.

Each article should begin with a frontmatter block:

```
---
title: Title of the article
description: A short description for search and previews.
---

Article content goes here.
```

After adding a new article, update the sidebar in `astro.config.mjs` to include the new entry.

## Development

```bash
npm install        # one time
npm run dev        # local development server
npm run build      # build for production
```

## Deployment

Deployment is automatic on every push to `main` via Cloudflare Pages.
