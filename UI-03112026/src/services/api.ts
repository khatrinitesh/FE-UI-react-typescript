import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_JSONPLACEHOLDER_API_URL,

  timeout: 15000,

  headers: {
    "Content-Type": "application/json",
  },
});

export function apiError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.message ||
      "Network error"
    );
  }

  return error instanceof Error
    ? error.message
    : "Something went wrong";
}