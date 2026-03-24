import { useState } from "react";
import { toast } from "sonner";
import Button from "../../components/UI/button/Button";
import FieldInput from "../../components/UI/fieldInput/FieldInput";
import type { LoginForm } from "../../interface";

const LoginPage = () => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  // ✅ single handler (clean)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ validation function
  const validate = () => {
    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Email and Password required");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    toast.success("Login Successful ✅");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-md space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Login</h1>

        <FieldInput
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <FieldInput
          name="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <Button icon="➡️" iconPosition="right" type="submit" text="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
