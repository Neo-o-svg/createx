import React from "react";
import HeroLayout from "../components/heroLayout/HeroLayout";
import WeOffer from "../components/weOffer/WeOffer";
import HowWeDo from "../components/howWeDo/HowWeDo";
import OurBenefits from "../components/ourBenefits/OurBenefits";
import RelatedProjects from "../components/relatedProjects/RelatedProjects";
import PricingTable from "../components/pricingTable/PricingTable";
import Support from "../components/support/Support";
import ContactForm from "../components/сontactForm/ContactForm";

const interiorDesign_hero_data = {
  bgImage: "../img/interior-design-bg.jpg",
  heroTitle: "INTERIOR DESIGN",
  heroText: `
        Dui augue nec mi mi. 
        Ut ac lectus donec fames pellentesque. 
        Laoreet aenean vulputate elementum blandit amet.
    `,
};

export default function InteriorDesign() {
  return (
    <>
      <HeroLayout
        bgImage={interiorDesign_hero_data.bgImage}
        heroTitle={interiorDesign_hero_data.heroTitle}
        heroText={interiorDesign_hero_data.heroText}
      />
      <WeOffer/>
      <HowWeDo/>
      <OurBenefits/>
      <RelatedProjects/>
      <PricingTable/>
      <Support/>
      <ContactForm/>

    </>
  );
}
