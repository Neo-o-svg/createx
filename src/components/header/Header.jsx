import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`header ${
        location.pathname === "/" ? "" : "header--transparent"
      }`}
    >
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo" to="/">
              <img src="/img/icons/logo.svg" alt="Createx" />
            </Link>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="work" href="!#">
                    Work
                  </NavLink>
                </li>
                <li>
                  <NavLink to="news">News</NavLink>
                </li>
                <li>
                  <NavLink to="contacts">Contacts</NavLink>
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
              <Link to="/" className="header__logo">
                <img src="/img/icons/logo-white.svg" alt="Createx" />
              </Link>
              <div className="header__icons">
                <a href="tel:4055550128">
                  <img src="/img/icons/iPhone.svg" alt="phone" />
                </a>
                <a href="mailto:hello@createx.com">
                  <img src="/img/icons/Chat.svg" alt="chat" />
                </a>
              </div>
            </div>
            <nav className="header__menu-nav">
              <ul>
                <li>
                  <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/work" onClick={() => setMenuOpen(false)}>
                    Work
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" onClick={() => setMenuOpen(false)}>
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacts" onClick={() => setMenuOpen(false)}>
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
