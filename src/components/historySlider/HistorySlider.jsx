import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const history_slides = [
  {
    id: 1,
    image: "/img/history-img-1.jpg",
    label: "Present",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 2,
    image: "/img/history-img-1.jpg",
    label: "March 2019",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 3,
    image: "/img/history-img-1.jpg",
    label: "November 2018",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 4,
    image: "/img/history-img-1.jpg",
    label: "July 2015",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 5,
    image: "/img/history-img-1.jpg",
    label: "August 2010",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 6,
    image: "/img/history-img-1.jpg",
    label: "February 2007",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 7,
    image: "/img/history-img-1.jpg",
    label: "May 2004",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 8,
    image: "/img/history-img-1.jpg",
    label: "October 2001",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
  {
    id: 9,
    image: "/img/history-img-1.jpg",
    label: "June 2000",
    description: `
        Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. 
        Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis 
        diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, `,
  },
];

export default function HistorySlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <section className="history our-history gray-bg">
      <div className="history-top default-top">
        <div className="container flex">
          <span className="h2">Our history</span>
          <div className="def-arrows">
            <div className="swiper-button-prev-custom orange"></div>
            <div className="swiper-button-next-custom orange"></div>
          </div>
        </div>
      </div>

      <div className="history-bottom">
        <div className="container">
          <div className="history-slider flex">
            <div className="history__nav">
              {history_slides.map((slide, ind) => (
                <div
                  key={ind}
                  className={`history__nav-item ${
                    activeIndex === ind ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(ind)}
                >
                  <span className="history__dot"></span>
                  <span className="history__label">{slide.label}</span>
                </div>
              ))}
            </div>

            <div className="history-slider__swipper">
              <div className="container">
                <Swiper
                  modules={[Navigation]}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  slidesPerView={1}
                  spaceBetween={10}
                  speed={1500}
                  navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                  }}
                  loop={false}
                  className="swiper"
                >
                  {history_slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="history-slider__slide">
                        <img src={slide.image} alt={slide.label} />
                        <div className="history-slider__desc">
                          {slide.description}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
