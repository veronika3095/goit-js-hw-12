import { fetchImages, incrementPage, resetPage } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = "Load more";
loadMoreBtn.classList.add('load-more', 'hidden');
document.body.appendChild(loadMoreBtn);

let query = '';

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    query = searchForm.elements.query.value.trim();

    if (!query) return;

    resetPage();
    loadMoreBtn.classList.add('hidden');
    await loadImages();
});

loadMoreBtn.addEventListener('click', async () => {
    incrementPage();
    await loadImages();
});

const loadImages = async () => {
    try {
        const images = await fetchImages(query);
        renderGallery(images);
        loadMoreBtn.classList.remove('hidden');

        if (images.length < 15) {
            loadMoreBtn.classList.add('hidden');
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        }

        const galleryItemHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
        window.scrollBy({
            top: galleryItemHeight * 2,
            behavior: 'smooth',
        });
    } catch (error) {
        console.error(error);
        iziToast.error({ message: "Error fetching images." });
    }
};