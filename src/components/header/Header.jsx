import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a href="!#" className="header__logo">
              <img src="src/img/icons/logo.svg" alt="Createx" />
            </a>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li>
                  <a href="!#">About Us</a>
                </li>
                <li>
                  <a href="!#">Services</a>
                </li>
                <li>
                  <a href="!#">Work</a>
                </li>
                <li>
                  <a href="!#">News</a>
                </li>
                <li>
                  <a href="!#">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <a href="tel:4055550128" className="header__link phone">
              <span className="header__title">Call us</span>
              <span className="header__desc">(405) 555-0128</span>
            </a>
            <a href="mailto:hello@createx.com" className="header__link mail">
              <span className="header__title">Talk to us</span>
              <span className="header__desc">hello@createx.com</span>
            </a>

            {/* Бургер */}
            <div
              className={`header__burger ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Выезжающее меню */}
          <div className={`header__menu ${menuOpen ? "active" : ""}`}>
            <div className="header__menu-top">
              <a href="!#" className="header__logo">
                <img src="src/img/icons/logo-white.svg" alt="Createx" />
              </a>
              <div className="header__icons">
                <a href="tel:4055550128">
                  <img src="src/img/icons/iPhone.svg" alt="phone" />
                </a>
                <a href="mailto:hello@createx.com">
                  <img src="src/img/icons/Chat.svg" alt="chat" />
                </a>
              </div>
            </div>
            <nav className="header__menu-nav">
              <ul>
                <li>
                  <a href="!#">About Us</a>
                </li>
                <li>
                  <a href="!#">Services</a>
                </li>
                <li>
                  <a href="!#">Work</a>
                </li>
                <li>
                  <a href="!#">News</a>
                </li>
                <li>
                  <a href="!#">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
