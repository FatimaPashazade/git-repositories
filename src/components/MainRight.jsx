// MainLeft.jsx

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import profilepic from "../img/profilepic.jpg";
import lists from "../lists.json";
import { Link } from "react-router-dom";

/**
 * Component: MainLeft
 * Description: Renders the left section of the main view, displaying user information,
 *              recent repositories, activities, and teams.
 * @returns {JSX.Element} - JSX for the left section of the main view.
 */
function MainLeft() {
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        {/* User information */}
        <div className="mainLeftName">
          <img src={profilepic} alt="" />
          <h2>Fatima Pashazade</h2>
          <IoMdArrowDropdown />
        </div>

        {/* Line */}
        <div className="line" />

        {/* Recent Repositories */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2> Recent Repositories </h2>
            <button>New</button>
          </div>

          <div className="inputBox"></div>
          <input type="text" placeholder="Find repositories..." />
        </div>

        {/* List of repositories */}
        <div className="mainLeftLists">
          {lists.map((item, idx) => (
            <div className="item" key={idx}>
              <img src={profilepic} alt="" />

              <div>
                <h2>{`${item.name} / ${item.repo}`}</h2>
              </div>
            </div>
          ))}
          {/* Link to profile */}
          <Link to="/profile">Show More</Link>
        </div>

        {/* Line */}
        <div className="line" />

        {/* Recent Activities */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Activities</h2>
          </div>
          <p>New projects</p>
        </div>

        {/* Line */}
        <div className="line" />

        {/* User Teams */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Your teams</h2>
          </div>

          <div className="inputBoxTwo">
            <input type="text" placeholder="Find a team..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeft;
