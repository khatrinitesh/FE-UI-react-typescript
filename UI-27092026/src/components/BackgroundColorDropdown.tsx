import { useState } from "react";

interface BackgroundColorDropdownProps {
  className?: string;
}

const BackgroundColorDropdown = ({ className = "" }: BackgroundColorDropdownProps) => {
  const [color, setColor] = useState("bg-white");

  const colors = [
    { label: "White", value: "bg-white" },
    { label: "Gray", value: "bg-gray-100" },
    { label: "Blue", value: "bg-blue-100" },
    { label: "Green", value: "bg-green-100" },
    { label: "Yellow", value: "bg-yellow-100" },
    { label: "Red", value: "bg-red-100" },
    { label: "Purple", value: "bg-purple-100" },
  ];

  return (
    <div className={`background-color-dropdown flex min-h-64 items-center justify-center p-6 transition-colors duration-300 ${color} ${className}`}>
      <select value={color} onChange={(event) => setColor(event.target.value)} className="background-color-dropdown__select rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm outline-none focus:border-gray-500">
        {colors.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
      </select>
    </div>
  );
};

export default BackgroundColorDropdown;