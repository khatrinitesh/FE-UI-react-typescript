import { useState } from "react";

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: "card" | "upi" | "cod";
}

interface CheckoutFormProps {
  onSubmit?: (data: CheckoutFormData) => void;
  className?: string;
}

const CheckoutForm = ({ onSubmit, className = "" }: CheckoutFormProps) => {
  const [form, setForm] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "card",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`checkout-form w-full max-w-2xl space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="checkout-form__header">
        <h2 className="text-xl font-semibold text-gray-900">Checkout</h2>
        <p className="mt-1 text-sm text-gray-500">
          Enter your billing and delivery information.
        </p>
      </div>

      <div className="checkout-form__fields grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
            placeholder="Enter phone number"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="address"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="min-h-24 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
            placeholder="Enter delivery address"
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
            placeholder="City"
          />
        </div>

        <div>
          <label
            htmlFor="state"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
            placeholder="State"
          />
        </div>

        <div>
          <label
            htmlFor="pincode"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Pincode
          </label>
          <input
            id="pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            required
            maxLength={6}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
            placeholder="Pincode"
          />
        </div>

        <div>
          <label
            htmlFor="paymentMethod"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-black"
          >
            <option value="card">Credit / Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="checkout-form__submit w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
