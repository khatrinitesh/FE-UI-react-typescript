import { useState } from "react";
import { FiMail, FiSend, FiUser } from "react-icons/fi";
import { toast } from "sonner";
import Button from "../../components/UI/button/Button";
import FieldInput from "../../components/UI/fieldInput/FieldInput";
import type { FormData, FormErrors } from "../../interface";

const ContactPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // ✅ Validation
  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Min 10 characters required";
    }

    return newErrors;
  };

  // ✅ Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // validate live
    const newErrors = validate();
    setErrors(newErrors);
  };

  // ✅ Handle Blur (for better UX)
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  // ✅ Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        name: true,
        email: true,
        message: true,
      });

      toast.error("Please fix the form errors ❌");
      return;
    }

    toast.success("Message sent successfully 🚀");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
    setTouched({});
  };

  return (
    <div className="contactPage">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <FieldInput
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={30}
              isLeftIcon
              leftIcon={<FiUser />}
              isError={!!errors.name && touched.name}
              isSuccess={!errors.name && form.name.length > 2}
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <FieldInput
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              isLeftIcon
              leftIcon={<FiMail />}
              isError={!!errors.email && touched.email}
              isSuccess={!errors.email && form.email.length > 5}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border p-3 rounded h-32 outline-none transition
                ${
                  errors.message && touched.message
                    ? "border-red-500"
                    : form.message.length > 10
                      ? "border-green-500"
                      : "border-gray-300"
                }`}
            />
            {touched.message && errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <Button isRightIcon rightIcon={<FiSend />}>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
