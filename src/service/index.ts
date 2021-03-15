import axios from 'axios';

export const AXIOSBASE = axios.create({
  baseURL: 'http://api.tvmaze.com/',
  timeout: 300000,
});

export * from './shows.service';
