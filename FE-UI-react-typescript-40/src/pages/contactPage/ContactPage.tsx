import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../../components/UI/button/Button";
import FieldInput from "../../components/UI/fieldInput/FieldInput";
import { FieldTextArea } from "../../components/UI/fieldTextArea/FieldTextArea";
import { validateContactForm } from "../../utils/utils";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const err = validateContactForm(form);
    setErrors(err);

    if (Object.keys(err).length > 0) {
      toast.error("Please fix the errors in the form");
      return;
    }

    // Success
    toast.success("Form submitted successfully 🚀");

    // reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="contactPage">
      <form
        className="p-6 flex flex-col gap-4 max-w-md"
        onSubmit={handleSubmit}
      >
        <FieldInput
          name="name"
          value={form.name}
          placeholder="Full Name"
          maxLength={30}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {/* {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )} */}

        <FieldInput
          name="email"
          type="email"
          value={form.email}
          placeholder="Email Address"
          maxLength={50}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {/* {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )} */}

        <FieldInput
          name="phone"
          type="tel"
          value={form.phone}
          placeholder="Phone Number"
          maxLength={10}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {/* {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )} */}

        <FieldTextArea
          name="message"
          value={form.message}
          placeholder="Your Message"
          maxLength={200}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {/* {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )} */}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactPage;
