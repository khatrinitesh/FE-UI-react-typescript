import { create } from "zustand";
import type { VerticalLineConfig } from "../interface";
import { VERTICAL_LINE_CONSTANTS } from "../components/VerticalLine/verticalLineConstants";

interface VerticalLineState extends VerticalLineConfig {
  toggleVisibility: () => void;
  setColor: (color: string) => void;
  setHeight: (height: number) => void;
}

export const useVerticalLineStore = create<VerticalLineState>((set) => ({
  ...VERTICAL_LINE_CONSTANTS,

  toggleVisibility: () => set((state) => ({ visible: !state.visible })),
  setColor: (color) => set({ color }),
  setHeight: (height) => set({ height }),
}));
