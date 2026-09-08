/**
 * HeroBottle — Client-side 3D parallax for hero bottle
 */

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initHeroBottleParallax(): void {
  if (prefersReducedMotion()) return;

  const bottle = document.querySelector('.hero-bottle') as HTMLElement;
  const showcase = document.querySelector('.hero-product-showcase') as HTMLElement;
  if (!bottle || !showcase) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    const rect = showcase.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX = (e.clientX - centerX) / rect.width;
    mouseY = (e.clientY - centerY) / rect.height;
  });

  function animate(): void {
    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;

    gsap.set(bottle, {
      rotateY: currentX * 25,
      rotateX: -currentY * 15,
      x: currentX * 20,
      y: currentY * 15
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

export function initHeroBottleScrollParallax(): void {
  if (prefersReducedMotion()) return;

  const bottle = document.querySelector('.hero-bottle') as HTMLElement;
  if (!bottle) return;

  gsap.to(bottle, {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    },
    y: -100,
    rotate: 5,
    ease: 'none'
  });
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      initHeroBottleParallax();
      initHeroBottleScrollParallax();
    }, 2300);
  });
}