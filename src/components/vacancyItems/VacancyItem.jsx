import React from "react";

export default function VacancyItem({ city, time, title }) {
  return (
    <div className="vacancy-item flex">
      <div className="vacancy-item__content">
        <div className="vacancy-item__top">
          <span className="vacancy-item__city">{city}</span>
          <span className="vacancy-item__time">{time}</span>
        </div>
        <div className="vacancy-item__bottom">
          <h4 className="vacancy-item__title">{title}</h4>
        </div>
      </div>
      <div className="vacancy-item__button flex">
        <button className="btn outline">Apply now</button>
      </div>
    </div>
  );
}
