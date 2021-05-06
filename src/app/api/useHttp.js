import axios from "axios";
import { BASE_URL } from "./ApiEndpoints";
import { useState, useEffect } from 'react';

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




const useHttp = (endpoint) => {
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    BASE_URL + endpoint,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
       
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

 
  return [{ data, isLoading, isError }, setUrl ];
};

export default useHttp;