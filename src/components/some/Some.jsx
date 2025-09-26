import React from "react";

export default function Some() {
  return (
    <section className="some">
      <div className="some-top default-top">
        <div className="container">
          <span className="h2">Some facts and figures</span>
        </div>
      </div>
      <div className="some__items-wrapper">
        <div className="container flex">
          <div className="some__item">
            <div className="some__circle org-circle">
              <span>98%</span>
            </div>
            <div className="some__circle-text">Totally satisfied clients</div>
          </div>
          <div className="some__item">
            <div className="some__circle pink-circle">
              <span>20</span>
            </div>
            <div className="some__circle-text">Years of experience</div>
          </div>
          <div className="some__item">
            <div className="some__circle blue-circle">
              <span>9452</span>
            </div>
            <div className="some__circle-text">Working hours spent</div>
          </div>
          <div className="some__item">
            <div className="some__circle green-circle">
              <span>100%</span>
            </div>
            <div className="some__circle-text">Succeeded projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
