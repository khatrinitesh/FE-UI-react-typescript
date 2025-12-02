import { create } from "zustand";

interface UIState {
  liftAmount: number;
  setLiftAmount: (value: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  liftAmount: 25,
  setLiftAmount: (value) => set({ liftAmount: value }),
}));
