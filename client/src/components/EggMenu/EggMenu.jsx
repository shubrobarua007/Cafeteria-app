import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../FoodContext/FoodContext'
import MenuItem from '../MenuItem/MenuItem'

const EggMenu = () => {
    const {menuData}= useContext(FoodContext);
    if(!menuData?.egg?.length) return null;
  return (
    <section className='menu-section'>
        <h2 className='section-title'>
        Eggs
        </h2>
        <div className="menu-grid">
            {menuData.egg.map(item =>(<MenuItem key={item.id} {...item}/>))}
        </div>
    </section>
  )
}

export default EggMenu