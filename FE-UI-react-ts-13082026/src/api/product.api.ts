import { apiClient } from "./client";

export interface Product {
  id: number;
  title: string;
  body: string;
}

export const getProducts = () => {
  return apiClient<Product[]>("/posts");
};
