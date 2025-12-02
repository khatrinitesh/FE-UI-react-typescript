import { create } from "zustand";

interface IconState {
  speed: number; // global animation multiplier
  setSpeed: (value: number) => void;
}

export const animateIconStore = create<IconState>((set) => ({
  speed: 1,
  setSpeed: (value) => set({ speed: value }),
}));
