import React from "react";
import bgImage from "/img/form-selction.jpg";

export default function ContactForm() {
  return (
    <section className="сontactForm">
      <div
        className="сontactForm__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="container">
        <div className="contactForm__form-wrapper">
          <h2 className="contactForm__title">A quick way to discuss details</h2>
          <form>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your working email"
              />
            </div>

            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="user_message"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="checkbox-input">
              <input type="checkbox" id="agreement" name="agreement" />
              <label htmlFor="agreement">
                I agree to receive communications from Createx Construction
                Bureau.
              </label>
            </div>
            <div className="contactForm__btn-wrapper">
              <a href="#" className="btn orange">
                send request
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
