import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000
  });

export default api;