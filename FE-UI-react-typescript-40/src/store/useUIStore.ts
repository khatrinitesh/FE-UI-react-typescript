import { create } from "zustand";

interface UIState {
  isOpen: boolean;
  toggle: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
