import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL is missing from the .env file.");
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add authentication token when required.
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/**
 * Response interceptor
 */
api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
    }

    if (error.code === "ECONNABORTED") {
      return Promise.reject(
        new Error("The request timed out. Please try again."),
      );
    }

    if (!error.response) {
      return Promise.reject(
        new Error("A network error occurred. Check your internet connection."),
      );
    }

    return Promise.reject(error);
  },
);
