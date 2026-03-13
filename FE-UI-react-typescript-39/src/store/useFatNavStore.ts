import { create } from "zustand";

interface FatNavStore {
  isOpen: boolean;
  toggleNav: () => void;
}

export const useFatNavStore = create<FatNavStore>((set) => ({
  isOpen: false,
  toggleNav: () => set((state) => ({ isOpen: !state.isOpen })),
}));
