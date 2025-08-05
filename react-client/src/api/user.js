import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // adjust if different
});

export const createUser = (data) => api.post('/users', data);
export const getUsers = () => api.get('/users');
