/**
 * MagicBento — Interactive Dashboard Cards with Particles & Spotlight
 * Requires GSAP
 */

const MAGIC_BENTO_CONFIG = {
  textAutoHide: true,
  enableStars: true,
  enableSpotlight: true,
  enableBorderGlow: true,
  enableTilt: false,
  enableMagnetism: false,
  clickEffect: true,
  spotlightRadius: 280,
  particleCount: 12,
  glowColor: '204, 255, 0',
  disableAnimations: false
};

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createParticleElement(x: number, y: number, color: string): HTMLDivElement {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(${color},1);box-shadow:0 0 6px rgba(${color},0.6);pointer-events:none;z-index:100;left:${x}px;top:${y}px;`;
  return el;
}

function calculateSpotlightValues(radius: number) {
  return { proximity: radius * 0.5, fadeDistance: radius * 0.75 };
}

function updateCardGlowProperties(card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number): void {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;
  card.style.setProperty('--glow-x', relativeX + '%');
  card.style.setProperty('--glow-y', relativeY + '%');
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', radius + 'px');
}

function initBentoParticleCard(card: HTMLElement, cfg: typeof MAGIC_BENTO_CONFIG): () => void {
  let isHovered = false;
  let initialized = false;
  let memoized: HTMLDivElement[] = [];
  const timeouts: number[] = [];
  const particles: HTMLDivElement[] = [];

  const initializeParticles = () => {
    if (initialized) return;
    const rect = card.getBoundingClientRect();
    memoized = Array.from({ length: cfg.particleCount }, () =>
      createParticleElement(Math.random() * rect.width, Math.random() * rect.height, cfg.glowColor)
    );
    initialized = true;
  };

  const clearAllParticles = () => {
    timeouts.forEach(clearTimeout);
    timeouts.length = 0;
    particles.forEach(particle => {
      if (typeof gsap !== 'undefined') {
        gsap.to(particle, {
          scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
          onComplete: () => { if (particle.parentNode) particle.parentNode.removeChild(particle); }
        });
      } else {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
      }
    });
    particles.length = 0;
  };

  const animateParticles = () => {
    if (!isHovered || !card.isConnected) return;
    if (!initialized) initializeParticles();
    memoized.forEach((particle, index) => {
      const timeoutId = window.setTimeout(() => {
        if (!isHovered || !card.isConnected) return;
        const clone = particle.cloneNode(true) as HTMLDivElement;
        card.appendChild(clone);
        particles.push(clone);
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
          gsap.to(clone, {
            x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100,
            rotation: Math.random() * 360, duration: 2 + Math.random() * 2,
            ease: 'none', repeat: -1, yoyo: true
          });
          gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
        }
      }, index * 100);
      timeouts.push(timeoutId);
    });
  };

  const onEnter = () => { isHovered = true; animateParticles(); };
  const onLeave = () => { isHovered = false; clearAllParticles(); };

  const onClick = (e: MouseEvent) => {
    if (!cfg.clickEffect) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const maxDistance = Math.max(
      Math.hypot(x, y),
      Math.hypot(x - rect.width, y),
      Math.hypot(x, y - rect.height),
      Math.hypot(x - rect.width, y - rect.height)
    );
    const ripple = document.createElement('div');
    ripple.style.cssText = `position:absolute;width:${maxDistance * 2}px;height:${maxDistance * 2}px;border-radius:50%;background:radial-gradient(circle, rgba(${cfg.glowColor},0.4) 0%, rgba(${cfg.glowColor},0.2) 30%, transparent 70%);left:${x - maxDistance}px;top:${y - maxDistance}px;pointer-events:none;z-index:1000;`;
    card.appendChild(ripple);
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, {
        scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out',
        onComplete: () => ripple.remove()
      });
    } else {
      setTimeout(() => ripple.remove(), 800);
    }
  };

  card.addEventListener('mouseenter', onEnter);
  card.addEventListener('mouseleave', onLeave);
  card.addEventListener('click', onClick);

  return () => {
    isHovered = false;
    card.removeEventListener('mouseenter', onEnter);
    card.removeEventListener('mouseleave', onLeave);
    card.removeEventListener('click', onClick);
    clearAllParticles();
  };
}

function initBentoSpotlight(grid: HTMLElement, cfg: typeof MAGIC_BENTO_CONFIG): () => void {
  if (!cfg.enableSpotlight || window.innerWidth <= 768) return () => {};

  const spotlight = document.createElement('div');
  spotlight.className = 'global-spotlight';
  spotlight.style.cssText = `position:fixed;width:800px;height:800px;border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(${cfg.glowColor},0.15) 0%, rgba(${cfg.glowColor},0.08) 15%, rgba(${cfg.glowColor},0.04) 25%, rgba(${cfg.glowColor},0.02) 40%, rgba(${cfg.glowColor},0.01) 65%, transparent 70%);z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;`;
  document.body.appendChild(spotlight);

  const { proximity, fadeDistance } = calculateSpotlightValues(cfg.spotlightRadius);

  const handleMouseMove = (e: MouseEvent) => {
    const section = grid.closest('.bento-section');
    const rect = section ? section.getBoundingClientRect() : null;
    const mouseInside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    const cards = grid.querySelectorAll('.magic-bento-card');

    if (!mouseInside) {
      if (typeof gsap !== 'undefined') {
        gsap.to(spotlight, { opacity: 0, duration: 0.3, ease: 'power2.out' });
      } else {
        spotlight.style.opacity = '0';
      }
      cards.forEach(card => card.style.setProperty('--glow-intensity', '0'));
      return;
    }

    let minDistance = Infinity;
    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
      const effectiveDistance = Math.max(0, distance);
      minDistance = Math.min(minDistance, effectiveDistance);

      let glowIntensity = 0;
      if (effectiveDistance <= proximity) glowIntensity = 1;
      else if (effectiveDistance <= fadeDistance) glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);

      updateCardGlowProperties(card as HTMLElement, e.clientX, e.clientY, glowIntensity, cfg.spotlightRadius);
    });

    if (typeof gsap !== 'undefined') {
      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const targetOpacity = minDistance <= proximity ? 0.8
        : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlight, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    } else {
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
      spotlight.style.opacity = minDistance <= proximity ? '0.8' : '0';
    }
  };

  document.addEventListener('mousemove', handleMouseMove);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    if (spotlight.parentNode) spotlight.parentNode.removeChild(spotlight);
  };
}

let magicBentoCleanups: (() => void)[] = [];

export function initMagicBento(): void {
  if (prefersReducedMotion() || typeof gsap === 'undefined') return;

  const grid = document.getElementById('magicBentoGrid');
  if (!grid) return;

  destroyMagicBento();

  const cfg = MAGIC_BENTO_CONFIG;
  const shouldDisable = cfg.disableAnimations || window.innerWidth <= 768;

  grid.querySelectorAll('.magic-bento-card').forEach(card => {
    if (!shouldDisable) {
      magicBentoCleanups.push(initBentoParticleCard(card as HTMLElement, cfg));
    } else {
      (card as HTMLElement).style.setProperty('--glow-intensity', '0');
    }
  });

  if (!shouldDisable) magicBentoCleanups.push(initBentoSpotlight(grid, cfg));
}

export function destroyMagicBento(): void {
  magicBentoCleanups.forEach(fn => { try { fn(); } catch (e) { /* noop */ } });
  magicBentoCleanups = [];
}

// Auto-initialize
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Only init if grid exists
    if (document.getElementById('magicBentoGrid')) {
      initMagicBento();
    }
  });
}