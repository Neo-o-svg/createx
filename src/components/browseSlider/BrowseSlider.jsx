import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SlideItem from "../BrowseSliderItem/BrowseSliderItem";
import "swiper/css";
import "swiper/css/navigation";

export default function BrowseSlider({ slidesData }) {
  return (
    <div className="browse-slider">
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = document.querySelector(
            ".swiper-button-prev-custom"
          );
          swiper.params.navigation.nextEl = document.querySelector(
            ".swiper-button-next-custom"
          );
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        slidesPerView={"auto"}
        spaceBetween={15}
        loop={false}
        breakpoints={{
          992: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {slidesData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <SlideItem {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
