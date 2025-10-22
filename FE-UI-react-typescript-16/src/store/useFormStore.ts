import { create } from "zustand";

interface FormState {
  name: string;
  email: string;
  message: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setMessage: (value: string) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  name: "",
  email: "",
  message: "",
  setName: (value) => set({ name: value }),
  setEmail: (value) => set({ email: value }),
  setMessage: (value) => set({ message: value }),
  resetForm: () => set({ name: "", email: "", message: "" }),
}));
