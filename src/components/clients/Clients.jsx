import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function Clients() {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  return (
    <section className="s-clients">
      <div className="container">
        <div className="sc-left">
          <span className="h2">What our clients are saying</span>
          <div className="scl-slider">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".s-clients .swiper-button-next-custom",
                prevEl: ".s-clients .swiper-button-prev-custom",
              }}
              className="scl-swiper"
              spaceBetween={15}
              slidesPerView={1}
              speed={1000}
              onSwiper={(swiper) => (swiper1Ref.current = swiper)}
              onSlideChange={(swiper) => {
                if (swiper2Ref.current) {
                  swiper2Ref.current.slideTo(swiper.activeIndex);
                }
              }}
            >
              <SwiperSlide className="swiper-slide">
                <div className="scl-item">
                  <div className="scl-photo-wrap">
                    <span
                      className="scl-photo"
                      style={{
                        backgroundImage: 'url("/img/icons/client.png")',
                      }}
                    ></span>
                  </div>
                  <p className="scl-text">
                    Ipsum aute sunt aliquip aute et occaecat. Anim minim do
                    cillum eiusmod enim. Consectetur magna cillum consequat
                    minim laboris cillum laboris voluptate minim proident
                    exercitation ullamco.
                  </p>
                  <span className="scl-name">Shawn Edwards</span>
                  <span className="scl-status">Position, Company name</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="scl-item">
                  <div className="scl-photo-wrap">
                    <span
                      className="scl-photo"
                      style={{
                        backgroundImage: 'url("/img/icons/client.png")',
                      }}
                    ></span>
                  </div>
                  <p className="scl-text">
                    Ipsum aute sunt aliquip aute et occaecat. Anim minim do
                    cillum eiusmod enim. Consectetur magna cillum consequat
                    minim laboris cillum laboris voluptate minim proident
                    exercitation ullamco.
                  </p>
                  <span className="scl-name">Shawn Edwards</span>
                  <span className="scl-status">Position, Company name</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="scl-item">
                  <div className="scl-photo-wrap">
                    <span
                      className="scl-photo"
                      style={{
                        backgroundImage: 'url("/img/icons/client.png")',
                      }}
                    ></span>
                  </div>
                  <p className="scl-text">
                    Ipsum aute sunt aliquip aute et occaecat. Anim minim do
                    cillum eiusmod enim. Consectetur magna cillum consequat
                    minim laboris cillum laboris voluptate minim proident
                    exercitation ullamco.
                  </p>
                  <span className="scl-name">Shawn Edwards</span>
                  <span className="scl-status">Position, Company name</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="def-arrows">
            <div className="swiper-button-prev-custom gray"></div>
            <div className="swiper-button-next-custom gray"></div>
          </div>
        </div>
        <div className="sc-right">
          <div className="scr-slider">
            <Swiper
              className="scr-swiper"
              spaceBetween={15}
              slidesPerView={1}
              speed={1000}
              onSwiper={(swiper) => (swiper2Ref.current = swiper)}
            >
              <SwiperSlide className="swiper-slide">
                <div className="src-photo">
                  <img
                    src="/img/scr-slider-photo.jpg"
                    alt="slide photo"
                    className="scr-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="src-photo">
                  <img
                    src="/img/scr-slider-photo.jpg"
                    alt="slide photo"
                    className="scr-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="src-photo">
                  <img
                    src="/img/scr-slider-photo.jpg"
                    alt="slide photo"
                    className="scr-img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
