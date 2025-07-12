import React from "react";
import "./Service.css";
import img from "../../assets/sweets.avif";

const Service = () => {
  return (
    <div className="service-container" id="service">
      <div className="service-left">
        <img className="photo" src={img} alt="img" />
      </div>
      <div className="service-right">
        <span>About TDR</span>
        <p>
          We have been serving irresistible desi food since 1980s. Our mission
          is to keep you smiling with every bite. Treat yourself to a feel-good
          meal today!
        </p>
        <h2>We Offer Free Home Delivery!</h2>
      </div>
    </div>
  );
};

export default Service;
