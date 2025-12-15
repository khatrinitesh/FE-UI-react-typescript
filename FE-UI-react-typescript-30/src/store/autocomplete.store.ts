import { create } from "zustand";
import type { AutocompleteState } from "../interface/auth";

export const useAutocompleteStore = create<AutocompleteState>((set) => ({
  query: "",
  results: [],
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
}));
