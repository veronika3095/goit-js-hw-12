import { fetchImages, incrementPage, resetPage } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = "Load more";
loadMoreBtn.classList.add('load-more', 'hidden');
document.body.appendChild(loadMoreBtn);

const loader = document.querySelector('.loader');
let query = '';
let currentImages = [];

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    query = searchForm.elements.query.value.trim();

    if (!query) return;

    resetPage();
    loadMoreBtn.classList.add('hidden');
    currentImages = []; 
    await loadImages();
});

loadMoreBtn.addEventListener('click', async () => {
    incrementPage();
    await loadImages();
});

const loadImages = async () => {
    try {
        loader.classList.remove('hidden'); 
        const images = await fetchImages(query);
        
        
        if (currentImages.length === 0) {
            document.querySelector('.gallery').innerHTML = ''; 
        }

        if (images.length === 0) {
            iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!" });
            loadMoreBtn.classList.add('hidden');
            return;
        }

        currentImages = [...currentImages, ...images];
        renderGallery(currentImages);

        if (images.length < 15) {
            loadMoreBtn.classList.add('hidden');
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        } else {
            loadMoreBtn.classList.remove('hidden');
        }

        const galleryItemHeight = document.querySelector('.gallery-item')?.getBoundingClientRect().height || 0;
        window.scrollBy({
            top: galleryItemHeight * 2,
            behavior: 'smooth',
        });
    } catch (error) {
        console.error(error);
        iziToast.error({ message: "Error fetching images." });
    } finally {
        loader.classList.add('hidden'); 
    }
};

loadMoreBtn.style.marginBottom = '32px';