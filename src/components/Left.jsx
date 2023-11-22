// Left.jsx

import React from 'react';
import { MdInsertEmoticon } from "react-icons/md";

function Left({ userData }) {
  const userName = userData?.name || userData?.login;
  const profilepic = userData?.avatar_url;
  const followers = userData?.followers;

  return (
    <div className='left'>
      <div className="image">
        <img
          src={profilepic}
          alt=""
        />

        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>

      <div className="leftDetails">
        <h2>{userName}</h2>
        <button> Edit Profile</button>
      </div>
    </div>
  );
}

export default Left;
