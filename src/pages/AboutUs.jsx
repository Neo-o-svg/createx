import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import HeroLayout from "../components/heroLayout/HeroLayout";
import AboutWorkAchievments from "../components/aboutWorkAchievments/AboutWorkAchievments";
import AboutSlider from "../components/aboutSlider/AboutSlider";
import Our from "../components/our/Our";
import HistorySlider from "../components/historySlider/HistorySlider";
import OurPartners from "../components/ourPartners/OurPartners";
import TeamItems from "../components/team/TeamItems";
import WordMap from "../components/wordMap/WordMap";
import ContactForm from "../components/сontactForm/ContactForm";

const about_hero_data = {
  bgImage: "/img/about-bg.jpg",
  heroTitle: "ABOUT US",
  heroText: `
        Createx Construction Bureau has been successfully operating 
        in the USA construction market since 2000. We are proud to 
        offer you quality construction and exemplary service.
    `,
};

export default function AboutUs() {
  return (
    <>
      <HeroLayout
        bgImage={about_hero_data.bgImage}
        heroTitle={about_hero_data.heroTitle}
        heroText={about_hero_data.heroText}
      />
      <AboutWorkAchievments />
      <AboutSlider />
      <Our />
      <HistorySlider />
      <OurPartners />
      <TeamItems />
      <WordMap/>
      <ContactForm/> 
    </>
  );
}
