export function createScrollHandler(
  button: HTMLElement,
  threshold: number,
  highlightClass: string,
  defaultClass: string
) {
  let ticking = false;
  const update = () => {
    const isPast = window.scrollY > threshold;
    button.classList.toggle(highlightClass, isPast);
    button.classList.toggle(defaultClass, !isPast);
  };
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  };
  return { onScroll };
}
