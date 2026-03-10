import { useCheckoutStore } from "../../store/checkoutStore";
import { motion } from "framer-motion";

const CheckoutForm = () => {
  const { form, updateField, resetForm } = useCheckoutStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout Data:", form);
    resetForm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => updateField("address", e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            value={form.city}
            onChange={(e) => updateField("city", e.target.value)}
            className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="ZIP"
            value={form.zip}
            onChange={(e) => updateField("zip", e.target.value)}
            className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold"
        >
          Place Order
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CheckoutForm;
