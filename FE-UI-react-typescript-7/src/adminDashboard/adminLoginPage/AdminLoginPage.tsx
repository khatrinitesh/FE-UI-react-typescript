import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  validateEmail,
  validatePassword,
  isAdminCredentials,
} from "../../utils/utils";
import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";

const AdminLoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const id = toast.loading("Checking credentials...");

    try {
      if (!validateEmail(form.email)) {
        throw new Error("Invalid email format.");
      }

      if (!validatePassword(form.password)) {
        throw new Error("Password must be at least 6 characters.");
      }

      if (!isAdminCredentials(form.email, form.password)) {
        throw new Error("Incorrect email or password.");
      }

      // ✅ Successful login
      localStorage.setItem("isAuthenticated", "true");

      toast.success("Login successful!", { id });
      navigate("/admin/dashboard");
    } catch (error: any) {
      toast.error(error.message, { id });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="adminLoginPage flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow rounded w-[400px]"
      >
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <FieldInput
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          variant="default"
          className="mb-4"
        />

        <FieldInput
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          variant="default"
          className="mb-4"
        />

        <Button
          label={isLoading ? "Logging in..." : "Login"}
          type="submit"
          variant="darkblue"
          className="w-full mt-2"
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default AdminLoginPage;
