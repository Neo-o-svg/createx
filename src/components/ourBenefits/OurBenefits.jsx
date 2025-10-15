import React from "react";

const our_benf_items_data = [
  {
    img: "/img/icons/fixedTerms-icn.svg",
    title: "Fixed Terms & Cost",
    text: `
        Culpa nostrud commodo ea consequat aliquip reprehenderit. 
        Veniam velit nostrud aliquip sunt.
    `,
  },
  {
    img: "/img/icons/ic-helmet-orange.svg",
    title: "Qualified Workers",
    text: `
       Anim reprehenderit sint voluptate exercitation adipisicing 
       laborum adipisicing. Minim empor est ea.
    `,
  },
  {
    img: "/img/icons/camera-icn.svg",
    title: "Supervision & Control",
    text: `
       Sit veniam aute dolore adipisicing nulla sit culpa. 
       Minim mollit voluptate ullamco proident ea ad..
    `,
  },
];


export default function OurBenefits() {
  return (
    <section className="our-benefits">
      <div className="our-benefits-top default-top">
        <div className="container">
          <span className="h2">Our benefits</span>
          <p>
            Our mission is to set the highest standards for construction sphere.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="our-benefits__items flex">
          {our_benf_items_data.map((item) => {
            return (
              <div className="our-benefits__item">
                <div className="our-benefits__img-wrapper flex">
                  <img
                    src={item.img}
                    alt={`Icon ${item.title}`}
                    className="our-benefits__img"
                  />
                </div>
                <div className="our-benefits__content">
                    <p className="our-benefits__title">
                        {item.title}
                    </p>
                    <p className="our-benefits__text">
                        {item.text}
                    </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="our-benefits__btn-wrapper flex">
            <button className="our-benefits__btn btn orange">
                Discuss a project
            </button>
        </div>
      </div>
    </section>
  );
}
