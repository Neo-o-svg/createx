import React from "react";
import offerImg from "/img/we-offer-img.jpg";
import WeOfferDropdown from "../weOfferDropDown/weOfferDropDown";

const we_offer_data = [
  {
    title: "Interior design of apartments",
    text: `
        Adipiscing nunc arcu enim elit mattis eu placerat proin.
        Imperdiet elementum faucibus dignissim purus. Fusce
        parturient diam magna ullamcorper morbi semper massa ac
        facilisis.
    `,
  },
  {
    title: "Interior design of private houses",
    text: `
        dipiscing nunc arcu enim elit mattis eu placerat proin.
        Imperdiet elementum faucibus dignissim purus. Fusce
        parturient diam magna ullamcorper morbi semper massa ac
        facilisis.
    `,
  },
];

export default function WeOffer() {
  return (
    <section className="we-offer">
      <div className="container">
        <div className="we-offer__wrapper grid">
          <div className="we-offer__img-wrapper">
            <img src={offerImg} alt="Interior example" />
          </div>
          <div className="we-offer__content">
            <h2 className="we-offer__title">We offer</h2>
            <div className="we-offer__dropdowns-wrapper">
              {we_offer_data.map((drop, ind) => (
                <WeOfferDropdown
                  key={ind}
                  title={drop.title}
                  children={drop.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
