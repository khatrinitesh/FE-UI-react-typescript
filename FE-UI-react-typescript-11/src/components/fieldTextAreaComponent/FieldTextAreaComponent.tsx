import React from "react";
import type { FieldTextAreaProps } from "../../interface";

const FieldTextAreaComponent: React.FC<FieldTextAreaProps> = ({
  maxlength,
  name,
  disabled = false,
  placeholder,
  rows = 4,
  cols = 50,
  className,
}) => {
  return (
    <div className="w-full">
      <textarea
        name={name}
        maxLength={maxlength}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className={`${className} px-4 py-2  overflow-hidden w-full rounded-0 text-[1rem] md:text-[1.125rem]  fontpoppinsr outline-none transition duration-200 !border-[1px] border-black focus:border-blue-500`}
      />
    </div>
  );
};

export default FieldTextAreaComponent;
