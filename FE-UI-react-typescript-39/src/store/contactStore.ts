import { create } from "zustand";
import type { ContactState } from "../interface";
import { INITIAL_CONTACT_FORM } from "../constants/constants";

export const useContactStore = create<ContactState>((set) => ({
  form: INITIAL_CONTACT_FORM,

  updateField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),

  resetForm: () => set({ form: INITIAL_CONTACT_FORM }),
}));
