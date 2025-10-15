import React from "react";

export default function Our() {
  return (
    <section className="our gray-bg">
      <div className="container">
        <div className="default-top our-top">
          <div className="container">
            <span className="h2">Our core values</span>
            <p>
              Our mission is to set the highest standards for construction
              sphere.
            </p>
          </div>
        </div>
      </div>

      <div className="our__items">
        <div className="container flex">
          <div className="our__item">
            <div className="our__item-img">
              <img src="/img/icons/so_1.svg" alt="quality" />
            </div>
            <span className="our__item-header">Quality</span>
            <p className="our__item-text">
              Culpa nostrud commodo ea consequat <br />
              aliquip reprehenderit. Veniam velit <br /> nostrud aliquip sunt.
            </p>
          </div>
          <div className="our__item">
            <div className="our__item-img">
              <img src="/img/icons/so_2.svg" alt="safety" />
            </div>
            <span className="our__item-header">Safety</span>
            <p className="our__item-text">
              Anim reprehenderit sint voluptate <br /> exercitation adipisicing
              laborum <br /> adipisicing. Minim empor est ea.
            </p>
          </div>
          <div className="our__item">
            <div className="our__item-img">
              <img src="/img/icons/so_3.svg" alt="comfort" />
            </div>
            <span className="our__item-header">Comfort</span>
            <p className="our__item-text">
              Comfort Sit veniam aute dolore adipisicing nulla <br /> sit culpa.
              Minim mollit voluptate <br />
              ullamco proident ea ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
