import axios from 'axios';

const baseURL = 'http://192.168.0.9:3000';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  config => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTc0YmE5MGEyNDE1ZjAxYjQwNzdkZSIsIm5hbWUiOiJKb2huIGV3ZSIsImVtYWlsIjoiZmUiLCJzcXVhZCI6IkVuZ2luZWVyaW5nIiwiaWF0IjoxNjk5NTU1MDQyfQ.iiY-LFIst4_5YWWo79Yebu_myJDBRWg8vGXEvnKBK1I';
    config.headers.Authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.log('Error:', error);
    return Promise.reject(error);
  },
);

export default instance;
