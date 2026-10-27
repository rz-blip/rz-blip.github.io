# 33rdventures.com · Rob's personal site

Rob Zukerman's personal site: who he is, what he's working on, what he's done
and things he's made. Written in the first person; not a sales page. Astro + Tailwind v4, dev server on **localhost:4200**.

## How to update the site

**All content lives in one file: [`src/data/resume.ts`](src/data/resume.ts).**
Edit it and save — the page updates instantly in dev, and a rebuild ships it.
You never need to touch markup for a content change.

What's in there:

| Export      | Section on page                                          |
| ----------- | -------------------------------------------------------- |
| `identity`  | Name, first name, location, `tagline` (Rob's own words)  |
| `about`     | About paragraphs                                         |
| `now`       | What I'm working on (update `asOf` when editing)         |
| `story`     | What I've done; `bullets` print on the résumé only       |
| `made`      | Things I've made (cards link out when `href` is set)     |
| `skills`    | Printed résumé only                                      |
| `links`     | Say hi links (X, Instagram, LinkedIn, GitHub); no email  |
| `meta`      | Page title, description, share image, version            |

The share card (`public/og.png`, shown when the link is posted on X or
LinkedIn) is rendered from `scripts/og-card.html`; the render command is in
that file's header comment. Re-render it when the tagline changes.

The "Updated" date in the masthead is stamped automatically at build time.

## Running locally

```sh
npm run dev      # localhost:4200
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Design notes

v5 (October 2026): a personal page in the private-club palette. Deep
billiard-green field, ivory type, brass trim; EB Garamond carries the voice
("Hi, I'm Rob."), Cinzel engraved capitals for the name, the 33 badge as the
crest, a faint linen texture and lamplight vignette. Tokens live in [`src/styles/global.css`](src/styles/global.css)
under `@theme`.

Brand mark is the elliptical badge with a twin-blade italic "33". Leave it as is.
`public/badge.svg` is the marque (tinted ivory on screen via the `.ivory` class),
`public/favicon.svg` puts it on a dark tile; if the mark ever changes, regenerate
`favicon.ico` + `apple-touch-icon.png` with `python3 scripts/gen_icons.py public`.

**Résumé (PDF)** in the footer prints a résumé: hello, about, the story with
full bullets, skills and contact. Now and Made are screen-only. Print swaps the
color tokens to ink on paper.

## Deployment

Hosted on **GitHub Pages** from [rz-blip/33rdventures](https://github.com/rz-blip/33rdventures).
Every push to `main` auto-builds (Node 22) and deploys via
`.github/workflows/deploy.yml` — edit `src/data/resume.ts`, commit, push, live.
Custom domain: 33rdventures.com (DNS at GoDaddy — apex A records → GitHub
Pages IPs, `www` CNAME → `rz-blip.github.io`).
