import { simulateEvent } from '@finsweet/ts-utils';

export const tags = () => {
  console.log('tags');
  const sortTrigger = document.querySelector('[fs-cmssort-element="trigger"]');
  const filterComponents = [...document.querySelectorAll('.filter-radio_component')];
  const combineWrapper = document.querySelector('.fs-combine_wrapper');

  window.onload = () => {
    sort();
  };

  filterComponents.forEach((filterComponent) => {
    filterComponent.addEventListener('click', (e) => {
      sort();
      if (e.target.type === 'radio' && e.target.checked) {
        filterComponents[0].classList.remove('is-active');
      } else {
        filterComponents[0].classList.add('is-active');
      }
    });
  });

  function sort() {
    if (!combineWrapper) return;
    applySort();
    checkSort();

    setTimeout(() => {
      combineWrapper.style.opacity = '1';
    }, 250);
  }

  function applySort() {
    if (!sortTrigger) return;
    simulateEvent(sortTrigger, 'click');
  }

  function checkSort() {
    setTimeout(() => {
      if (sortTrigger?.getAttribute('aria-sort') === 'descending') applySort();
    }, 1);

    setTimeout(() => {
      if (sortTrigger?.getAttribute('aria-sort') === 'descending') applySort();
    }, 10);

    setTimeout(() => {
      if (sortTrigger?.getAttribute('aria-sort') === 'descending') applySort();
    }, 100);

    setTimeout(() => {
      if (sortTrigger?.getAttribute('aria-sort') === 'descending') applySort();
    }, 250);
  }
};
