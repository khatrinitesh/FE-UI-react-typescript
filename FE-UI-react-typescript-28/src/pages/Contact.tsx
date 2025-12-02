const Contact = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4 flex flex-col max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded mb-2"
        />
        <textarea placeholder="Message" className="border p-2 rounded mb-2" />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
