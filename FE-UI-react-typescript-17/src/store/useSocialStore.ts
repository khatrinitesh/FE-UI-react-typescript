// src/store/useSocialStore.ts
import { create } from "zustand";

interface SocialStore {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const useSocialStore = create<SocialStore>((set) => ({
  isVisible: true,
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));
