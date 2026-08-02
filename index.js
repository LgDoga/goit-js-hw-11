import{a as o,S as p,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",f="43034088-8742da6bcfba06a1e287112c2";o.defaults.baseURL=y;function d(s){const a={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return o.get("",{params:a}).then(l=>l.data)}const c=document.querySelector("#gallery"),m=document.querySelector("#loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function _(s){const a=s.map(({webformatURL:l,largeImageURL:r,tags:e,likes:t,views:i,comments:u,downloads:g})=>`
      <li class="gallery-item">
        <a class="gallery-item__link" href="${r}">
          <img
            class="gallery-item__image"
            src="${l}"
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
            <span class="gallery-item__stat-value">${u}</span>
            <span class="gallery-item__stat-label">Comments</span>
          </li>
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${g}</span>
            <span class="gallery-item__stat-label">Downloads</span>
          </li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",a),h.refresh()}function b(){c.innerHTML=""}function L(){m.classList.add("is-visible")}function v(){m.classList.remove("is-visible")}const w=document.querySelector("#search-form");w.addEventListener("submit",S);function S(s){s.preventDefault();const a=s.target.elements["search-text"].value.trim();if(!a){n.warning({title:"Empty search",message:"Please enter a search word before submitting.",position:"topRight"});return}b(),L(),d(a).then(l=>{const r=l.hits;if(r.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}_(r)}).catch(()=>{n.error({title:"Request failed",message:"Something went wrong while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{v(),s.target.reset()})}
//# sourceMappingURL=index.js.map
