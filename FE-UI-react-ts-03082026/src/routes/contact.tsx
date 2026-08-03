import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactForm = z.infer<typeof contactSchema>;

const defaultValues: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      const result = contactSchema.safeParse(value);

      if (!result.success) {
        alert("Please fix validation errors.");
        return;
      }

      console.log(value);

      alert("Form submitted successfully!");

      form.reset();
    },
  });
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>

        <p className="mt-4 text-gray-600">We'd love to hear from you.</p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="flex gap-4 rounded-xl bg-white p-6 shadow">
            <Mail className="text-indigo-600" />

            <div>
              <h3 className="font-semibold">Email</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl bg-white p-6 shadow">
            <Phone className="text-indigo-600" />

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl bg-white p-6 shadow">
            <MapPin className="text-indigo-600" />

            <div>
              <h3 className="font-semibold">Address</h3>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-xl bg-white p-8 shadow-lg"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-5"
          >
            <form.Field
              name="name"
              children={(field) => (
                <div>
                  <label className="mb-2 block font-medium">Name</label>

                  <input
                    className="w-full rounded-lg border p-3 outline-none focus:border-indigo-500"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-sm text-red-500">
                      {String(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />

            <form.Field
              name="email"
              children={(field) => (
                <div>
                  <label className="mb-2 block font-medium">Email</label>

                  <input
                    type="email"
                    className="w-full rounded-lg border p-3 outline-none focus:border-indigo-500"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-sm text-red-500">
                      {String(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />

            <form.Field
              name="subject"
              children={(field) => (
                <div>
                  <label className="mb-2 block font-medium">Subject</label>

                  <input
                    className="w-full rounded-lg border p-3 outline-none focus:border-indigo-500"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-sm text-red-500">
                      {String(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />

            <form.Field
              name="message"
              children={(field) => (
                <div>
                  <label className="mb-2 block font-medium">Message</label>

                  <textarea
                    rows={5}
                    className="w-full rounded-lg border p-3 outline-none focus:border-indigo-500"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-sm text-red-500">
                      {String(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
