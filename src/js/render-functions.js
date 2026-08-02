import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('#gallery');
const loaderEl = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Builds and inserts markup for a set of images into the gallery,
 * then refreshes the SimpleLightbox instance.
 * @param {Array<Object>} images - Array of image objects from the Pixabay API.
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-item__link" href="${largeImageURL}">
          <img
            class="gallery-item__image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <ul class="gallery-item__stats">
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${likes}</span>
            <span class="gallery-item__stat-label">Likes</span>
          </li>
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${views}</span>
            <span class="gallery-item__stat-label">Views</span>
          </li>
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${comments}</span>
            <span class="gallery-item__stat-label">Comments</span>
          </li>
          <li class="gallery-item__stat">
            <span class="gallery-item__stat-value">${downloads}</span>
            <span class="gallery-item__stat-label">Downloads</span>
          </li>
        </ul>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

/**
 * Clears all markup from the gallery container.
 */
export function clearGallery() {
  galleryEl.innerHTML = '';
}

/**
 * Shows the loading indicator.
 */
export function showLoader() {
  loaderEl.classList.add('is-visible');
}

/**
 * Hides the loading indicator.
 */
export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}
