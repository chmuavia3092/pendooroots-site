/**
 * SpecularButton — WebGL Rim Lighting Button (OGL)
 * Hydrated with data-specular attribute
 */

const SPECULAR_VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const SPECULAR_FRAG = `#version 300 es
precision highp float;
uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;
out vec4 fragColor;
float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }
float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}
void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;
  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;

const SPECULAR_PAD = 20;

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function readNum(el: HTMLElement, name: string, def: number): number {
  const v = parseFloat(el.getAttribute(name) || '');
  return isNaN(v) ? def : v;
}

function readBool(el: HTMLElement, name: string, def: boolean): boolean {
  return (el.getAttribute(name) || '').toLowerCase() !== 'false';
}

export function createSpecularButton(el: HTMLElement): () => void {
  if (prefersReducedMotion()) return () => {};

  let cancelled = false;

  const cfg = {
    size: el.getAttribute('data-sb-size') || 'lg',
    radius: readNum(el, 'data-sb-radius', 18),
    tint: el.getAttribute('data-sb-tint') || '#ffffff',
    tintOpacity: readNum(el, 'data-sb-tint-opacity', 0),
    blur: readNum(el, 'data-sb-blur', 0),
    textColor: el.getAttribute('data-sb-text-color') || '#f5f5f5',
    lineColor: el.getAttribute('data-sb-line-color') || '#ffffff',
    baseColor: el.getAttribute('data-sb-base-color') || '#525252',
    intensity: readNum(el, 'data-sb-intensity', 1),
    shineSize: readNum(el, 'data-sb-shine-size', 10),
    shineFade: readNum(el, 'data-sb-shine-fade', 40),
    thickness: readNum(el, 'data-sb-thickness', 1),
    speed: readNum(el, 'data-sb-speed', 0.35),
    followMouse: readBool(el, 'data-sb-follow', true),
    proximity: readNum(el, 'data-sb-proximity', 250),
    autoAnimate: (el.getAttribute('data-sb-auto') || el.getAttribute('data-sb-auto-animate') || 'true').toLowerCase() === 'true'
  };

  el.classList.add('specular-button', 'specular-button--' + cfg.size);
  el.style.setProperty('--sb-radius', cfg.radius + 'px');
  el.style.setProperty('--sb-tint', cfg.tint);
  el.style.setProperty('--sb-tint-opacity', String(cfg.tintOpacity));
  el.style.setProperty('--sb-blur', cfg.blur + 'px');
  el.style.setProperty('--sb-text-color', cfg.textColor);

  let fx = el.querySelector('.specular-button__fx') as HTMLElement;
  if (!fx) {
    fx = document.createElement('span');
    fx.className = 'specular-button__fx';
    fx.setAttribute('aria-hidden', 'true');
    el.insertBefore(fx, el.firstChild);
  }
  if (!el.querySelector('.specular-button__label')) {
    const label = document.createElement('span');
    label.className = 'specular-button__label';
    const nodes = Array.from(el.childNodes);
    nodes.forEach(n => { if (n !== fx) label.appendChild(n); });
    el.appendChild(label);
  }

  import('ogl').then(({ Renderer, Program, Mesh, Triangle, Color }) => {
    if (cancelled || !el.isConnected) return;

    const dpr = window.devicePixelRatio || 1;

    try {
      const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true, dpr });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      const geometry = new Triangle(gl);
      if (geometry.attributes.uv) delete geometry.attributes.uv;

      const program = new Program(gl, {
        vertex: SPECULAR_VERT,
        fragment: SPECULAR_FRAG,
        uniforms: {
          uCenter: { value: [0, 0] },
          uHalfSize: { value: [1, 1] },
          uRadius: { value: 0 },
          uAngle: { value: 2.4 },
          uPx: { value: dpr },
          uLineColor: { value: [1, 1, 1] },
          uBaseColor: { value: [0.32, 0.32, 0.32] },
          uIntensity: { value: 1 },
          uShineSize: { value: 0.17 },
          uShineFade: { value: 0.7 },
          uThickness: { value: 1 },
          uBaseWidth: { value: dpr }
        }
      });

      const mesh = new Mesh(gl, { geometry, program });
      fx.appendChild(gl.canvas);

      const resize = () => {
        const rect = el.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        renderer.setSize(w + SPECULAR_PAD * 2, h + SPECULAR_PAD * 2);
        program.uniforms.uCenter.value = [(SPECULAR_PAD + w / 2) * dpr, (SPECULAR_PAD + h / 2) * dpr];
        program.uniforms.uHalfSize.value = [(w / 2) * dpr, (h / 2) * dpr];
      };

      const ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();

      const onPointerMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
        const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
        const dist = Math.hypot(dx, dy);
        if (dist === 0) {
          const nx = (e.clientX - cx) / (rect.width / 2);
          const ny = (cy - e.clientY) / (rect.height / 2);
          pointerAngle = Math.atan2(2 / rect.height, -2 / rect.width) + nx * 0.3 + ny * 0.15;
        } else {
          pointerAngle = Math.atan2(cy - e.clientY, e.clientX - cx);
        }
        const t = Math.max(0, 1 - dist / Math.max(cfg.proximity, 1));
        proximityT = t * t * (3 - 2 * t);
      };

      let pointerAngle = 2.4;
      let proximityT = 0;

      window.addEventListener('pointermove', onPointerMove);

      let angle = 2.4;
      let idleAngle = 2.4;
      let bright = 0;
      let last = performance.now();
      let raf = 0;

      const lineC = new Color();
      const baseC = new Color();

      const update = (now: number) => {
        raf = requestAnimationFrame(update);
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;

        idleAngle += cfg.speed * dt;
        const steer = cfg.followMouse && pointerAngle != null && (!cfg.autoAnimate || proximityT > 0);
        const target = steer ? pointerAngle : idleAngle;
        const diff = ((target - angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        angle += diff * (1 - Math.exp(-dt * 7));

        const brightTarget = cfg.autoAnimate ? 1 : proximityT;
        bright += (brightTarget - bright) * (1 - Math.exp(-dt * 8));

        lineC.set(cfg.lineColor);
        baseC.set(cfg.baseColor);
        program.uniforms.uAngle.value = angle;
        program.uniforms.uRadius.value = Math.min(cfg.radius, Math.min(sizeRef.w, sizeRef.h) / 2) * dpr;
        program.uniforms.uLineColor.value = [lineC.r, lineC.g, lineC.b];
        program.uniforms.uBaseColor.value = [baseC.r, baseC.g, baseC.b];
        program.uniforms.uIntensity.value = cfg.intensity * bright;
        program.uniforms.uShineSize.value = (cfg.shineSize * Math.PI) / 180;
        program.uniforms.uShineFade.value = (cfg.shineFade * Math.PI) / 180;
        program.uniforms.uThickness.value = cfg.thickness * dpr;
        renderer.render({ scene: mesh });
      };

      const sizeRef = { w: 1, h: 1 };

      raf = requestAnimationFrame(update);
      el.classList.add('specular-button--active');

      return () => {
        cancelled = true;
        if (raf) cancelAnimationFrame(raf);
        if (ro) ro.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
        if (gl && gl.canvas && gl.canvas.parentNode === fx) fx.removeChild(gl.canvas);
        if (gl && gl.getExtension) gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    } catch (err) {
      console.error('SpecularButton: init failed', err);
    }
  });

  return () => { cancelled = true; };
}

const specularInstances = new Map<HTMLElement, () => void>();

export function initSpecularButtons(): void {
  if (prefersReducedMotion()) return;
  document.querySelectorAll('[data-specular]').forEach((el: HTMLElement) => {
    if (specularInstances.has(el)) return;
    specularInstances.set(el, createSpecularButton(el));
  });
}

export function destroySpecularButtons(): void {
  specularInstances.forEach(destroy => {
    try { destroy(); } catch (e) { /* noop */ }
  });
  specularInstances.clear();
}

// Auto-initialize
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initSpecularButtons();
  });
}