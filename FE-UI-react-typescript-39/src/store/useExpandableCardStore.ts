import { create } from "zustand";

interface ExpandCardStore {
  activeCard: number | null;
  setActiveCard: (id: number | null) => void;
}

export const useExpandableCardStore = create<ExpandCardStore>((set) => ({
  activeCard: null,
  setActiveCard: (id) => set({ activeCard: id }),
}));
