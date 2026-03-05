import { create } from "zustand";

interface GalleryState {
  selectedId: number | null;
  select: (id: number) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  selectedId: null,
  select: (id) => set({ selectedId: id }),
}));
