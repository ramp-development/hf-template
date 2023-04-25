import { initSplide } from '$utils/initSplide';

import { authors } from './pages/authors';
import { gear } from './pages/gear';
import { guides } from './pages/guides';
import { home } from './pages/home';
import { search } from './pages/search';
import { tags } from './pages/tags';

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
  if (pathname.includes('/authors/')) {
    authors();
  } else if (pathname.includes('/gear/')) {
    gear();
  } else if (pathname.includes('/guides/')) {
    guides();
  } else if (pathname === '/search-results') {
    search();
  } else if (
    pathname === '/skiing' ||
    pathname === '/snowboarding' ||
    pathname === '/mountaineering' ||
    pathname === '/climbing' ||
    pathname === '/hiking'
  ) {
    tags();
  }

  const hasSplide = document.querySelector('.splide');
  if (hasSplide) initSplide();
});
