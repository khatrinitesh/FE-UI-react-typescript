import { useState } from "react";

const images = [
  "/assets/image1.jpg",
  "/assets/image2.jpg",
  "/assets/image3.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-white rounded-[40px] shadow-xl p-8">
      <div className="relative">
        <img
          src={images[selected]}
          className="rounded-xl w-full h-[500px] object-cover"
        />

        <div className="absolute left-5 top-5 text-white text-5xl font-bold">
          1/2
        </div>

        <button className="absolute bottom-6 right-6 bg-red-600 rounded-full w-16 h-16 text-white text-3xl">
          ↻
        </button>
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <button className="text-4xl">‹</button>

        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            onClick={() => setSelected(index)}
            className={`cursor-pointer w-24 h-24 rounded-lg object-cover border-4 ${
              selected === index ? "border-red-500" : "border-transparent"
            }`}
          />
        ))}

        <button className="text-4xl">›</button>
      </div>
    </div>
  );
}
