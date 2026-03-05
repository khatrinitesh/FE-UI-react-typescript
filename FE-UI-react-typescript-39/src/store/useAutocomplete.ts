import { create } from "zustand";
import type { AutoCompleteItem } from "../interface";

interface AutocompleteState {
  query: string;
  filteredItems: AutoCompleteItem[];
  setQuery: (q: string, items: AutoCompleteItem[]) => void;
}

export const useAutocomplete = create<AutocompleteState>((set) => ({
  query: "",
  filteredItems: [],
  setQuery: (q, items) =>
    set({
      query: q,
      filteredItems: items.filter((item) =>
        item.name.toLowerCase().includes(q.toLowerCase()),
      ),
    }),
}));
