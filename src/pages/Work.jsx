import React from "react";
import HeroLayout from "../components/heroLayout/HeroLayout";
import OurWorkCards from "../components/ourWorkCards/OurWorkCards";

import OurWorkItems from "../components/ourWorkItems/OurWorkItems";
import ContactForm from "../components/сontactForm/ContactForm";
import Support from "../components/support/Support";
import Clients from "../components/clients/Clients";

const work_hero_data = {
  bgImage: "/img/work-bg.jpg",
  heroTitle: "OUR WORK",
  heroText: `
      Our portfolio represents 20 years of construction
      experience backed by a passion for perfect client service,
      quality and innovations in consctuction industry.
  `,
};

export default function Work() {
  return (
    <>
      <HeroLayout
        bgImage={work_hero_data.bgImage}
        heroTitle={work_hero_data.heroTitle}
        heroText={work_hero_data.heroText}
      />
      <OurWorkCards />
      <OurWorkItems/>
      <Clients/>
      <Support/>
      <ContactForm/>
    </>
  );
}
