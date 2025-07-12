import React from 'react'
import "./MenuDisplay.css"
import ChickenMenu from '../ChickenMenu/ChickenMenu';
import MuttonMenu from '../MuttonMenu/MuttonMenu';
import VegMenu from '../VegMenu/VegMenu';
import FishMenu from '../FishMenu/FishMenu';
import Snack from '../Snack/Snack';
import EggMenu from '../EggMenu/EggMenu';



const MenuDisplay = () => {
  return (
    <div className='menu-display' id='menu-display'>
        <h1>Our dishes for you</h1>
        <ChickenMenu/>
        <MuttonMenu/>
        <VegMenu/>
        <FishMenu/>
        <EggMenu/>
        <Snack/>
    </div>
  )
}

export default MenuDisplay