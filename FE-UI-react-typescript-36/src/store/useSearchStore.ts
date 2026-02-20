import { create } from "zustand";

interface SearchState {
  activeId: string | null;
  setActive: (id: string | null) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
