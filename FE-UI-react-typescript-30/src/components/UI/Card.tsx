import { useState } from "react";
import { CARDS } from "../../constants/constants";

const Card = () => {
  const [active, setActive] = useState<string>("odysseus");
  return (
    <div className=" bg-black text-white flex flex-wrap items-center justify-center gap-4 font-mono">
      {CARDS.map((card) => {
        const isActive = active === card.id;

        return (
          <div
            key={card.id}
            className={`
              relative grid h-112 overflow-hidden transition-all duration-500
              ${isActive ? "grid-cols-[8rem_19rem]" : "grid-cols-[8rem_3.5rem]"}
            `}
          >
            {/* Image */}
            <div className="col-span-full border border-white p-px clip-corner">
              <div className="h-full bg-black clip-corner">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-39 object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-start-2 border border-white p-px clip-corner relative">
              <div className="bg-black h-full clip-corner relative">
                <div
                  className={`
                    absolute top-7 left-7 flex gap-8 w-76
                    transition-transform duration-500
                    ${isActive ? "-translate-x-16" : "-translate-x-4"}
                  `}
                >
                  {/* Vertical title */}
                  <h2 className="writing-vertical text-xl font-extrabold uppercase">
                    {card.name}
                  </h2>

                  {/* Copy */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-extrabold uppercase">
                      {card.name}
                    </h2>
                    <h3 className="text-[0.6rem] font-normal">
                      {card.subtitle}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Toggle */}
                <button
                  onClick={() => setActive(card.id)}
                  className="absolute bottom-0 left-0 p-4"
                >
                  <svg
                    className={`h-6 w-6 transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
