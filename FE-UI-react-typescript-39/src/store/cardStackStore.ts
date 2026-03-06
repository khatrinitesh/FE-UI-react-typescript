import { create } from "zustand";

interface CardStackState {
  hovered: boolean;
  setHovered: (value: boolean) => void;
}

export const useCardStackStore = create<CardStackState>((set) => ({
  hovered: false,
  setHovered: (value) => set({ hovered: value }),
}));
