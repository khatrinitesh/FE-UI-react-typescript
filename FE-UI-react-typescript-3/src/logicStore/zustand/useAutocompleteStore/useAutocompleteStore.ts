import { create } from "zustand";
import type { AutocompleteState } from "../../../interface";

export const useAutocompleteStore = create<AutocompleteState>((set) => ({
  query: "",
  suggestions: [],
  setQuery: (q) => set({ query: q }),
  setSuggestions: (s) => set({ suggestions: s }),
}));
