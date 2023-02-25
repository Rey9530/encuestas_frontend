import axios from 'axios';
import { useAuthStore } from '../storage/authStore';
import { refreshToken } from '../services'; 
const hostname = import.meta.env.VITE_REACT_APP_API_URL  ;
const BASE_URL = hostname;

console.log(hostname)
const datosAuth:any = useAuthStore;
const axiosInstance = axios.create();
const axiosPublicInstance = axios.create();

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config:any) => {
    const token:any = datosAuth.getState().userInformation?.token2;
    const id = datosAuth.getState().userInformation?.id;
    config.headers = {
      ...(token && { 'x-access-token': token }),
      ...(id && { 'x-access-user': id }),
      Accept: 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // if (
    //   error.response.status === 401 &&
    //   !originalRequest._retry &&
    //   !originalRequest.url.includes('api/auth/login')
    // ) {
    //   originalRequest._retry = true; 
    //   try {
    //     const { data } = await refreshToken({
    //       id: datosAuth.getState().userInformation?.id,
    //       correo_electronico:
    //         datosAuth.getState().userInformation?.correo_electronico,
    //       token: datosAuth.getState().userInformation?.token,
    //     });

    //     const userInfo = data?.info.data;

    //     if (userInfo) {
    //       datosAuth.getState().setUserInformation(userInfo);
    //       axiosInstance.defaults.headers['x-access-token'] = userInfo.token2;
    //     } else {
    //       datosAuth.getState().setUserInformation(null);
    //       delete axiosInstance.defaults.headers['x-access-token'];
    //     }

    //     return axiosInstance(originalRequest);
    //   } catch (error) { 
    //     datosAuth.getState().setUserInformation(null);
    //     window.location.reload();
    //   }
    // }
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosPublicInstance, BASE_URL };
