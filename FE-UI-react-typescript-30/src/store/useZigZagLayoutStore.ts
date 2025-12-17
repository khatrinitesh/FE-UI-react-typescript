import { create } from "zustand";

interface LayoutState {
  reverse: boolean;
  toggleReverse: () => void;
}

export const useZigZagLayoutStore = create<LayoutState>((set) => ({
  reverse: false,
  toggleReverse: () => set((state) => ({ reverse: !state.reverse })),
}));
