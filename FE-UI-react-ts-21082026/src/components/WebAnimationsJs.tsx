import { useEffect, useRef } from "react";
import "web-animations-js";

export default function WebAnimationsJs() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    boxRef.current.animate(
      [
        {
          opacity: 0,
          transform: "translateY(50px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 1000,
        easing: "ease-out",
        fill: "forwards",
      },
    );
  }, []);

  return (
    <>
      <Cards />
      <Spinner />
      <ButtonAnimation />
      <main className="flex min-h-screen items-center justify-center bg-black">
        <div
          ref={boxRef}
          className="rounded-2xl bg-yellow-400 p-10 text-4xl font-bold text-black"
        >
          Hello World
        </div>
      </main>
    </>
  );
}

function ButtonAnimation() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.15)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 300,
        easing: "ease-out",
      },
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="rounded-xl bg-white px-8 py-4 font-semibold text-black"
    >
      Click Me
    </button>
  );
}

function Spinner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      {
        duration: 2000,
        iterations: Infinity,
        easing: "linear",
      },
    );
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div
        ref={ref}
        className="h-20 w-20 rounded-full border-4 border-white border-t-yellow-400"
      />
    </div>
  );
}

function Cards() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      card.animate(
        [
          {
            opacity: 0,
            transform: "translateY(60px)",
          },
          {
            opacity: 1,
            transform: "translateY(0)",
          },
        ],
        {
          duration: 700,
          delay: index * 150,
          easing: "ease-out",
          fill: "forwards",
        },
      );
    });
  }, []);

  const cards = ["React", "TypeScript", "Tailwind CSS", "Node.js"];

  return (
    <section className="grid min-h-screen grid-cols-1 gap-6 bg-black p-10 text-white md:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={card}
          ref={(element) => {
            cardsRef.current[index] = element;
          }}
          className="rounded-2xl bg-zinc-900 p-10 text-2xl font-bold"
        >
          {card}
        </div>
      ))}
    </section>
  );
}
