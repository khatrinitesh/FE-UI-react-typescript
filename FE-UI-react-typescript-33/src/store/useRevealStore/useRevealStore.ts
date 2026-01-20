import { create } from "zustand";

export const useRevealStore = create<RevealState>((set) => ({
  x: 0,
  y: 0,
  isActive: false,
  reveal: (x, y) => set({ x, y, isActive: true }),
  reset: () => set({ isActive: false }),
}));
