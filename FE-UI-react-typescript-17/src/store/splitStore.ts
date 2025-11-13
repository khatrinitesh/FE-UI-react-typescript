import { create } from "zustand";
import { DEFAULT_SPLIT } from "../components/SplitScreen/constants";
import type { PanelState } from "../interface";

interface PanelActions {
  setLeftWidth: (width: number) => void;
  setRightWidth: (width: number) => void;
  setDragging: (dragging: boolean) => void;
}

export const useSplitStore = create<PanelState & PanelActions>((set) => ({
  leftWidth: DEFAULT_SPLIT.LEFT_WIDTH,
  rightWidth: DEFAULT_SPLIT.RIGHT_WIDTH,
  isDragging: false,

  setLeftWidth: (width) =>
    set((state) => ({
      leftWidth: width,
      rightWidth: 100 - width,
    })),

  setRightWidth: (width) =>
    set((state) => ({
      rightWidth: width,
      leftWidth: 100 - width,
    })),

  setDragging: (dragging) => set({ isDragging: dragging }),
}));
