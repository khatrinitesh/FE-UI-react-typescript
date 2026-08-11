import { api } from "./api";

export interface Product {
  id: number;
  title: string;
  description: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("");
  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get<Product[]>(`/${id}`);
  return response.data as unknown as Product;
};
