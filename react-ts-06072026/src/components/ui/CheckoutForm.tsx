import { useState } from "react";
import type { CheckoutFormData } from "../../interface/checkout.interface";
import FieldInput from "../common/FieldInput";
import Button from "../common/Button";

const CheckoutForm = () => {
  const [form, setForm] =
    useState<CheckoutFormData>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",

      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",

      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",

      coupon: "",
    });

  const [errors, setErrors] = useState<
    Partial<CheckoutFormData>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: Partial<CheckoutFormData> = {};

    if (!form.firstName)
      newErrors.firstName = "Required";

    if (!form.email)
      newErrors.email = "Required";

    if (!form.address)
      newErrors.address = "Required";

    if (!form.cardNumber)
      newErrors.cardNumber = "Required";

    if (!form.cvv)
      newErrors.cvv = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Order Placed Successfully");
  };

  return (
    <form
      onSubmit={submit}
      className="grid lg:grid-cols-3 gap-8"
    >
      {/* Left */}

      <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-6">
          Checkout
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <FieldInput
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <FieldInput
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />

          <FieldInput
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FieldInput
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <div className="md:col-span-2">

            <FieldInput
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              error={errors.address}
            />

          </div>

          <FieldInput
            label="City"
            name="city"
            value={form.city}
            onChange={handleChange}
          />

          <FieldInput
            label="State"
            name="state"
            value={form.state}
            onChange={handleChange}
          />

          <FieldInput
            label="Zip Code"
            name="zipCode"
            value={form.zipCode}
            onChange={handleChange}
          />

          <FieldInput
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
          />

        </div>

        <h2 className="text-xl font-bold mt-10 mb-5">
          Payment
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <FieldInput
            label="Card Holder"
            name="cardName"
            value={form.cardName}
            onChange={handleChange}
          />

          <FieldInput
            label="Card Number"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            error={errors.cardNumber}
          />

          <FieldInput
            label="Expiry"
            placeholder="MM/YY"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
          />

          <FieldInput
            label="CVV"
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            error={errors.cvv}
          />

        </div>

      </div>

      {/* Right */}

      <div className="bg-gray-50 rounded-xl p-8 shadow h-fit">

        <h3 className="font-bold text-xl mb-6">
          Order Summary
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span>Product</span>
            <span>$120</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$10</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>$15</span>
          </div>

          <hr />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$145</span>
          </div>

        </div>

        <div className="mt-8">

          <FieldInput
            label="Coupon Code"
            name="coupon"
            value={form.coupon}
            onChange={handleChange}
          />

        </div>

        <div className="mt-8">
          <Button>
            Place Order
          </Button>
        </div>

      </div>
    </form>
  );
};

export default CheckoutForm;