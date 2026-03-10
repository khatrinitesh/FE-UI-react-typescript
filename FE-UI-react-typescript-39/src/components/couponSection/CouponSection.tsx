import { useCouponStore } from "../../store/couponStore";
import { AnimatePresence, motion } from "framer-motion";

const CouponSection = () => {
  const { code, applied, discount, setCode, applyCoupon } = useCouponStore();
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Apply Coupon</h2>

      <div className="flex gap-3">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 border p-3 rounded-lg"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={applyCoupon}
          className="bg-blue-600 text-white px-4 py-3 rounded-lg"
        >
          Apply
        </motion.button>
      </div>

      <AnimatePresence>
        {applied && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg"
          >
            🎉 Coupon Applied! {discount}% discount
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CouponSection;
