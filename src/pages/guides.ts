import { getCurrentBreakpoint, simulateEvent } from '@finsweet/ts-utils';

export const guides = () => {
  alignImages();
  window.addEventListener('resize', alignImages);
  placeComponents();

  setTimeout(() => {
    const modalTriggered = sessionStorage.getItem('modalTriggered');
    if (modalTriggered) return;

    const navModalTrigger = document.querySelector('[data-nav-modal="trigger"]');
    simulateEvent(navModalTrigger, 'click');
    sessionStorage.setItem('modalTriggered', 'true');
  }, 10000);

  function alignImages() {
    const base = document.querySelector('.aspect_wrapper.is-square');
    const toAlign = document.querySelector('.aspect_wrapper');
    const currentBreakpoint = getCurrentBreakpoint();

    if (!base || !toAlign) return;
    if (currentBreakpoint === 'main' || currentBreakpoint === 'medium') {
      const toAlignWidth = toAlign.offsetWidth;
      const toAlignHeight = base.offsetHeight;

      toAlign.style.paddingBottom = `${(toAlignHeight / toAlignWidth) * 100}%`;
    } else {
      toAlign.style.removeProperty('padding-bottom');
    }
  }

  function placeComponents() {
    const components = [...document.querySelectorAll('[fs-richtext-component]')];
    components.forEach((component) => {
      const type = component.getAttribute('fs-richtext-component');
      const xpath = `//p[text()='{{${type}}}']`;
      const toReplace = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      if (!toReplace) return;
      toReplace.replaceWith(component);
    });
  }
};
