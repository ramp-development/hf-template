export const authors = () => {
  const name = document.querySelector('[data-author="name"]').textContent?.replace(' ', '+'),
    more = document.querySelector('[data-author="more"]');

  more.href = `/search-results?author=${name}`;
};
