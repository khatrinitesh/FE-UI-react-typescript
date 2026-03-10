import { CONTACT_INFO } from "../../constants/constants";
import { useContactStore } from "../../store/contactStore";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { form, updateField, resetForm } = useContactStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);
    resetForm();
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

          <p className="text-gray-600 mb-6">
            Have a question or project in mind? Feel free to reach out.
          </p>

          <div className="space-y-4">
            {CONTACT_INFO.map((info) => (
              <div key={info.id}>
                <p className="font-medium">{info.label}</p>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
