import React from "react";
import img1 from "../img/img1.jpeg";
import { FiBell } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import profilepic from "../img/profilepic.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";

/**
 * Component: Navbar
 * Description: Renders the navigation bar with various sections and icons.
 * @returns {JSX.Element} - JSX for the navigation bar.
 */
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // Function to handle changes in the search input
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Redirect to the profile page with the entered username
    // For simplicity, let's assume the profile page URL is '/profile/:username'
    navigate(`/profile/${searchInput}`);
  };

  return (
    <nav className="navbar">
      {/* Left section */}
      <div className="navLeft">
        <Link to='/'> <img src={img1} alt="" /></Link>

        {/* Search input form */}
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search or jump to"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </form>
      </div>

      {/* Center section */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>

      {/* Right section */}
      <div className="navRight">
        {/* Bell icon */}
        <FiBell />

        {/* Icons */}
        <div className="navRightIcons">
          <FiPlus />
          <IoMdArrowDropdown />
        </div>

        {/* Profile icon with dropdown menu */}
        <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
          <img src={profilepic} alt="" />
          <IoMdArrowDropdown />
        </div>
      </div>

      {/* Conditional rendering of the menu component */}
      {showMenu && <Menu />}
    </nav>
  );
}

export default Navbar;
