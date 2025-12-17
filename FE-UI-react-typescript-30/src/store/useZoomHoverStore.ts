import { create } from "zustand";

interface UIState {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

export const useZoomHoverStore = create<UIState>((set) => ({
  hoveredId: null,
  setHoveredId: (id) => set({ hoveredId: id }),
}));
