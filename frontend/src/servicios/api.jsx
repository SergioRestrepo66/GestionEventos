import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5002/api/autenticacion',
    Headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Autorization = `Bearer ${token}`;
    }
    return config;
});

export default api;