import api from "../api/apiFake";
import type { Product } from "../interfaces/product";


export const getFake = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};