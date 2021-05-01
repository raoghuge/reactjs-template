import axios from "axios";
import useAxios from "axios-hooks";
import { BASE_URL } from './ApiEndpoints';

const refreshAccessToken = () => Math.random().toString(36);

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor intercepting 401 responses, refreshing token and retrying the request
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    if (error.response.status === 401 && !config._retry) {
      config._retry = true;
      localStorage.setItem("token", await refreshAccessToken());

      return axios(config);
    }

    return Promise.reject(error);
  }
);

export default function useHttpGet(endpoint) {
  const  [{ data, loading, error }, refetch] = useAxios(BASE_URL + endpoint);
  return [data, loading, error, refetch];  
}

