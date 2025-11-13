import { create } from "zustand";
import type { IconAnimationState } from "../../../interface";

export const useIconAnimationStore = create<IconAnimationState>((set) => ({
  isAnimated: false,
  toggleAnimation: () => set((state) => ({ isAnimated: !state.isAnimated })),
}));
