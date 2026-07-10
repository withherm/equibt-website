// One-shot soft-orbit settle on every page hero. Locked feel, do not tune.
const REF_WIDTH = 300;   // home hero art reference width (px)
const DURATION_MS = 8000;
const X_REF = 4;         // ±px at reference width
const YQ_REF = 2;        // vertical dip at quarter cycle, at reference width
const YPEAK_REF = 3;     // vertical dip at half cycle, at reference width
const ROT_AMP = 1;       // ±deg, size-independent

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

function animate(wrap: HTMLElement): void {
  if (reduce.matches) { wrap.style.transform = "none"; return; }

  const w = wrap.getBoundingClientRect().width || REF_WIDTH;
  const s = Math.min(1, Math.max(0.5, w / REF_WIDTH));
  const xAmp = X_REF * s;
  const yq = YQ_REF * s;
  const ypeak = YPEAK_REF * s;
  const b = yq - ypeak / 2;

  const start = performance.now();
  let done = false;

  const pose = (t01: number): string => {
    const th = t01 * Math.PI * 2;
    const x = xAmp * Math.sin(th);
    const y = -(ypeak / 2) * (1 - Math.cos(th)) - (b / 2) * (1 - Math.cos(2 * th));
    const rot = ROT_AMP * Math.sin(th);
    return `translate(${x.toFixed(3)}px, ${y.toFixed(3)}px) rotate(${rot.toFixed(3)}deg)`;
  };

  const tick = (now: number): void => {
    if (done) return;
    const e = now - start;
    if (e >= DURATION_MS) { wrap.style.transform = "none"; done = true; return; }
    wrap.style.transform = pose((e % DURATION_MS) / DURATION_MS);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initHeroOrbit(): void {
  const icons = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-icon]"));
  icons.forEach((icon) => {
    const svg = icon.querySelector("svg");
    if (!svg) return;
    // Inner wrapper so the transform never fights the icon span's CSS and stays clear of draw-on (which touches paths, not transforms).
    let wrap = icon.querySelector<HTMLElement>("[data-hero-orbit]");
    if (!wrap) {
      wrap = document.createElement("span");
      wrap.setAttribute("data-hero-orbit", "");
      wrap.style.display = "block";
      icon.insertBefore(wrap, svg);
      wrap.appendChild(svg);
    }
    animate(wrap);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeroOrbit, { once: true });
} else {
  initHeroOrbit();
}
