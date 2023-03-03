import { getCurrentBreakpoint } from '@finsweet/ts-utils';

export const guides = () => {
  alignImages();
  window.addEventListener('resize', alignImages);

  function alignImages() {
    const base = document.querySelector('.aspect_wrapper.is-square');
    const toAlign = document.querySelector('.aspect_wrapper');
    const currentBreakpoint = getCurrentBreakpoint();

    if (currentBreakpoint === 'main' || currentBreakpoint === 'medium') {
      const toAlignWidth = toAlign.offsetWidth;
      const toAlignHeight = base.offsetHeight;

      toAlign.style.paddingBottom = `${(toAlignHeight / toAlignWidth) * 100}%`;
    } else {
      toAlign.style.removeProperty('padding-bottom');
    }
  }
};
