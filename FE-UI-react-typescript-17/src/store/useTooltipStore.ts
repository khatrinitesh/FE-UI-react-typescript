// src/store/useTooltipStore.ts

import { create } from "zustand";
import type { TooltipState } from "../interface";
import { DEFAULT_TOOLTIP_STATE } from "../components/Tooltips/data";

interface TooltipActions {
  showTooltip: (content: string, x: number, y: number) => void;
  hideTooltip: () => void;
  moveTooltip: (x: number, y: number) => void;
}

export const useTooltipStore = create<TooltipState & TooltipActions>((set) => ({
  ...DEFAULT_TOOLTIP_STATE,

  showTooltip: (content, x, y) => set({ visible: true, content, x, y }),

  hideTooltip: () => set({ visible: false, content: "", x: 0, y: 0 }),

  moveTooltip: (x, y) => set((state) => (state.visible ? { x, y } : {})),
}));
