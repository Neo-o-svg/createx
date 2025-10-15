import React from "react";
import HeroLayout from "../components/heroLayout/HeroLayout";
import VacancyItems from "../components/vacancyItems/VacancyItems";
import VacancySection from "../components/vacancySection/VacancySection";
import EmployeeBenefits from "../components/employeeBenefits/EmployeeBenefits";
import ContactForm from "../components/сontactForm/ContactForm";

const availablePositions_hero_data = {
  bgImage: "../img/available-pos-bg.jpg",
  heroTitle: `AVAILABLE POSITIONS`,
  heroText: `
        Build your career with Createx Construction Bureau.
    `,
};

export default function AvailablePositions() {
  return (
    <>
      <HeroLayout
        bgImage={availablePositions_hero_data.bgImage}
        heroTitle={availablePositions_hero_data.heroTitle}
        heroText={availablePositions_hero_data.heroText}
      />
      <VacancySection/>
      <EmployeeBenefits/>
      <ContactForm/>
    </>
  );
}
