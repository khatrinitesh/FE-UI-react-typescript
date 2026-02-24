import { create } from "zustand";
import type { IProduct } from "../interface";
import { API } from "../constants/api";

interface ProductState {
  products: IProduct[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });
    const res = await fetch(API.PRODUCTS);
    const data = await res.json();
    set({ products: data, loading: false });
  },
}));
