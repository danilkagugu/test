import{S as c,N as l}from"./assets/vendor-094e1e92.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=[{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"ilona-ratushniak1x.png",large:"ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"maksym-nahornyi1x.png",large:"maksym-nahornyi@2x.png",userNameEn:"Maksym Nahornyi",userNameUa:"Максим Нагорний",developer:"PM"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"danulo-yanishevskiy1x.png",large:"danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"}],u="/test12/assets/symbol-7352cb7a.svg",p={modules:[l],breakpoints:{375:{slidesPerView:2,spaceBetween:35},768:{slidesPerView:3,spaceBetween:50},1e3:{slidesPerView:4,spaceBetween:50},1440:{slidesPerView:6,spaceBetween:50}},navigation:{nextEl:".swiper-button-next-section-team",prevEl:".swiper-button-prev-section-team"},slidesOffsetAfter:25,slidesOffsetBefore:10};new c(".swiper",p);const m=document.querySelector(".swiper-wrapper"),f=document.querySelector(".developer-section"),g=document.querySelector(".icon-close-section-team"),v=document.querySelector(".team-button");function a(){const o=f.classList.toggle("is-open-section-team");document.body.style.overflow=o?"hidden":""}g.addEventListener("click",a);v.addEventListener("click",a);const y=()=>d.map(({small:t,large:r,userNameEn:i,developer:e,url:s,userNameUa:n})=>`<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      <div class="icon-linkedin-team">
      <a href="${s}"  target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href=${u}#icon-linkedin></use>
        </svg>
        </a>
      </div>
      <a href="${s}" target="_blank"
        >
<picture>
  <source
    media="(min-width: 768px )"
    srcset="
      img/team/${t}    1x,
      img/team/${r} 2x
    "
  />
  <source
    media="(max-width: 767.98px)"
    srcset="
      img/team/${t}    1x,
      img/team/${r} 2x
    "
  />
  <img
    class="dev-photo"
    src="img/team/${t}"
    alt="${i}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${n}" data-en="${i}">${i}</h3>
  <p class="dev-desription" >${e}</p>
  </div>
</div>`).join("");m.innerHTML=y();
//# sourceMappingURL=commonHelpers.js.map
