import React, { useRef, useState } from "react";
import bgImage from "/img/swipper/bg-image.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";

export default function About() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [1, 2, 3, 4]; // можно заменить на реальные данные
  const navigate = useNavigate();

  return (
    <section className="about">
      <div
        className="about__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="about__slider-wrap">
        <div className="container">
          <div className="about__slider">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".about.swiper-button-next-custom",
                prevEl: ".about .swiper-button-prev-custom",
              }}
              loop={true}
              autoplay={{
                delay: 3000, // каждые 3 секунды
                disableOnInteraction: false, // не отключать после клика
              }}
              className="swiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {slides.map((n, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper__item">
                    <span className="swiper__title">
                      CREATE<span>X</span> {n} CONSTRUCTION
                    </span>
                    <p className="swipper__text">
                      Cras ultrices leo vitae non viverra. Fringilla nisi
                      quisque consequat, dignissim vitae proin ipsum sed.
                      Pellentesque nec turpis purus eget pellentesque integer
                      ipsum elementum felis.
                    </p>
                    <div className="swipper__btn-wrap">
                      <button
                        className="btn"
                        onClick={() => navigate("/about-us")}
                      >
                        Learn more about us
                      </button>
                      <a href="!#" className="btn orange">
                        SUBMIT REQUEST
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="about__slider-pagination">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`pagination-item ${
                    activeIndex === i ? "active" : ""
                  }`}
                  onClick={() => swiperRef.current.swiper.slideToLoop(i)}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="swiper-button-prev-custom"></div>
        <div className="swiper-button-next-custom"></div>
      </div>
    </section>
  );
}
