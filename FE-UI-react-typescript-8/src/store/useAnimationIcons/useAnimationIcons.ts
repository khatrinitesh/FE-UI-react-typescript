import { create } from "zustand";

interface UIState {
  isIconActive: boolean;
  toggleIcon: () => void;
}

export const useAnimationIcons = create<UIState>((set) => ({
  isIconActive: false,
  toggleIcon: () => set((state) => ({ isIconActive: !state.isIconActive })),
}));
