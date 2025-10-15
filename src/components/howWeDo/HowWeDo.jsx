import React from "react";

const how_we_do_items = [
  {
    number: "01",
    title: "Work Estimate",
    text: "Culpa nostrud commodo ea consequat aliquip reprehenderit.",
  },
  {
    number: "02",
    title: "Contract",
    text: "Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.",
  },
  {
    number: "03",
    title: "Mobilization",
    text: "Odio massa scelerisque purus arcu sed velit eleifend cursus leo.",
  },
  {
    number: "04",
    title: "Construction Work",
    text: "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
  },
];

export default function HowWeDo() {
  return (
    <section className="how-we-do">
      <div className="container">
        <h2 className="h2">That’s how we do it</h2>
        <div className="how-we-do__items flex">
          {how_we_do_items.map((item) => {
            return (
              <div className="how-we-do__item" key={item.number}>
                <div className="how-we-do__span">
                  <span>{item.number}</span>
                </div>
                <div className="how-we-do__content">
                  <p className="how-we-do__title">{item.title}</p>
                  <p className="how-we-do__text">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
