import { create } from "zustand";

interface ZoomState {
  zoomedId: number | null;
  setZoomedId: (id: number | null) => void;
}

export const useZoomStore = create<ZoomState>((set) => ({
  zoomedId: null,
  setZoomedId: (id: number | null) => set({ zoomedId: id }),
}));
