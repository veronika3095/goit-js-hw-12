import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderGallery = (images) => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    if (images.length === 0) {
        iziToast.error({ message: "Sorry, no images found." });
        return;
    }

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="image-info">
                <span>Likes: ${likes}</span>
                <span>Views: ${views}</span>
                <span>Comments: ${comments}</span>
                <span>Downloads: ${downloads}</span>
            </div>
        </div>
    `).join('');

    gallery.innerHTML = markup;

    const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
    });

    lightbox.refresh();
};