import React, { useContext } from 'react';
import "./MenuItem.css";
import { FoodContext } from '../FoodContext/FoodContext';


const MenuItem = ({id, name, description, price, image}) => {

  const {cartItem, addToCart, removeCartItem} = useContext(FoodContext);
  return (
    <div className='menuitem-container'>
      <div className="menuitem-img-container">
        <img 
          className='menuitem-img' 
          src={image} 
          alt={name}
        />
      </div>
      <div className="menuitem-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className='price-tag'>AED {price.toFixed(2)}</p>
       {!cartItem[id]? <button className="order-btn" onClick={()=>addToCart(id)}>
          Order now
        </button>: <div className='menu-item-counter'>
          <img onClick={()=> removeCartItem(id)} src="/images/remove-icon.png" alt="" />
          <p>{cartItem[id]}</p>
          <img onClick={()=> addToCart(id)} src="/images/add-icon.png" alt="" />
          </div>}
      </div>
    </div>
  )
}

export default MenuItem;