import { useCheckoutStore } from "../../store/useCheckoutStore/useCheckoutStore";
import { InputField } from "./components/InputField";
import PaymentSelector from "./components/PaymentSelector";

const CheckoutFormSection = () => {
  const { data, updateField, submit, loading } = useCheckoutStore();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="max-w-md mx-auto bg-white shadow-md rounded p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>

      <InputField
        label="Name"
        value={data.name}
        onChange={(val) => updateField("name", val)}
      />

      <InputField
        label="Email"
        value={data.email}
        onChange={(val) => updateField("email", val)}
      />

      <InputField
        label="Shipping Address"
        value={data.address}
        onChange={(val) => updateField("address", val)}
      />

      <PaymentSelector
        selected={data.paymentMethod}
        onChange={(val) => updateField("paymentMethod", val)}
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 mt-4 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : "Submit Order"}
      </button>
    </form>
  );
};

export default CheckoutFormSection;
