import{S as u,N as c}from"./assets/vendor-094e1e92.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const p=[{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"public/ilona-ratushniak1x.png",large:"public/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/public/ilona-ratushniak1x.png",large:"/public/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./public/ilona-ratushniak1x.png",large:"./public/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../public/ilona-ratushniak1x.png",large:"../public/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"public/team/ilona-ratushniak1x.png",large:"public/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/public/team/ilona-ratushniak1x.png",large:"/public/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./public/team/ilona-ratushniak1x.png",large:"./public/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../public/team/ilona-ratushniak1x.png",large:"../public/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"img/team/maksym-nahornyi1x.png",large:"img/team/maksym-nahornyi@2x.png",userNameEn:"Maksym Nahornyi",userNameUa:"Максим Нагорний",developer:"PM"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/img/team/danulo-yanishevskiy1x.png",large:"/img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./img/team/danulo-yanishevskiy1x.png",large:"./img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/danulo-yanishevskiy1x.png",large:"../img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"}],d="/test12/assets/symbol-7352cb7a.svg",m={modules:[c],breakpoints:{375:{slidesPerView:2,spaceBetween:35},768:{slidesPerView:3,spaceBetween:50},1e3:{slidesPerView:4,spaceBetween:50},1440:{slidesPerView:6,spaceBetween:50}},navigation:{nextEl:".swiper-button-next-section-team",prevEl:".swiper-button-prev-section-team"},slidesOffsetAfter:25,slidesOffsetBefore:10},h=n=>{const i=n;return new u(`[data-id="${i}"]`,m)};h("photo-team");const g=document.querySelector(".swiper-wrapper"),k=document.querySelector(".developer-section"),y=document.querySelector(".icon-close-section-team"),w=document.querySelector(".team-button");function l(){const n=k.classList.toggle("is-open-section-team");document.body.style.overflow=n?"hidden":""}y.addEventListener("click",l);w.addEventListener("click",l);const v=n=>n.map(({small:s,large:r,userNameEn:e,developer:a,url:t,userNameUa:o})=>`<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      <div class="icon-linkedin-team">
      <a href="${t}"  target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href=${d}#icon-linkedin></use>
        </svg>
        </a>
      </div>
      <a href="${t}" target="_blank"
        >
<picture class="qwe">
  <source
    media="(min-width: 768px )"
    srcset="
      ${s}    1x,
      ${r} 2x
    "
  />
  <source
    media="(max-width: 767.98px)"
    srcset="
      ${s}    1x,
      ${r} 2x
    "
  />
  <img
    class="dev-photo"
    src="${s}"
    alt="${e}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${o}" data-en="${e}">${e}</h3>
  <p class="dev-desription" >${a}</p>
  </div>
</div>`).join("");g.innerHTML=v(p);
//# sourceMappingURL=commonHelpers.js.map
