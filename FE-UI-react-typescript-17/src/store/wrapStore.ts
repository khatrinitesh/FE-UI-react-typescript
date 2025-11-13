import { create } from "zustand";

interface WrapState {
  wrapEnabled: boolean;
  toggleWrap: () => void;
}

export const useWrapStore = create<WrapState>((set) => ({
  wrapEnabled: true,
  toggleWrap: () => set((state) => ({ wrapEnabled: !state.wrapEnabled })),
}));
