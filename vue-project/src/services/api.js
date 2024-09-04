import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(async (config) => {
  let token = localStorage.getItem('access_token');

  // Check if token is expired and refresh it
  const refreshToken = localStorage.getItem('refresh_token');
  if (refreshToken && isTokenExpired(token)) {
    try {
      const response = await axios.post('http://localhost:8000/api/token/refresh/', {
        refresh: refreshToken
      });
      token = response.data.access;
      localStorage.setItem('access_token', token);  // Update new access token
    } catch (error) {
      console.error('Error refreshing token', error);
    }
  }

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, error => {
  return Promise.reject(error);
});

// Utility function to check if a token is expired
function isTokenExpired(token) {
  if (!token) return true;

  const payload = JSON.parse(atob(token.split('.')[1]));
  const expiry = payload.exp * 1000;
  return Date.now() > expiry;
}

export default apiClient;
