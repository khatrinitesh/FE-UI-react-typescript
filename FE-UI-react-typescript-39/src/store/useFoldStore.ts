import { create } from "zustand";

interface FoldState {
  activeId: number | null;
  setActive: (id: number | null) => void;
}

export const useFoldStore = create<FoldState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
