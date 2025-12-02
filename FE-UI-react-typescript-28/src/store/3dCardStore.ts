import { create } from "zustand";

interface UIState {
  tiltStrength: number;
  setTiltStrength: (value: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  tiltStrength: 12,
  setTiltStrength: (value) => set({ tiltStrength: value }),
}));
