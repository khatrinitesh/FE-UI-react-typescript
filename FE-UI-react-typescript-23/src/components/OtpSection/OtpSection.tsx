import React, { useState, useRef, useEffect } from "react";
import type { OtpInputProps } from "../../interface";

const OtpSection = ({
  length = 6,
  onChange,
  onComplete,
  label = "Enter the 6-digit code received",
  resendLabel = "Resend code",
  onResend,
  disabled = false,
  className = "",
}: OtpInputProps) => {
  const [digits, setDigits] = useState<string[]>(() =>
    Array.from({ length }, () => "")
  );

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // autofocus first box
  useEffect(() => {
    if (!disabled) {
      inputsRef.current[0]?.focus();
    }
  }, [disabled]);

  const updateValue = (newDigits: string[]) => {
    const value = newDigits.join("");
    onChange?.(value);
    if (value.length === length && !newDigits.includes("")) {
      onComplete?.(value);
    }
  };

  const handleChange = (index: number, raw: string) => {
    if (disabled) return;

    // Only keep last numeric character
    const cleaned = raw.replace(/\D/g, "");
    const char = cleaned.slice(-1);

    const nextDigits = [...digits];
    nextDigits[index] = char || "";
    setDigits(nextDigits);
    updateValue(nextDigits);

    // Move to next input if we entered a digit
    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
      inputsRef.current[index + 1]?.select();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (disabled) return;

    if (e.key === "Backspace") {
      if (digits[index]) {
        // clear current digit
        const nextDigits = [...digits];
        nextDigits[index] = "";
        setDigits(nextDigits);
        updateValue(nextDigits);
      } else if (index > 0) {
        // move back
        inputsRef.current[index - 1]?.focus();
        const nextDigits = [...digits];
        nextDigits[index - 1] = "";
        setDigits(nextDigits);
        updateValue(nextDigits);
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputsRef.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (
    index: number,
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    if (disabled) return;
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!text) return;

    const nextDigits = [...digits];
    let current = index;

    for (let i = 0; i < text.length && current < length; i += 1) {
      nextDigits[current] = text[i];
      current += 1;
    }

    setDigits(nextDigits);
    updateValue(nextDigits);

    if (current <= length - 1) {
      inputsRef.current[current]?.focus();
      inputsRef.current[current]?.select();
    } else {
      inputsRef.current[length - 1]?.focus();
    }
  };

  return (
    <div
      className={`
        w-full 
        rounded-[24px]
        bg-white
        border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)]
        px-4 py-4 sm:px-10 sm:py-10
        text-center
        ${className}
      `}
    >
      {/* Label */}
      <p className="congenial-medium text-base text-[#4a2b7b] mb-6">{label}</p>

      {/* OTP boxes */}
      <div className="flex justify-center gap-2">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            disabled={disabled}
            value={digits[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={(e) => handlePaste(i, e)}
            className={`
              h-9 w-9 sm:h-12 sm:w-12
              text-center text-lg sm:text-xl font-semibold

              rounded-[15px]
              border border-[#d4c7ea]
              bg-[#f7f5fb]

              text-[#1f2933]
              focus:outline-none
              focus:border-[#7b57c8]
              focus:bg-white
              focus:shadow-[0_0_0_2px_rgba(123,87,200,0.55)]

              disabled:bg-[#f3f4f6]
              disabled:cursor-not-allowed
            `}
          />
        ))}
      </div>

      {/* Resend link */}
      {onResend && (
        <button
          type="button"
          onClick={onResend}
          className="
            mt-3 text-sm congenial-medium
            text-[#6e4a8e] underline underline-offset-1
            hover:text-[#54458e] cursor-pointer
          "
        >
          {resendLabel}
        </button>
      )}
    </div>
  );
};

export default OtpSection;
