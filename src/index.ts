import { gear } from './pages/gear';

window.Webflow ||= [];
window.Webflow.push(() => {
  // define the follow attribute for links
  const links = [...document.querySelectorAll('a')];
  links.forEach((link) => {
    const follow = link.host === window.location.host ? 'follow' : 'nofollow';
    link.setAttribute('rel', follow);
  });

  // run page specific code
  const { pathname } = window.location;
  if (pathname.includes('/gear/')) gear();
});
