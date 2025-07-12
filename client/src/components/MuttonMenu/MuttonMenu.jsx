import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../FoodContext/FoodContext'
import MenuItem from '../MenuItem/MenuItem'

const MuttonMenu = () => {
    const {menuData} = useContext(FoodContext);
    if(!menuData?.mutton?.length) return null;
  return (
    <section className='menu-section'>
        <h2 className='section-title'>Mutton Delicacies</h2>
        <div className="menu-grid">
            {menuData.mutton.map(item=>(<MenuItem key={item.id} {...item}/>))}
        </div>
    </section>
  )
}

export default MuttonMenu