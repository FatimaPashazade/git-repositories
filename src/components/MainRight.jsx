import React from 'react'
import  {IoBulbOutline} from 'react-icons/io5';
import {MdRssFeed } from 'react-icons/md';
import img1 from "../img/img1.jpeg";
import { Link } from 'react-router-dom';


function MainRight() {
  return <div className="mainRight">
      <div className="mainRightContainer">
        <div className="mainRightText">
          <h2>Following</h2>
          <h2>For You</h2>
        </div>
        <div className="lineTwo"/>

        <div className="box">
          <h2> Welcome ... This is Github clone with React.js, React Router </h2>
          <p>Check out my <span> portfolio </span>, <span> Medium account</span> and
          <span> Instagram </span>
          </p>
          <button className='btn'>
            <Link to ="/profile">Github clone</Link>
          </button>
        </div>
        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
            <p>
              On my portfolio, I have a <span> React </span>, <span> Next.js </span> and <span>
                Tailwind </span> HTML AND CSS projects.
            </p>
          </div>
            <div className="boxCenterFirst">
              <MdRssFeed />
              <p>
               Check out what is new! </p>
            </div>
        </div>


         {/*Footer*/}
         <div className="footer">
          <div className="footerFirst">
            <img src="{img1}" alt="" />
            <h4>Github clone</h4>
          </div>
          <div className="footerSecond">
            <div className="footerSecondInside">
              <h4>Blog</h4>
              <h4>About</h4>
              <h4>Shop</h4>
              <h4>Github clone</h4>
              <h4>Pricing</h4>
            </div>

            <div className='footerSecondInside'>
              <h4>API</h4>
              <h4>Training</h4>
              <h4>Status</h4>
              <h4>Security</h4>
            </div>
            <div className="footerSecondInside">
              <h4>Terms </h4>
              <h4>Privacy</h4>
              <h4>Docs</h4>
          </div>
         </div>
      </div>
      <div className="lineTwo"/>
    </div>
  </div>
}

export default MainRight;
