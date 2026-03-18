import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import TrustStrip from "../Components/Truststrip";
import ServicesSection from "../Components/ServicesSection";
import PortfolioSection from "../Components/PortfolioSection";

function Home() {
  return (
    <>
      <div>
        <Hero />
        {/* <TrustStrip /> */}
        <ServicesSection />
        <PortfolioSection />
      </div>
    </>
  );
}

export default Home;
