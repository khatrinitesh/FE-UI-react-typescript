import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../services/productService";
import type { Product } from "../types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const [productResponse, categoryResponse] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        setProducts(productResponse.products);
        setCategories(categoryResponse);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to load products",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    categories,
    loading,
    error,
  };
}
