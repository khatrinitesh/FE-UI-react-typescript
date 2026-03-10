import { create } from "zustand";

interface NavbarState {
  isScrolled: boolean;
  setScrolled: (value: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isScrolled: false,
  setScrolled: (value) => set({ isScrolled: value }),
}));
