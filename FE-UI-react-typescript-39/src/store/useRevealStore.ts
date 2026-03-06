import { create } from "zustand";

interface RevealState {
  isHovered: boolean;
  setHover: (value: boolean) => void;
}

export const useRevealStore = create<RevealState>((set) => ({
  isHovered: false,
  setHover: (value) => set({ isHovered: value }),
}));
