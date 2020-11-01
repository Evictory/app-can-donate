import axios from 'axios';

const api = axios.create({
  baseURL: 'https://amsegundosemestre-beehive.azurewebsites.net/',
});

export default api;
