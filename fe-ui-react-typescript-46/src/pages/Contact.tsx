import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "sonner";
import Button from "../components/Button";
import FieldInput from "../components/FieldInput";
import type { ContactForm } from "../interfaces/common.interface";

export default function Contact() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    console.log("Form Data:", formData);

    toast.success("Form submitted successfully");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);
  };
  return (
    <section className="p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>

        <p className="text-gray-600 mb-6">
          Email us at: <strong>{contactEmail}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FieldInput
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            maxLength={30}
            variant="color1"
            icon="👤"
            iconPosition="left"
            align="left"
          />

          <FieldInput
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            maxLength={50}
            variant="color2"
            icon="✉️"
            iconPosition="right"
            align="left"
          />

          <FieldInput
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            maxLength={200}
            variant="color1"
            textarea
            rows={5}
            icon="💬"
            iconPosition="left"
            align="left"
          />

          <Button
            type="submit"
            variant="color1"
            icon="→"
            iconPosition="right"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
