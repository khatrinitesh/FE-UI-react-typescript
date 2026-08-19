import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setSuccess("Message sent successfully!");

      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Contact Me</h1>

          <p className="mt-3 text-slate-400">
            Send me a message and I'll get back to you.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-pink-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-pink-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter subject"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-pink-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-pink-500"
            />
          </div>

          {/* Message 2 */}
          <div>
            <label
              htmlFor="message2"
              className="mb-2 block text-sm font-medium"
            >
              Message 2
            </label>

            <textarea
              id="message2"
              name="message2"
              rows={4}
              placeholder="Write another message..."
              required
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-pink-500"
            />
          </div>

          {/* Detail */}
          <div>
            <label htmlFor="detail" className="mb-2 block text-sm font-medium">
              Detail
            </label>

            <textarea
              id="detail"
              name="detail"
              rows={4}
              placeholder="Enter additional details..."
              required
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-pink-500"
            />
          </div>

          {/* Hidden receiver */}
          <input
            type="hidden"
            name="to_email"
            value="niteshtech786@gmail.com"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success */}
          {success && (
            <p className="rounded-lg bg-green-500/10 p-3 text-center text-green-400">
              {success}
            </p>
          )}

          {/* Error */}
          {error && (
            <p className="rounded-lg bg-red-500/10 p-3 text-center text-red-400">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
