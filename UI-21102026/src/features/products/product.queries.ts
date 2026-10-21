import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./product.api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};