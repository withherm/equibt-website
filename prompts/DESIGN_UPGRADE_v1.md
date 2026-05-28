# EQUIBT Website — Design Upgrade Spec v1
**Date:** 2026-05-25
**Applies to:** All 11 prototype HTML files in `/prototypes/`
**Goal:** Modern hybrid redesign. Contemporary, simple, slick. CSS scroll animations. Consistent across all pages.

---

## Output files

Create new versions of all 11 files. Do not overwrite existing versions.

| Existing file | New file |
|---|---|
| equibt_plan_prototype_v2.html | equibt_plan_prototype_v3.html |
| equibt_solve_prototype_v2.html | equibt_solve_prototype_v3.html |
| equibt_frame_prototype_v2.html | equibt_frame_prototype_v3.html |
| equibt_evolve_prototype_v2.html | equibt_evolve_prototype_v3.html |
| equibt_govern_prototype_v2.html | equibt_govern_prototype_v3.html |
| equibt_scale_prototype_v2.html | equibt_scale_prototype_v3.html |
| equibt_home_prototype_v2.html | equibt_home_prototype_v3.html |
| equibt_industries_prototype_v1.html | equibt_industries_prototype_v2.html |
| equibt_about_prototype_v1.html | equibt_about_prototype_v2.html |
| equibt_why_equibt_prototype_v1.html | equibt_why_equibt_prototype_v2.html |
| equibt_how_we_work_prototype_v1.html | equibt_how_we_work_prototype_v2.html |

---

## Design system changes — apply to ALL files

### 1. CSS custom properties — keep existing, add these

```css
--terracotta-10: rgba(193,95,60,0.1);
--navy-08: rgba(38,36,92,0.08);
--navy-12: rgba(38,36,92,0.12);
--text-light: rgba(255,255,255,0.72);
--text-faint: rgba(255,255,255,0.48);
```

### 2. Section label — upgrade the dot to a terracotta bar

Replace the current `::before` dot with a vertical bar:

```css
.section-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 16px;
}
.section-label::before {
  content: '';
  display: block;
  width: 3px;
  height: 20px;
  background: var(--terracotta);
  border-radius: 2px;
  flex-shrink: 0;
}
```

On dark (navy) backgrounds, use `.section-label.light`:
```css
.section-label.light {
  color: rgba(255,255,255,0.55);
}
.section-label.light::before {
  background: var(--terracotta);
}
```

### 3. Section headings — increase size and tighten tracking

```css
.section-heading {
  font-size: 46px;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.1;
  letter-spacing: -0.025em;
}
.section-heading.light {
  color: #ffffff;
}
```

### 4. Body text — increase to 16px

All `.hero-body`, `.section-body`, `.why-body`, `.examine-card-body`, `.case-body` and similar paragraph-level body elements: set `font-size: 16px` and `line-height: 1.75`.

Subheads (`hero-subhead`, `.section-subhead`): `font-size: 20px`, `line-height: 1.6`.

### 5. Scroll reveal animations — add to ALL files

Add this CSS block (inside `<style>`):

```css
/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-d1 { transition-delay: 0.08s; }
.reveal-d2 { transition-delay: 0.16s; }
.reveal-d3 { transition-delay: 0.24s; }
.reveal-d4 { transition-delay: 0.32s; }
.reveal-d5 { transition-delay: 0.40s; }
```

Add this JS block just before `</body>`:

```javascript
<script>
  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObserver.observe(el));

  // Nav blur on scroll
  const nav = document.querySelector('.ref-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
</script>
```

Add `class="reveal"` to:
- Every section's main heading (`<h2>`)
- Every section's subhead
- Every card (stagger with `reveal-d1`, `reveal-d2`, etc. on sibling cards)
- Every stat number
- Every case study card
- The hero subhead and CTA (but NOT the hero H1 — it should be immediately visible)

### 6. Nav blur on scroll

Add to nav CSS:

```css
.ref-nav {
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}
.ref-nav.scrolled {
  background: rgba(38, 36, 92, 0.90);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}
```

### 7. Card hover states — apply to ALL card types

Add to every card type (examine-card, case-card, related-card, industry-card, belief-card, differentiator-card, service-card, etc.):

```css
.card-type {
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}
.card-type:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.10);
  border-color: var(--terracotta);
}
```

Cards that already use a top coloured bar (`.industry-card`): on hover, deepen the bar colour and add translateY(-4px).

### 8. CTA buttons — increase padding

```css
.btn-primary {
  padding: 14px 28px;
  font-size: 12px;
  letter-spacing: 0.1em;
  border-radius: 3px;
}
```

---

## Hero redesign — ALL service pages and About section pages

Apply to: plan, solve, frame, evolve, govern, scale, about, why-equibt, how-we-work.

**Change from:** white 2-col grid with illustration placeholder.
**Change to:** full navy background, centred content, no illustration panel.

