import {
  ArrowRight,
  Check,
  Clock3,
  EqualApproximatelyIcon,
  HdIcon,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 font-montserrat text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-[110px]" />

        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div
          className="
            absolute inset-0 opacity-[0.08]
            [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 desktop-sm:px-10">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary font-arialnb text-24 font-bold text-white shadow-lg shadow-primary/30">
              B
            </span>

            <span className="font-arialnb text-24 font-bold">
              Brand Project
            </span>
          </a>

          <a
            href="mailto:hello@example.com"
            className="
              flex h-11 items-center gap-2 rounded-full
              border border-white/15 bg-white/5 px-4
              text-14 font-semibold text-white/80
              backdrop-blur-md transition
              hover:border-primary hover:text-primary
            "
          >
            <Mail size={17} aria-hidden="true" />
            Contact us
          </a>
        </header>

        {/* Main content */}
        <section className="mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-12 px-5 py-12 desktop-sm:grid-cols-[1fr_0.8fr] desktop-sm:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-12 font-semibold uppercase tracking-[0.16em] text-primary">
              <Sparkles size={16} aria-hidden="true" />
              Something exciting is coming
            </div>

            <h1 className="mt-7 font-arialnb text-48 font-bold leading-[0.95] tracking-tight desktop-sm:text-64">
              We’re building
              <span className="block bg-gradient-to-r from-primary via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                something amazing.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-16 leading-7 text-white/65 desktop-sm:text-18">
              Our new digital experience is currently under development.
              Subscribe below and be the first to know when we launch.
            </p>

            {/* Subscription form */}
            <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
              <div
                className="
                  flex flex-col gap-3 rounded-2xl
                  border border-white/15 bg-white/5 p-2
                  backdrop-blur-xl sm:flex-row
                "
              >
                <div className="relative min-w-0 flex-1">
                  <Mail
                    size={19}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />

                  <input
                    type="email"
                    required
                    value={email}
                    placeholder="Enter your email address"
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setIsSubmitted(false);
                    }}
                    className="
                      h-13 w-full rounded-xl border border-transparent
                      bg-transparent pl-12 pr-4 text-14 text-white
                      outline-none transition
                      placeholder:text-white/35
                      focus:border-primary/40 focus:bg-white/5
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    flex h-13 shrink-0 items-center justify-center
                    gap-2 rounded-xl bg-primary px-6
                    font-arialnb text-16 font-bold text-white
                    shadow-lg shadow-primary/25 transition
                    hover:-translate-y-0.5 hover:bg-sky-500
                    focus:outline-none focus:ring-4 focus:ring-primary/20
                    active:translate-y-0
                  "
                >
                  Notify me
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>

              {isSubmitted && (
                <p className="mt-3 flex items-center gap-2 text-14 font-semibold text-emerald-400">
                  <Check size={18} aria-hidden="true" />
                  You’re on the list. We’ll notify you at launch.
                </p>
              )}
            </form>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-12 text-white/55">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                Early access updates
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                No spam
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-primary" />
                Unsubscribe anytime
              </span>
            </div>
          </div>

          {/* Launch card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-purple-500/20 blur-2xl" />

            <div
              className="
                relative overflow-hidden rounded-[2.5rem]
                border border-white/15 bg-white/[0.07]
                p-6 shadow-2xl backdrop-blur-2xl
                desktop-sm:p-8
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-12 font-semibold uppercase tracking-[0.14em] text-primary">
                    Launch status
                  </p>

                  <h2 className="mt-2 font-arialnb text-28 font-bold">
                    Almost ready
                  </h2>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Clock3 size={24} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  {
                    label: "Design system",
                    progress: 100,
                  },
                  {
                    label: "Development",
                    progress: 85,
                  },
                  {
                    label: "Testing",
                    progress: 65,
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-14 font-semibold text-white/80">
                        {item.label}
                      </span>

                      <span className="text-12 font-semibold text-primary">
                        {item.progress}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-primary to-cyan-300"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-12 uppercase tracking-[0.12em] text-white/45">
                  Expected launch
                </p>

                <p className="mt-2 font-arialnb text-32 font-bold text-white">
                  Coming Soon
                </p>

                <p className="mt-2 text-14 leading-6 text-white/55">
                  Final improvements are underway before we open access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto flex w-full max-w-360 flex-col gap-5 border-t border-white/10 px-5 py-6 sm:flex-row sm:items-center sm:justify-between desktop-sm:px-10">
          <p className="text-12 text-white/40">
            © {new Date().getFullYear()} Brand Project. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {[
              {
                label: "Instagram",
                icon: EqualApproximatelyIcon,
              },
              {
                label: "LinkedIn",
                icon: HdIcon,
              },
              {
                label: "Twitter",
                icon: Send,
              },
            ].map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/5 text-white/50 transition
                    hover:border-primary hover:bg-primary
                    hover:text-white
                  "
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </footer>
      </div>
    </main>
  );
}
