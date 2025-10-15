import React from "react";
import BrowseSlider from "../BrowseSlider/BrowseSlider";

const related_items = [
  {
    img: "/img/related-1-img.jpg",
    alt: "Kids Bedroom With Decorations",
    title: "Kids Bedroom With Decorations",
    descr: "Apartments & flats",
  },
  {
    img: "/img/related-2-img.jpg",
    alt: "Modern Double Bedroom",
    title: "Modern Double Bedroom",
    descr: "Apartments & flats",
  },
  {
    img: "/img/related-3-img.jpg",
    alt: "Scandinavian Style Interior",
    title: "Scandinavian Style Interior",
    descr: "Private houses",
  },
  {
    img: "/img/related-1-img.jpg",
    alt: "Kids Bedroom With Decorations",
    title: "Kids Bedroom With Decorations",
    descr: "Apartments & flats",
  },
  {
    img: "/img/related-2-img.jpg",
    alt: "Modern Double Bedroom",
    title: "Modern Double Bedroom",
    descr: "Apartments & flats",
  },
  {
    img: "/img/related-3-img.jpg",
    alt: "Scandinavian Style Interior",
    title: "Scandinavian Style Interior",
    descr: "Private houses",
  },
];

export default function RelatedProjects() {
  return (
    <section className="related-projects">
      <div className="related-top default-top">
        <div className="container flex">
          <span className="h2">Related projects</span>
          <div className="def-arrows">
            <div className="swiper-button-prev-custom "></div>
            <div className="swiper-button-next-custom "></div>
          </div>
        </div>
      </div>

      <BrowseSlider slidesData={related_items} />

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
