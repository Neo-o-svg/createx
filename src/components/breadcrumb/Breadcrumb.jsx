import React from "react";
import { Link, useLocation } from "react-router-dom";
import SlashImg from "/img/icons/slash.svg";

export default function Breadcrumb() {
  const location = useLocation();

  return (
    <>
      <ul className="breadcrumbs-list">
        {/* Homepage  */}
        <Link
          className={`breadcrumbs-link ${
            location.pathname === "/" && "breadcrumbs-link--active"
          }`}
          to="/"
        >
          Homepage
        </Link>
        {/* About  */}
        {location.pathname.includes("/about-us") && (
          <>
            <img
              src={SlashImg}
              alt="slash icon"
              className="breadcrumbs-slash-img"
            />
            <Link
              to="/about-us"
              className={`breadcrumbs-link ${
                location.pathname === "/about-us"
                  ? "breadcrumbs-link--active"
                  : ""
              }`}
            >
              About Us
            </Link>
          </>
        )}

        {/* Available Positions */}
        {location.pathname === "/about-us/available-positions" && (
          <>
            <img
              src={SlashImg}
              alt="slash icon"
              className="breadcrumbs-slash-img"
            />
            <Link
              to="/about-us/available-positions"
              className={`breadcrumbs-link ${
                location.pathname === "/about-us/available-positions"
                  ? "breadcrumbs-link--active"
                  : ""
              }`}
            >
              Interior Design
            </Link>
          </>
        )}
        {/* Services */}
        {location.pathname.startsWith("/services") && (
          <>
            <img
              src={SlashImg}
              alt="slash icon"
              className="breadcrumbs-slash-img"
            />
            <Link
              to="/services"
              className={`breadcrumbs-link ${
                location.pathname === "/services"
                  ? "breadcrumbs-link--active"
                  : ""
              }`}
            >
              Services
            </Link>
          </>
        )}

        {/* Interior Design */}
        {location.pathname === "/services/interior-design" && (
          <>
            <img
              src={SlashImg}
              alt="slash icon"
              className="breadcrumbs-slash-img"
            />
            <Link
              to="/services/interior-design"
              className={`breadcrumbs-link ${
                location.pathname === "/services/interior-design"
                  ? "breadcrumbs-link--active"
                  : ""
              }`}
            >
              Interior Design
            </Link>
          </>
        )}

        {/* Work */}
        {location.pathname.includes("/work") && (
          <>
            <img
              src={SlashImg}
              alt="slash icon"
              className="breadcrumbs-slash-img"
            />
            <Link
              to="/work"
              className={`breadcrumbs-link ${
                location.pathname === "/work" && "breadcrumbs-link--active"
              }`}
            >
              Work
            </Link>
          </>
        )}
        {/* News */}
        {location.pathname.includes("/news") && (
          <>
            <img
              src={SlashImg}
              alt="slash icon"
              className="breadcrumbs-slash-img"
            />
            <Link
              to="/news"
              className={`breadcrumbs-link ${
                location.pathname === "/news" && "breadcrumbs-link--active"
              }`}
            >
              News
            </Link>
          </>
        )}
        {/* Contacts */}
        {location.pathname.includes("/contacts") && (
          <>
            <img
              src={SlashImg}
              alt="slash icon"
              className="breadcrumbs-slash-img"
            />
            <Link
              to="/contacts"
              className={`breadcrumbs-link ${
                location.pathname === "/contacts" && "breadcrumbs-link--active"
              }`}
            >
              Contacts
            </Link>
          </>
        )}
      </ul>
    </>
  );
}
