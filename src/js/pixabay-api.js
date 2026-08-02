import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43034088-8742da6bcfba06a1e287112c2'; 

axios.defaults.baseURL = BASE_URL;

/**
 * Performs a GET request to the Pixabay API for a given search query.
 * @param {string} query - The search word entered by the user.
 * @returns {Promise<Object>} The `data` property of the Pixabay response.
 */
export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get('', { params }).then(response => response.data);
}
