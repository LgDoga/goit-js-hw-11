import{a as o,S as p,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://api.unsplash.com/search/photos",f="x90WIRtG5Qpv4LuGD8ddCFCDJtzi2ucwq6l-Sivo6I8";o.defaults.baseURL=d;function y(a){const s={query:a,client_id:f,per_page:15,orientation:"landscape"};return o.get("",{params:s}).then(r=>({hits:r.data.results.map(e=>({webformatURL:e.urls.small,largeImageURL:e.urls.regular,tags:e.alt_description||a,likes:e.likes,views:0,comments:0,downloads:0}))}))}const c=document.querySelector("#gallery"),u=document.querySelector("#loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function _(a){const s=a.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:i,comments:m,downloads:g})=>`
      <li class="gallery-item">
        <a class="gallery-item__link" href="${l}">
          <img
            class="gallery-item__image"
            src="${r}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <ul class="gallery-item__stats">
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${t}</span>
            <span class="gallery-item__stat-label">Likes</span>
          </li>
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${i}</span>
            <span class="gallery-item__stat-label">Views</span>
          </li>
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${m}</span>
            <span class="gallery-item__stat-label">Comments</span>
          </li>
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${g}</span>
            <span class="gallery-item__stat-label">Downloads</span>
          </li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){c.innerHTML=""}function b(){u.classList.add("is-visible")}function w(){u.classList.remove("is-visible")}const v=document.querySelector("#search-form");v.addEventListener("submit",S);function S(a){a.preventDefault();const s=a.target.elements["search-text"].value.trim();if(!s){n.warning({title:"Empty search",message:"Please enter a search word before submitting.",position:"topRight"});return}L(),b(),y(s).then(r=>{const l=r.hits;if(l.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}_(l)}).catch(()=>{n.error({title:"Request failed",message:"Something went wrong while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{w(),a.target.reset()})}
//# sourceMappingURL=index.js.map
