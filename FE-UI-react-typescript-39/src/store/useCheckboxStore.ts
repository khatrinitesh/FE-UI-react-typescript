import { create } from "zustand";

interface CheckboxState {
  checked: boolean;
  toggleCheckbox: () => void;
}

export const useCheckboxStore = create<CheckboxState>((set) => ({
  checked: false,

  toggleCheckbox: () =>
    set((state) => ({
      checked: !state.checked,
    })),
}));
