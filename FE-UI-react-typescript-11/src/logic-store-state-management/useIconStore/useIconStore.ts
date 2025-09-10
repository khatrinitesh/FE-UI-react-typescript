import { create } from "zustand";
import type { IconState } from "../../interface";

export const useIconStore = create<IconState>((set) => ({
  isAnimating: false,
  toggleAnimation: () => set((state) => ({ isAnimating: !state.isAnimating })),
}));
