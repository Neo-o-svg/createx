import React, { useEffect, useRef } from "react";
import Inputmask from "inputmask";

export default function Service() {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (phoneRef.current) {
      Inputmask({ mask: "+375 (99) 999-99-99" }).mask(phoneRef.current);
    }
  }, []);

  return (
    <section className="service">
      <div className="service__ask-wrap">
        <div className="container">
          <div className="service__ask">
            <span className="h3">Want to know more? Ask us a question:</span>
            <form className="service__form">
              <label className="def-inp">
                <span className="di-descr">Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label className="def-inp">
                <span className="di-descr">Phone</span>
                <input
                  type="text"
                  placeholder="Your phone"
                  ref={phoneRef} // привязываем маску
                  required
                />
              </label>
              <label className="def-inp">
                <span className="di-descr">Message</span>
                <input type="text" placeholder="Your message" />
              </label>
              <button className="btn orange">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="service-top default-top">
        <div className="container">
          <span className="h2">Our services</span>
          <p>
            Createx Construction Bureau is a construction giant with a full
            range of construction services.
          </p>
        </div>
      </div>

      <div className="service__items">
        <div className="container flex">
          <div className="service__item">
            <span
              className="service__i-hover"
              style={{ backgroundImage: "url('/src/img/ss-i-hover.jpg')" }}
            ></span>

            <div className="service__item-img">
              <img
                src="src/img/icons/ic-construction.svg"
                alt="Construction"
                className="service__item-img"
              />
              <img
                src="src/img/icons/ic-construction-white.svg"
                alt="Construction white"
                className="service__item-img"
              />
            </div>
            <span className="service__item-header">Construction</span>
          </div>
          <div className="service__item">
            <span
              className="service__i-hover"
              style={{ backgroundImage: "url('/src/img/ss-i-hover.jpg')" }}
            ></span>

            <div className="service__item-img">
              <img
                src="src/img/icons/ic-plan.svg"
                alt="Project Development"
                className="service__item-img"
              />
              <img
                src="src/img/icons/ic-plan-white.svg"
                alt="Project Development white"
                className="service__item-img"
              />
            </div>
            <span className="service__item-header">Project Development</span>
          </div>
          <div className="service__item">
            <span
              className="service__i-hover"
              style={{ backgroundImage: "url('/src/img/ss-i-hover.jpg')" }}
            ></span>

            <div className="service__item-img">
              <img
                src="src/img/icons/ic-pantone-orange.svg"
                alt="Interior Design orange"
                className="service__item-img"
              />
              <img
                src="src/img/icons/ic-pantone-white.svg"
                alt="Interior Design"
                className="service__item-img"
              />
            </div>
            <span className="service__item-header">Interior Design</span>
          </div>
          <div className="service__item">
            <span
              className="service__i-hover"
              style={{ backgroundImage: "url('/src/img/ss-i-hover.jpg')" }}
            ></span>

            <div className="service__item-img">
              <img
                src="src/img/icons/ic-painting.svg"
                alt="Repairs"
                className="service__item-img"
              />
              <img
                src="src/img/icons/ic-painting-white.svg"
                alt="Repairs white"
                className="service__item-img"
              />
            </div>
            <span className="service__item-header">Repairs</span>
          </div>
        </div>
      </div>

      <div className="service__btm default-btm ">
        <div className="container flex">
          <span className="h3">Learn more about our services</span>
          <a href="!#" className="btn orange">
            View services
          </a>
        </div>
      </div>
    </section>
  );
}
