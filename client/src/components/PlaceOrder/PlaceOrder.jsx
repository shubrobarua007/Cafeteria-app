import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { FoodContext } from "../FoodContext/FoodContext";

const PlaceOrder = () => {
  
  const { getTotalCartAmount, firstName, setFirstName,lastName, setLastName, area, setArea,building,setBuilding, phone,setPhone, flat,setFlat, handleWhatsAppOrder } = useContext(FoodContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)} required />
        </div>
        <input type="text" placeholder="Area Name" value={area} onChange={(e)=> setArea(e.target.value)} />
        <input type="text" placeholder="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)} required />
        <div className="multi-fields">
          <input type="text" placeholder=" Building Number" value={building} onChange={(e)=> setBuilding(e.target.value)} />
          <input type="text" placeholder=" Flat Number" value={flat} onChange={(e)=> setFlat(e.target.value)} />
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} AED</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total </b>
              <b>{getTotalCartAmount()} AED</b>
            </div>
          </div>
          <button type="button" onClick={handleWhatsAppOrder}>SEND MESSAGE</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
