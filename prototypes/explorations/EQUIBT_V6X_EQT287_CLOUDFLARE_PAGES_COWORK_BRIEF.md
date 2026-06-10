# COWORK BRIEF — EQT-287: connect Cloudflare Pages + enable PR preview deploys

## STOP — READ THIS FIRST

- **This is a deploy-plumbing + verification task, not a code build.** Make NO changes to the site's `src/`. The only file you may add is an optional Node-pin or `_routes.json`/`wrangler` config IF verification shows it's needed (see step 4); confirm before adding.
- **Scope = preview deploys only.** DNS cutover to equibt.com, the contact-form handler, and the production Turnstile key stay in **EQT-262**. Do not do those here.
- **You cannot log into Cloudflare.** The dashboard steps (account auth, GitHub OAuth, build settings) are Herman's hands. Your job: verify the build/output, hand Herman an exact click-by-click runbook, then verify the resulting preview/production URLs render. Do not ask Herman to paste credentials or tokens — never enter account credentials yourself.
- Repo: `REPOS/equibt-website` (canonical clone), remote `withherm/equibt-website`. Reference the issue **EQT-287** and `CLAUDE.md` repo discipline.

## Context

**Status 2026-06-10: the entire v6x conversion is MERGED to `main`** — About + How We Work (#41), Contact + Capability (#42), Insights (#43), pre-launch fix sweep + Services hub (#44), and hero top-anchor (#45) are all in. There are NO open PRs right now. All review this session was done the hard way (sandbox build + headless screenshot).

The immediate goal of this task is therefore: **stand up Cloudflare Pages and verify the production deploy from `main` renders every route.** The preview-URL benefit is for the NEXT round of PRs (EQT-259 Resources, EQT-284 blog migration, EQT-261 responsive QA, etc.) so they can be reviewed in one click instead of the sandbox dance. Pages is also the deploy substrate for go-live (EQT-262).

**Verified config (do not change):** `astro.config.mjs` → `output: "static"` (plain static site, no SSR routes, no KV/session bindings needed at runtime), adapter `@astrojs/cloudflare@13.5.4`, `astro@6.3.7`, build script `npm run build`, Node pinned via `.nvmrc`, production branch `main`, `site: https://www.equibt.com`. No environment variables are required for the static build.

---

## Step 1 — Verify the build + output directory (Cowork)

The Cowork Google Drive mount blocks vite cache deletion, so build from a sandbox-local copy (same recipe used all session): copy the repo to `/tmp` excluding `node_modules/.vite`/`.git`/`dist`, rsync `node_modules` excluding `.vite`, then `npm run build`.

**VERIFIED 2026-06-10 (off merged main, build green):**
- Build output split: static assets + all `index.html` files are in **`dist/client/`**; `dist/server/` holds only `entry.mjs` + `wrangler.json` (a no-op middleware passthrough, because `output: "static"` has zero SSR routes). **No `_worker.js` and no `_routes.json` are generated.**
- **Cloudflare Pages "Build output directory" = `dist/client`** (NOT `dist`). Confirmed by serving `dist/client` locally: `/`, `/about/`, `/services/`, `/contact/`, `/capability-statement/`, `/insights/`, `/our-work/`, `/industries/` all resolve.
- **Node version: `22`** (from `.nvmrc`).
- Build command: `npm run build`. No env vars needed for the static build.

## Step 2 — Write the click-by-click runbook for Herman (Cowork)

Produce an exact runbook (Herman does these in the Cloudflare dashboard):
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorise GitHub (OAuth) and select the **`withherm/equibt-website`** repo.
3. Set up build:
   - **Production branch:** `main`
   - **Framework preset:** None (do NOT pick the Astro preset — it forces the output dir to `dist` and would serve a blank root, since our assets are in `dist/client`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/client`
   - **Node version:** `22`. Cloudflare reads `.nvmrc` automatically; if the build picks a different Node, add an env var `NODE_VERSION=22`.
   - **Environment variables:** none required for this static build.
4. **Save and Deploy.** Preview deployments are ON by default for every non-production branch and PR — no extra toggle needed (confirm under Settings → Builds & deployments → Preview deployments = "All non-Production branches").
5. After the first build, Cloudflare assigns the project a `https://<project>.pages.dev` production URL, and each PR/branch gets `https://<branch-or-hash>.<project>.pages.dev`.

Keep the runbook copy-paste short; Herman is clicking, not reading an essay.

## Step 3 — Verify the production deploy renders (Cowork, after Herman connects)

Once Herman reports the project is created and the first deploy from `main` is green:
- Have Herman paste the **production** `*.pages.dev` URL.
- Load it and confirm every route renders correctly (hero, nav, Montserrat/Lora fonts, motifs): `/`, `/about/`, `/how-we-work/`, `/services/`, `/industries/`, `/our-work/`, `/contact/`, `/capability-statement/`, `/insights/`. Use the Chrome MCP or a headless check; the static Astro output should serve fine on a plain fetch.
- Spot-check that the live site matches what we built: the Services hub pathway, the top-anchored heroes, the LMI handover bands.
- (No PR previews to check yet — there are no open PRs. The first future PR will auto-generate a `*.pages.dev` preview; verify that flow when it happens.)

## Step 4 — Only if verification fails (Cowork, confirm first)

If the production deploy serves a blank/incorrect root, the output directory is likely wrong — re-inspect `dist/` and correct the Pages "output directory" (try `dist` vs `dist/client`). If Pages can't find the Node version, add a `NODE_VERSION` env var or confirm `.nvmrc` is respected. Do NOT add `wrangler.toml`, `_routes.json`, or change `astro.config.mjs` unless inspection proves it's required, and flag it to Herman before adding (it would be a committed repo change → its own tiny PR).

---

## Acceptance / output

- [ ] Build verified green; `dist/` structure documented; correct Pages output directory stated.
- [ ] A short, exact dashboard runbook handed to Herman.
- [ ] After Herman connects: production deploy from `main` renders all nine routes correctly.
- [ ] Post the production `*.pages.dev` URL as a comment on **EQT-287**, and confirm preview deploys are enabled for future PRs.
- [ ] No `src/` changes. Any config file added (only if step 4 required it) is flagged and goes via its own PR.

Out of scope (stays EQT-262): custom domain equibt.com / www, DNS + 301s, the contact-form handler (Pages Function or Formspree), the production Turnstile sitekey + secret. Note them in the EQT-287 comment as the remaining go-live items, but do not action them.
