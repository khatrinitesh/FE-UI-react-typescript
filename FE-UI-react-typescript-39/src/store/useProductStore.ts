import { create } from "zustand";
import type { Product } from "../interface";
import { api } from "../services/axios";

interface ProductState {
  products: Product[];
  product?: Product;
  loading: boolean;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    const res = await api.get("/posts");
    set({ products: res.data, loading: false });
  },

  fetchProductById: async (id) => {
    set({ loading: true });
    const res = await api.get(`/posts/${id}`);
    set({ product: res.data, loading: false });
  },
}));
