import { create } from "zustand";

interface CapsState {
  isCapsOn: boolean;
  setCapsState: (value: boolean) => void;
}

export const useCapsStore = create<CapsState>((set) => ({
  isCapsOn: false,

  setCapsState: (value) =>
    set({
      isCapsOn: value,
    }),
}));
