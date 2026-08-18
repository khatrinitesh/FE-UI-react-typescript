import type { InputProps } from "../../types/common";

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        {...props}
        className={`rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black ${className}`}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
