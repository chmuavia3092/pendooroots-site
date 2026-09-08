/**
 * ElectricBorder — Canvas 2D Animated Border with Noise Displacement
 * Hydrated with data-electric-border attribute
 */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resolveCssColor(color: string): string {
  if (typeof color !== 'string' || !color.includes('var(')) return color;
  const probe = document.createElement('div');
  probe.style.color = color;
  probe.style.position = 'fixed';
  probe.style.opacity = '0';
  probe.style.pointerEvents = 'none';
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();
  return resolved;
}

function createElectricBorder(el: HTMLElement): () => void {
  if (prefersReducedMotion()) return () => {};

  const canvas = el.querySelector('.eb-canvas') as HTMLCanvasElement;
  if (!canvas) return () => {};

  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const cfg = {
    color: resolveCssColor(el.dataset.ebColor || '#ccff00'),
    speed: parseFloat(el.dataset.ebSpeed || '0.5'),
    chaos: parseFloat(el.dataset.ebChaos || '0.1'),
    thickness: parseFloat(el.dataset.ebThickness || '2'),
    borderRadius: parseFloat(el.dataset.ebRadius || '16'),
    displacement: parseFloat(el.dataset.ebDisplacement || '60'),
    borderOffset: parseFloat(el.dataset.ebOffset || '30')
  };

  const octaves = 10;
  const lacunarity = 1.6;
  const gain = 0.7;
  const frequency = 10;
  const baseFlatness = 0;

  const random = (x: number) => (Math.sin(x * 12.9898) * 43758.5453) % 1;

  const noise2D = (x: number, y: number) => {
    const i = Math.floor(x);
    const j = Math.floor(y);
    const fx = x - i;
    const fy = y - j;
    const a = random(i + j * 57);
    const b = random(i + 1 + j * 57);
    const c = random(i + (j + 1) * 57);
    const d = random(i + 1 + (j + 1) * 57);
    const ux = fx * fx * (3.0 - 2.0 * fx);
    const uy = fy * fy * (3.0 - 2.0 * fy);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  };

  const octavedNoise = (x: number, octv: number, lac: number, gn: number, baseAmplitude: number, baseFrequency: number, time: number, seed: number, baseFlat: number) => {
    let y = 0;
    let amplitude = baseAmplitude;
    let freq = baseFrequency;
    for (let i = 0; i < octv; i++) {
      let octaveAmplitude = amplitude;
      if (i === 0) octaveAmplitude *= baseFlat;
      y += octaveAmplitude * noise2D(freq * x + seed * 100, time * freq * 0.3);
      freq *= lac;
      amplitude *= gn;
    }
    return y;
  };

  const getCornerPoint = (centerX: number, centerY: number, radius: number, startAngle: number, arcLength: number, progress: number) => {
    const angle = startAngle + progress * arcLength;
    return { x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle) };
  };

  const getRoundedRectPoint = (t: number, left: number, top: number, w: number, h: number, radius: number) => {
    const straightWidth = w - 2 * radius;
    const straightHeight = h - 2 * radius;
    const cornerArc = (Math.PI * radius) / 2;
    const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
    const distance = t * totalPerimeter;
    let accumulated = 0;

    if (distance <= accumulated + straightWidth) {
      const progress = (distance - accumulated) / straightWidth;
      return { x: left + radius + progress * straightWidth, y: top };
    }
    accumulated += straightWidth;

    if (distance <= accumulated + cornerArc) {
      const progress = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + w - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, progress);
    }
    accumulated += cornerArc;

    if (distance <= accumulated + straightHeight) {
      const progress = (distance - accumulated) / straightHeight;
      return { x: left + w, y: top + radius + progress * straightHeight };
    }
    accumulated += straightHeight;

    if (distance <= accumulated + cornerArc) {
      const progress = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + w - radius, top + h - radius, radius, 0, Math.PI / 2, progress);
    }
    accumulated += cornerArc;

    if (distance <= accumulated + straightWidth) {
      const progress = (distance - accumulated) / straightWidth;
      return { x: left + w - radius - progress * straightWidth, y: top + h };
    }
    accumulated += straightWidth;

    if (distance <= accumulated + cornerArc) {
      const progress = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + radius, top + h - radius, radius, Math.PI / 2, Math.PI / 2, progress);
    }
    accumulated += cornerArc;

    if (distance <= accumulated + straightHeight) {
      const progress = (distance - accumulated) / straightHeight;
      return { x: left, y: top + h - radius - progress * straightHeight };
    }
    accumulated += straightHeight;

    const progress = (distance - accumulated) / cornerArc;
    return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress);
  };

  let raf = 0;
  let time = 0;
  let lastFrameTime = 0;
  let width = 0;
  let height = 0;
  let lastDpr = Math.min(window.devicePixelRatio || 1, 2);

  const updateSize = () => {
    const rect = el.getBoundingClientRect();
    const w = rect.width + cfg.borderOffset * 2;
    const h = rect.height + cfg.borderOffset * 2;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    lastDpr = dpr;
    return { width: w, height: h };
  };

  const draw = (currentTime: number) => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (dpr !== lastDpr) {
      lastDpr = dpr;
      const s = updateSize();
      width = s.width;
      height = s.height;
    }

    const deltaTime = (currentTime - lastFrameTime) / 1000;
    time += deltaTime * cfg.speed;
    lastFrameTime = currentTime;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);

    ctx.strokeStyle = cfg.color;
    ctx.lineWidth = cfg.thickness;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const scale = cfg.displacement;
    const left = cfg.borderOffset;
    const top = cfg.borderOffset;
    const borderWidth = width - 2 * cfg.borderOffset;
    const borderHeight = height - 2 * cfg.borderOffset;
    const maxRadius = Math.min(borderWidth, borderHeight) / 2;
    const radius = Math.min(cfg.borderRadius, maxRadius);

    const approximatePerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radius;
    const sampleCount = Math.floor(approximatePerimeter / 2);

    ctx.beginPath();
    for (let i = 0; i <= sampleCount; i++) {
      const progress = i / sampleCount;
      const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius);
      const xNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, cfg.chaos, frequency, time, 0, baseFlatness);
      const yNoise = octavedNoise(progress * 8, octaves, lacunarity, gain, cfg.chaos, frequency, time, 1, baseFlatness);
      const displacedX = point.x + xNoise * scale;
      const displacedY = point.y + yNoise * scale;
      if (i === 0) ctx.moveTo(displacedX, displacedY);
      else ctx.lineTo(displacedX, displacedY);
    }
    ctx.closePath();
    ctx.stroke();

    raf = requestAnimationFrame(draw);
  };

  const size = updateSize();
  width = size.width;
  height = size.height;

  const ro = new ResizeObserver(() => {
    const s = updateSize();
    width = s.width;
    height = s.height;
  });
  ro.observe(el);

  let isVisible = true;
  let isPageVisible = !document.hidden;
  const tryStart = () => { if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(draw); };
  const tryStop = () => { if (raf !== 0) { cancelAnimationFrame(raf); raf = 0; } };

  const io = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    isVisible ? tryStart() : tryStop();
  }, { threshold: 0 });
  io.observe(el);

  const onVisibility = () => {
    isPageVisible = !document.hidden;
    isPageVisible ? tryStart() : tryStop();
  };
  document.addEventListener('visibilitychange', onVisibility);

  tryStart();

  return () => {
    tryStop();
    ro.disconnect();
    io.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
  };
}

const electricBorderCleanups = new Map<HTMLElement, () => void>();

export function initElectricBorders(): void {
  if (prefersReducedMotion()) return;
  document.querySelectorAll('[data-electric-border]').forEach((el: HTMLElement) => {
    if (electricBorderCleanups.has(el)) return;
    electricBorderCleanups.set(el, createElectricBorder(el));
  });
}

export function destroyElectricBorders(): void {
  electricBorderCleanups.forEach(fn => {
    try { fn(); } catch (e) { /* noop */ }
  });
  electricBorderCleanups.clear();
}

// Auto-initialize
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initElectricBorders();
  });
}