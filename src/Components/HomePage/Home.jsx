import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import Hero from "../HeroComponents/Hero"
import Header from "../Header/Header";
import Plans from "../Plans/Plans";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Disclaimer from "../SupportPages/Disclaimer";
import RefundPolicy from "../SupportPages/RefundPolicy";
import TermsPolicy from "../SupportPages/TermsPolicy";
import Gallery from "../Gallery/Gallery";
import NotFound from "../NotFound/NotFound";
import CityGuide from "../CitiesBy/CityGuide";

const Layout = ({ children }) => {
  const location = useLocation();
  const breadcrumb = location.pathname
  .split("/")
  .filter(Boolean)
  .map(segment => decodeURIComponent(segment))
  .join(" > ");  

  return (
    <>
{location.pathname !== "/" && location.pathname !== "*" && <Header heading={breadcrumb} />}
{children}
    </>
  );
};

const Home = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/plans" element={<Plans/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/disclaimer" element={<Disclaimer/>} />
          <Route path="/refund-policy" element={<RefundPolicy/>} />
          <Route path="/terms" element={<TermsPolicy/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/:citiName" element={<CityGuide />} />

          <Route path="*" element={<NotFound />} />
          

          
        </Routes>
      </Layout>
  );
};

export default Home;
