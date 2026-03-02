import { create } from "zustand";

interface CardState {
  activeCard: number | null;
  setActiveCard: (id: number | null) => void;
}

export const useCardStore = create<CardState>((set) => ({
  activeCard: null,
  setActiveCard: (id) => set({ activeCard: id }),
}));
