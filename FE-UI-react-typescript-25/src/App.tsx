import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const balloonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!balloonsRef.current) return;

    const balloons = balloonsRef.current.querySelectorAll(".balloon");

    balloons.forEach((balloon, index) => {
      const direction = index % 2 === 0 ? 1 : -1; // alternate up/down

      gsap.to(balloon, {
        y: 100 * direction, // move up/down
        rotation: 360 * direction, // rotate while scrolling
        ease: "none",
        scrollTrigger: {
          trigger: balloon,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // smooth movement tied to scroll
        },
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-purple-200 to-purple-50">
      {/* Music notes */}
      <div
        ref={balloonsRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="balloon absolute text-3xl"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
          >
            🎶
          </span>
        ))}
      </div>

      {/* Page content */}
      <div className="relative z-10 px-6 py-32 space-y-32">
        <section className="bg-white p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold">Scroll to animate 🎶</h1>
          <p>
            Scroll and watch the music notes move up, down, and rotate smoothly!
          </p>
        </section>
        <section className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">Another Section</h2>
          <p>Keep scrolling to see the smooth scroll-driven animation.</p>
        </section>
        <section className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">Final Section</h2>
          <p>
            The music notes rotate and move up/down in response to scrolling.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
