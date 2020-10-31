import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Evictory/fakeAPI/',
  // baseURL: 'http://f81378fbb1b0.ngrok.io/am-api',
});

export default api;
