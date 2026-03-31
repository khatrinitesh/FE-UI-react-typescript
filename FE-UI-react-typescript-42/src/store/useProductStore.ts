import { create } from "zustand";

interface AppState {
  products: any[];
  setProducts: (data: any[]) => void;
}

export const useStore = create<AppState>((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
}));