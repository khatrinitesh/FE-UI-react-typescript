import { create } from "zustand";
import { INITIAL_FORM } from "../constants/constants";
import type { CheckoutState } from "../interface";

export const useCheckoutStore = create<CheckoutState>((set) => ({
  form: INITIAL_FORM,

  updateField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),

  resetForm: () => set({ form: INITIAL_FORM }),
}));
