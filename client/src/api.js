import axios from 'axios';

// Access environment variable
const port = import.meta.env.VITE_BACKEND_PORT || 5000;
const BASE_URL = `http://localhost:${port}`;

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;



