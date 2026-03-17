import { create } from "zustand";
import { FORM_INITIAL } from "../constants/constants";
import type { FormDataValidation, FormErrors } from "../interface";

interface FormState {
  form: FormDataValidation;
  errors: FormErrors;
  setField: (key: keyof FormDataValidation, value: string) => void;
  setErrors: (errors: FormErrors) => void;
  reset: () => void;
}

export const useFormValidationStore = create<FormState>((set) => ({
  form: FORM_INITIAL,
  errors: {},

  setField: (key, value) =>
    set((state) => ({
      form: { ...state.form, [key]: value },
    })),

  setErrors: (errors) => set({ errors }),

  reset: () =>
    set({
      form: FORM_INITIAL,
      errors: {},
    }),
}));
