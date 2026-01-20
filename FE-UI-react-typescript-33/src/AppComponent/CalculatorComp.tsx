import { useCalculatorStore } from "../store/useCalculatorStore/useCalculatorStore";
import { motion } from "framer-motion";

const CalculatorComp = () => {
  const { value, add, subtract, reset } = useCalculatorStore();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        width: 200,
        padding: 20,
        borderRadius: 10,
        background: "#1e1e1e",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <motion.h2 layout>Result: {value}</motion.h2>

      <button onClick={() => add(1)}>+1</button>
      <button onClick={() => subtract(1)}>-1</button>
      <button onClick={reset}>Reset</button>
    </motion.div>
  );
};

export default CalculatorComp;
