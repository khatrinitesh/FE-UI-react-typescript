import { useEffect, useRef } from "react";
import { fadeIn } from "../../../utils/animations";
import { PAYMENT_METHODS } from "./data";

interface Props {
  selected: string;
  onChange: (val: string) => void;
}

const PaymentSelector = ({ selected, onChange }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => fadeIn(ref.current), []);
  return (
    <div ref={ref} className="mb-4">
      <label className="block text-sm font-medium mb-1">Payment Method</label>
      <select
        className="w-full border border-gray-300 p-2 rounded"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {PAYMENT_METHODS.map((method) => (
          <option key={method.value} value={method.value}>
            {method.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaymentSelector;
