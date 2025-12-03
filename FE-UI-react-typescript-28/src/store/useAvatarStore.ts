import { create } from "zustand";

interface AvatarState {
  selected: number | null;
  setSelected: (id: number) => void;
}

export const useAvatarStore = create<AvatarState>((set) => ({
  selected: null,
  setSelected: (id) => set({ selected: id }),
}));
