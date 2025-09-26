import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Стили Swiper
import "swiper/css";
import "swiper/css/navigation";

export default function Browse() {
  return (
    <section className="browse">
      <div className="browse-top default-top">
        <div className="container flex">
          <span className="h2">
            Browse our selected projects
            <br /> and learn more about our work
          </span>
          <div className="def-arrows">
            <div className="swiper-button-prev-custom orange"></div>
            <div className="swiper-button-next-custom orange"></div>
          </div>
        </div>
      </div>

      <div className="browse-slider">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".browse .swiper-button-next-custom",
            prevEl: ".browse .swiper-button-prev-custom",
          }}
          slidesPerView={"auto"}
          spaceBetween={15}
          loop={false}
          breakpoints={{
            992: { // > 900
              spaceBetween: 30,
               slidesPerView: 3,
            }
          }}
        >
          {/* Слайды */}
          <SwiperSlide>
            <div className="browse__slider-item">
              <div className="browse__slider-img">
                <img src="/src/img/sbs-i-1.jpg" alt="Red finger building" />
              </div>
              <div className="browse__slider-text">
                <span className="browse__slider-t-hdr">
                  Red Finger Building
                </span>
                <span className="browse__slider-t-descr">Business Centers</span>
                <a href="!#" className="btn outline">
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="browse__slider-item">
              <div className="browse__slider-img">
                <img src="/src/img/sbs-i-2.jpg" alt="Cubes building" />
              </div>
              <div className="browse__slider-text">
                <span className="browse__slider-t-hdr">Cubes Building</span>
                <span className="browse__slider-t-descr">Business Centers</span>
                <a href="!#" className="btn outline">
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="browse__slider-item">
              <div className="browse__slider-img">
                <img src="/src/img/sbs-i-1.jpg" alt="Pencil building" />
              </div>
              <div className="browse__slider-text">
                <span className="browse__slider-t-hdr">
                  The Pencil Building
                </span>
                <span className="browse__slider-t-descr">Stores & Malls</span>
                <a href="!#" className="btn outline">
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="browse__slider-item">
              <div className="browse__slider-img">
                <img src="/src/img/sbs-i-1.jpg" alt="Red finger building" />
              </div>
              <div className="browse__slider-text">
                <span className="browse__slider-t-hdr">
                  Red Finger Building
                </span>
                <span className="browse__slider-t-descr">Business Centers</span>
                <a href="!#" className="btn outline">
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="browse__slider-item">
              <div className="browse__slider-img">
                <img src="/src/img/sbs-i-2.jpg" alt="Cubes building" />
              </div>
              <div className="browse__slider-text">
                <span className="browse__slider-t-hdr">Cubes Building</span>
                <span className="browse__slider-t-descr">Business Centers</span>
                <a href="!#" className="btn outline">
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="browse__slider-item">
              <div className="browse__slider-img">
                <img src="/src/img/sbs-i-1.jpg" alt="Pencil building" />
              </div>
              <div className="browse__slider-text">
                <span className="browse__slider-t-hdr">
                  The Pencil Building
                </span>
                <span className="browse__slider-t-descr">Stores & Malls</span>
                <a href="!#" className="btn outline">
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="service-bottom-btm default-btm">
        <div className="container flex">
          <span className="h3">Explore all our works</span>
          <a href="#" className="btn orange">
            View portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
