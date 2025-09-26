import React from "react";

import Logo from "../../img/icons/logo-white.svg";
import WhatsApp from "../../img/icons/whatsapp.svg";
import WhatsApp_orange from "../../img/icons/whatsapp-orange.svg";
import Messanger from "../../img/icons/messanger.svg";
import Messanger_orange from "../../img/icons/messanger-orange.svg";
import Facebook from "../../img/icons/facebook.svg";
import Facebook_orange from "../../img/icons/facebook-orange.svg";
import Twitter from "../../img/icons/twitter.svg";
import Twitter_orange from "../../img/icons/twitter-orange.svg";
import YouTube from "../../img/icons/youtube.svg";
import YouTube_orange from "../../img/icons/youtube-orange.svg";
import Heart from "../../img/icons/heart.svg";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer__top flex">
          <div className="footer__social-wrapper">
            <div className="footer__social-top">
              <div className="footer__icons flex">
                <div className="footer__logo-wrapper">
                  <img
                    src={Logo}
                    alt="Createx logo"
                    className="footer__logo"
                    width="142px"
                    height="24px"
                    loading="lazy"
                  />
                </div>
                <div className="footer__social-icns">
                  <ul className="flex">
                    <li>
                      <a href="!#">
                        <img
                          src={WhatsApp}
                          alt="WhatsApp icn"
                          width="24px"
                          height="24px"
                        />
                        <img
                          src={WhatsApp_orange}
                          alt="WhatsApp orange icn"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img
                          src={Messanger}
                          alt="Messager icn"
                          width="24px"
                          height="24px"
                        />
                        <img
                          src={Messanger_orange}
                          alt="Messager orange icn"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img
                          src={Facebook}
                          alt="Facebook icn"
                          width="24px"
                          height="24px"
                        />
                        <img
                          src={Facebook_orange}
                          alt="Facebook orange icn"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img
                          src={Twitter}
                          alt="Twitter icn"
                          width="24px"
                          height="24px"
                        />
                        <img
                          src={Twitter_orange}
                          alt="Twitter orange icn"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <img
                          src={YouTube}
                          alt="YouTube icn"
                          width="24px"
                          height="24px"
                        />
                        <img
                          src={YouTube_orange}
                          alt="YouTube orange icn"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__social-text">
                <p>
                  Createx Construction Bureau has been successfully operating
                  in the USA construction market since 2000. We are proud to
                  offer you quality construction and exemplary service. Our
                  mission is to set the highest standards for construction
                  sphere.
                </p>
              </div>
            </div>
            <div className="footer__social-btm">
              <div className="flex">
                <div className="footer__social-head">
                  <div className="footer__social-head__title">
                    <strong>HEAD OFFICE</strong>
                  </div>
                  <div className="footer__social-head__link">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=8502+Preston+Rd.+Inglewood,+New+York"
                      target="_blank"
                    >
                      Address: <span>8502 Preston Rd. Inglewood, New York</span>
                    </a>
                  </div>
                  <div className="footer__social-head__link">
                    <a href="tel:4055550128">
                      Call: <span>(405) 555-0128</span>
                    </a>
                  </div>
                  <div className="footer__social-head__link">
                    <a href="mailto:hello@createx.com">
                      Email: <span>hello@createx.com</span>
                    </a>
                  </div>
                </div>
                <div className="footer__social-who">
                  <div className="footer__social-who__title">
                    <strong>WHO WE ARE</strong>
                  </div>
                  <ul className="footer__social-who__links">
                    <li className="footer__social-who__link">
                      <a href="!#">About Us</a>
                    </li>
                    <li className="footer__social-who__link">
                      <a href="!#">Available Positions</a>
                    </li>
                    <li className="footer__social-who__link">
                      <a href="!#">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__stay">
            <h2 className="footer__stay-title">Let’s stay in touch</h2>
            <form>
              <input
                type="email,"
                placeholder="Your email address"
                aria-label="Your email address"
                required
              />
              <a href="!#" class="btn orange">
                subscribe
              </a>
            </form>
            <p>
              *Subscribe to our newsletter to receive communications and early
              updates from Createx Construction Bureau.
            </p>

            <div className="footer__stay-experience">
              <h3 className="footer__stay-experience__title">OUR EXPERIENCE</h3>
              <ul>
                <li className="footer__stay-experience__link">Services</li>
                <li className="footer__stay-experience__link">Work</li>
                <li className="footer__stay-experience__link">News</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__btm flex">
          <div className="footer__btm-copy flex">
            <p className="flex">
              © All rights reserved. Made with{" "}
              <img
                src={Heart}
                alt="heart icon"
                width="16px"
                height="16px"
                loading="lazy"
              />{" "}
              by Createx Studio
            </p>
          </div>
          <div className="footer__btm-go">
            <button
              aria-label="Go to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              GO TO TOP{" "}
              <span
                className="orange btn"
                style={{ width: "40px", height: "40px" }}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
