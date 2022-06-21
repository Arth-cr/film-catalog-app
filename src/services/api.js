import axios from 'axios';

// https://sujeitoprogramador.com

const api = axios.create({
  baseURL: 'http://sujeitoprogramador.com/',
});

export default api;
