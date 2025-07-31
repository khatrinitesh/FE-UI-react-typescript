import axios from "axios";
import { handleUserLogout } from "../utils";

const baseURL = import.meta.env.VITE_BASE_URL;

export const userAxiosInstance = axios.create({
  baseURL,
});

userAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  // const apiKey = import.meta.env.VITE_API_KEY;
  // config.headers["x-api-key"] = apiKey;
  return config;
});

userAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const token = localStorage.getItem("userToken");
    if (error.response?.status === 401 && token) {
      handleUserLogout();
    }

    return Promise.reject(error);
  }
);
