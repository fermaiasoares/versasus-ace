import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.254.115:8080',
})

export default api;