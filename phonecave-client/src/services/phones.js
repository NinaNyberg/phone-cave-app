import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URL,
  withCredentials: true
});

export const loadPhones = () =>
  api.get('/phones').then((response) => response.data);

export const loadSinglePhone = (id) =>
  api.get(`/phones/${id}`).then((response) => response.data);
