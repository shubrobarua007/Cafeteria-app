import { React, useContext } from "react";
import "./Cart.css";
import { FoodContext } from "../FoodContext/FoodContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItem, allMenuItems, removeCartItem, getTotalCartAmount } = useContext(FoodContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {allMenuItems
          .filter((item) => cartItem[item.id] > 0)
          .map((item) => {
            {
              return (
                <div>
                  <div
                    key={item.id}
                    className="cart-items-title cart-items-item"
                  >
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price} AED</p>
                    <p>{cartItem[item.id]}</p>
                    <p>{item.price * cartItem[item.id]} AED</p>
                    <p onClick={()=>removeCartItem(item.id)} className="cross">X</p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
      </div>
      <div className="cart-bottom">
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
          <button onClick ={()=> navigate("/placeorder")}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
