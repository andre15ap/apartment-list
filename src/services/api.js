import axios from 'axios';

import URL from '../config/service';

const api = axios.create({
  baseURL: URL,
});

export default api;
