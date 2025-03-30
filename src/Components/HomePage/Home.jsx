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

const Layout = ({ children }) => {
  const location = useLocation();
  const breadcrumb = location.pathname.split("/").filter(Boolean).join(" > ");

  return (
    <>
      {location.pathname !== "/" && <Header heading={breadcrumb} />}
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



          
        </Routes>
      </Layout>
  );
};

export default Home;
