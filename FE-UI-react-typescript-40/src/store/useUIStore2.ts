import { create } from "zustand";

interface UIState {
  isVisible: boolean;
  toggle: () => void;
}

export const useUIStore2 = create<UIState>((set) => ({
  isVisible: true,
  toggle: () => set((state) => ({ isVisible: !state.isVisible })),
}));
