import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: 'http://54.227.88.54:8000', // Replace with your API base URL
});


// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config:any) => {
    // Modify the request config here (add headers, authentication tokens)
        // const accessToken = JSON.parse(localStorage.getItem("token"));
        const accessToken ="";
    // If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error:any) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor



// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default axiosInterceptorInstance;