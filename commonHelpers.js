import{S as l,N as u}from"./assets/vendor-094e1e92.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d=[{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"assets/team/ilona-ratushniak1x.png",large:"assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"assets/ilona-ratushniak1x.png",large:"assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/assets/ilona-ratushniak1x.png",large:"/assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./assets/ilona-ratushniak1x.png",large:"./assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../assets/ilona-ratushniak1x.png",large:"../assets/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/assets/team/ilona-ratushniak1x.png",large:"/assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./assets/team/ilona-ratushniak1x.png",large:"./assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../assets/team/ilona-ratushniak1x.png",large:"../assets/team/ilona-ratushniak@2x.png",userNameEn:"Ilona Ratushniak",userNameUa:"Ілона Ратушняк",developer:"UI/UX Designer"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"img/team/maksym-nahornyi1x.png",large:"img/team/maksym-nahornyi@2x.png",userNameEn:"Maksym Nahornyi",userNameUa:"Максим Нагорний",developer:"PM"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"/img/team/danulo-yanishevskiy1x.png",large:"/img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"./img/team/danulo-yanishevskiy1x.png",large:"./img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"},{url:"https://www.linkedin.com/in/danulo-yanishevskiy-27020a2b1/",small:"../img/team/danulo-yanishevskiy1x.png",large:"../img/team/danulo-yanishevskiy@2x.png",userNameEn:"Yanishevskiy Danulo",userNameUa:"Янішевський Данило",developer:"frontend"}],m="/test12/assets/symbol-7352cb7a.svg",c={modules:[u],breakpoints:{375:{slidesPerView:2,spaceBetween:35},768:{slidesPerView:3,spaceBetween:50},1e3:{slidesPerView:4,spaceBetween:50},1440:{slidesPerView:6,spaceBetween:50}},navigation:{nextEl:".swiper-button-next-section-team",prevEl:".swiper-button-prev-section-team"},slidesOffsetAfter:25,slidesOffsetBefore:10};new l(".swiper",c);const p=document.querySelector(".swiper-wrapper"),h=document.querySelector(".developer-section"),g=document.querySelector(".icon-close-section-team"),k=document.querySelector(".team-button");function o(){const r=h.classList.toggle("is-open-section-team");document.body.style.overflow=r?"hidden":""}g.addEventListener("click",o);k.addEventListener("click",o);const y=()=>d.map(({small:a,large:t,userNameEn:n,developer:e,url:s,userNameUa:i})=>`<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      <div class="icon-linkedin-team">
      <a href="${s}"  target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href=${m}#icon-linkedin></use>
        </svg>
        </a>
      </div>
      <a href="${s}" target="_blank"
        >
<picture class="qwe">
  <source
    media="(min-width: 768px )"
    srcset="
      ${a}    1x,
      ${t} 2x
    "
  />
  <source
    media="(max-width: 767.98px)"
    srcset="
      ${a}    1x,
      ${t} 2x
    "
  />
  <img
    class="dev-photo"
    src="${a}"
    alt="${n}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${i}" data-en="${n}">${n}</h3>
  <p class="dev-desription" >${e}</p>
  </div>
</div>`).join("");p.innerHTML=y();
//# sourceMappingURL=commonHelpers.js.map
