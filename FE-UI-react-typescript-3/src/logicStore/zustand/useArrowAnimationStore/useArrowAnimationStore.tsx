import { create } from "zustand";
import type { ArrowAnimationState } from "../../../interface";

export const useArrowAnimationStore = create<ArrowAnimationState>((set) => ({
  isAnimated: false,
  toggleAnimation: () => set((state) => ({ isAnimated: !state.isAnimated })),
}));
