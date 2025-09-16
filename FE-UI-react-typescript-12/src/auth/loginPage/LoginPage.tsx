import React, { useState } from "react";
import { toast } from "sonner";
import { isEmailValid, isRequired } from "../../utils/formValidation";
import ButtonSection from "../../components/buttonSection/ButtonSection";
import FieldInputSection from "./../../components/fieldInputSection/FieldInputSection";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!isRequired(email)) {
      newErrors.email = "Email is required";
    } else if (!isEmailValid(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!isRequired(password)) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Logged in successfully");
      // Redirect to home page after successful login
      navigate("/home");
    } else {
      toast.error("Please fix the form errors");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Login</h2>

      <div>
        <FieldInputSection
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <FieldInputSection
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <ButtonSection type="submit" label="Login" variant="darkblue" />
    </form>
  );
};

export default LoginPage;
