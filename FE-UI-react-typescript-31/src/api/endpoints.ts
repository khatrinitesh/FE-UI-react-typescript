export const API_BASE_URL = import.meta.env.VITE_JSON_PLACEHOLDER_URL as string;

export const API_PATHS = {
  SERVICES: "/posts",
  SERVICE_DETAIL: (id: number | string) => `/posts/${id}`,
};
