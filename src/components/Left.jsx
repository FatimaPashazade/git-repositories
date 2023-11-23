// Left.jsx

import React from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { GiShadowFollower } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";

function Left({ userData }) {
  const userName = userData?.name || userData?.login;
  const profilepic = userData?.avatar_url;
  const followers = userData?.followers;
  const following = userData?.following;

  return (
    <div className="left">
      <div className="image">
        <img src={profilepic} alt="" />

        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>

      <div className="leftDetails">
        <h2>{userName}</h2>
        <button> Edit Profile</button>
        <div className="followers">
          <h2>
            {" "}
            <GiShadowFollower className="follower" /> Followers{followers}{" "}
          </h2>
          <h2>
            <SlUserFollowing className="following" /> Following {following}{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Left;
