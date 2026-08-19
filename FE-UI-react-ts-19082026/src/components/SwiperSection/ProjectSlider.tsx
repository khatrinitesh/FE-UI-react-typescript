import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function ProjectSlider() {
  const projects = [
    "Project 01",
    "Project 02",
    "Project 03",
    "Project 04",
    "Project 05",
  ];

  return (
    <section className="bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project}>
              <div className="h-64 rounded-2xl bg-slate-800 p-6">
                <h3 className="text-xl font-semibold text-white">{project}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
