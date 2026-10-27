# 33rdventures.com — The Living Résumé

Robert Zukerman's portfolio site, redesigned as a live, continuously-updatable
version of his résumé. Astro + Tailwind v4, dev server on **localhost:4200**.

## How to update the site

**All content lives in one file: [`src/data/resume.ts`](src/data/resume.ts).**
Edit it and save — the page updates instantly in dev, and a rebuild ships it.
You never need to touch markup for a content change.

What's in there:

| Export       | Section on page                              |
| ------------ | -------------------------------------------- |
| `identity`   | Name, role line, email                        |
| `summary`    | I · Profile lede paragraph                    |
| `facts`      | The ledger block beside the summary           |
| `ticker`     | Hero ticker strip                             |
| `now`        | II · On the desk (update `asOf` when editing) |
| `experience` | III · Experience entries + bullets            |
| `ventures`   | IV · Built and owned                          |
| `built`      | V · The tools the work runs on                |
| `skills`     | VI · Skill groups                             |
| `education`  | VII · Education                               |
| `links`      | VIII · Contact links (X, LinkedIn, GitHub)    |
| `meta`       | Page title, description, share image, version |

The share card (`public/og.png`, shown when the link is posted on X or
LinkedIn) is rendered from `scripts/og-card.html`; the render command is in
that file's header comment. Re-render it when the role line changes.

The "Updated" date in the masthead is stamped automatically at build time.

## Running locally

```sh
npm run dev      # localhost:4200
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Design notes

Private-club theme — deep billiard-green field, ivory type, brass trim.
Capital-markets / country-club aesthetic: Cinzel engraved capitals for the name
and section titles, EB Garamond for everything else, Roman-numeral section
labels, certificate double-rules, a faint linen-weave texture + lamplight
vignette in the background, centered crest hero. The accent is a runtime token: the
**color lab** pill (bottom-right) switches curated palettes (brass / fairway /
claret / platinum), persisted in localStorage; palettes are defined in
`global.css` under `data-accent`. Flourishes: engraved badge watermarks in the
hero and behind Experience, badge-ring bullet on venture-row hover. Tokens live in
[`src/styles/global.css`](src/styles/global.css) under `@theme`. Type: Michroma
(extended-caps headlines, chrome gradient) / Chakra Petch (tech labels, names) /
Inter (body) / IBM Plex Mono (data). Brand mark is an elliptical badge with a
twin-blade italic "33" (auto-marque style) — `public/badge.svg` is the marque,
`public/favicon.svg` puts it on a dark tile; if the mark changes, regenerate
`favicon.ico` + `apple-touch-icon.png` with
`python3 scripts/gen_icons.py public` (no dependencies). The page has a print stylesheet — the
**Print / PDF** button in the masthead flips to a clean light document.

## Deployment

Hosted on **GitHub Pages** from [rz-blip/33rdventures](https://github.com/rz-blip/33rdventures).
Every push to `main` auto-builds (Node 22) and deploys via
`.github/workflows/deploy.yml` — edit `src/data/resume.ts`, commit, push, live.
Custom domain: 33rdventures.com (DNS at GoDaddy — apex A records → GitHub
Pages IPs, `www` CNAME → `rz-blip.github.io`).
