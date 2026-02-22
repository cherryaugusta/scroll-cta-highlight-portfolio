import { ScrollCtaOptions } from './types';
import { createScrollHandler } from './scrollHandler';

export function createScrollCta(options: ScrollCtaOptions = {}) {
  const {
    buttonSelector = '#cta-button',
    threshold = 500,
    highlightClass = 'highlight-style',
    defaultClass = 'default-style'
  } = options;

  const button = document.querySelector<HTMLElement>(buttonSelector);
  if (!button) throw new Error(`Element not found: ${buttonSelector}`);

  const { onScroll } = createScrollHandler(button, threshold, highlightClass, defaultClass);
  window.addEventListener('scroll', onScroll, { passive: true });

  return {
    destroy() {
      window.removeEventListener('scroll', onScroll);
    }
  };
}
