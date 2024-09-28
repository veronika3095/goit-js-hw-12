import{a as L,i,S as b}from"./assets/vendor-DhWfHwn5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const v="46051568-7c86afd7f3b7df8cfe693777e",w="https://pixabay.com/api/";let m=1;const $=async o=>{const t=`${w}?key=${v}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${m}`;try{return(await L.get(t)).data.hits}catch{throw new Error("Error fetching images")}},E=()=>{m+=1},S=()=>{m=1},q=o=>{const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){i.error({message:"Sorry, no images found."});return}const n=o.map(({webformatURL:e,largeImageURL:r,tags:a,likes:f,views:p,comments:h,downloads:y})=>`
        <div class="gallery-item">
            <a href="${r}" class="gallery-link">
                <img src="${e}" alt="${a}" />
            </a>
            <div class="image-info">
                <span>Likes: ${f}</span>
                <span>Views: ${p}</span>
                <span>Comments: ${h}</span>
                <span>Downloads: ${y}</span>
            </div>
        </div>
    `).join("");t.innerHTML=n,new b(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()},u=document.querySelector(".search-form"),s=document.createElement("button");s.textContent="Load more";s.classList.add("load-more","hidden");document.body.appendChild(s);let d="",c=[];u.addEventListener("submit",async o=>{o.preventDefault(),d=u.elements.query.value.trim(),d&&(S(),s.classList.add("hidden"),c=[],await g())});s.addEventListener("click",async()=>{E(),await g()});const g=async()=>{var o;try{const t=await $(d);if(t.length===0){i.error({message:"Sorry, no images found."}),s.classList.add("hidden");return}c=[...c,...t],q(c),t.length<15?(s.classList.add("hidden"),i.info({message:"We're sorry, but you've reached the end of search results."})):s.classList.remove("hidden");const n=((o=document.querySelector(".gallery-item"))==null?void 0:o.getBoundingClientRect().height)||0;window.scrollBy({top:n*2,behavior:"smooth"})}catch(t){console.error(t),i.error({message:"Error fetching images."})}};s.style.marginBottom="32px";
//# sourceMappingURL=index.js.map
