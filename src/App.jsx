import { useState } from "react";
import "./styles/styles.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import We from "./components/we/We";
import Our from "./components/our/Our";
import Service from "./components/service/Service";
import Browse from "./components/browse/Browse";
import Support from "./components/support/Support";
import Clients from "./components/clients/Clients";
import Some from "./components/some/Some";
import News from "./components/news/News";
import ContactForm from "./components/сontactForm/ContactForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
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
      <Footer />
    </div>
  );
}

export default App;
