import { create } from "zustand";
import type { SearchItem, SearchState } from "../interface/auth";

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [],
  setQuery: (query: string) => set({ query }),
  setResults: (results: SearchItem[]) => set({ results }),
}));
