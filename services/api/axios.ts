import axios from 'axios';
import { setupInterceptors } from './interceptor';

export const api = axios.create({
 baseURL: 'http://127.0.0.1:8000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

setupInterceptors(api);