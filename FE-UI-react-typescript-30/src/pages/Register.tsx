import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "../constants/constants";
import { register } from "../api/authService";
import { motion } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email: string })?.email;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) navigate(ROUTES.LOGIN);
  }, [email]);

  const handleRegister = async () => {
    setLoading(true);
    const res = await register({ name, email, password });
    setLoading(false);
    if (res.success) navigate(ROUTES.LANDING);
  };
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-4 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </motion.div>
  );
};

export default Register;
