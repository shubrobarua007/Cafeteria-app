import React from 'react'
import { useContext } from 'react'
import {FoodContext} from '../FoodContext/FoodContext';
import MenuItem from '../MenuItem/MenuItem';
const VedMenu = () => {
    const {menuData}= useContext(FoodContext);
    if(!menuData?.veg?.length) return null;

  return (
    <section className='menu-section'>
        <h2 className='section-title'>
          Vegetarian
        </h2>
        <div className="menu-grid">
          {menuData.veg.map(item =>(<MenuItem key={item.id} {...item}/>))}
        </div>
    </section>
  )
}

export default VedMenu