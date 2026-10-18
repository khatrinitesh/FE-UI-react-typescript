import { useState } from "react";
import { Send } from "lucide-react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

const ContactForm = ({ onSubmit, className = "" }: ContactFormProps) => {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(form);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`contact-form w-full max-w-xl space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-1 text-sm text-gray-500">
          Have a question? Send us a message.
        </p>
      </div>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder="Enter your full name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="Enter subject"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          minLength={10}
          rows={5}
          placeholder="Write your message..."
          className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>
      <button
        type="submit"
        className="contact-form__submit flex w-full items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        <Send size={16} /> Send Message
      </button>
    </form>
  );
};

export default ContactForm;
