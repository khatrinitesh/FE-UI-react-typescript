import { API_ENDPOINTS } from "../constants/api.constants";
import type { Product } from "../interfaces/product.interface";
import { apiRequest } from "./http.service";


export const productService = {
  getProducts: () => apiRequest<Product[]>(API_ENDPOINTS.products),
  getProductById: (id: number) => apiRequest<Product>(API_ENDPOINTS.productDetails(id)),
}
