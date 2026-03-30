import { useState } from "react";
import Button from "../../components/UI/button/Button";
import FieldInput from "../../components/UI/fieldInput/FieldInput";
import FieldTextArea from "../../components/UI/fieldTextArea/FieldTextArea";
import { validateEmail, validatePassword, validateUsername } from "../../utils/validation";
import { toast } from "sonner";

const ContactPage = () => {
     const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
    password: "",
  });

    const [errors, setErrors] = useState<any>({});

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validateForm = () => {
    const newErrors: any = {};

    if (!validateUsername(form.username)) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validatePassword(form.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = () => {
    if (!validateForm()) {
      toast.error("Please fix errors");
      return;
    }

    console.log("FORM DATA:", form);

    toast.success("Form submitted successfully 🎉");

    // Reset form
    setForm({
      username: "",
      email: "",
      message: "",
      password: "",
    });
    setErrors({});
  };

  const isDisabled =
    !form.username || !form.email || !form.password || !form.message;
  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>

      {/* Username */}
      <div>
        <FieldInput
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
          maxLength={50}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">
            {errors.username}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <FieldInput
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <FieldInput
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <FieldTextArea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter message"
          maxLength={200}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Button */}
      <Button
        onClick={handleSubmit}
        disabled={isDisabled}
        className="w-full"
      >
        Submit
      </Button>
    </div>
  )
}

export default ContactPage
