import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../servics/product.service";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });
};

export const useProductById = (id: number) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductById(id),
    enabled: id > 0,
  });
};
