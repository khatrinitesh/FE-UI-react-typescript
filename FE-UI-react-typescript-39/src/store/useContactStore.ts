import { create } from "zustand";
import type { ContactState } from "../interface";
import { INITIAL_FORM2 } from "../constants/constants";

export const useContactStore = create<ContactState>((set) => ({
  form: INITIAL_FORM2,

  updateField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),

  resetForm: () => set({ form: INITIAL_FORM2 }),
}));
