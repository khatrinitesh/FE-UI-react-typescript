import { create } from "zustand";
import type { Pointer } from "../interface";

interface PointerState {
  pointer: Pointer;
  setPointer: (pos: Pointer) => void;
}

export const usePointerStore = create<PointerState>((set) => ({
  pointer: { x: 0, y: 0 },
  setPointer: (pos) => set({ pointer: pos }),
}));
