import { useFormStore } from "../../store/useFormStore";

const ContactSection = () => {
  const { name, email, message, setName, setEmail, setMessage, resetForm } =
    useFormStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    resetForm();
  };
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="p-3 rounded border"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
