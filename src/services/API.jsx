import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const API = {
  get: (url, config = {}) => instance.get(url, config),
  post: (url, data = {}, config = {}) => instance.post(url, data, config),
  put: (url, data = {}, config = {}) => instance.put(url, data, config),
  delete: (url, config = {}) => instance.delete(url, config),
  patch: (url, data = {}, config = {}) => instance.patch(url, data, config),

  auth: {
    // Initialize Google OAuth
    initGoogleAuth: () => {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      const redirectUri = encodeURIComponent(import.meta.env.VITE_GOOGLE_REDIRECT_URI);
      
      const scope = encodeURIComponent('email profile');
      const responseType = 'code';
      const accessType = 'offline';
      const prompt = 'consent';

      const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}&prompt=${prompt}`;
      
      return { url };
    },

    // Handle Google OAuth callback
    handleGoogleCallback: (code) => 
      instance.post('/auth/google/callback', { 
        code,
        redirectUri: import.meta.env.VITE_GOOGLE_REDIRECT_URI
      }),
  }
};

export default API;
