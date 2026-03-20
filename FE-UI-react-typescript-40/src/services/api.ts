const BASE_URL = import.meta.env.VITE_API_JSONPLACEHOLDER;

export const fetchProducts = async () => {
  const url = `${BASE_URL}/posts`;
  console.log("API URL:", url); // 👈 debug
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};
