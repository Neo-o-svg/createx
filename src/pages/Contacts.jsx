import React from "react";
import HeroLayout from "../components/heroLayout/HeroLayout";
import ContactUsForm from "../components/contactUsForm/ContactUsForm";
import OurOffices from "../components/ourOffices/OurOffices";

const contacts_hero_data = {
  bgImage: "../img/contacts-bg.jpg",
  heroTitle: "CONTACTS",
  heroText: `
        Contact us for all your construction needs. 
        We always welcome any questions and comments.
    `,
};
export default function Contacts() {
  return (
    <>
      <HeroLayout
        bgImage={contacts_hero_data.bgImage}
        heroTitle={contacts_hero_data.heroTitle}
        heroText={contacts_hero_data.heroText}
      />
      <ContactUsForm/>
      <OurOffices/>
    </>
  );
}
