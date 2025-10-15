import React from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default function HeroLayout({ bgImage, heroTitle, heroText }) {
  return (
    <section className="hero-layout">
      <div
        className="hero-layout__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="hero-layout__content">
        <div className="container">
          <Breadcrumb/>
          <h1 className="hero-layout__title">{heroTitle}</h1>
          <p className="hero-layout__text">{heroText}</p>
        </div>
      </div>
    </section>
  );
}
