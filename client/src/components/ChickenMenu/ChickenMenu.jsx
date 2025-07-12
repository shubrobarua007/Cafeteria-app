import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../FoodContext/FoodContext'
import MenuItem from '../MenuItem/MenuItem'

const ChickenMenu = () => {
    const {menuData} = useContext(FoodContext)
    if(!menuData?.chicken?.length) return null;
  return (
    <section className='menu-section'>
        <h2 className='section-title'>Chicken Specialties</h2>
        <div className="menu-grid">
            {menuData.chicken.map(item =>(
                <MenuItem key={item.id}{...item}/>
            ))}
        </div>

    </section>
  )
}

export default ChickenMenu