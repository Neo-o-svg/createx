

import "swiper/css";
import "swiper/css/autoplay";
import SupportSlider from "../supportSlider/SupportSlider";

export default function Support({ padSize }) {
  return (
    <section
      className={`support + ${padSize === "small" ? "pad-sm" : "pad-bg"}`}
    >
      <div className="container">
        <div className="default-top support-top">
          <div className="container">
            <span className="h2">Supported by 12+ partners</span>
          </div>
        </div>
      </div>
      <SupportSlider />
    </section>
  );
}
