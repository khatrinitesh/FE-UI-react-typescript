const ContactPage = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        Have questions or want to work with us? Fill out the form below!
      </p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 rounded border" />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded border"
        />
        <textarea
          placeholder="Message"
          className="p-3 rounded border"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
