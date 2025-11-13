// store/useAutoCompleteStore.ts
import { create } from "zustand";

interface AutoCompleteStore {
  query: string;
  setQuery: (val: string) => void;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

export const useAutoCompleteStore = create<AutoCompleteStore>((set) => ({
  query: "",
  setQuery: (val) => set({ query: val }),
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
}));
