import api from "../../lib/axios";
import type { ProductsResponse } from "./product.type";


export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>("/products");

  return response.data;
};