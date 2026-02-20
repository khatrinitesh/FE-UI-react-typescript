import { create } from "zustand";

interface CardState {
  hoveredId: string | null;
  setHovered: (id: string | null) => void;
}

export const useCardStore = create<CardState>((set) => ({
  hoveredId: null,
  setHovered: (id) => set({ hoveredId: id }),
}));
