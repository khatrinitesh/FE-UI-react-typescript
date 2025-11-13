import type { PaymentMethod } from "../../../interface";

export const PAYMENT_METHODS: { label: string; value: PaymentMethod }[] = [
  { label: "Credit Card", value: "credit_card" },
  { label: "PayPal", value: "paypal" },
  { label: "Apple Pay", value: "apple_pay" },
];

export const DEFAULT_FORM_VALUES = {
  name: "",
  email: "",
  address: "",
  paymentMethod: "credit_card" as PaymentMethod,
};
