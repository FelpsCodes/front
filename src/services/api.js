import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oministack-back.herokuapp.com',
});

export default api;