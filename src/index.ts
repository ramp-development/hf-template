import { initSplide } from '$utils/initSplide';

import { authors } from './pages/authors';
import { gear } from './pages/gear';
import { guides } from './pages/guides';
import { home } from './pages/home';
import { search } from './pages/search';

window.Webflow ||= [];
window.Webflow.push(() => {
  // define the follow attribute for links
  const links = [...document.querySelectorAll('a')];
  links.forEach((link) => {
    const follow = link.host === window.location.host ? 'follow' : 'nofollow';
    link.setAttribute('rel', follow);
  });

  const { pathname } = window.location;

  // add hidden input values
  const hiddenInputs = [...document.querySelectorAll('input[type="hidden"]')];
  hiddenInputs.forEach((input) => {
    switch (input.name) {
      case 'URL':
        input.value = pathname;
    }
  });

  // run page specific code
  if (pathname.includes('/authors/')) authors();
  if (pathname.includes('/gear/')) gear();
  if (pathname.includes('/guides/')) guides();
  if (pathname.includes('/search-results')) search();

  const hasSplide = document.querySelector('.splide');
  if (hasSplide) initSplide();
});
