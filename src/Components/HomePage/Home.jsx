import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import Hero from "../HeroComponents/Hero"
import Header from "../Header/Header";
import Plans from "../Plans/Plans";

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
        </Routes>
      </Layout>
  );
};

export default Home;
