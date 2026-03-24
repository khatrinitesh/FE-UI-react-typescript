import { useState } from "react";
import { toast } from "sonner";
import Button from "../../components/UI/button/Button";
import FieldInput from "../../components/UI/fieldInput/FieldInput";
import FieldTextArea from "../../components/UI/fieldTextArea/FieldTextArea";
import type { FormState } from "../../interface";

const ContactPage = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return (toast.error("Name is required"), false);
    if (!form.email.trim()) return (toast.error("Email is required"), false);
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return (toast.error("Invalid email"), false);
    if (!form.message.trim())
      return (toast.error("Message is required"), false);

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    toast.success("Message sent successfully ✅");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Contact Us</h2>

        <FieldInput
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <FieldInput
          name="email"
          type="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <FieldTextArea
          name="message"
          label="Message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />

        <Button
          icon="➡️"
          iconPosition="left"
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
