import React from "react";
import img1 from "../img/img1.jpeg";
import { FiBell } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import profilepic from "../img/profilepic.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Redirect to the profile page with the entered username
    // You can use React Router or any other method you prefer for navigation
    // For simplicity, let's assume the profile page URL is '/profile/:username'
    navigate(`/profile/${searchInput}`);
  };
  return (
    <nav className="navbar">
      {/* left */}
      <div className="navLeft">
        <Link to='/'> <img src={img1} alt="" /></Link>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search or jump to"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </form>
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
        <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
          <img src={profilepic} alt="" />
          <IoMdArrowDropdown />
        </div>
      </div>
      {showMenu && <Menu />}
    </nav>
  );

}

export default Navbar;
