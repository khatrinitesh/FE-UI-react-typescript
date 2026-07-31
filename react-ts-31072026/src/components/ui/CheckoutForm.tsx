import { FormEvent, useMemo, useState } from "react";

type CheckoutFormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  saveInformation: boolean;
};

const initialFormData: CheckoutFormData = {
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  postalCode: "",
  country: "India",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
  saveInformation: false,
};

const inputClasses =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 font-montserrat text-14 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10";

const labelClasses =
  "mb-2 block font-montserrat text-12 font-semibold uppercase tracking-[0.08em] text-secondary";

export default function CheckoutForm() {
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subtotal = 2499;
  const shipping = 199;
  const discount = couponApplied ? 300 : 0;

  const total = useMemo(
    () => subtotal + shipping - discount,
    [subtotal, shipping, discount],
  );

  const updateField = <K extends keyof CheckoutFormData>(
    field: K,
    value: CheckoutFormData[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 4);

    if (numbers.length <= 2) {
      return numbers;
    }

    return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
  };

  const applyCoupon = () => {
    setCouponApplied(coupon.trim().toUpperCase() === "SAVE300");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-montserrat text-slate-900">
      <div className="mx-auto max-w-360 px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.18em] text-primary">
              Secure checkout
            </p>

            <h1 className="mt-2 font-arialnb text-36 font-bold leading-none text-slate-950">
              Complete your order
            </h1>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ✓
            </span>

            <span className="font-montserrat text-12 font-semibold text-secondary">
              SSL secured payment
            </span>
          </div>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]"
        >
          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-arialnb text-18 font-bold text-white">
                  1
                </span>

                <div>
                  <h2 className="font-arialnb text-24 font-bold text-slate-950">
                    Contact information
                  </h2>

                  <p className="mt-1 text-12 text-secondary">
                    Your receipt and order updates will be sent here.
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={inputClasses}
                />
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-arialnb text-18 font-bold text-white">
                  2
                </span>

                <div>
                  <h2 className="font-arialnb text-24 font-bold text-slate-950">
                    Shipping address
                  </h2>

                  <p className="mt-1 text-12 text-secondary">
                    Enter the address where your order should be delivered.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>
                    First name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(event) =>
                      updateField("firstName", event.target.value)
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClasses}>
                    Last name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(event) =>
                      updateField("lastName", event.target.value)
                    }
                    className={inputClasses}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className={labelClasses}>
                    Street address
                  </label>

                  <input
                    id="address"
                    type="text"
                    required
                    autoComplete="street-address"
                    placeholder="House number and street name"
                    value={formData.address}
                    onChange={(event) =>
                      updateField("address", event.target.value)
                    }
                    className={inputClasses}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="apartment" className={labelClasses}>
                    Apartment, suite, etc.
                  </label>

                  <input
                    id="apartment"
                    type="text"
                    placeholder="Optional"
                    value={formData.apartment}
                    onChange={(event) =>
                      updateField("apartment", event.target.value)
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="city" className={labelClasses}>
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(event) =>
                      updateField("city", event.target.value)
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="state" className={labelClasses}>
                    State
                  </label>

                  <input
                    id="state"
                    type="text"
                    required
                    autoComplete="address-level1"
                    placeholder="Maharashtra"
                    value={formData.state}
                    onChange={(event) =>
                      updateField("state", event.target.value)
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="postalCode" className={labelClasses}>
                    Postal code
                  </label>

                  <input
                    id="postalCode"
                    type="text"
                    required
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="400001"
                    value={formData.postalCode}
                    onChange={(event) =>
                      updateField(
                        "postalCode",
                        event.target.value.replace(/\D/g, "").slice(0, 6),
                      )
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="country" className={labelClasses}>
                    Country
                  </label>

                  <select
                    id="country"
                    value={formData.country}
                    onChange={(event) =>
                      updateField("country", event.target.value)
                    }
                    className={inputClasses}
                  >
                    <option>India</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Singapore</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-arialnb text-18 font-bold text-white">
                  3
                </span>

                <div>
                  <h2 className="font-arialnb text-24 font-bold text-slate-950">
                    Payment details
                  </h2>

                  <p className="mt-1 text-12 text-secondary">
                    Your card information is encrypted and secure.
                  </p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {["VISA", "Mastercard", "RuPay", "AMEX"].map((card) => (
                  <span
                    key={card}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-12 font-bold text-secondary"
                  >
                    {card}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cardName" className={labelClasses}>
                    Name on card
                  </label>

                  <input
                    id="cardName"
                    type="text"
                    required
                    autoComplete="cc-name"
                    placeholder="John Doe"
                    value={formData.cardName}
                    onChange={(event) =>
                      updateField("cardName", event.target.value)
                    }
                    className={inputClasses}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cardNumber" className={labelClasses}>
                    Card number
                  </label>

                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      required
                      inputMode="numeric"
                      autoComplete="cc-number"
                      placeholder="0000 0000 0000 0000"
                      value={formData.cardNumber}
                      onChange={(event) =>
                        updateField(
                          "cardNumber",
                          formatCardNumber(event.target.value),
                        )
                      }
                      className={`${inputClasses} pr-14`}
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-18">
                      💳
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="expiry" className={labelClasses}>
                    Expiry date
                  </label>

                  <input
                    id="expiry"
                    type="text"
                    required
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={(event) =>
                      updateField("expiry", formatExpiry(event.target.value))
                    }
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="cvv" className={labelClasses}>
                    CVV
                  </label>

                  <input
                    id="cvv"
                    type="password"
                    required
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="•••"
                    value={formData.cvv}
                    onChange={(event) =>
                      updateField(
                        "cvv",
                        event.target.value.replace(/\D/g, "").slice(0, 4),
                      )
                    }
                    className={inputClasses}
                  />
                </div>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.saveInformation}
                  onChange={(event) =>
                    updateField("saveInformation", event.target.checked)
                  }
                  className="mt-0.5 h-5 w-5 rounded border-slate-300 accent-primary"
                />

                <span className="text-12 leading-5 text-secondary">
                  Save my contact and payment information for a faster checkout
                  next time.
                </span>
              </label>
            </section>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
              <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                <h2 className="font-arialnb text-24 font-bold text-slate-950">
                  Order summary
                </h2>

                <p className="mt-1 text-12 text-secondary">
                  Review your items before payment.
                </p>
              </div>

              <div className="space-y-5 p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 to-blue-200">
                    <div className="h-14 w-14 rounded-full border-[10px] border-white shadow-lg" />

                    <span className="absolute right-2 top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-slate-950 px-1.5 text-12 font-bold text-white">
                      1
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-arialnb text-18 font-bold text-slate-950">
                      Premium Silver Ring
                    </h3>

                    <p className="mt-1 text-12 text-secondary">
                      Size: 18 · Silver
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-12 text-secondary">
                        Quantity: 1
                      </span>

                      <span className="text-16 font-bold text-slate-950">
                        ₹2,499
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-5">
                  <label htmlFor="coupon" className={labelClasses}>
                    Discount code
                  </label>

                  <div className="flex gap-2">
                    <input
                      id="coupon"
                      type="text"
                      placeholder="Enter code"
                      value={coupon}
                      onChange={(event) => {
                        setCoupon(event.target.value);
                        setCouponApplied(false);
                      }}
                      className={inputClasses}
                    />

                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="shrink-0 rounded-xl border border-primary px-4 font-montserrat text-12 font-bold text-primary transition hover:bg-primary hover:text-white"
                    >
                      Apply
                    </button>
                  </div>

                  {couponApplied && (
                    <p className="mt-2 text-12 font-semibold text-emerald-600">
                      SAVE300 applied successfully.
                    </p>
                  )}

                  {!couponApplied && coupon.length > 0 && (
                    <p className="mt-2 text-12 text-secondary">
                      Use code{" "}
                      <span className="font-bold text-primary">SAVE300</span>
                    </p>
                  )}
                </div>

                <div className="space-y-3 border-t border-slate-200 pt-5 text-14">
                  <div className="flex justify-between">
                    <span className="text-secondary">Subtotal</span>
                    <span className="font-semibold">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-secondary">Shipping</span>
                    <span className="font-semibold">
                      ₹{shipping.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Discount</span>
                      <span className="font-semibold">
                        −₹{discount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-end justify-between border-t border-slate-200 pt-5">
                  <div>
                    <p className="text-12 text-secondary">Total amount</p>
                    <p className="mt-1 text-12 text-secondary">
                      Including taxes
                    </p>
                  </div>

                  <strong className="font-arialnb text-28 font-bold text-slate-950">
                    ₹{total.toLocaleString("en-IN")}
                  </strong>
                </div>

                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary px-5 font-arialnb text-18 font-bold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-primary/20 active:translate-y-0"
                >
                  <span>Pay ₹{total.toLocaleString("en-IN")}</span>
                  <span aria-hidden="true">→</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-center text-12 text-secondary">
                  <span aria-hidden="true">🔒</span>
                  <span>Secure and encrypted checkout</span>
                </div>

                {submitted && (
                  <div
                    role="status"
                    className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-12 font-semibold text-emerald-700"
                  >
                    Order submitted successfully. Connect this form to your
                    payment API to process the transaction.
                  </div>
                )}
              </div>
            </section>
          </aside>
        </form>
      </div>
    </main>
  );
}
