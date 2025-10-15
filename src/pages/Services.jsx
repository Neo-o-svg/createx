import React from "react";
import HeroLayout from "../components/heroLayout/HeroLayout";
import ServicesCardsList from "../components/ServicesCardsList/ServicesCardsList";
import ContactForm from "../components/сontactForm/ContactForm";
import { Link, Route, Routes } from "react-router-dom";
import InteriorDesign from "./InteriorDesign";

const services_hero_data = {
  bgImage: "/img/services-hero-bg.jpg",
  heroTitle: "SERVICES",
  heroText: `
    If you are looking for a full-service construction company, 
    look to Createx Construction Bureau. We are doing our best 
    to be a partner for all of your construction needs.
  `,
};

export default function Services() {
  return (
    <>
      <HeroLayout
        bgImage={services_hero_data.bgImage}
        heroTitle={services_hero_data.heroTitle}
        heroText={services_hero_data.heroText}
      />
      <ServicesCardsList />
      <ContactForm />

    
    </>
  );
}
