import { create } from "zustand";

interface CursorState {
  x: number;
  y: number;
  setPosition: (x: number, y: number) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  x: 0,
  y: 0,

  setPosition: (x, y) =>
    set({
      x,
      y,
    }),
}));
