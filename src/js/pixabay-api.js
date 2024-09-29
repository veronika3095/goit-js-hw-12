import axios from 'axios';

const API_KEY = '46051568-7c86afd7f3b7df8cfe693777e';
const BASE_URL = 'https://pixabay.com/api/';
let page = 1;

export const fetchImages = async (query) => {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;

    try {
        const response = await axios.get(url);
        return response.data.hits;
    } catch (error) {
        throw new Error('Error fetching images');
    }
};

export const incrementPage = () => {
    page += 1;
};

export const resetPage = () => {
    page = 1;
};