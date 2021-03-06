import api from './api';

export const loadPhones = () =>
  api.get('/phones').then((response) => response.data);

export const loadSinglePhone = (id) =>
  api.get(`/phones/${id}`).then((response) => response.data);
