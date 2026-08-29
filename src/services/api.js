import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' });
export const authApi = { login: (data) => API.post('/auth/login', data), register: (data) => API.post('/auth/register', data) };
export default API;
