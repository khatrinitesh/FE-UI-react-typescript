import { create } from "zustand";
import type { ColorState } from "../interface";

export const useColorStore = create<ColorState>((set) => ({
  selected: "#3B82F6",

  setColor: (color) => set({ selected: color }),
}));
