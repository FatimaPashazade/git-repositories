// Left.jsx

import React from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { GiShadowFollower } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";

/**
 * Component for rendering user details on the left side of the profile page.
 * @param {Object} userData - User data object containing details like name, avatar, followers, and following.
 * @returns {JSX.Element} - JSX for the left section of the profile.
 */


function Left({ userData }) {
  // Extracting user details from the provided userData object
  const userName = userData?.name || userData?.login;
  const profilepic = userData?.avatar_url;
  const followers = userData?.followers;
  const following = userData?.following;

  return (
    <div className="left">
      {/* User image and emoticon */}
      <div className="image">
        <img src={profilepic} alt="" />

        {/* Emoticon */}
        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>

      {/* User details */}
      <div className="leftDetails">
        {/* User name and edit profile button */}
        <h2>{userName}</h2>
        <button> Edit Profile</button>

        {/* Followers and Following details */}
        <div className="followers">
          {/* Followers count */}
          <h2>
            {" "}
            <GiShadowFollower className="follower" /> Followers {followers}{" "}
          </h2>
          {/* Following count */}
          <h2>
            <SlUserFollowing className="following" /> Following {following}{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Left;
