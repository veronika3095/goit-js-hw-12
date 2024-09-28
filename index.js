import{a as y,i,S as L}from"./assets/vendor-DhWfHwn5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const b="46051568-7c86afd7f3b7df8cfe693777e",v="https://pixabay.com/api/";let d=1;const w=async o=>{const t=`${v}?key=${b}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${d}`;try{return(await y.get(t)).data.hits}catch{throw new Error("Error fetching images")}},$=()=>{d+=1},E=()=>{d=1},S=o=>{const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){i.error({message:"Sorry, no images found."});return}const n=o.map(({webformatURL:e,largeImageURL:r,tags:a,likes:f,views:g,comments:p,downloads:h})=>`
        <div class="gallery-item">
            <a href="${r}" class="gallery-link">
                <img src="${e}" alt="${a}" />
            </a>
            <div class="image-info">
                <span>Likes: ${f}</span>
                <span>Views: ${g}</span>
                <span>Comments: ${p}</span>
                <span>Downloads: ${h}</span>
            </div>
        </div>
    `).join("");t.innerHTML=n,new L(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()},m=document.querySelector(".search-form"),s=document.createElement("button");s.textContent="Load more";s.classList.add("load-more","hidden");document.body.appendChild(s);let l="";m.addEventListener("submit",async o=>{o.preventDefault(),l=m.elements.query.value.trim(),l&&(E(),s.classList.add("hidden"),await u())});s.addEventListener("click",async()=>{$(),await u()});const u=async()=>{var o;try{const t=await w(l);if(S(t),t.length===0){i.error({message:"Sorry, no images found."}),s.classList.add("hidden");return}t.length<15?(s.classList.add("hidden"),i.info({message:"We're sorry, but you've reached the end of search results."})):s.classList.remove("hidden");const n=((o=document.querySelector(".gallery-item"))==null?void 0:o.getBoundingClientRect().height)||0;window.scrollBy({top:n*2,behavior:"smooth"})}catch(t){console.error(t),i.error({message:"Error fetching images."})}};s.style.marginBottom="32px";
//# sourceMappingURL=index.js.map
