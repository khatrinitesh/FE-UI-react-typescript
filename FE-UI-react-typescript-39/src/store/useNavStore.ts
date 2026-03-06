import { create } from "zustand";

interface NavState {
  activeIndex: number;
  setActive: (index: number) => void;
}

export const useNavStore = create<NavState>((set) => ({
  activeIndex: 0,
  setActive: (index) => set({ activeIndex: index }),
}));
