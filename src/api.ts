import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.sofascore.com/api/v1/'
});

export default api;