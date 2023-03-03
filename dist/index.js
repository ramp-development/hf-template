"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/utils/createElement.ts
  var createElement = (type, location2, options = {}) => {
    const element = document.createElement(type);
    Object.entries(options).forEach(([key, value]) => {
      if (key === "class") {
        element.classList.add(value);
        return;
      }
      if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
        return;
      }
      if (key === "text") {
        element.textContent = value;
        return;
      }
      if (key === "callback") {
        element.onload = value;
        return;
      }
      element.setAttribute(key, value);
    });
    location2.appendChild(element);
    return element;
  };

  // src/pages/about.ts
  var about = () => {
    createElement("script", document.body, {
      src: "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js",
      callback: slider
    });
    function slider() {
      const splide = document.querySelector(".splide");
      new Splide(splide, {
        type: "loop",
        gap: "2.5rem",
        perPage: 3,
        perMove: 1,
        breakpoints: {
          991: {
            perPage: 2
          },
          767: {
            perPage: 1
          }
        }
      }).mount();
    }
  };

  // src/pages/authors.ts
  var authors = () => {
    const name = document.querySelector('[data-author="name"]').textContent?.replace(" ", "+"), more = document.querySelector('[data-author="more"]');
    more.href = `/search-results?author=${name}`;
  };

  // node_modules/.pnpm/@finsweet+ts-utils@0.37.3/node_modules/@finsweet/ts-utils/dist/webflow/breakpoints.js
  var WEBFLOW_BREAKPOINTS = /* @__PURE__ */ new Map([
    ["tiny", "(max-width: 479px)"],
    ["small", "(max-width: 767px)"],
    ["medium", "(max-width: 991px)"],
    ["main", "(min-width: 992px)"]
  ]);

  // node_modules/.pnpm/@finsweet+ts-utils@0.37.3/node_modules/@finsweet/ts-utils/dist/webflow/getCurrentBreakpoint.js
  var getCurrentBreakpoint = () => {
    for (const [breakpoint, mediaQuery] of WEBFLOW_BREAKPOINTS) {
      if (window.matchMedia(mediaQuery).matches) {
        return breakpoint;
      }
    }
    return "main";
  };

  // src/pages/gear.ts
  var gear = () => {
    recommendedReads();
    alignImages();
    window.addEventListener("resize", alignImages);
    function recommendedReads() {
      const wrapper = document.querySelector('[data-recommended="wrapper"]');
      if (!wrapper)
        return;
      const main = wrapper.querySelector('[data-recommended="main"]'), sub = wrapper.querySelector('[data-recommended="sub"]');
      const mainLinks = [...main.querySelectorAll('[data-recommended="link"]')];
      if (mainLinks.length === 3) {
        sub.remove();
        return;
      }
      const includedLinks = mainLinks.map((link) => link.href);
      let numberRequired = 3 - mainLinks.length;
      const subLinks = [...sub.querySelectorAll('[data-recommended="link"]')];
      subLinks.forEach((link) => {
        if (numberRequired === 0 || includedLinks.includes(link.href)) {
          link.remove();
          return;
        }
        numberRequired -= 1;
      });
    }
    function alignImages() {
      const base = document.querySelector(".aspect_wrapper.is-square");
      const toAlign = document.querySelector(".aspect_wrapper");
      const currentBreakpoint = getCurrentBreakpoint();
      if (currentBreakpoint === "main" || currentBreakpoint === "medium") {
        const toAlignWidth = toAlign.offsetWidth;
        const toAlignHeight = base.offsetHeight;
        toAlign.style.paddingBottom = `${toAlignHeight / toAlignWidth * 100}%`;
      } else {
        toAlign.style.removeProperty("padding-bottom");
      }
    }
  };

  // src/pages/guides.ts
  var guides = () => {
    alignImages();
    window.addEventListener("resize", alignImages);
    function alignImages() {
      const base = document.querySelector(".aspect_wrapper.is-square");
      const toAlign = document.querySelector(".aspect_wrapper");
      const currentBreakpoint = getCurrentBreakpoint();
      if (currentBreakpoint === "main" || currentBreakpoint === "medium") {
        const toAlignWidth = toAlign.offsetWidth;
        const toAlignHeight = base.offsetHeight;
        toAlign.style.paddingBottom = `${toAlignHeight / toAlignWidth * 100}%`;
      } else {
        toAlign.style.removeProperty("padding-bottom");
      }
    }
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const links = [...document.querySelectorAll("a")];
    links.forEach((link) => {
      const follow = link.host === window.location.host ? "follow" : "nofollow";
      link.setAttribute("rel", follow);
    });
    const { pathname } = window.location;
    if (pathname.includes("/about"))
      about();
    if (pathname.includes("/authors/"))
      authors();
    if (pathname.includes("/gear/"))
      gear();
    if (pathname.includes("/guides/"))
      guides();
  });
})();
//# sourceMappingURL=index.js.map
