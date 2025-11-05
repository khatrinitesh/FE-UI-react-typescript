import { create } from "zustand";
import type { SearchState } from "../interface";

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (value) => set({ query: value }),
  isActive: false,
  setActive: (value) => set({ isActive: value }),
}));
