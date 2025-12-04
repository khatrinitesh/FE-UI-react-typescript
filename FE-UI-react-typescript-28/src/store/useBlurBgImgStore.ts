// store/useUIStore.ts
import { create } from "zustand";

interface UIState {
  blur: boolean;
  toggleBlur: () => void;
}

export const useBlurBgImgStore = create<UIState>((set) => ({
  blur: false,
  toggleBlur: () => set((s) => ({ blur: !s.blur })),
}));
