const HERO_ICON_SELECTOR = "[data-hero-icon]";
const DRAW_DURATION_MS = 3500;
const VISIBLE_THRESHOLD = 0.3;

type AccentStroke = SVGGeometryElement & {
  style: CSSStyleDeclaration;
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const isTerracotta = (value: string | null): boolean => {
  if (!value) return false;
  const normalised = value.trim().toLowerCase().replace(/\s+/g, "");
  return (
    normalised === "#c15f3c" ||
    normalised === "rgb(193,95,60)" ||
    normalised === "rgba(193,95,60,1)"
  );
};

const isAccentStroke = (stroke: SVGGeometryElement): stroke is AccentStroke => {
  const inlineStroke = stroke.getAttribute("stroke");
  const styleStroke = stroke.getAttribute("style")?.match(/stroke\s*:\s*([^;]+)/i)?.[1] ?? null;
  const computedStroke = window.getComputedStyle(stroke).stroke;

  return isTerracotta(inlineStroke) || isTerracotta(styleStroke) || isTerracotta(computedStroke);
};

const easeInOutCos = (progress: number): number => {
  return (1 - Math.cos(Math.PI * progress)) / 2;
};

const setFinished = (stroke: AccentStroke): void => {
  stroke.style.strokeDasharray = "";
  stroke.style.strokeDashoffset = "0";
};

const prepareStroke = (stroke: AccentStroke): number | null => {
  try {
    const length = stroke.getTotalLength();
    if (!Number.isFinite(length) || length <= 0) return null;
    stroke.style.strokeDasharray = `${length}`;
    stroke.style.strokeDashoffset = `${length}`;
    return length;
  } catch {
    return null;
  }
};

const animateStroke = (stroke: AccentStroke, length: number): void => {
  const startedAt = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - startedAt) / DRAW_DURATION_MS, 1);
    const offset = length * (1 - easeInOutCos(progress));
    stroke.style.strokeDashoffset = `${offset}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
      return;
    }

    setFinished(stroke);
  };

  window.requestAnimationFrame(tick);
};

const initHeroDrawon = (): void => {
  const icons = Array.from(document.querySelectorAll<HTMLElement>(HERO_ICON_SELECTOR));
  if (icons.length === 0) return;

  const observed = icons
    .filter((icon) => !icon.dataset.heroDrawonReady)
    .map((icon) => {
      icon.dataset.heroDrawonReady = "true";
      const svg = icon.querySelector<SVGSVGElement>("svg");
      if (!svg) return null;

      const strokes = Array.from(svg.querySelectorAll<SVGGeometryElement>("path,line,polyline,polygon,circle,ellipse,rect"))
        .filter(isAccentStroke);

      if (reduceMotion.matches) {
        strokes.forEach(setFinished);
        return null;
      }

      const prepared = strokes
        .map((stroke) => ({ stroke, length: prepareStroke(stroke) }))
        .filter((item): item is { stroke: AccentStroke; length: number } => item.length !== null);

      return prepared.length > 0 ? { icon, prepared } : null;
    })
    .filter((item): item is { icon: HTMLElement; prepared: { stroke: AccentStroke; length: number }[] } => item !== null);

  if (observed.length === 0 || reduceMotion.matches) return;

  const animateItem = (item: { prepared: { stroke: AccentStroke; length: number }[] }) => {
    item.prepared.forEach(({ stroke, length }) => animateStroke(stroke, length));
  };

  const isVisibleEnough = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    const width = Math.max(rect.width, 1);
    const height = Math.max(rect.height, 1);
    const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    return (visibleWidth * visibleHeight) / (width * height) >= VISIBLE_THRESHOLD;
  };

  if (!("IntersectionObserver" in window)) {
    observed.forEach(animateItem);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < VISIBLE_THRESHOLD) return;

        const item = observed.find(({ icon }) => icon === entry.target);
        if (!item) return;

        animateItem(item);
        observer.unobserve(entry.target);
      });
    },
    { threshold: VISIBLE_THRESHOLD },
  );

  observed.forEach((item) => {
    if (isVisibleEnough(item.icon)) {
      animateItem(item);
      return;
    }

    observer.observe(item.icon);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeroDrawon, { once: true });
} else {
  initHeroDrawon();
}
