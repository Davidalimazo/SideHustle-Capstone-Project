import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

<<<<<<< HEAD
library.add(...iconList)


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/home" className="nav-logo">
            Tasty 72         
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/product"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
           {click ? <FontAwesomeIcon icon="times" /> : <FontAwesomeIcon icon="bars" />}
          </div>
=======
    return (
        <div className='header'>
            <div className="logo">Tasty</div>
        <input type="checkbox" name="chk" id="chk" />
        <label htmlFor='chk' className="show"><i className="fa fa-bars"></i> </label>
           <div className="menu">
            <NavLink to="/" className="menu-item na">Home</NavLink>
            <NavLink to="about" className="menu-item na">About Us</NavLink>
            <NavLink to="/menu" className="menu-item na">Menu</NavLink>
            <NavLink to="contact" className="menu-item na">Contact</NavLink>
        
            <label htmlFor='chk' className="na hide"><i className="fa fa-times"></i> </label>
            
           </div>
          
>>>>>>> 6dd3ab921d7aeebc46853ef787157e9b4b695a94
        </div>
      </nav>
    </>
  );
}

export default NavBar;
