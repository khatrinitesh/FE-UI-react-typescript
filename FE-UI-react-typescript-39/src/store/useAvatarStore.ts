import { create } from "zustand";

interface AvatarState {
  selectedId: number | null;
  select: (id: number) => void;
}

export const useAvatarStore = create<AvatarState>((set) => ({
  selectedId: null,
  select: (id) => set({ selectedId: id }),
}));
