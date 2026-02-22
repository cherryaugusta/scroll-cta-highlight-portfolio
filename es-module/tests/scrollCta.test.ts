import { describe, it, expect, beforeEach } from 'vitest';
import { createScrollCta } from '../src';

beforeEach(() => {
  globalThis.requestAnimationFrame = cb => setTimeout(cb, 0);

  Object.defineProperty(window, 'scrollY', {
    value: 0,
    writable: true,
    configurable: true
  });

  document.body.innerHTML =
    '<button id="cta-button" class="default-style"></button>';
});

describe('Scroll CTA', () => {
  it('applies highlight class after threshold', async () => {
    const instance = createScrollCta({ threshold: 0 });

    Object.defineProperty(window, 'scrollY', {
      value: 10,
      writable: true,
      configurable: true
    });

    window.dispatchEvent(new Event('scroll'));

    await new Promise(r => setTimeout(r, 0));

    expect(
      document
        .querySelector('#cta-button')!
        .classList.contains('highlight-style')
    ).toBe(true);

    instance.destroy();
  });
});