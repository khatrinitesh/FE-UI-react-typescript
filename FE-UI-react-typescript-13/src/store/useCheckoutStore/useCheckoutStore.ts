import { create } from "zustand";
import type { CheckoutState } from "../../interface";
import { DEFAULT_FORM_VALUES } from "../../components/checkoutFormSection/components/data";

export const useCheckoutStore = create<CheckoutState>((set) => ({
  data: DEFAULT_FORM_VALUES,
  loading: false,
  updateField: (field, value) =>
    set((state) => ({
      data: {
        ...state.data,
        [field]: value,
      },
    })),
  submit: async () => {
    set({ loading: true });
    await new Promise((res) => setTimeout(res, 1500)); // simulate API call
    alert("Order submitted!");
    set({ loading: false });
  },
}));
