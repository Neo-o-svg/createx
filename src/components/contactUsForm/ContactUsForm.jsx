import { useState } from "react";

export default function ContactUsForm() {
  const [activeLabel, setActiveLabel] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleLabelClick = (value) => {
    setActiveLabel(value);
  };

  return (
    <section class="contact-us-form contact-us">
      <div class="contact-us-top default-top">
        <div class="container">
          <span class="h2">Contact us</span>
          <p>
            Please complete the form. Detailed information will help us to make
            a tuned offer.
          </p>
        </div>
      </div>

      <div class="contact-us-form__wrapper">
        <div class="container flex">
          <div class="contact-us-form__img">
            <img src="../img/contact-us-img.jpg" alt="Girl with long hair" />
          </div>
          <form class="contact-us-form__form">
            <div class="contact-us-form__group flex">
              <div>
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="interest">I am interested in</label>
                <select
                  name="interest"
                  id="interest-selector"
                  value={selectedOption}
                  onChange={handleChange}
                  aria-label="interest-label"
                  aria-required="true"
                >
                  <option value="">Interior Design</option>
                  <option value="interior-design">Interior Design</option>
                  <option value="interior-design">Interior Design</option>
                  <option value="interior-design">Interior Design</option>
                </select>
              </div>
            </div>

            <div class="contact-us-form__group flex">
              <div>
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvLocation">Location*</label>
                <select
                  name="location"
                  id="location-selector"
                  value={selectedOption}
                  onChange={handleChange}
                  aria-label="location-label"
                  aria-required="true"
                >
                  <option value="">Choose your location</option>
                  <option value="minsk">Minsk</option>
                  <option value="moscow">Moscow</option>
                  <option value="london">London</option>
                </select>
              </div>
            </div>

            <div class="contact-us-form__group flex">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your working email"
                />
              </div>
              <div>
                <label>Preferred contact method</label>
                <div class="contact-us-form__inputs-wrapper">
                  <div className="flex">
                    <input
                      id="phone-input"
                      type="radio"
                      name="phone-inp"
                      aria-required="true"
                    />
                    <label
                      htmlFor="phone-inp"
                      className={`contact-us-label ${
                        activeLabel === "phone" ? "active" : ""
                      }`}
                      onClick={() => handleLabelClick("phone")}
                    >
                      Phone
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      id="email-input"
                      type="radio"
                      name="email-inp"
                      aria-required="true"
                    />
                    <label
                      htmlFor="email-inp"
                      className={`contact-us-label ${
                        activeLabel === "email" ? "active" : ""
                      }`}
                      onClick={() => handleLabelClick("email")}
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      id="viber-input"
                      type="radio"
                      name="viber-inp"
                      aria-required="true"
                    />
                    <label
                      htmlFor="viber-inp"
                      className={`contact-us-label ${
                        activeLabel === "viber" ? "active" : ""
                      }`}
                      onClick={() => handleLabelClick("viber")}
                    >
                      Viber
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-us__textarea">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                type="text"
                name="message"
                required
                placeholder="Your message*"
                aria-required="true"
              ></textarea>
            </div>

            <div class="contact-us-form__bottom flex">
              <div className="checkbox-input">
                <input type="checkbox" id="agreement" name="agreement" />
                <label htmlFor="agreement">
                  I agree to receive communications from Createx Construction
                  Bureau.
                </label>
              </div>
              <button class="btn orange">send request</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
