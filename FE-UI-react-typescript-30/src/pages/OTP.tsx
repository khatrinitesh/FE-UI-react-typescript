import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "../constants/constants";
import { motion } from "framer-motion";
import { verifyOTP } from "../api/authService";

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email: string })?.email;
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) navigate(ROUTES.LOGIN); // redirect if no email
  }, [email]);

  const handleVerify = async () => {
    setLoading(true);
    const res = await verifyOTP({ email, otp });
    setLoading(false);
    if (res.success) navigate(ROUTES.REGISTER, { state: { email } });
    else alert("Invalid OTP");
  };
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Verify OTP</h1>
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full p-2 mb-4 border rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          onClick={handleVerify}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </motion.div>
  );
};

export default OTP;
