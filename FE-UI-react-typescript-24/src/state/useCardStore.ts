import { create } from "zustand";

interface CardState {
  rotateX: number;
  rotateY: number;
  setRotate: (x: number, y: number) => void;
  reset: () => void;
}

export const useCardStore = create<CardState>((set) => ({
  rotateX: 0,
  rotateY: 0,
  setRotate: (x, y) => set({ rotateX: x, rotateY: y }),
  reset: () => set({ rotateX: 0, rotateY: 0 }),
}));
