import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FoodContext } from '../FoodContext/FoodContext';
import logo from "/images/HudHud.png"

const Navbar = () => {
  const {cartCount} = useContext(FoodContext);
  const [menu, setMenu]= useState("home");
  return (
    <nav>
      <Link to='/' className="logo"><img src={logo} alt="" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":''}>Home</Link>
        <a href='#about' onClick={()=>setMenu("about")} className={menu === "about"?"active":''}>About</a>
        <a href='#service' onClick={()=>setMenu("service")} className={menu === "service"?"active":''}>Service</a>
        <a href='#menu' onClick={()=>setMenu("menu")} className={menu === "menu"?"active":''}>Menu</a>
        <a href='#contact' onClick={()=>setMenu("contact")} className={menu === "contact"?"active":''}>Contact</a>
      </ul>
      <Link to='/cart' className="cart-icon">
        <IoCartOutline size={40} /> 
        {cartCount > 0 && (<span className='cart-count'>{cartCount}</span>)} 
      </Link>
    </nav>
  );
}

export default Navbar;