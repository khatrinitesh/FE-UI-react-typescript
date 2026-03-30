import { create } from "zustand";
import type { IProduct } from "../interface";


interface ProductState {
  products: IProduct[];
  setProducts: (data: IProduct[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
}));