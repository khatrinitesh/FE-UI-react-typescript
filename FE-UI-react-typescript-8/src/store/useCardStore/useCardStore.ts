import { create } from "zustand";

interface CardState {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

export const useCardStore = create<CardState>((set) => ({
  activeIndex: null,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
