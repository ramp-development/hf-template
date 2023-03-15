import { getCurrentBreakpoint } from '@finsweet/ts-utils';

export const gear = () => {
  recommendedReads();
  // alignImages();
  // window.addEventListener('resize', alignImages);

  function recommendedReads() {
    const wrapper = document.querySelector('[data-recommended="wrapper"]');
    if (!wrapper) return;

    // get the two groups of links
    const main = wrapper.querySelector('[data-recommended="main"]'),
      sub = wrapper.querySelector('[data-recommended="sub"]');

    // get the main items and remove the sub group if there are enough
    const mainLinks = [...main.querySelectorAll('[data-recommended="link"]')];
    if (mainLinks.length === 3) {
      sub.remove();
      return;
    }

    // find out what we already have and how many we need
    const includedLinks = mainLinks.map((link) => link.href);
    let numberRequired = 3 - mainLinks.length;

    // go through the sub links and add/remove as required
    const subLinks = [...sub.querySelectorAll('[data-recommended="link"]')];
    subLinks.forEach((link) => {
      // remove the item if there are already enough or if it is already included
      if (numberRequired === 0 || includedLinks.includes(link.href)) {
        link.remove();
        return;
      }

      // keep the item and decrement the remaining required
      numberRequired -= 1;
    });
  }

  function alignImages() {
    const base = document.querySelector('.aspect_wrapper.is-author');
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
