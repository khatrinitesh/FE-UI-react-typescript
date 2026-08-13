import { useState } from "react";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      console.log("Contact form:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Contact
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            Get in touch
          </h1>

          <p className="mt-4 text-gray-600">
            Have a question? Send us a message and we'll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-xl border border-gray-200 p-6 sm:p-8"
        >
          <Input
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={50}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={100}
          />

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={5}
              maxLength={500}
              required
              className="
                w-full
                resize-none
                rounded-lg
                border
                border-gray-300
                bg-white
                px-3
                py-3
                text-sm
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-black
                focus:ring-1
                focus:ring-black
              "
            />
          </div>

          <Button type="submit" loading={loading} className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
