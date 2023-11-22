import React from "react";
import { FiBell } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import profilepic from "../img/profilepic.jpg";



function Navbar() {
  return (
    <nav className="navbar">
      {/* left */}
      <div className="navLeft">
       <img src={profilepic} alt="" />
      </div>

      {/* center */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>

      {/* right */}
      <div className="navRight">
        <FiBell />
        <div className="navRightIcons">
          <FiPlus />
          <IoMdArrowDropdown />
        </div>
        <div className="navRightIcons">
          <img src={profilepic} alt="" />
          <IoMdArrowDropdown />
        </div>
      </div>
    </nav>
  );

}

export default Navbar;