```css
.hero {
  background: var(--navy);
  padding: 80px 48px 88px;
  border-bottom: none;
}
.hero-inner {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.hero-badge {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.hero-h1 {
  font-size: 64px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}
.hero-subhead {
  font-size: 20px;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 16px;
  max-width: 600px;
}
.hero-body {
  font-size: 16px;
  color: var(--text-faint);
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 580px;
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}
```

Remove the `.hero-illustration` and `.hero-illustration-placeholder` entirely from these pages.

For service pages, keep the `section-label` above the H1 but centre it. Keep the pillar tag. Keep the `hero-service-name`.

For service pages, the `btn-secondary` ("Explore all services") should be white text with arrow, no background:
```css
.btn-secondary-light {
  color: rgba(255,255,255,0.65);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.18s, gap 0.18s;
}
.btn-secondary-light:hover {
  color: #ffffff;
  gap: 10px;
}
```

---

## Home page hero — upgrade, do not full-navy

The home page has a gestural ink figure. Keep the 2-col layout. Apply these changes:

- Increase H1 to 64px
- Add `color: var(--navy)` explicitly (was inherited, ensure it is set)
- Add `.reveal` to subhead, body, and hero actions (not H1)
- Increase hero padding to `80px 48px`
- Hero background stays white

---

## Stats and proof strips

Where stat numbers appear (proof strips, CTA panels, track record sections):

```css
.stat-number {
  font-size: 64px;
  font-weight: 700;
  color: var(--terracotta);
  line-height: 1;
  letter-spacing: -0.03em;
  font-family: 'Montserrat', system-ui, sans-serif;
}
.stat-label {
  font-size: 13px;
  color: var(--body-text);
  letter-spacing: 0.04em;
  margin-top: 6px;
}
```

If there is a proof/stat strip section with a grey (`--section-bg`) background: change it to full navy background with `.light` heading and white/terracotta text. The stat numbers stay terracotta; the labels become `rgba(255,255,255,0.6)`.

---

## "Why EQUIBT?" panels — upgrade from 3-col cards to full-width rows

These panels appear across all pages (service pages, about, why-equibt, how-we-work). Replace the current 3-column card grid with full-width numbered rows.

**New structure:**

```html
<div class="why-rows">
  <div class="why-row reveal">
    <span class="why-row-num">01</span>
    <div class="why-row-content">
      <p class="why-row-heading">X, not X.</p>
      <p class="why-row-body">Supporting explanation in 1-2 sentences.</p>
    </div>
  </div>
  <!-- repeat for each differentiator -->
</div>
```

```css
.why-rows {
  display: flex;
  flex-direction: column;
}
.why-row {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 0 32px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(38,36,92,0.1);
  align-items: start;
}
.why-row:first-child {
  border-top: 1px solid rgba(38,36,92,0.1);
}
.why-row-num {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--terracotta);
  font-family: 'Montserrat', system-ui, sans-serif;
  padding-top: 4px;
}
.why-row-heading {
  font-size: 20px;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin-bottom: 6px;
  font-family: 'Montserrat', system-ui, sans-serif;
}
.why-row-body {
  font-size: 15px;
  color: var(--body-text);
  line-height: 1.7;
}
```

Keep the warm parchment background on these sections. Keep the 2-col layout (left heading + right rows). Apply `.reveal` to each `.why-row` with staggered delays.

---

## Case study cards — upgrade to high-contrast alternating

Replace white bordered case cards with alternating high-contrast cards:

**Card 1 (navy background):**
```css
.case-card.navy {
  background: var(--navy);
  border: none;
  border-radius: 4px;
  padding: 40px 40px 40px 40px;
}
.case-card.navy .case-tag { color: rgba(255,255,255,0.5); border-color: rgba(255,255,255,0.2); }
.case-card.navy .case-heading { color: #ffffff; }
.case-card.navy .case-body { color: rgba(255,255,255,0.65); }
.case-card.navy .case-stat { color: var(--terracotta); }
.case-card.navy .case-stat-label { color: rgba(255,255,255,0.5); }
.case-card.navy .case-link { color: rgba(255,255,255,0.7); }
.case-card.navy .case-link:hover { color: #ffffff; }
```

**Card 2 (white with left terracotta border):**
```css
.case-card.light {
  background: #ffffff;
  border: 1px solid rgba(38,36,92,0.1);
  border-left: 4px solid var(--terracotta);
  border-radius: 0 4px 4px 0;
  padding: 40px 40px 40px 36px;
}
```

Apply `transition: transform 0.22s ease, box-shadow 0.22s ease;` and `hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }` to both.

---

## DMAICO phase rows (How We Work page only)

Replace flat horizontal rows with a vertical timeline.

**New structure:**

```html
<div class="dmaico-timeline">
  <div class="dmaico-node reveal">
    <div class="dmaico-node-left">
      <div class="dmaico-node-dot">
        <span class="dmaico-node-num">1</span>
      </div>
      <div class="dmaico-node-line"></div>
    </div>
    <div class="dmaico-node-content">
      <div class="dmaico-node-header">
        <span class="pillar-tag frame">FRAME</span>
        <span class="dmaico-node-name">Define — Frame the problem.</span>
      </div>
      <p class="dmaico-node-body">...</p>
      <div class="dmaico-exit-box">
        <p class="dmaico-exit-label">WHAT YOU GET AT EXIT</p>
        <p class="dmaico-exit-body">...</p>
      </div>
    </div>
  </div>
  <!-- repeat for all 6 phases -->
</div>
```

