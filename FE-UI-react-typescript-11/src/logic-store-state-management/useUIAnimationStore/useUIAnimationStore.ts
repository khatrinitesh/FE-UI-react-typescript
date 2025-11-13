import { create } from "zustand";
import type { UIAnimationState } from "../../interface";

export const useUIAnimationStore = create<UIAnimationState>((set) => ({
  isVisible: false,
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));
