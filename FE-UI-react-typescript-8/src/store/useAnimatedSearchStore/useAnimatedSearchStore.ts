import { create } from "zustand";
import type { AnimatedSearchProps } from "../../interface";

export const useAnimatedSearchStore = create<AnimatedSearchProps>((set) => ({
  isSearchOpen: false,
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
}));
