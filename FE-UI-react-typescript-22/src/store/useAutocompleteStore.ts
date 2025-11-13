import { create } from "zustand";
import { SUGGESTIONS } from "../constants/constants";
import type { AutocompleteState } from "../interface";

const suggestionObjects = SUGGESTIONS.map((label, i) => ({ id: i, label }));

export const useAutocompleteStore = create<AutocompleteState>((set) => ({
  query: "",
  suggestions: suggestionObjects,
  filtered: suggestionObjects,

  setQuery: (value) => set({ query: value }),

  filterSuggestions: (query) =>
    set((state) => ({
      filtered: state.suggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase())
      ),
    })),
}));
