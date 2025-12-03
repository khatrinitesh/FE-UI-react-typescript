import { create } from "zustand";

interface AutocompleteState {
  query: string;
  setQuery: (q: string) => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  selected: string | null;
  setSelected: (v: string) => void;
}

export const useAutocompleteStore = create<AutocompleteState>((set) => ({
  query: "",
  setQuery: (q) => set({ query: q }),
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),x
  selected: null,
  setSelected: (v) => set({ selected: v }),
}));
