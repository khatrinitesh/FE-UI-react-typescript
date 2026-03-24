import type { Product } from "../interface";
import { getFetchPost } from "./api";

export const fetchProducts = () => {
  return getFetchPost<Product[]>("/posts");
};

export const fetchProductById = (id: string) => {
  return getFetchPost<Product>(`/posts/${id}`);
};
