import { create } from "zustand";
import type { AvatarState } from "../interface/auth";

export const useAvatarStore = create<AvatarState>((set) => ({
  selectedId: null,
  selectAvatar: (id) => set({ selectedId: id }),
}));
