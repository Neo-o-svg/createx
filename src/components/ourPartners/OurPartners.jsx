import React from "react";
import SupportSlider from "../supportSlider/SupportSlider";

export default function OurPartners() {
  return (
    <div className="partners">
      <div className="partners-top default-top">
        <div className="container">
          <span className="h2">Our partners</span>
          <p>We are supported by 12+ industry bodies and media partners</p>
        </div>
      </div>

      <SupportSlider/>
      <SupportSlider/>
    </div>
  );
}
