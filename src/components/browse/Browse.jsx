import React from "react";
import { useNavigate } from "react-router-dom";
import BrowseSlider from "../BrowseSlider/BrowseSlider";

const slidesData = [
  {
    img: "/img/sbs-i-1.jpg",
    alt: "Red finger building",
    title: "Red Finger Building",
    descr: "Business Centers",
    link: "/work/red-finger",
  },
  {
    img: "/img/sbs-i-2.jpg",
    alt: "Cubes building",
    title: "Cubes Building",
    descr: "Business Centers",
    link: "/work/cubes",
  },
  {
    img: "/img/sbs-i-1.jpg",
    alt: "Pencil building",
    title: "The Pencil Building",
    descr: "Stores & Malls",
    link: "/work/pencil",
  },
  {
    img: "/img/sbs-i-2.jpg",
    alt: "Cubes building",
    title: "Cubes Building",
    descr: "Business Centers",
    link: "/work/cubes",
  },
  {
    img: "/img/sbs-i-1.jpg",
    alt: "Pencil building",
    title: "The Pencil Building",
    descr: "Stores & Malls",
    link: "/work/pencil",
  },
  {
    img: "/img/sbs-i-2.jpg",
    alt: "Cubes building",
    title: "Cubes Building",
    descr: "Business Centers",
    link: "/work/cubes",
  },
  {
    img: "/img/sbs-i-1.jpg",
    alt: "Pencil building",
    title: "The Pencil Building",
    descr: "Stores & Malls",
    link: "/work/pencil",
  },
];

export default function Browse() {
  const navigate = useNavigate();
  return (
    <section className="browse">
      <div className="browse-top default-top">
        <div className="container flex">
          <span className="h2">
            Browse our selected projects
            <br /> and learn more about our work
          </span>
          <div className="def-arrows">
            <div className="swiper-button-prev-custom orange"></div>
            <div className="swiper-button-next-custom orange"></div>
          </div>
        </div>
      </div>

      <BrowseSlider slidesData={slidesData} />

      <div className="service-bottom-btm default-btm">
        <div className="container flex">
          <span className="h3">Explore all our works</span>
          <button className="btn orange" onClick={() => navigate("/work")}>
            View Project
          </button>
        </div>
      </div>
    </section>
  );
}
