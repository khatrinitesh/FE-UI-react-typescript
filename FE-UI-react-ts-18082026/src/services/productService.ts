import type { Product, ProductResponse } from "../types/product";
import { apiGet } from "./api";

export const getProducts = () => {
  return apiGet<ProductResponse>("/products");
};

export const getProduct = (id: number) => {
  return apiGet<Product>(`/products/${id}`);
};

export const getCategories = () => {
  return apiGet<string[]>("/products/categories");
};
