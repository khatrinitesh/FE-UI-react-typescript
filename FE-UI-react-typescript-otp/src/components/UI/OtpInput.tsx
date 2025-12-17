import React, { useRef, useState } from "react";

interface OtpInputProps {
  length?: number;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 4 }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const [isInvalid, setIsInvalid] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move focus
    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // clear error while typing again
    if (isInvalid) {
      setIsInvalid(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = "";
      }

      setOtp(newOtp);
      setIsInvalid(false);
    }
  };

  // simulate OTP validation (call API here)
  const validateOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length === length) {
      setIsInvalid(true); // mark invalid
    }
  };

  return (
    <div className="otp-wrapper">
      {/* ERROR MESSAGE ABOVE INPUTS */}
      {isInvalid && (
        <p className="otp-error-text">Incorrect code. Please try again.</p>
      )}

      <div className={`otp-input-container ${isInvalid ? "error" : ""}`}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={otp[index]}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onBlur={validateOtp}
            className="otp-input"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
