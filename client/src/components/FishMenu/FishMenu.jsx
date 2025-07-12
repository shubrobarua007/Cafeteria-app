import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../FoodContext/FoodContext'
import MenuItem from '../MenuItem/MenuItem'

const FishMenu = () => {
    const {menuData}= useContext(FoodContext);
    if(!menuData?.fish?.length) return null;
  return (
    <section className='menu-section'>
        <h2 className='section-title'>
        Ocean Treasures
        </h2>
        <div className="menu-grid">
            {menuData.fish.map(item =>(<MenuItem key={item.id} {...item}/>))}
        </div>
    </section>
  )
}

export default FishMenu