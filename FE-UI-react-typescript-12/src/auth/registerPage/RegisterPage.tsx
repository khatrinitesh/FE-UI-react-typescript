import React, { useState } from "react";
import { toast } from "sonner";
import {
  isEmailValid,
  isPasswordStrong,
  isPhoneNumberValid,
  isRequired,
} from "../../utils/formValidation";
import ButtonSection from "../../components/buttonSection/ButtonSection";
import FieldInputSection from "../../components/fieldInputSection/FieldInputSection";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    phone?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!isRequired(email)) {
      newErrors.email = "Email is required";
    } else if (!isEmailValid(email)) {
      newErrors.email = "Invalid email";
    }

    if (!isRequired(password)) {
      newErrors.password = "Password is required";
    } else if (!isPasswordStrong(password)) {
      newErrors.password =
        "Password must be at least 8 characters with uppercase, lowercase, and a number";
    }

    if (!isRequired(phone)) {
      newErrors.phone = "Phone number is required";
    } else if (!isPhoneNumberValid(phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Registered successfully");
      // Redirect to OTP page after successful registration
      navigate("/otp");
    } else {
      toast.error("Please fix the form errors");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Register</h2>

      <div>
        <FieldInputSection
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

      <div>
        <FieldInputSection
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <ButtonSection type="submit" label="Register" variant="darkblue" />
    </form>
  );
};

export default RegisterPage;
