import{a as y,i as c,S as L}from"./assets/vendor-DSqPxQZQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const b="46051568-7c86afd7f3b7df8cfe693777e",v="https://pixabay.com/api/";let d=1;const w=async r=>{const o=`${v}?key=${b}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${d}`;try{return(await y.get(o)).data.hits}catch{throw new Error("Error fetching images")}},$=()=>{d++},E=()=>{d=1},S=r=>{const o=document.querySelector(".gallery");if(r.length===0){c.error({message:"Sorry, no images found."});return}const n=r.map(({webformatURL:e,largeImageURL:t,tags:a,likes:f,views:p,comments:g,downloads:h})=>`
        <div class="gallery-item">
            <a href="${t}" class="gallery-link">
                <img src="${e}" alt="${a}" />
            </a>
            <div class="image-info">
                <span>Likes: ${f}</span>
                <span>Views: ${p}</span>
                <span>Comments: ${g}</span>
                <span>Downloads: ${h}</span>
            </div>
        </div>
    `).join("");o.innerHTML+=n,new L(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()},u=document.querySelector(".search-form"),s=document.createElement("button");s.textContent="Load more";s.classList.add("load-more","hidden");document.body.appendChild(s);let l="";u.addEventListener("submit",async r=>{r.preventDefault(),l=u.elements.query.value.trim(),l&&(E(),s.classList.add("hidden"),await m())});s.addEventListener("click",async()=>{$(),await m()});const m=async()=>{try{const r=await w(l);S(r),s.classList.remove("hidden"),r.length<15&&(s.classList.add("hidden"),c.info({message:"We're sorry, but you've reached the end of search results."}));const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}catch(r){console.error(r),c.error({message:"Error fetching images."})}};
//# sourceMappingURL=index.js.map
