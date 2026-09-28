# MAC Home Improvements — website

> Forked from the MAC Home Improvements site (same structure and copy) with a
> midnight-navy + brass palette, rounder geometry, and an inline-SVG lockup
> in place of the raster logo. Search `TODO` in `content.mjs` for the
> MAC-specific values still to fill in.

Static site for [machomeimprovements.com](https://machomeimprovements.com).
No framework and no server-side build. GitHub Pages serves the `.html` files in
this repo directly. The only executable JavaScript that ships is a 1 KB
progressive enhancement on the estimate form and, if you set `BIZ.ga4Id`, the
Google Analytics snippet — the site works fully without either. Content pages
carry no other script.

---

## Contents

- [How this site is built](#how-this-site-is-built) — architecture, and why it is the way it is
- [Before you launch](#before-you-launch--2-things-to-fill-in) — the two fields that still need values
- [Deploying](#deploying) — and the one mistake that breaks every link
- [Editing content](#editing-content) — reviews, the map, the logo, photos
- [Services](#services) — the two-level service tree
- [Projects](#projects) — adding a job, before/after photos, the rules
- [Search Console & Analytics](#search-console--analytics)
- [Local preview](#local-preview)

---

## How this site is built

### The shape of it

There is no framework, no bundler, no CSS pipeline, and no server. The whole
site is **one Node script that writes HTML files**, and GitHub Pages serves
those files straight off the branch.

```
content.mjs   ──┐
                ├──▶  node build.mjs  ──▶  *.html + sitemap.xml + _redirects
build.mjs     ──┘                          (committed, served as-is)
```

- **`content.mjs`** is the data. Business details, services, projects, reviews,
  service areas, FAQ, warranty terms, redirects. No markup, no logic.
- **`build.mjs`** is the templates. One function per page type, plus a shared
  `layout()` that supplies the `<head>`, header, footer, and JSON-LD.
- **`assets/css/site.css`** is all the styling. Colour, type, and spacing are
  custom properties at the top of the file.

The generated `.html` files are committed. That looks redundant — the source
is right there — but it is what makes GitHub Pages work with no build step, no
Actions workflow, and no deploy secrets. Push the branch, and about a minute
later it is live.

### Why it was built this way

The site is a lead-generation brochure for a masonry contractor. It has to load
fast on a phone with one bar of signal in someone's driveway, rank locally, and
keep working untouched for years. Nothing about that calls for a framework, and
a framework would have added a toolchain that rots.

Some consequences, all deliberate:

- **Effectively zero JavaScript.** The mobile menu and the FAQ accordions are
  native `<details>` elements. The scroll reveals are CSS scroll-driven
  animations, and in a browser that lacks them the content is simply visible.
  Nothing on the site *needs* script to work.

  Three `<script>` tags do exist, and it is worth knowing what each is:
  the 1 KB form enhancement on `/get-your-free-estimate/` (without it the form
  posts normally and lands on `/thank-you/`); the GA4 snippet, emitted only on
  a production build and only once you set `BIZ.ga4Id`; and a one-line
  `location.replace()` in each redirect stub, which is belt-and-braces beside
  the `<meta http-equiv="refresh">` next to it. Every page also carries a
  `<script type="application/ld+json">` block — that is structured data for
  search engines, not code, and nothing executes it.
- **No third-party resources are loaded.** Fonts are self-hosted (Archivo,
 latin subset, ~72 KB). The service-area map is inline SVG generated
  from Census boundary data — no map API, no key, no tiles, no tracking. There
  is no analytics until you add a GA4 ID yourself. The only external URLs
  anywhere in the HTML are four ordinary links a visitor can click: the Google
  profile, the Google review form, Facebook, and HomeAdvisor.
- **One content file, not five.** `content.mjs` is large and it stays that
  way on purpose. The person most likely to edit it is the business owner, and
  "everything is in this one file" beats "work out which of five modules owns
  the thing you want to change."
- **Everything derives from data.** Add a service to `SERVICES` and you get its
  page, its nav entry, its footer link, its card on `/services/`, its
  breadcrumbs, its `Service` schema, its sitemap row, and its option in the
  estimate form. Nothing has to be updated in two places, which is the failure
  mode this kind of site normally dies of.

### The build, step by step

`node build.mjs` runs top to bottom with no watch mode and no incremental
state — it rewrites every page every time, in about a second:

1. Reads `assets/img/manifest.json` (the image index) and the generated
   service-area SVG.
2. Builds the home page, `/services/`, every service page, every project page,
   about, projects, portfolio, reviews, contact, warranty, and every
   service-area page.
3. Writes the redirect stubs listed in `REDIRECTS`, plus a `_redirects` file
   for hosts that understand one.
4. Writes `sitemap.xml`, `robots.txt`, `CNAME`, and `.nojekyll`.
5. Prints warnings for anything inconsistent — a project pointing at a service
   that does not exist, a review quote referencing a name not in `REVIEWS`, a
   warranty key that matches no term, a project with no city.

Those warnings are the closest thing to a test suite. They are all
cross-reference checks between parts of `content.mjs`, and they catch the
mistakes this design is actually vulnerable to.

### Two things it deliberately does not do

**No review schema.** Google's guidelines prohibit marking up third-party
reviews (Google, HomeAdvisor, Angi) as your own `aggregateRating`, and doing it
risks a manual penalty. The reviews are shown to visitors and linked to their
source, which is the safe way to use them. The structured data that *is*
emitted: `HomeAndConstructionBusiness` on the home page, `Service` on each
service page, `FAQPage` where an FAQ appears, `CreativeWork` on each project,
and `BreadcrumbList` throughout.

**No invented locations.** See [Two rules that matter](#two-rules-that-matter).
Service × city pages generated in bulk are
[doorway pages](https://developers.google.com/search/docs/essentials/spam-policies#doorway-pages)
as far as Google is concerned, and a city page that implies a job happened
somewhere it did not is a false claim about the business. Every project is a
real job, and city pages degrade honestly when there is no local work to show.

### Performance choices

- **Images** are AVIF with a WebP fallback, generated at several widths and
  sized per role via `sizes`. Everything below the fold is lazy-loaded; the
  hero is preloaded with a matching `imagesrcset`.
- **Project photos are plain JPEG** at two widths, because they arrived after
  the image pipeline had run and there is no AVIF or WebP encoder in this repo.
  See [Project photos are JPEG](#project-photos-are-jpeg-not-avifwebp).
- **The CSS is one file, served uncompressed at ~42 KB**, which gzips to far
  less. Splitting it would cost a request and save nothing.
- **`.nojekyll`** is present so GitHub Pages serves the directory as-is rather
  than running it through Jekyll.

### Repository layout

```
content.mjs              All copy and data. Start here.
build.mjs                Page templates and the generator.
README.md                This file.

assets/
  css/site.css           Every style rule. Design tokens at the top.
  fonts/                 Archivo (variable width + weight), latin subset, woff2.
  img/                   Site photos: AVIF + WebP, several widths each.
    manifest.json        Generated index of the above. Do not hand-edit.
    projects/            Project photos: JPEG, 1200 and 760 wide.
    logo/                Generated logo PNGs. See tools/icons.mjs.
  logo-src/              Source logo artwork.
  service-area-map.svg   Generated. See tools/map.py.

tools/
  icons.mjs              Regenerates logos and favicons from source artwork.
  map.py                 Regenerates the service-area map from Census data.

<every other directory>  Generated HTML. Do not edit by hand — the next
                         `node build.mjs` overwrites it.
```

The generated page directories sit at the repo root because that is the path
they are served from: `/masonry/driveway-paving/` on disk is
`machomeimprovements.com/masonry/driveway-paving/` in a browser. It means
source and output share a folder, which is untidy but is the price of a
zero-config Pages deploy.

---

---

## Before you launch — 2 things to fill in

Both live in **`content.mjs`**, near the top.

| What | Where | Why it matters |
|---|---|---|
| **Formspree form ID** | `BIZ.formspreeId` | The estimate form will not submit until this is set. See below. |
| **Contractor license #** | `BIZ.license` | Shown in the trust bar, footer, and contact page. Left blank, those lines are omitted entirely — nothing breaks, you just lose a trust signal that competitors display. |

After editing, run `node build.mjs` and commit.

Business hours are already set (`Open 7 days · 9 AM – 6 PM`), taken from your
Google Business Profile. If that is wrong, fix it in both places.

`BIZ.street` is deliberately left blank. The only address I could find publicly
listed for the business is an apartment unit, which I did not want to publish
without you deciding. A service-area business does not need a street address on
the site, so it currently shows "Fairfax, VA" only.

### Setting up the estimate form

GitHub Pages cannot process form submissions, so the form posts to Formspree.

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form. Set the notification email to `onyxhomeimprovementsllc@gmail.com`.
3. Copy the form ID from the endpoint they give you — the part after `/f/`,
   e.g. `https://formspree.io/f/xdorwkbl` → `xdorwkbl`.
4. Paste it into `BIZ.formspreeId` in `content.mjs`.
5. Run `node build.mjs`, commit, push.

The form already includes a hidden honeypot field for spam, and redirects to
`/thank-you/` on success. Free tier covers 50 submissions/month.

---

## Deploying

### First time

1. Create the repo on GitHub and push this directory.
2. **Settings → Pages → Build and deployment**: source = *Deploy from a branch*,
   branch = `main`, folder = `/ (root)`.
3. **Settings → Pages → Custom domain**: enter `machomeimprovements.com`.
   The `CNAME` file in this repo already contains it.
4. At your DNS registrar, point the domain at GitHub:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<your-github-username>.github.io` |

5. Wait for DNS to propagate, then tick **Enforce HTTPS** in the Pages settings.

⚠️ Point DNS at GitHub only once you are ready to switch off the old WordPress
site — the domain can only serve one of them at a time.

### Every time after

```sh
node build.mjs      # only needed if you changed content.mjs or build.mjs
git add -A
git commit -m "Update site"
git push
```

Pages redeploys in about a minute.

### Two build modes — preview vs production

The site is **currently built for the custom domain** — this is the mode you
want, and the plain command is the one to use:

```sh
node build.mjs                                    # production (current)
BASE_PATH=/mac-home-improvements node build.mjs   # staging preview
```

A production build writes root-relative URLs (`/assets/css/site.css`), emits
`CNAME`, and allows indexing.

The staging build exists for previewing on a **GitHub Pages project site**,
which serves from a subpath rather than the domain root, so every root-relative
URL gets prefixed to match. It also emits `<meta name="robots" content="noindex">`
and a `Disallow: /` robots.txt so the preview cannot be indexed as a duplicate
of the real site, and it omits `CNAME`, which would otherwise force Pages onto
the custom domain and break the preview URL.

⚠️ **If you ever run a staging build, rebuild without `BASE_PATH` before you
push to the live site** — otherwise every link and image 404s on the real
domain:

```sh
node build.mjs && git add -A && git commit -m "Build for custom domain" && git push
```

You can tell which mode the working tree is in at a glance: production has a
`CNAME` file and `Allow: /` in `robots.txt`; staging has neither.

---

## Editing content

**Everything you would normally want to change is in `content.mjs`** — phone
number, service descriptions, reviews, service areas, FAQ. Edit it, run
`node build.mjs`, commit.

You *can* hand-edit the generated `.html` files, but the next `node build.mjs`
will overwrite them. Prefer `content.mjs`.

| File | What it holds |
|---|---|
| `content.mjs` | All copy and data. **Start here.** |
| `build.mjs` | Page templates and layout. Change this to alter page *structure*. |
| `assets/css/site.css` | All styling. Colours and type are tokens at the top. |
| `assets/img/manifest.json` | Generated image index — do not edit by hand. |
| `assets/service-area-map.svg` | Generated map — do not edit by hand, see below. |
| `tools/map.py` | Regenerates the service-area map. |

### Reviews

`BIZ.ratingCount` is the Google review count and is **hardcoded** — it was 77
at build time and does not update itself. Bump it when it drifts noticeably,
along with `BIZ.altRatingCount` for HomeAdvisor.

The two counts are shown separately rather than added together: HomeAdvisor
syndicates some of the same Google reviews, so summing them would double-count.

The "Leave us a review" link points at your Google Business Profile
(`BIZ.googleReviewUrl`). It is shown to everyone unconditionally — Google
prohibits "review gating", i.e. asking only customers who say they were happy.

### The service-area map

`assets/service-area-map.svg` is generated from US Census county boundaries by
`tools/map.py`. It is inline SVG — no map API, no key, no tiles, no tracking,
and it inherits the site palette.

To change which areas are shaded, edit `SERVED` / `CONTEXT` / `PINS` in
`tools/map.py`, then:

```sh
python3 tools/map.py    # downloads boundary data on first run
node build.mjs
```

Pin labels are positioned by hand via the `dy` value on each entry, because the
DC-area jurisdictions are packed tightly enough that automatic placement
collides. If you add a pin near the Beltway, expect to nudge it.

### Logo and icons

Source artwork lives in `assets/logo-src/` (`Onyx_logo_black.png`).
Everything derived from it is regenerated by:

```sh
node tools/icons.mjs
```

Run that only when a source logo changes — the output is committed, and
`node build.mjs` neither needs nor touches it (build.mjs has no image
encoder; `tools/icons.mjs` carries the only PNG codec in the repo).

| Where | Asset |
|---|---|
| Masthead | `onyx-mark-dark-*` — roof + ONYX only |
| Footer | `onyx-full-dark-*` — full lockup |
| Tab icon | `favicon.ico` (16/32/48), `favicon.svg`, `favicon-32.png` |
| iOS home screen | `apple-touch-icon.png` (180px) |

Three things worth knowing before you change any of it:

- **The masthead uses the roof + ONYX crop, not the full logo.** The HOME
  IMPROVEMENTS line is 69px of an 830px-tall logo, so at masthead size it
  renders under 5px and turns to mush.
- **The favicon is the roof alone.** Neither the letterforms nor the tagline
  survive 16px. Its stroke is drawn much heavier than the real logo's, which
  would scale to about a quarter of a pixel and vanish. It sits white on onyx
  so it holds up against light and dark tab bars alike.
- **The dark-background logo is the black artwork recoloured.** The original
  `Onyx_logo_white.png` was deleted in the cleanup because nothing could use
  it: it stored its glow as RGB luminance over black with the alpha channel
  almost entirely zero, and its artwork sat at a different scale (aspect 1.51
  against the black file's 1.67), so using it would have made the logo change
  proportion between header and footer. It is still in git history if you ever
  want it back (`git log --diff-filter=D -- assets/logo-src/`). The recoloured
  `*-light-*` PNGs that `tools/icons.mjs` emits are the working equivalent —
  nothing references them today, but they cost 70 KB and regenerate on every
  icons run, so they stay.

### Adding photos

Images are pre-generated at several sizes in AVIF and WebP. To add new ones,
drop the originals somewhere and run a resize pass producing
`<slug>-<width>.avif` / `.webp` files into `assets/img/`, then add the slug and
alt text to `assets/img/manifest.json`. Reference the slug from `content.mjs`.

Alt text matters for both accessibility and image search — describe what is
actually in the photo, not "driveway 4".

---

## What was carried over from the old site

- **All service page URLs are unchanged** (`/masonry/brickwork/`,
  `/stone-work/patio-design/`, etc.) so existing Google rankings and inbound
  links keep working without redirects.
- Service area URLs (`/service-areas/fairfax-va/` …) are preserved too, now as
  real pages rather than the old stubs.
- `/about-us/`, `/portfolio/`, `/get-your-free-estimate/`, and `/thank-you/`
  keep their old paths. `/portfolio/` is now the photo gallery rather than the
  nav's "recent work" entry — that role moved to `/projects/` — but the URL
  still resolves and is linked from the new page.
- Copy is adapted from the old site; photographs are the genuine job photos
  from the old media library and the Google Business Profile (the stock imagery
  was left behind).

**Not carried over:** the blog. Old post URLs under `/blog/` will 404. If you
want those preserved, say so and they can be ported.

### URLs that have moved since launch

Every one of these has a redirect in `REDIRECTS`, so nothing 404s:

| Was | Now | Why |
|---|---|---|
| Four ad landing pages (`/driveway-landing-page/` …) | Their nearest current page | The rebuild dropped them and live Google Ads were pointing at 404s |
| Four retired service-area pages | `/service-areas/` | Onyx no longer covers them, but the pages were indexed |
| Two walkway project pages under Brickwork / Patio Design | Under `/stone-work/walkways-steps/` | Both jobs are walkways; they now sit beneath the service they belong to |

Service page URLs themselves have never moved. `/stone-work/patio-design/`
still serves the patio page even though it is now titled *Patio Installation &
Design* — the title changed, the URL deliberately did not.

---

## Services

`SERVICES` in **`content.mjs`** is a two-level tree. Most entries are top-level.
An entry with a `parent` set is a material-specific page sitting beneath a hub:

| Hub | Pages beneath it |
|---|---|
| `/masonry/driveway-paving/` | `/masonry/asphalt-driveways/`, `/masonry/concrete-driveways/`, `/masonry/paver-driveways/` |
| `/stone-work/patio-design/` | `/stone-work/stamped-concrete-patios/` |

The split exists because "asphalt driveway", "concrete driveway", and "paver
driveway" are three different searches with three different intents, and one
page trying to rank for all three ranks well for none. The hub page keeps its
original URL — and therefore its rankings — and now sells the choice between
the three rather than covering all of them thinly.

**Only top-level services appear** in the nav, the footer, the home page grid,
and the city-page schema. Children are reached from their hub's page, from
`/services/` (as chips under the parent's card), from each other (the "Also
under…" row), and from search. Keeping them out of the top-level lists is what
stops fourteen services reading as a directory listing.

To add a child page, copy an existing service entry and set `parent` to the
hub's `href`. Everything else — breadcrumbs, the hub's card grid, the sibling
row, the services index, the footer, the sitemap — follows from that one field.

### Service images

`image` and `feature` normally name a slug from `assets/img/manifest.json`. They
also accept a **project slug**, in which case the project's JPEG pair is used
instead. `/masonry/concrete-driveways/` does this: the only finished poured
concrete drive we have a photograph of is the Annandale project, and there is no
sense duplicating that file into the manifest set to reference it.

---

## Projects

Real completed jobs live in `PROJECTS` in **`content.mjs`**. Each one generates
its own page beneath its service — e.g.
`/masonry/driveway-paving/asphalt-driveway-springfield-va/` — and is linked
automatically from three places: the service page, the city page, and
`/portfolio/`. Sitemap entry and `CreativeWork` schema are generated too.

### Adding a job

1. Save two JPEGs into `assets/img/projects/`: `{slug}-1200.jpg` and
   `{slug}-760.jpg`.
2. Add an entry to `PROJECTS` with `slug`, `title`, `service`
   (must match a `SERVICES` `href`), `material`, `w`/`h`, `alt`,
   `summary`, and `body`.
3. `node build.mjs`.

The build warns if a project's `service` matches nothing, or if its `city` is
missing or not in `AREAS` (either of which leaves no city page linking to it).

### `city` is optional, and deliberately so

A job you have the photograph for but not the location is still real work. The
page renders fine without a city — the eyebrow, the title, the spec table, and
the `CreativeWork` schema all just omit it — so a photograph is never held back
waiting on a detail nobody wrote down.

What you lose without it is the local-SEO half: the job does not appear on its
service-area page, and Google gets no `locationCreated`. So fill it in when you
know it. **Never guess it.** A city you are not certain of is a false claim
about where the business has worked, and it is the kind of claim Google's
[doorway page](https://developers.google.com/search/docs/essentials/spam-policies#doorway-pages)
policy exists to catch. The build prints a warning for every project missing
one, so they stay visible as a to-do rather than quietly becoming permanent.

Adding a city later does not change the URL — the slug is independent of it.

### Optional fields

| Field | What it does |
|---|---|
| `also` | Extra service `href`s the job is *listed* under. The page still lives at one URL, so this cross-links without creating a duplicate. A brick walkway can appear on both Walkways & Steps and Brickwork. |
| `scope` | Bullet list of what the job involved, shown beneath the spec table. Write it from what the photograph and the body copy already establish — this is not the place to add facts nobody can check. |
| `before` | A before/after pair. See below. |

A hub service page also picks up everything filed under its children
automatically, so `/masonry/driveway-paving/` shows all five driveway jobs
without any of them being listed there twice.

### Before/after photos

Add `before` to a project and the page renders a labelled before/after pair
instead of a single finished photo:

```js
before: { w: 1200, h: 900, alt: 'Cracked asphalt driveway with standing water before replacement' },
```

It needs `{slug}-before-1200.jpg` and `{slug}-before-760.jpg` in
`assets/img/projects/`, alongside the existing finished pair. Omit the field
and nothing changes — only the finished photo is shown. **No project currently
has one**; the "before" shots have to come off a phone from before the job
started, which is the part that has to be remembered on site.

### Where projects appear

`/projects/` is the index, grouped by service, and it is the page in the nav.
`/portfolio/` kept its URL and is now the photo gallery — the loose photographs
that do not have a write-up behind them — with the two pages linking to each
other. Project pages themselves are unchanged at `{service}{slug}/`.

### Two rules that matter

**Every entry must be a job that happened.** These pages are evidence a
homeowner uses to decide who to hire. Inventing a location to fill out
coverage is a false claim about the business, and Google treats
service × city pages generated in bulk as [doorway pages](https://developers.google.com/search/docs/essentials/spam-policies#doorway-pages)
and demotes them. Nine real projects beat sixty invented ones.

**City pages degrade honestly.** A city with its own project shows "Our work in
{city}". A city without one shows recent work from elsewhere, labelled as
being from elsewhere. Nothing implies a job happened where it did not.

### Project photos are JPEG, not AVIF/WebP

The rest of the site uses the AVIF/WebP set built by the image pipeline.
Project photos came from the Google Business Profile after that pipeline had
already run, and there is no AVIF or WebP encoder available here — so they are
plain JPEGs at two widths, served through a `srcset`. If you ever regenerate
the image set, fold these in and switch `projectPicture()` in `build.mjs`
over to `picture()`.

---

## Search Console & Analytics

Both are configured in **`content.mjs`** under `BIZ`, and both are omitted from
the HTML entirely while blank — the site is safe to ship before either account
exists.

| Field | Where to get it |
|---|---|
| `BIZ.gscVerification` | [Search Console](https://search.google.com/search-console) → Add property → **URL prefix** → HTML tag method. Copy only the `content="…"` token, not the whole tag. |
| `BIZ.ga4Id` | [GA4](https://analytics.google.com) → Admin → Data streams → Web → Measurement ID (`G-XXXXXXXXXX`). |

Set them, run `node build.mjs`, commit, and push. Then:

1. **Verify** in Search Console — the tag is live on the deployed page.
2. **Submit the sitemap** at `https://machomeimprovements.com/sitemap.xml`.
   This is a separate step; verification alone does not submit it.
3. **Link GA4 to Search Console** (GA4 → Admin → Product links) so search
   queries show up alongside traffic.

Two behaviours worth knowing:

- The **verification tag is emitted on every build**, staging included, so it
  is already in place whenever you get round to verifying.
- The **GA4 snippet is emitted only on a production build** (no `BASE_PATH`).
  A staging preview and a `localhost` run would otherwise be recorded as real
  traffic in the same property.

Search Console reports nothing until the site is indexable — while the staging
build's `noindex` and `Disallow: /` are in place, expect an empty report. See
[Two build modes](#two-build-modes--preview-vs-production).

If you add GA4, the site sets analytics cookies, which brings it in scope of
disclosure rules in some jurisdictions. A short privacy notice linked from the
footer is the usual answer; there isn't one yet.

---

## Local preview

The build writes root-relative URLs (`/assets/css/site.css`). A staging build
prefixes them with `BASE_PATH`, so serving the repo directly at
`localhost:8000` gives an **unstyled page with broken links** — the paths
expect a `/mac-home-improvements/` prefix that isn't there.

For a **staging build** (`BASE_PATH=/mac-home-improvements`), serve a parent
directory containing a matching symlink:

```sh
mkdir -p /tmp/preview && ln -sfn "$PWD" /tmp/preview/mac-home-improvements
cd /tmp/preview && python3 -m http.server 8000
# then open http://localhost:8000/mac-home-improvements/
```

For a **production build** (no `BASE_PATH`), the simple form works:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```
