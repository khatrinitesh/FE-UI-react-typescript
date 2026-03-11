import { create } from "zustand";
import { MAX_ZOOM, MIN_ZOOM, ZOOM_STEP } from "../constants/constants";

interface ZoomState {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

export const useZoomStore = create<ZoomState>((set) => ({
  zoom: 1,

  zoomIn: () =>
    set((state) => ({
      zoom: Math.min(state.zoom + ZOOM_STEP, MAX_ZOOM),
    })),

  zoomOut: () =>
    set((state) => ({
      zoom: Math.max(state.zoom - ZOOM_STEP, MIN_ZOOM),
    })),

  resetZoom: () => set({ zoom: 1 }),
}));
