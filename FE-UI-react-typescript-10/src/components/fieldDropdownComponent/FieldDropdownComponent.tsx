import type { IDropdownProps } from "../../interface";
import "./style.css";

const FieldDropdownComponent = ({
  value,
  onChange,
  options,
}: IDropdownProps) => {
  return (
    <select value={value} onChange={onChange} className="custom-dropdown">
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default FieldDropdownComponent;
