import type { ContactForm } from "../interface";

export const validateForm = (data: any) => {
  const errors: any = {};
  if (!data.name) errors.name = "Full name is required";
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
    errors.email = "Valid email required";
  if (!data.phone || data.phone.length < 10)
    errors.phone = "Valid phone required";
  if (!data.message) errors.message = "Message required";
  return errors;
};

export const validateContactForm = (data: ContactForm) => {
  const errors: Partial<ContactForm> = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone must be 10 digits";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};
