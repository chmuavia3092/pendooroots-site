/**
 * StarBorderButton — CSS Animated Gradient Border Button
 * No JS required, purely CSS-based
 */

// StarBorder markup generator
export function starBorderMarkup(inner: string): string {
  return `
    <span class="border-gradient-top"></span>
    <span class="border-gradient-bottom"></span>
    <span class="inner-content">${inner}</span>
  `;
}

// Auto-initialize (CSS handles animations, just need to ensure elements exist)
export function initStarBorderButtons(): void {
  // CSS handles all animations, no JS initialization needed
  // This function exists for API consistency
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initStarBorderButtons();
  });
}