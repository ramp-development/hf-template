import { simulateEvent } from '@finsweet/ts-utils';

export const search = () => {
  window.onload = function () {
    const sortTrigger = document.querySelector('[fs-cmssort-element="trigger"]');
    simulateEvent(sortTrigger, 'click');
  };
};
