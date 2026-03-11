import { create } from "zustand";
import type { Direction } from "../constants/constants";

interface HoverState {
  direction: Direction | null;
  setDirection: (dir: Direction) => void;
}

export const useHoverStore = create<HoverState>((set) => ({
  direction: null,
  setDirection: (dir) => set({ direction: dir }),
}));
