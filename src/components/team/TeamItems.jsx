import React from "react";
import { useNavigate } from "react-router-dom";
import TeamItem from "./TeamItem";

const team__data = [
  {
    img: "/img/team-img-1.jpg",
    name: "Courtney Alexander",
    status: "CEO, Co-Founder",
  },
  {
    img: "/img/team-img-2.jpg",
    name: "Calvin Fox",
    status: "CTO, Co-Founder",
  },
  {
    img: "/img/team-img-3.jpg",
    name: "Johnny Lane",
    status: "Commercial Manager",
  },
  {
    img: "/img/team-img-4.jpg",
    name: "Diane Mccoy",
    status: "Director of Human Resources",
  },
  {
    img: "/img/team-img-5.jpg",
    name: "Judith Warren",
    status: "Lead Accountant",
  },
  {
    img: "/img/team-img-6.jpg",
    name: "Floyd Simmmons",
    status: "Finacial Director",
  },
  {
    img: "/img/team-img-7.jpg",
    name: "Serenity Edwards",
    status: "Director of Marketing",
  },
  {
    img: "/img/team-img-8.jpg",
    name: "Shawn Edwards",
    status: "Tech Lead",
  },
];

export default function TeamItems() {
  const navigate = useNavigate();

  return (
    <div className="team-items team">
      <div className="team-top default-top">
        <div className="container">
          <span className="h2">Our team</span>
          <p>People are at the heart of Createx Construction Bureau </p>
        </div>
      </div>

      <div className="team-items__wrapper">
        <div className="container grid">
          {team__data.map((item, ind) => {
            return (
              <TeamItem
                img={item.img}
                name={item.name}
                status={item.status}
                key={ind}
              />
            );
          })}
        </div>
      </div>

      <div className="team-items__become become">
        <div className="container">
          <p className="become__text">
            Become a part of the best team in the construction market of the USA. 
            <span onClick={() => navigate("/about-us/available-positions")}>Available Positions</span>
          </p>
        </div>
      </div>
    </div>
  );
}
