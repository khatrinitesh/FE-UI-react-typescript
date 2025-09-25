import { create } from "zustand";

interface CircleMenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useCircleMenuStore = create<CircleMenuState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));
