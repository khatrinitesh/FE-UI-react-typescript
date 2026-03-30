import type { IProduct } from "../interface";

export const fetchProductById = async (id: string): Promise<IProduct> => {
  const res = await fetch(`${import.meta.env.VITE_API_JSONPLACEHOLDER}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};