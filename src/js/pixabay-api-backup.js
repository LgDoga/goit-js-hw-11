import axios from 'axios';

// --- TEMPORARY: Unsplash version, used while Pixabay is unavailable ---
const BASE_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'x90WIRtG5Qpv4LuGD8ddCFCDJtzi2ucwq6l-Sivo6I8'; // replace with your own Unsplash Access Key

axios.defaults.baseURL = BASE_URL;

/**
 * Performs a GET request to the Unsplash API for a given search query
 * and normalizes the response to look like a Pixabay response
 * (an object with a `hits` array), so the rest of the app
 * (render-functions.js, main.js) doesn't need any changes.
 * @param {string} query - The search word entered by the user.
 * @returns {Promise<Object>} An object shaped like `{ hits: [...] }`.
 */
export function getImagesByQuery(query) {
  const params = {
    query,
    client_id: ACCESS_KEY,
    per_page: 15,
    orientation: 'landscape',
  };

  return axios.get('', { params }).then(response => {
    const hits = response.data.results.map(photo => ({
      webformatURL: photo.urls.small,
      largeImageURL: photo.urls.regular,
      tags: photo.alt_description || query,
      likes: photo.likes,
      views: 0,
      comments: 0,
      downloads: 0,
    }));

    return { hits };
  });
}