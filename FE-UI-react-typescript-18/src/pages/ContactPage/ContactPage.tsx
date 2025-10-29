import { useState } from "react";
import FieldInput from "../../components/FieldInput/FieldInput";
import toast from "react-hot-toast";
import type { FormState } from "../../interface";

const ContactPage = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: { [key in keyof FormState]?: string } = {};
    let valid = true;

    if (!form.name.trim()) {
      errs.name = "Name is required";
      valid = false;
    }

    if (!/^[0-9]{10}$/.test(form.mobile.trim())) {
      errs.mobile = "Enter a valid 10-digit mobile number";
      valid = false;
    }

    if (!form.message.trim()) {
      errs.message = "Message is required";
      valid = false;
    }

    setErrors(errs);

    if (!valid) {
      toast.error("Please fix the errors in the form");
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    // Simulate API call delay
    await new Promise((res) => setTimeout(res, 1000));

    toast.success("Form submitted successfully!");
    setForm({ name: "", mobile: "", message: "" });
    setErrors({});
    setSubmitting(false);
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 bg-gray-50 min-h-[80vh]">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          <FieldInput
            label="Full Name"
            name="name"
            value={form.name}
            placeholder="Enter your name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            error={errors.name}
          />

          <FieldInput
            label="Mobile Number"
            name="mobile"
            value={form.mobile}
            placeholder="Enter your 10-digit mobile"
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            error={errors.mobile}
          />

          <FieldInput
            label="Message"
            name="message"
            value={form.message}
            placeholder="Type your message..."
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            error={errors.message}
            textarea
          />

          <button
            type="submit"
            disabled={submitting}
            className={`cursor-pointer w-full py-3 rounded-md font-medium transition duration-200 ${
              submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
