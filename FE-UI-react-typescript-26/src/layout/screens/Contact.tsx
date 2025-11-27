import { useState } from "react";
import type { ContactForm } from "../../interface";

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validate = () => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!/^\d{10}$/.test(form.mobile))
      newErrors.mobile = "Mobile must be 10 digits";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Form submitted successfully!");
  };
  return (
    <div>
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <label>Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <label>Email</label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>Mobile</label>
        <input
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}

        <label>Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <button type="submit" style={{ marginTop: 20 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