```css
.dmaico-timeline {
  display: flex;
  flex-direction: column;
}
.dmaico-node {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 0 28px;
  padding-bottom: 40px;
}
.dmaico-node:last-child { padding-bottom: 0; }
.dmaico-node-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dmaico-node-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--terracotta);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
}
.dmaico-node-num {
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Montserrat', system-ui, sans-serif;
}
.dmaico-node-line {
  width: 2px;
  flex: 1;
  background: rgba(193,95,60,0.2);
  margin-top: 6px;
  margin-bottom: 0;
}
.dmaico-node:last-child .dmaico-node-line { display: none; }
.dmaico-node-content {
  padding-top: 6px;
  padding-bottom: 16px;
}
.dmaico-node-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.dmaico-node-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  font-family: 'Montserrat', system-ui, sans-serif;
}
.dmaico-node-body {
  font-size: 15px;
  color: var(--body-text);
  line-height: 1.75;
  margin-bottom: 14px;
}
.dmaico-exit-box {
  background: rgba(38,36,92,0.04);
  border-left: 3px solid var(--navy);
  border-radius: 0 4px 4px 0;
  padding: 12px 16px;
}
.dmaico-exit-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--terracotta);
  font-family: 'Montserrat', system-ui, sans-serif;
  margin-bottom: 4px;
}
.dmaico-exit-body {
  font-size: 14px;
  color: var(--body-text);
  line-height: 1.65;
}
```

---

## Related services subway (service pages only)

Keep the 6-pill subway SVG. Upgrade the active pill to have a small terracotta glow:
```css
.subway-pill.active {
  filter: drop-shadow(0 0 6px rgba(193,95,60,0.35));
}
```

---

## Section padding — increase breathing room

```css
/* Generous sections */
.hero              { padding: 80px 48px 88px; }
.examine-section   { padding: 88px 48px; }
.why-start-section { padding: 88px 48px; }
.deliverables-section { padding: 88px 48px; }
.case-studies-section { padding: 80px 48px; }
.related-section   { padding: 80px 48px; }
.cta-section       { padding: 80px 48px; }
```

---

## Mobile (375px) — maintain responsiveness

All existing mobile breakpoints remain. Add these:

```css
@media (max-width: 768px) {
  .hero-h1 { font-size: 38px; }
  .section-heading { font-size: 30px; }
  .hero { padding: 56px 24px 64px; }
  .why-row { grid-template-columns: 40px 1fr; gap: 0 16px; }
  .dmaico-node { grid-template-columns: 36px 1fr; gap: 0 16px; }
  .stat-number { font-size: 48px; }
}
```

---

## What NOT to change

- The colour tokens (keep all existing `--navy`, `--terracotta`, etc.)
- The 6-pillar pill colours (keep all `--pill-frame` through `--pill-scale`)
- The nav links and CTA label ("Let's talk")
- Australian English throughout
- No em dashes or en dashes anywhere
- No external font or CSS imports (Montserrat loads from local `../assets/fonts/`)
- No client names, no CUBOROO, no AUSQ mentions

---

## Build order

1. `equibt_plan_prototype_v3.html` — establishes the upgraded service page template
2. `equibt_solve_prototype_v3.html` — apply same template, update pillar-specific content
3. `equibt_frame_prototype_v3.html` — same
4. `equibt_evolve_prototype_v3.html` — same
5. `equibt_govern_prototype_v3.html` — same
6. `equibt_scale_prototype_v3.html` — same
7. `equibt_home_prototype_v3.html` — keep 2-col hero, apply all other upgrades
8. `equibt_industries_prototype_v2.html` — sector deep-dives, upgraded cards
9. `equibt_about_prototype_v2.html` — navy hero, belief cards, stat strip in navy
10. `equibt_why_equibt_prototype_v2.html` — why-rows format for all differentiators
11. `equibt_how_we_work_prototype_v2.html` — DMAICO timeline layout

After each file: run `node screenshot.js` to capture. Review each before moving to the next.

---

## Claude Code prompt

Paste this into Claude Code to start the build:

```
Read prompts/DESIGN_UPGRADE_v1.md and rebuild all 11 prototype HTML files as specified. 

Before starting:
1. Read the full spec in prompts/DESIGN_UPGRADE_v1.md
2. Read equibt_plan_prototype_v2.html to understand the current CSS and HTML structure

Build in the order specified in the "Build order" section. For each file:
- Read the existing source file
- Apply every design change from the spec
- Preserve all existing content (copy, stats, pillar info) — only the design changes
- Save the new version file
- Run: node screenshot.js
- Confirm the file is saved before moving to the next

Do not change any copy. Do not add or remove page sections. Only apply the design upgrades defined in the spec.
```
