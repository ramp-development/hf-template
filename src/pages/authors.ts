import { simulateEvent } from '@finsweet/ts-utils';

export const authors = () => {
  window.onload = function () {
    const sortTrigger = document.querySelector('[fs-cmssort-element="trigger"]');
    simulateEvent(sortTrigger, 'click');

    setTimeout(() => {
      const sortList = document.querySelector('[fs-cmscombine-element="list"]');
      [...sortList?.children].forEach((child, index) => {
        if (index <= 3) return;

        child.remove();
      });
    }, 100);
  };

  const name = document.querySelector('[data-author="name"]').textContent?.replace(' ', '+'),
    more = document.querySelector('[data-author="more"]');

  more.href = `/search-results?author=${name}`;
};
