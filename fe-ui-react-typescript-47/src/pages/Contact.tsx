import { Mail, User } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";
import Button from "../components/Button";
import FieldInput from "../components/FieldInput";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactErrors>({});
  const [loading, setLoading] = useState(false);

  const updateField = (key: keyof ContactForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: ContactErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("Message sent successfully");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-5 py-20">
      <h1 className="text-4xl font-bold text-gray-950">Contact Us</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <FieldInput
          label="Name"
          placeholder="Enter your name"
          value={form.name}
          maxLength={40}
          icon={<User size={18} />}
          iconPosition="left"
          error={errors.name}
          disabled={loading}
          onChange={(event) => updateField("name", event.target.value)}
        />

        <FieldInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          maxLength={80}
          icon={<Mail size={18} />}
          iconPosition="left"
          error={errors.email}
          disabled={loading}
          onChange={(event) => updateField("email", event.target.value)}
        />

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Message
          </label>

          <textarea
            value={form.message}
            maxLength={250}
            disabled={loading}
            placeholder="Write your message"
            onChange={(event) => updateField("message", event.target.value)}
            className={`
              min-h-32 w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition
              placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100
              ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-gray-900"
              }
            `}
          />

          <div className="mt-1 flex items-center justify-between">
            {errors.message ? (
              <p className="text-xs text-red-500">{errors.message}</p>
            ) : (
              <span />
            )}

            <p className="text-xs text-gray-400">{form.message.length}/250</p>
          </div>
        </div>

        <Button
          type="submit"
          loading={loading}
          disabled={loading}
          variant="solid"
          color1="#111827"
          color2="#ffffff"
          className="w-full"
        >
          Submit
        </Button>
      </form>
    </section>
  );
}
