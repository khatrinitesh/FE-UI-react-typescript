import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SwiperSection() {
  const slides = [
    {
      id: 1,
      title: "Slide One",
      description: "This is the first slide.",
    },
    {
      id: 2,
      title: "Slide Two",
      description: "This is the second slide.",
    },
    {
      id: 3,
      title: "Slide Three",
      description: "This is the third slide.",
    },
    {
      id: 4,
      title: "Slide Four",
      description: "This is the fourth slide.",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Swiper spaceBetween={20} slidesPerView={1} loop className="w-full">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex min-h-75 items-center justify-center rounded-2xl bg-slate-800 p-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold">{slide.title}</h2>

                  <p className="mt-3 text-slate-400">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
