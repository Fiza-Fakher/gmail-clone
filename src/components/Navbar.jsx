import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import icon from '../images/icon.png';
import '../components/Navbar.css';
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-center">
          <RxHamburgerMenu className='menu-icon' size={20} />
          <a href="/"><img id='logo' src={icon} alt="" /></a>
          <p><a href="/">Gmail</a></p>
          <div className="search-container">
            <CiSearch className="search-icon" />
            <input type="text" className="search-bar" placeholder="Search mail" />
            <GiSettingsKnobs className='icon-2' />
          </div>
        </div>
        <div className="navbar-right">
          <div id="icons">
            <div className="icon-container">
              <FaRegQuestionCircle className="icon" />
              <span className="tooltip">Support</span>
            </div>
            <div className="icon-container">
              <FaGear className="icon" />
              <span className="tooltip">Settings</span>
            </div>
            <div className="icon-container">
              <TbGridDots className="icon" />
            </div>
          </div>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""  id='profile'/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
