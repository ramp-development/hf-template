import { createElement } from '$utils/createElement';

export const about = () => {
  createElement('script', document.body, {
    src: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js',
    callback: slider,
  });

  function slider() {
    const splide = document.querySelector('.splide');
    new Splide(splide, {
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
};
