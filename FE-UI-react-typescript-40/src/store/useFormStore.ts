import { create } from "zustand";

interface FormState {
  values: Record<string, string[]>;
  toggleValue: (name: string, value: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  values: {},

  toggleValue: (name, value) =>
    set((state) => {
      const current = state.values[name] || [];

      const exists = current.includes(value);

      return {
        values: {
          ...state.values,
          [name]: exists
            ? current.filter((v) => v !== value)
            : [...current, value],
        },
      };
    }),
}));
