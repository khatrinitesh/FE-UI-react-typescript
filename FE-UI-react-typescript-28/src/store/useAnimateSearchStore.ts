import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (value: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (value) => set({ query: value }),
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
