import { getCurrentBreakpoint } from '@finsweet/ts-utils';

import { createElement } from '$utils/createElement';

export const initSplide = () => {
  console.log('init splide');

  createElement('script', document.body, {
    src: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js',
    callback: slider,
  });

  function slider() {
    console.log('slider');
    const standard = document.querySelector('.splide.is-team');
    if (standard) {
      const standardSplide = new Splide(standard, {
        type: 'loop',
        gap: '2.5rem',
        perPage: 3,
        perMove: 1,
        breakpoints: {
          991: {
            perPage: 2,
          },
          767: {
            perPage: 1,
          },
        },
      }).mount();
    }

    const home = document.querySelector('.splide.is-home');
    if (home) {
      const homeSplide = new Splide(home, {
        type: 'loop',
        gap: '1.5rem',
        perPage: 4,
        perMove: 1,
        pagination: false,
        breakpoints: {
          991: {
            perPage: 3,
          },
          767: {
            perPage: 2,
          },
          479: {
            perPage: 1,
          },
        },
      });

      homeSplideLogic();
      window.addEventListener('resize', homeSplideLogic);

      function homeSplideLogic() {
        if (getCurrentBreakpoint() === 'main') {
          homeSplide.destroy();
        } else {
          homeSplide.mount();
        }
      }
    }
  }
};
