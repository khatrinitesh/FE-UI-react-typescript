import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  label?: string;
  placeholder?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
}

export default function CustomDatePicker({
  label,
  placeholder = "Select Date",
  value,
  onChange,
  minDate,
  maxDate,
}: CustomDatePickerProps) {
  return (
    <div className="w-full">
      {label && <label className="mb-2 block font-semibold">{label}</label>}

      <div className="relative">
        <DatePicker
          selected={value}
          onChange={onChange}
          placeholderText={placeholder}
          dateFormat="dd/MM/yyyy"
          minDate={minDate}
          maxDate={maxDate}
          className="
            h-12
            w-full
            rounded-xl
            border
            border-gray-300
            bg-white
            px-4
            pr-12
            outline-none
            transition
            focus:border-primary
            focus:ring-2
            focus:ring-primary/20
          "
        />

        <Calendar
          size={20}
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-500
          "
        />
      </div>
    </div>
  );
}
