import { useState } from "react";
import type { ContactForm } from "../../interface";
import FieldInput from "../../components/ui/FieldInput/FieldInput";
import Button from "../../components/ui/Button/Button";

const ContactPage = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10,}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid mobile number (10+ digits)";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    console.log("Form submitted:", form);
    setForm({ name: "", mobile: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      {submitted && (
        <p className="mb-4 text-green-600 font-medium">
          Form submitted successfully!
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <FieldInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FieldInput
          label="Mobile Number"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          error={errors.mobile}
        />
        <FieldInput
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          error={errors.message}
          textarea
          rows={5}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactPage;
