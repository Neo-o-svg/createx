import React from "react";
import ServicesCard from "../servicesCard/ServicesCard";

const cardsData = [
  {
    cardImg: "/img/service-card-img-1.jpg",
    cardDescr: "Construction",
    cardTitle: "Construction",
    cardText: `Sapien, feugiat faucibus orci arcu, vulputate. 
        Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. 
        Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, 
        gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. `,
    cardSubClass: "left-img",
  },
  {
    cardImg: "/img/service-card-img-2.jpg",
    cardDescr: "Project Development",
    cardTitle: "Project Development",
    cardText: `Volutpat tellus mauris sit sit. 
        Posuere ut sit vestibulum amet viverra in. 
        Est nulla lectus purus tincidunt massa tortor. 
        Hendrerit vulputate elementum blandit massa vitae amet felis eget. `,
    cardSubClass: "right-img",
  },
  {
    cardImg: "/img/service-card-img-3.jpg",
    cardDescr: "Interior Design",
    cardTitle: "Interior Design",
    cardText: `Eleifend orci massa et facilisis orci feugiat ac. 
        Congue in ut lacus, turpis accumsan gravida. 
        Aliquet mattis dignissim massa sociis a, id bibendum. 
        Egestas lorem eros, mi cras amet, vel eget molestie. 
        Turpis enim arcu, amet donec massa pellentesque nulla duis. 
        Arcu dictum metus sed purus senectus faucibus eget elementum pretium. `,
    cardSubClass: "left-img",
  },
  {
    cardImg: "/img/service-card-img-4.jpg",
    cardDescr: "Repairs",
    cardTitle: "Repairs",
    cardText: `Facilisis cursus feugiat sit pulvinar amet. 
        Ac facilisi dictum commodo, tortor gravida pretium, orci. 
        Nunc sit sollicitudin id egestas mattis. 
        Turpis viverra nec urna ultrices urna. `,
    cardSubClass: "right-img",
  },
];

export default function ServicesCardsList() {
  return (
    <section className="services-cards">
      <div className="container">
        <div className="services-cards__wrapper">
          {cardsData.map((card, index) => (
            <ServicesCard
              key={index}
              cardImg={card.cardImg}
              cardDescr={card.cardDescr}
              cardTitle={card.cardTitle}
              cardText={card.cardText}
              cardSubClass={card.cardSubClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
