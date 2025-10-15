import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ImageSlider() {
  const images = [
    "/img/a-slide-comment-img.jpg",
    "/img/team-7-img.jpg",
    "/img/team-3-img.jpg",
  ];
  return (
    <div className="image-slider">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 1500, // время между слайдами (мс)
          disableOnInteraction: false, // не останавливать после ручного листания
        }}
      >
        {images.map((src, ind) => (
          <SwiperSlide key={ind}>
            <img src={src} alt={`slide-${ind}`} className="image-slider__img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
