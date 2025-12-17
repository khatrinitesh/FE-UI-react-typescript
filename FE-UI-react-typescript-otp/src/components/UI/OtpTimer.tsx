import React, { useEffect, useState } from "react";

const OtpTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleResend = () => {
    if (seconds > 0) return;

    // 🔔 call resend OTP API here
    setSeconds(60); // restart timer
  };

  return (
    <p className="txt-code">
      Didn’t receive a code?{" "}
      <span
        className={`txt-resend ${seconds === 0 ? "active" : ""}`}
        onClick={handleResend}
      >
        Resend SMS
      </span>{" "}
      ({seconds}s)
    </p>
  );
};

export default OtpTimer;
