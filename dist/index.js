"use strict";(()=>{var c=(o,r)=>(Array.isArray(r)||(r=[r]),r.map(t=>o.dispatchEvent(new Event(t,{bubbles:!0}))).every(t=>t));var p=new Map([["tiny","(max-width: 479px)"],["small","(max-width: 767px)"],["medium","(max-width: 991px)"],["main","(min-width: 992px)"]]);var a=()=>{for(let[o,r]of p)if(window.matchMedia(r).matches)return o;return"main"};var d=(o,r,i={})=>{let t=document.createElement(o);return Object.entries(i).forEach(([e,n])=>{if(e==="class"){t.classList.add(n);return}if(e==="dataset"){Object.entries(n).forEach(([s,m])=>{t.dataset[s]=m});return}if(e==="text"){t.textContent=n;return}if(e==="callback"){t.onload=n;return}t.setAttribute(e,n)}),r.appendChild(t),t};var u=()=>{console.log("init splide"),d("script",document.body,{src:"https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js",callback:o});function o(){console.log("slider");let r=document.querySelector(".splide.is-team");if(r){let e=new Splide(r,{type:"loop",gap:"2.5rem",perPage:3,perMove:1,breakpoints:{991:{perPage:2},767:{perPage:1}}}).mount()}let i=document.querySelector(".splide.is-home");if(i){let n=function(){a()==="main"?e.destroy():e.mount()};var t=n;let e=new Splide(i,{type:"loop",gap:"1.5rem",perPage:4,perMove:1,pagination:!1,breakpoints:{991:{perPage:3},767:{perPage:2},479:{perPage:1}}});n(),window.addEventListener("resize",n)}}};var f=()=>{var i;window.onload=function(){let t=document.querySelector('[fs-cmssort-element="trigger"]');c(t,"click"),setTimeout(()=>{let e=document.querySelector('[fs-cmscombine-element="list"]');[...e==null?void 0:e.children].forEach((n,s)=>{s<=3||n.remove()})},100)};let o=(i=document.querySelector('[data-author="name"]').textContent)==null?void 0:i.replace(" ","+"),r=document.querySelector('[data-author="more"]');r.href=`/search-results?author=${o}`};var g=()=>{o();function o(){let i=document.querySelector('[data-recommended="wrapper"]');if(!i)return;let t=i.querySelector('[data-recommended="main"]'),e=i.querySelector('[data-recommended="sub"]'),n=[...t.querySelectorAll('[data-recommended="link"]')];if(n.length===3){e.remove();return}let s=n.map(l=>l.href),m=3-n.length;[...e.querySelectorAll('[data-recommended="link"]')].forEach(l=>{if(m===0||s.includes(l.href)){l.remove();return}m-=1})}function r(){let i=document.querySelector(".aspect_wrapper.is-author"),t=document.querySelector(".aspect_wrapper"),e=a();if(e==="main"||e==="medium"){let n=t.offsetWidth,s=i.offsetHeight;t.style.paddingBottom=`${s/n*100}%`}else t.style.removeProperty("padding-bottom")}};var h=()=>{o(),window.addEventListener("resize",o),r(),setTimeout(()=>{if(sessionStorage.getItem("modalTriggered"))return;let t=document.querySelector('[data-nav-modal="trigger"]');c(t,"click"),sessionStorage.setItem("modalTriggered","true")},1e4);function o(){let i=document.querySelector(".aspect_wrapper.is-square"),t=document.querySelector(".aspect_wrapper"),e=a();if(!(!i||!t))if(e==="main"||e==="medium"){let n=t.offsetWidth,s=i.offsetHeight;t.style.paddingBottom=`${s/n*100}%`}else t.style.removeProperty("padding-bottom")}function r(){[...document.querySelectorAll("[fs-richtext-component]")].forEach(t=>{let n=`//p[text()='{{${t.getAttribute("fs-richtext-component")}}}']`,s=document.evaluate(n,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;s&&s.replaceWith(t)})}};var x=()=>{window.onload=function(){let o=document.querySelector('[fs-cmssort-element="trigger"]');c(o,"click")}};var S=()=>{console.log("tags");let o=document.querySelector('[fs-cmssort-element="trigger"]'),r=[...document.querySelectorAll(".filter-radio_component")],i=document.querySelector(".fs-combine_wrapper");window.onload=()=>{t()},r.forEach(s=>{s.addEventListener("click",m=>{t(),m.target.type==="radio"&&m.target.checked?r[0].classList.remove("is-active"):r[0].classList.add("is-active")})});function t(){i&&(e(),n(),setTimeout(()=>{i.style.opacity="1"},250))}function e(){o&&c(o,"click")}function n(){setTimeout(()=>{(o==null?void 0:o.getAttribute("aria-sort"))==="descending"&&e()},1),setTimeout(()=>{(o==null?void 0:o.getAttribute("aria-sort"))==="descending"&&e()},10),setTimeout(()=>{(o==null?void 0:o.getAttribute("aria-sort"))==="descending"&&e()},100),setTimeout(()=>{(o==null?void 0:o.getAttribute("aria-sort"))==="descending"&&e()},250)}};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{[...document.querySelectorAll("a")].forEach(e=>{let n=e.host===window.location.host?"follow":"nofollow";e.setAttribute("rel",n)});let{pathname:r}=window.location;[...document.querySelectorAll('input[type="hidden"]')].forEach(e=>{switch(e.name){case"URL":e.value=r}}),r.includes("/authors/")?f():r.includes("/gear/")?g():r.includes("/guides/")?h():r==="/search-results"?x():(r==="/skiing"||r==="/snowboarding"||r==="/mountaineering"||r==="/climbing"||r==="/hiking")&&S(),document.querySelector(".splide")&&u()});})();
