import { create } from "zustand";

interface SpotlightState {
  x: number;
  y: number;
  setPosition: (x: number, y: number) => void;
}

export const useSpotlightStore = create<SpotlightState>((set) => ({
  x: 0,
  y: 0,
  setPosition: (x, y) => set({ x, y }),
}));
