import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function AboutSlider() {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  const images = [
    "/img/a-slide-comment-img.jpg",
    "/img/team-7-img.jpg",
    "/img/team-3-img.jpg",
  ];
  const comments_data = [
    {
      text_1: `Dapibus nec vitae ante mattis. 
        Aliquam phasellus ac dui augue in. 
        Sed aliquet in egestas hac at proin sed quam. 
        Etiam aliquet sagittis non, massa cum pulvinar. 
        Et in leo, tempus purus vestibulum ut blandit et mi. 
        Odio massa purus vel praesent arcu enim elit felis viverra.`,
      text_2: `
        Magna aliquam interdum mattis ipsum arcu. 
        Elit odio elit viverra quis metus amet eleifend amet. 
        Vet suspendisse faucibus tempor ipsum integer. 
      `,
      name: "Courtney Alexander",
      status: "CEO - Createx Construction Bureau",
      signatureImg: "/img/icons/signature.svg",
    },
    {
      text_1: `Dapibus nec vitae ante mattis. 
        Aliquam phasellus ac dui augue in. 
        Sed aliquet in egestas hac at proin sed quam. 
        Etiam aliquet sagittis non, massa cum pulvinar. 
        Et in leo, tempus purus vestibulum ut blandit et mi. 
        Odio massa purus vel praesent arcu enim elit felis viverra.`,
      text_2: `
        Magna aliquam interdum mattis ipsum arcu. 
        Elit odio elit viverra quis metus amet eleifend amet. 
        Vet suspendisse faucibus tempor ipsum integer. 
      `,
      name: "Courtney Alexander",
      status: "CEO - Createx Construction Bureau",
      signatureImg: "/img/icons/signature.svg",
    },
    {
      text_1: `Dapibus nec vitae ante mattis. 
        Aliquam phasellus ac dui augue in. 
        Sed aliquet in egestas hac at proin sed quam. 
        Etiam aliquet sagittis non, massa cum pulvinar. 
        Et in leo, tempus purus vestibulum ut blandit et mi. 
        Odio massa purus vel praesent arcu enim elit felis viverra.`,
      text_2: `
        Magna aliquam interdum mattis ipsum arcu. 
        Elit odio elit viverra quis metus amet eleifend amet. 
        Vet suspendisse faucibus tempor ipsum integer. 
      `,
      name: "Courtney Alexander",
      status: "CEO - Createx Construction Bureau",
      signatureImg: "/img/icons/signature.svg",
    },
  ];
  return (
    <section className="about-slider">
      <div className="container">
        <div className="as-left">
          <div className="image-slider">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiper1Ref.current = swiper)}
              onSlideChange={(swiper) => {
                if (swiper2Ref.current) {
                  swiper2Ref.current.slideToLoop(swiper.realIndex); // правильный индекс в режиме loop
                }
              }}
            >
              {images.map((src, ind) => (
                <SwiperSlide key={ind}>
                  <img
                    src={src}
                    alt={`slide-${ind}`}
                    className="image-slider__img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="as-right">
          <div className="comment-slider">
            <Swiper
              spaceBetween={1000}
              slidesPerView={1}
              loop={true}
              speed={2000}
              onSwiper={(swiper) => (swiper2Ref.current = swiper)}
            >
              {comments_data.map((comment, ind) => (
                <SwiperSlide key={ind}>
                  <div className="comment-slider__content comment-slider__top">
                    <p className="comment-slider__text1">{comment.text_1}</p>
                    <p className="comment-slider__text2">{comment.text_2}</p>
                  </div>
                  <div className="comment-slider__bottom flex">
                    <div className="comment-slider__profile">
                      <p className="comment-slider__name">{comment.name}</p>
                      <p className="comment-slider__status">{comment.status}</p>
                    </div>
                    <div className="comment-slider__signtr">
                      <img
                        src={comment.signatureImg}
                        alt={`${comment.name} signature`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
