import type { SliderProps } from "../../interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

const SliderSection = ({ slides }: SliderProps) => {
  return (
    <div className="swiperSection">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-content">
              <img src={item.image} alt={item.title || "slide"} />
              {item.title && <h2>{item.title}</h2>}
              {item.description && <p>{item.description}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
