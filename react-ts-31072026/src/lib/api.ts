import axios, { AxiosError } from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error("VITE_API_BASE_URL is not configured.");
}

export const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
