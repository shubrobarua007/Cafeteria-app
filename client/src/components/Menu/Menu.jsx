import React from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleMenuList = () => {
    navigate("/menulist");
  };
  const dishes = [
    {
      id: 1,
      name: "Idly Set",
      price: "4 Dhs",
      image: "src/assets/idly.png",
      description: "Soft steamed rice cakes with coconut chutney and sambar",
    },
    {
      id: 2,
      name: "Parotta",
      price: "1 Dhs",
      image: "src/assets/parotta.png",
      description: "Flaky layered flatbread served with vegetable kurma",
    },
    {
      id: 3,
      name: "Puri Bazi",
      price: "5 Dhs",
      image: "src/assets/puri.png",
      description: "Puffed deep-fried bread with potato masala",
    },
    {
      id: 4,
      name: "Puttu",
      price: "1 Dhs",
      image: "src/assets/puttu.png",
      description: "Steamed cylindrical rice flour with kadala curry",
    },
    {
      id: 5,
      name: "Vada Set",
      price: "3 Dhs",
      image: "src/assets/vada.png",
      description: "Crispy lentil donuts with coconut chutney",
    },
    {
      id: 6,
      name: "Samosa",
      price: "1 Dhs",
      description:
        "Triangular pastry stuffed with spiced potatoes, peas, and sometimes meat. Served with mint chutney.",
      image: "src/assets/samosa.png",
    },
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <div className="menu-left">
          <div className="menu-header">
            <span className="menu-title">
              On the <br />
              Menu
            </span>
            <p className="menu-subtitle">Today's Specials</p>
          </div>
          <button onClick={handleMenuList} className="menu-btn">
            VIEW FULL MENU →
          </button>
          <h2>We Offer Free Home Delivery!</h2>
        </div>

        <div className="menu-right">
          {dishes.map((dish) => (
            <div className="dish-card" key={dish.id}>
              <div className="dish-img-container">
                <img className="dish-img" src={dish.image} alt={dish.name} />
              </div>
              <div className="dish-content">
                <div className="dish-header">
                  <h3 className="dish-title">{dish.name}</h3>
                  <p className="dish-price">{dish.price}</p>
                </div>
                <p className="dish-description">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
