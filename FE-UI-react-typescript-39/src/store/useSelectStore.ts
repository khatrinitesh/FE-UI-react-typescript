import { create } from "zustand";

interface SelectState {
  selected: string;
  isOpen: boolean;
  toggleSelect: () => void;
  selectOption: (value: string) => void;
}

export const useSelectStore = create<SelectState>((set) => ({
  selected: "",
  isOpen: false,

  toggleSelect: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),

  selectOption: (value) =>
    set({
      selected: value,
      isOpen: false,
    }),
}));
