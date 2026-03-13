import { create } from "zustand";

interface FormState {
  inputValue: string;
  selectedOption: string;
  error: string;

  setInputValue: (value: string) => void;
  setSelectedOption: (option: string) => void;
  setError: (error: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  inputValue: "",
  selectedOption: "",
  error: "",

  setInputValue: (value) => set({ inputValue: value }),
  setSelectedOption: (option) => set({ selectedOption: option }),
  setError: (error) => set({ error }),
}));
