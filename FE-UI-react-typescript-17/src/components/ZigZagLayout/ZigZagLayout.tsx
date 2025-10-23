import type { ZigZagItem } from "../../interface";
import { ZIGZAG_DATA } from "./zigzagData";

const ZigZagLayout = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      {ZIGZAG_DATA.map((item: ZigZagItem, index: number) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-8 my-10 ${
              isEven ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl font-bold text-green-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ZigZagLayout;
