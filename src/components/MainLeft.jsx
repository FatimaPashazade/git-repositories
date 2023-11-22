import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import profilepic from "../img/profilepic.jpg";
import lists from "../lists.json";
import { Link } from "react-router-dom";

function MainLeft() {
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        <div className="mainLeftName">
          <img src={profilepic} alt="" />
          <h2>Fatima Pashazade</h2>
          <IoMdArrowDropdown />
        </div>

        {/* Line */}
        <div className="line" />

        {/* Recent Repo */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2> Recent Repositoires </h2>
            <button>New</button>
          </div>

          <div className="inputBox"></div>
          <input type="text" placeholder="Find a repositories..." />
        </div>

        <div className="mainLeftLists">
          {lists.map((item, idx) => (
            <div className="item" key={idx}>
              <img src={profilepic} alt="" />

              <div>
                <h2>{`${item.name} /${item.repo}`}</h2>
              </div>
            </div>
          ))}
          <Link to = "/profile"> Show More</Link>

        </div>
        <div className="line" />

        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Activities</h2>
          </div>
          <p>New projects</p>
        </div>

        <div className="line" />

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
