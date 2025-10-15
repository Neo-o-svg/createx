import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesCard({
  cardImg,
  cardDescr,
  cardTitle,
  cardText,
  cardSubClass,
}) {
  const navigate = useNavigate();
  return (
    <div className="services-card flex">
      <div className={`services-card__img-wrapper ${cardSubClass}`}>
        <img src={cardImg} alt={cardDescr} />
      </div>
      <div className="services-card__content">
        <h2 className="services-card__title">{cardTitle}</h2>
        <p className="services-card__text">{cardText}</p>
        <button
          className="btn outline"
          onClick={() => navigate("/services/interior-design")}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}
