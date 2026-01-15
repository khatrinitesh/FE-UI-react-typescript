import { create } from "zustand";

interface UIState {
  activeAccordion: number | null;
  setActiveAccordion: (index: number | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeAccordion: null,
  setActiveAccordion: (index) => set({ activeAccordion: index }),
}));
