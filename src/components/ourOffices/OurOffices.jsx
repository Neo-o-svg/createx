import React from "react";
import OurOfficesItem from "./OurOfficesItem";

const our_offices_items = [
  {
    title: "New York, USA",
    address: "8502 Preston Rd. Inglewood, New York 98380",
    phoneNumber: "(405) 555-0128",
  },
  {
    title: "New Jersey, USA",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    phoneNumber: "(808) 555-0111",
  },
  {
    title: "San Francisco, USA",
    address: "8502 Preston Rd. Inglewood, San Francisco 98380",
    phoneNumber: "(505) 555-0125",
  },
];

export default function OurOffices() {
  return (
    <section className="our-offices">
      <div className="default-top our-offices-top">
        <div className="container">
          <span className="h2">Our offices</span>
          <p>
            Give us a call, send us a note or visit our office. We can’t wait to
            hear from you!
          </p>
        </div>
      </div>

      <div className="our-offices__items">
        <div className="container flex">
          {our_offices_items.map((item, ind) => {
            return (
              <OurOfficesItem
                key={ind}
                title={item.title}
                address={item.address}
                phoneNumber={item.phoneNumber}
              />
            );
          })}
        </div>
      </div>

      <div className="our-offices__find">
        <div className="default-top our-offices__find-top">
          <div className="container">
            <span className="h2">Find us at</span>
          </div>
        </div>

        <div className="our-offices__social">
          <div className="container flex">
            <span className="our-offices__whatsapp"></span>
            <span className="our-offices__messanger"></span>
            <span className="our-offices__facebook"></span>
            <span className="our-offices__twitter"></span>
            <span className="our-offices__youtube"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
