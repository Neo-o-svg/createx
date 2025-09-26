import React from "react";
import About from "../components/about/About";
import We from "../components/we/We";
import Our from "../components/our/Our";
import Service from "../components/service/Service";
import Browse from "../components/browse/Browse";
import Support from "../components/support/Support";
import Clients from "../components/clients/Clients";
import Some from "../components/some/Some";
import News from "../components/news/News";
import ContactForm from "../components/сontactForm/ContactForm";

export default function Home() {
  return (
    <div>
      <About />
      <We />
      <Our />
      <Service />
      <Browse />
      <Support />
      <Clients />
      <Some />
      <News />
      <ContactForm />
    </div>
  );
}
