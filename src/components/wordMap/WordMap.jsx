import React from "react";

export default function WordMap() {
  return (
    <div className="word-map">
      <div className="team-top default-top">
        <div className="container">
          <span className="h2">We work worldwide</span>
        </div>
      </div>

      <div className="word-map__wrapper">
        <div className="container">
            <div className="word-map__map">
                <img src="/img/map.svg" alt="Gray map" />
            </div>
            <div className="word-map__icons">
                <img src="/img/icons/canada.svg" alt="Canada icon" className="canada"/>
                <img src="/img/icons/usa.svg" alt="Usa icon" className="usa"/>
                <img src="/img/icons/germany.svg" alt="Germany icon" className="germany"/>
                <img src="/img/icons/ukraine.svg" alt="Ukraine icon" className="ukraine"/>
                <img src="/img/icons/china.svg" alt="China icon" className="china"/>
                <img src="/img/icons/australia.svg" alt="Australia icon" className="australia"/>
            </div>
        </div>
      </div>
    </div>
  );
}
