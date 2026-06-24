import PageWrapper from "../components/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-black">Let’s Connect</h1>

        <form className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div>
            <label className="mb-2 block text-sm text-white/70">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message"
              className="w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}
