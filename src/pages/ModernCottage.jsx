import React from "react";
import HeroLayout from "../components/heroLayout/HeroLayout";


const modernCottage_hero_data = {
  bgImage: "../img/interior-design-bg.jpg",
  heroTitle: "INTERIOR DESIGN",
  heroText: `
        Dui augue nec mi mi. 
        Ut ac lectus donec fames pellentesque. 
        Laoreet aenean vulputate elementum blandit amet.
    `,
};
export default function ModernCottage() {
  return (
    <>
      <HeroLayout
        bgImage={modernCottage_hero_data.bgImage}
        heroTitle={modernCottage_hero_data.heroTitle}
        heroText={modernCottage_hero_data.heroText}
      />
    </>
  );
}
