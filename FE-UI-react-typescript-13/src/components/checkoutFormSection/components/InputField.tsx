import { useEffect, useRef } from "react";
import { fadeIn } from "../../../utils/animations";

interface Props {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

export const InputField: React.FC<Props> = ({ label, value, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeIn(ref.current);
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded"
      />
    </div>
  );
};
