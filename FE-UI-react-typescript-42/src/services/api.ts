const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getFetchPost = async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
};
