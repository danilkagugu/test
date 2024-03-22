import{S as u,N as d}from"./assets/vendor-094e1e92.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const m=[{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"assets/team/ilona-ratushniak1x.png",large:"assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"assets/ilona-ratushniak1x.png",large:"assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/assets/ilona-ratushniak1x.png",large:"/assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./assets/ilona-ratushniak1x.png",large:"./assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../assets/ilona-ratushniak1x.png",large:"../assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/assets/team/ilona-ratushniak1x.png",large:"/assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./assets/team/ilona-ratushniak1x.png",large:"./assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../assets/team/ilona-ratushniak1x.png",large:"../assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"img/team/maksym-nahornyi1x.png",large:"img/team/maksym-nahornyi@2x.png",userNameEn:"Maksym Nahornyi",userNameUa:"Максим Нагорний",developer:"PM"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/img/team/danulo-yanishevskiy1x.png",large:"/img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./img/team/danulo-yanishevskiy1x.png",large:"./img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/danulo-yanishevskiy1x.png",large:"../img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"}],c="/test12/assets/symbol-7352cb7a.svg",p={modules:[d],breakpoints:{375:{slidesPerView:2,spaceBetween:35},768:{slidesPerView:3,spaceBetween:50},1e3:{slidesPerView:4,spaceBetween:50},1440:{slidesPerView:6,spaceBetween:50}},navigation:{nextEl:".swiper-button-next-section-team",prevEl:".swiper-button-prev-section-team"},slidesOffsetAfter:25,slidesOffsetBefore:10},h=a=>{const n=a;return new u(`[data-id="${n}"]`,p)};h("photo-team");const g=document.querySelector(".swiper-wrapper"),k=document.querySelector(".developer-section"),y=document.querySelector(".icon-close-section-team"),w=document.querySelector(".team-button");function o(){const a=k.classList.toggle("is-open-section-team");document.body.style.overflow=a?"hidden":""}y.addEventListener("click",o);w.addEventListener("click",o);const v=a=>a.map(({small:i,large:r,userNameEn:e,developer:s,url:t,userNameUa:l})=>`<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      <div class="icon-linkedin-team">
      <a href="${t}"  target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href=${c}#icon-linkedin></use>
        </svg>
        </a>
      </div>
      <a href="${t}" target="_blank"
        >
<picture class="qwe">
  <source
    media="(min-width: 768px )"
    srcset="
      ${i}    1x,
      ${r} 2x
    "
  />
  <source
    media="(max-width: 767.98px)"
    srcset="
      ${i}    1x,
      ${r} 2x
    "
  />
  <img
    class="dev-photo"
    src="${i}"
    alt="${e}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${l}" data-en="${e}">${e}</h3>
  <p class="dev-desription" >${s}</p>
  </div>
</div>`).join("");g.innerHTML=v(m);
//# sourceMappingURL=commonHelpers.js.map
