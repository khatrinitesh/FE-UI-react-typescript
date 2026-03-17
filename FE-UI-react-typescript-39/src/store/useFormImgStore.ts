import { create } from "zustand";
import { FORM_INITIAL } from "../constants/constants";
import type { FormDataImage } from "../interface";

interface FormState {
  form: FormDataImage;
  setField: (key: keyof FormDataImage, value: string) => void;
  reset: () => void;
}

export const useFormImgStore = create<FormState>((set) => ({
  form: FORM_INITIAL,
  setField: (key, value) =>
    set((state) => ({
      form: { ...state.form, [key]: value },
    })),
  reset: () => set({ form: FORM_INITIAL }),
}));
