export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;

  coupon: string;
}