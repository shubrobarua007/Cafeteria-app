import React from 'react';
import "./About.css";
import { GiMeal, GiFruitBowl, GiCoffeeCup } from 'react-icons/gi'; // For icons

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <h1>A Matter of <span className="highlight">Taste</span></h1>
        <p className="lead-text">
          There is a reason our regulars have been coming back for more. Word of mouth has been our only advertisement — but happy mouths are the best ambassadors!
        </p>
      </div>
      
      <div className="about-right">
        <div className="about-card">
          <div className="card-icon">
            <GiFruitBowl size={60} />
          </div>
          <div className="card-content">
            <h2>Fresh, Seasonal Ingredients</h2>
            <p>Our menu follows the seasons, featuring the best local produce available.</p>
          </div>
        </div>
        
        <div className="about-card">
          <div className="card-icon">
            <GiMeal size={60} />
          </div>
          <div className="card-content">
            <h2>Desi Food, Elevated</h2>
            <p>We have simple crowd favourites on the menu — but we do them well. Our flavours stand out, guaranteed.</p>
          </div>
        </div>
        
        <div className="about-card">
          <div className="card-icon">
            <GiCoffeeCup size={60} />
          </div>
          <div className="card-content">
            <h2>Better Beverages</h2>
            <p>We're your cafe and eatery in one, serving your favourite lassi by sun-up and your cup of tea by sundown.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;