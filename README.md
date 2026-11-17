# Portfolio (Astro)

Static personal site: home, case-study pages, and a printable resume. Built with Astro, no client-side framework.

## Run it
```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Edit content
Everything lives in `src/data/site.ts`: bio, projects (each becomes a page at `/work/<slug>`), services, lab, and the resume data. Change it there and the home page and the resume update together.

## Before you deploy
1. Set your real domain in `astro.config.mjs` (`site`) and in `public/robots.txt`.
2. Check every number and claim in `site.ts` against what you can explain in an interview.
3. Check each case study against your NDA with the client or contractor.
4. Add the Rooftop Nursery live link to its entry if the owner agrees (add a `url` field and show it on the project page).
5. Optional: add `public/og.png` (1200x630) and an `og:image` tag in `src/layouts/Base.astro` for link previews.

## Deploy (free options)
- **Cloudflare Pages or Netlify:** connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** build with `npm run build` and publish `dist/` with a GitHub Action (see the Astro docs for "Deploy to GitHub Pages").
