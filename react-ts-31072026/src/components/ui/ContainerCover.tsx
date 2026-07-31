import { ArrowRight, Play } from "lucide-react";

type ContainerCoverProps = {
  imageUrl: string;
  eyebrow?: string;
  title: string;
  description?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  align?: "left" | "center";
  height?: "small" | "medium" | "large" | "screen";
};

const heightClasses = {
  small: "min-h-[320px]",
  medium: "min-h-[480px]",
  large: "min-h-[620px]",
  screen: "min-h-screen",
};

export default function ContainerCover({
  imageUrl,
  eyebrow = "Brand experience",
  title,
  description,
  primaryButtonLabel = "Get started",
  secondaryButtonLabel = "Watch video",
  align = "left",
  height = "large",
}: ContainerCoverProps) {
  const isCenter = align === "center";

  return (
    <section
      className={`
        relative isolate flex overflow-hidden rounded-3xl
        ${heightClasses[height]}
        ${isCenter ? "items-center justify-center" : "items-end"}
      `}
    >
      {/* Cover image */}
      <img
        src={imageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-slate-950/55" />

      {/* Gradient overlay */}
      <div
        className={`
          absolute inset-0 -z-10
          ${
            isCenter
              ? "bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-slate-950/20"
              : "bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-transparent"
          }
        `}
      />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/30 blur-[100px]" />

      {/* Content */}
      <div
        className={`
          relative z-10 w-full p-6 sm:p-8 desktop-sm:p-12
          ${isCenter ? "mx-auto max-w-4xl text-center" : "max-w-3xl text-left"}
        `}
      >
        <span
          className="
            inline-flex rounded-full border border-white/20
            bg-white/10 px-4 py-2 font-montserrat
            text-12 font-semibold uppercase tracking-[0.16em]
            text-white backdrop-blur-md
          "
        >
          {eyebrow}
        </span>

        <h1
          className="
            mt-5 font-arialnb text-48 font-bold
            leading-[0.95] tracking-tight text-white
            desktop-sm:text-64
          "
        >
          {title}
        </h1>

        {description && (
          <p
            className={`
              mt-5 font-montserrat text-16 leading-7 text-white/75
              desktop-sm:text-18
              ${isCenter ? "mx-auto max-w-2xl" : "max-w-xl"}
            `}
          >
            {description}
          </p>
        )}

        <div
          className={`
            mt-8 flex flex-col gap-3 sm:flex-row
            ${isCenter ? "justify-center" : "justify-start"}
          `}
        >
          <button
            type="button"
            className="
              flex h-13 items-center justify-center gap-2
              rounded-xl bg-primary px-6
              font-arialnb text-16 font-bold text-white
              shadow-lg shadow-primary/25 transition
              hover:-translate-y-0.5 hover:bg-sky-600
              focus:outline-none focus:ring-4 focus:ring-primary/25
              active:translate-y-0
            "
          >
            {primaryButtonLabel}

            <ArrowRight size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="
              flex h-13 items-center justify-center gap-2
              rounded-xl border border-white/30
              bg-white/10 px-6 font-montserrat
              text-14 font-semibold text-white
              backdrop-blur-md transition
              hover:border-white/60 hover:bg-white/20
              focus:outline-none focus:ring-4 focus:ring-white/15
            "
          >
            <Play size={17} fill="currentColor" aria-hidden="true" />

            {secondaryButtonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
