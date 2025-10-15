import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Services from "./pages/Services";
import Work from "./pages/Work";
import NotFound from "./components/404/NotFound";
import InteriorDesign from "./pages/InteriorDesign";
import AvailablePositions from "./pages/AvailablePositions";
import ModernCottage from "./pages/ModernCottage";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="about-us/available-positions" element={<AvailablePositions/>} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="news" element={<News />} />
          <Route path="services" element={<Services />} />
          <Route path="services/interior-design" element={<InteriorDesign />} />
          <Route path="work" element={<Work />} />
          <Route path="work/modern-cottage" element={<ModernCottage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
