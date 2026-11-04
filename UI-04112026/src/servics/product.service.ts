import axios from "axios";
import type { Product } from "../interfaces/product.interface";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>("/products");
  return data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};
