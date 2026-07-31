import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type FeatureCard = {
  id: number;
  title: string;
  description: string;
  icon: typeof Sparkles;
};

const featureCards: FeatureCard[] = [
  {
    id: 1,
    title: "Brand design",
    description: "Build consistent interfaces using reusable components.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Performance",
    description: "Create responsive experiences across screen sizes.",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Collaboration",
    description: "Keep teams aligned throughout the project lifecycle.",
    icon: Users,
  },
];

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

export default function ContainerScrollAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      const scrollableDistance = section.offsetHeight - window.innerHeight;

      const scrolledDistance = -rect.top;

      const nextProgress =
        scrollableDistance > 0
          ? clamp(scrolledDistance / scrollableDistance, 0, 1)
          : 0;

      setProgress(nextProgress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scale = 0.82 + progress * 0.18;
  const rotateX = 12 - progress * 12;
  const translateY = 70 - progress * 70;
  const borderRadius = 48 - progress * 20;
  const contentOpacity = clamp((progress - 0.25) / 0.45, 0, 1);
  const contentTranslateY = 50 - contentOpacity * 50;

  const animatedContainerStyle: CSSProperties = {
    transform: `
      perspective(1200px)
      translateY(${translateY}px)
      rotateX(${rotateX}deg)
      scale(${scale})
    `,
    borderRadius: `${borderRadius}px`,
  };

  const animatedContentStyle: CSSProperties = {
    opacity: contentOpacity,
    transform: `translateY(${contentTranslateY}px)`,
  };

  return (
    <main className="overflow-x-hidden bg-slate-100 font-montserrat">
      <section className="flex min-h-screen items-center justify-center px-5 py-20 text-center">
        <div className="max-w-3xl">
          <p className="text-12 font-semibold uppercase tracking-[0.18em] text-primary">
            Scroll animation
          </p>

          <h1 className="mt-4 font-arialnb text-48 font-bold leading-tight text-secondary desktop-sm:text-64">
            Scroll down to reveal the container
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-16 leading-7 text-secondary/70">
            The container grows, straightens, and reveals its content as you
            move through the page.
          </p>

          <div className="mx-auto mt-10 h-14 w-8 rounded-full border-2 border-secondary/25 p-1">
            <span className="mx-auto block h-2 w-2 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative h-[220vh] px-3 sm:px-5 desktop-sm:px-8"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden py-5">
          <article
            style={animatedContainerStyle}
            className="
              relative h-[calc(100vh-40px)] w-full max-w-[1600px]
              origin-center overflow-hidden bg-secondary
              shadow-[0_40px_100px_rgba(15,23,42,0.28)]
              will-change-transform
            "
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />

              <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />

              <div
                className="
                  absolute inset-0 opacity-[0.07]
                  [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
                  [background-size:48px_48px]
                "
              />
            </div>

            <div
              style={animatedContentStyle}
              className="
                relative z-10 grid h-full items-center gap-8
                overflow-y-auto px-5 py-8 transition-none
                sm:px-8 desktop-sm:grid-cols-[0.9fr_1.1fr]
                desktop-sm:gap-12 desktop-sm:px-12
                desktop-3xl:px-16
              "
            >
              <div className="max-w-2xl">
                <span
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/15 bg-white/10 px-4 py-2
                    text-12 font-semibold uppercase tracking-[0.14em]
                    text-primary backdrop-blur-md
                  "
                >
                  <Sparkles size={16} aria-hidden="true" />
                  Brand experience
                </span>

                <h2 className="mt-6 font-arialnb text-40 font-bold leading-[1] text-white desktop-sm:text-56">
                  Build engaging digital experiences.
                </h2>

                <p className="mt-5 text-16 leading-7 text-white/65 desktop-sm:text-18">
                  A scroll-driven presentation container designed for product
                  introductions, portfolios, landing pages, and feature
                  showcases.
                </p>

                <ul className="mt-7 space-y-4">
                  {[
                    "Responsive across desktop and mobile",
                    "No external animation library required",
                    "Uses your brand colors and typography",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-14 text-white/75"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-primary"
                        aria-hidden="true"
                      />

                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="
                    mt-8 flex h-13 items-center justify-center gap-2
                    rounded-xl bg-primary px-6 font-arialnb
                    text-16 font-bold text-white
                    shadow-lg shadow-primary/25 transition
                    hover:-translate-y-0.5 hover:bg-sky-600
                    focus:outline-none focus:ring-4
                    focus:ring-primary/25 active:translate-y-0
                  "
                >
                  Explore features
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {featureCards.map((feature, index) => {
                  const Icon = feature.icon;

                  const cardProgress = clamp(
                    (progress - 0.35 - index * 0.08) / 0.3,
                    0,
                    1,
                  );

                  return (
                    <article
                      key={feature.id}
                      style={{
                        opacity: cardProgress,
                        transform: `
                          translateY(${40 - cardProgress * 40}px)
                          scale(${0.94 + cardProgress * 0.06})
                        `,
                      }}
                      className={`
                        rounded-3xl border border-white/10
                        bg-white/[0.08] p-5 backdrop-blur-xl
                        will-change-transform
                        ${index === 2 ? "sm:col-span-2" : ""}
                      `}
                    >
                      <span
                        className="
                          flex h-12 w-12 items-center justify-center
                          rounded-2xl bg-primary/15 text-primary
                        "
                      >
                        <Icon size={23} aria-hidden="true" />
                      </span>

                      <h3 className="mt-5 font-arialnb text-24 font-bold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-14 leading-6 text-white/55">
                        {feature.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
              <div
                className="h-full bg-primary"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            <span
              className="
                absolute bottom-5 right-5 z-20 rounded-full
                border border-white/10 bg-black/20 px-3 py-1.5
                text-12 font-semibold text-white/70 backdrop-blur-md
              "
            >
              {Math.round(progress * 100)}%
            </span>
          </article>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-20">
        <div className="max-w-2xl text-center">
          <p className="text-12 font-semibold uppercase tracking-[0.18em] text-primary">
            Animation completed
          </p>

          <h2 className="mt-4 font-arialnb text-40 font-bold text-secondary">
            Continue with your page content
          </h2>

          <p className="mt-4 text-16 leading-7 text-secondary/70">
            Place additional sections, cards, forms, or product information
            after the animated container.
          </p>
        </div>
      </section>
    </main>
  );
}
