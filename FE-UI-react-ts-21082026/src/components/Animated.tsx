import { cards } from "../constants/data";

export default function Animated() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {cards.map((card, index) => (
          <div
            key={card}
            className={`
            animate__animated
            animate__fadeInUp
            animate__delay-${index + 1}s
            rounded-xl
            bg-zinc-900
            p-8
            text-white
          `}
          >
            <h2 className="text-2xl font-bold">{card}</h2>
          </div>
        ))}
      </section>
      <hr />
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        Delayed Animation
      </div>
      <div
        className="
  animate__animated
  animate__fadeInUp
  animate__slow
"
      >
        Slow Animation
      </div>
      <div className="animate__animated animate__bounce">Bounce</div>

      <div className="animate__animated animate__fadeIn">Fade In</div>

      <div className="animate__animated animate__fadeInUp">Fade In Up</div>

      <div className="animate__animated animate__zoomIn">Zoom In</div>

      <div className="animate__animated animate__slideInLeft">
        Slide From Left
      </div>

      <div className="animate__animated animate__slideInRight">
        Slide From Right
      </div>
    </>
  );
}
