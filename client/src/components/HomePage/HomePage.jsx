import React from "react"; 
import Home from "../Home/Home";
import About from "../About/About";
import Service from "../Service/Service";
import Menu from "../Menu/Menu";
import Testimonials from "../Testimonials/Testimonials";


const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Menu />
      <Testimonials />
    </>
  );
};

export default HomePage;
