import{S as l,N as u}from"./assets/vendor-094e1e92.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const d=[{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"ilona-ratushniak1x.png",large:"ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"ilona-ratushniak1x.png",large:"ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"maksym-nahornyi1x.png",large:"maksym-nahornyi@2x.png",userNameEn:"Maksym Nahornyi",userNameUa:"Максим Нагорний",developer:"PM"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"ilona-ratushniak1x.png",large:"ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"team/ilona-ratushniak1x.png",large:"team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"ilona-ratushniak1x.png",large:"ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"ilona-ratushniak1x.png",large:"ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"ilona-ratushniak1x.png",large:"ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"maksym-nahornyi1x.png",large:"maksym-nahornyi@2x.png",userNameEn:"Maksym Nahornyi",userNameUa:"Максим Нагорний",developer:"PM"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"danulo-yanishevskiy1x.png",large:"danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/danulo-yanishevskiy1x.png",large:"/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"danulo-yanishevskiy1x.png",large:"danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"}],c="/test12/assets/symbol-e63f19c4.svg",p={modules:[u],breakpoints:{375:{slidesPerView:2,spaceBetween:35},768:{slidesPerView:3,spaceBetween:50},1e3:{slidesPerView:4,spaceBetween:50},1440:{slidesPerView:6,spaceBetween:50}},navigation:{nextEl:".swiper-button-next-section-team",prevEl:".swiper-button-prev-section-team"},slidesOffsetAfter:25,slidesOffsetBefore:10},m=i=>{const a=i;return new l(`[data-id="${a}"]`,p)};m("photo-team");const h=document.querySelector(".swiper-wrapper"),y=document.querySelector(".developer-section"),k=document.querySelector(".icon-close-section-team"),g=document.querySelector(".team-button");function o(){const i=y.classList.toggle("is-open-section-team");document.body.style.overflow=i?"hidden":""}k.addEventListener("click",o);g.addEventListener("click",o);const w=()=>d.map(({small:a,large:r,userNameEn:s,developer:e,url:n,userNameUa:t})=>`<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      <div class="icon-linkedin-team">
      <a href="${n}"  target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href=${c}#icon-linkedin></use>
        </svg>
        </a>
      </div>
      <a href="${n}" target="_blank"
        >
<picture class="qwe">
  <source
    media="(min-width: 768px)"
    srcset="team/${a} 1x, team/${r} 2x"
  />
  <source
    media="(max-width: 767.98px)"
    srcset="team/${a} 1x, team/${r} 2x"
  />
  <img
    class="dev-photo"
    src="team/${a}"
    alt="${s}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${t}" data-en="${s}">${s}</h3>
  <p class="dev-desription" >${e}</p>
  </div>
</div>`).join("");h.innerHTML=w();
//# sourceMappingURL=commonHelpers.js.map
