import React from "react";
import BrowseSliderItem from "../BrowseSliderItem/BrowseSliderItem";
import img1 from "/img/sbw-i-3.jpg";
import img2 from "/img/sbw-i-4.jpg";
import img3 from "/img/sbw-i-5.jpg";
import img4 from "/img/sbw-i-6.jpg";
import img5 from "/img/sbw-i-7.jpg";
import img6 from "/img/sbs-i-1.jpg";
import img7 from "/img/sbs-i-2.jpg";
import img8 from "/img/sbw-i-8.jpg";
import img9 from "/img/sbw-i-9.jpg";

const slidesData = [
  {
    img: img1,
    alt: "Cubes Building",
    title: "Cubes Building",
    descr: "Business Centers",
  },
  {
    img: img2,
    alt: "Modern Cottage",
    title: "Modern Cottage",
    descr: "Private houses",
  },
  {
    img: img3,
    alt: "Luxury Beach House",
    title: "Luxury Beach House",
    descr: "Private houses",
  },
  {
    img: img4,
    alt: "Modern Double Bedroom",
    title: "Modern Double Bedroom",
    descr: "Apartments & flats",
  },
  {
    img: img5,
    alt: "Kids Bedroom With Decorations",
    title: "Kids Bedroom With Decorations",
    descr: "Apartments & flats",
  },
  {
    img: img6,
    alt: "The Pencil Building",
    title: "The Pencil Building",
    descr: "Stores & Malls",
  },
  {
    img: img7,
    alt: "Red Finger Building",
    title: "Red Finger Building",
    descr: "Business Centers",
  },
  {
    img: img8,
    alt: "Scandinavian Style Interior",
    title: "Scandinavian Style Interior",
    descr: "Private houses",
  },
  {
    img: img9,
    alt: "Brown and Gray Painted House",
    title: "Brown and Gray Painted House",
    descr: "Private houses",
  },
];

export default function OurWorkItems() {
  return (
    <section className="our-work-items">
      <div className="container">
        <div className="our-work-items__wrapper">
          {slidesData.map((slide, idx) => (
            <BrowseSliderItem key={idx} {...slide} />
          ))}
        </div>
      </div>
      <div className="load-more">
        <div className="container">
          <p className="load-more__text">Load more</p>
        </div>
      </div>
    </section>
  );
}
