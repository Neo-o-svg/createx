import React from "react";

import ic_1 from "/img/icons/ic-like.svg";
import ic_2 from "/img/icons/ic-painting-grey.svg";
import ic_3 from "/img/icons/ic-helmet.svg";
import ic_4 from "/img/icons/ic-pantone-grey.svg";

const achv_card_data = [
  {
    img: ic_1,
    title: "60%",
    text: "Clients on the recommendation of friends",
  },
  {
    img: ic_2,
    title: "2400+",
    text: "Apartments renovated",
  },
  {
    img: ic_3,
    title: "670",
    text: "Qualified specialists",
  },
  {
    img: ic_4,
    title: "150000 m\u00B2",
    text: "Finishing work was carried out",
  },
];

export default function AboutWorkAchievments() {
  return (
    <section className="about-achievments">
      <div className="container">
        <div className="about-achievments__items-wrapper flex">
          {achv_card_data.map((card, ind) => (
            <div className="about-achievments__item" key={ind}>
              <div className="about-achievments__img-wrapper">
                <img src={card.img} alt={card.text} />
              </div>
              <h2 className="about-achievments__title">{card.title}</h2>
              <p className="about-achievments__text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
