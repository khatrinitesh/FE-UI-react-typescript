
import type { ComponentType, ReactNode } from "react";
import * as MarqueeModule from "react-marquee-slider";

type MarqueeProps = {
  children: ReactNode;
  velocity?: number;
  direction?: "rtl" | "ltr";
};

function resolveDefaultExport(value: unknown): unknown {
  let current = value;

  for (let i = 0; i < 3; i++) {
    if (typeof current === "function") return current;

    if (
      current !== null &&
      typeof current === "object" &&
      "default" in current
    ) {
      current = current.default;
    } else {
      break;
    }
  }

  return current;
}

const resolved = resolveDefaultExport(MarqueeModule);

const Marquee =
  typeof resolved === "function"
    ? (resolved as ComponentType<MarqueeProps>)
    : null;

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
];

export default function MarqueeSection() {
  if (!Marquee) {
    console.error("Unsupported marquee export:", MarqueeModule);

    return (
      <p className="p-6 text-red-500">
        Unable to load react-marquee-slider.
        Check the browser console.
      </p>
    );
  }

  return (
    <section className="overflow-hidden bg-slate-950 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold text-white">
        Marquee Slider
      </h2>

      <Marquee velocity={30} direction="rtl">
        {technologies.map((item) => (
          <div
            key={item}
            className="mx-3 rounded-xl bg-blue-600 px-10 py-6 text-xl font-semibold text-white"
          >
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
