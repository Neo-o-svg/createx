import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css"; 
import "swiper/css/autoplay"; 


export default function Support() {
  return (
    <section className="support">
      <div className="container">
        <div className="default-top support-top">
          <div className="container">
            <span className="h2">Supported by 12+ partners</span>
          </div>
        </div>
      </div>

      <div className="support-slider">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={45}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              1440: { slidesPerView: 6 ,   spaceBetween: 102},
              992: { slidesPerView: 6 ,   spaceBetween:  45},
              
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="support-slider__logo">
                  <img src="/src/img/icons/sup_logo.svg" alt="Partner logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
