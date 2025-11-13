import { create } from "zustand";
import type { VortexUserState } from "../../interface";

export const useVortexStore = create<VortexUserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
