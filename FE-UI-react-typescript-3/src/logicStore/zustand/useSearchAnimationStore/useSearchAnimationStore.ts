import { create } from "zustand";
import type { SearchAnimationState } from "../../../interface";

export const useSearchAnimationStore = create<SearchAnimationState>((set) => ({
  isSearching: false,
  toggleSearching: () => set((state) => ({ isSearching: !state.isSearching })),
}));
