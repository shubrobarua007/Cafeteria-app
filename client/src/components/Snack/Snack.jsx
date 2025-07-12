import React, { useContext } from 'react'
import { FoodContext } from '../FoodContext/FoodContext'
import MenuItem from '../MenuItem/MenuItem';

const Snack = () => {
    const {menuData} = useContext(FoodContext);
    if(!menuData?.snacks?.length) return null;

  return (
    <section className='menu-section'>
        <h2 className='section-title'>
          Snacks
        </h2>
        <div className="menu-grid">
          {menuData.snacks.map(item =>(<MenuItem key={item.id} {...item}/>))}
        </div>
    </section>
  )
}

export default Snack