import React from "react";

import icHouseWhite from "/img/icons/ic-house-white.svg";
import icHouseOrange from "/img/icons/ic-house-orange.svg";

import icConstructionWhite from "/img/icons/ic-construction-white.svg";
import icConstructionOrange from "/img/icons/ic-construction.svg";

import icPlanWhite from "/img/icons/ic-plan-white.svg";
import icPlanOrange from "/img/icons/ic-plan.svg";

import icPantoneWhite from "/img/icons/ic-pantone-white.svg";
import icPantoneOrange from "/img/icons/ic-pantone-orange.svg";

import icPaintingWhite from "/img/icons/ic-painting-white.svg";
import icPaintingOrange from "/img/icons/ic-painting.svg";

const work_cards_data = [
  {
    icon_white: icHouseWhite,
    icon_orange: icHouseOrange,
    title: "All Projects",
  },
  {
    icon_white: icConstructionWhite,
    icon_orange: icConstructionOrange,
    title: "Construction",
  },
  {
    icon_white: icPlanWhite,
    icon_orange: icPlanOrange,
    title: "Project Development",
  },
  {
    icon_white: icPantoneWhite,
    icon_orange: icPantoneOrange,
    title: "Interior Design",
  },
  {
    icon_white: icPaintingWhite,
    icon_orange: icPaintingOrange,
    title: "Repairs",
  },
];

export default function OurWorkCards() {
  return (
    <section className="our-our-work-cards-cards">
      <div className="container flex">
        {work_cards_data.map((item, index) => (
          <div key={index} className="our-work-cards__item">
            <div className="our-work-cards__item-img">
              <img
                src={item.icon_orange}
                alt={item.title}
                className="our-work-cards__item-img orange-work-ic"
              />
              <img
                src={item.icon_white}
                alt={`${item.title} white`}
                className="our-work-cards__item-img white-work-ic"
              />
            </div>
            <span className="our-work-cards__item-header">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
