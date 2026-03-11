import { create } from "zustand";

interface CutoutState {
  scale: number;
  setScale: (value: number) => void;
}

export const useCutoutStore = create<CutoutState>((set) => ({
  scale: 1,
  setScale: (value) => set({ scale: value }),
}));
