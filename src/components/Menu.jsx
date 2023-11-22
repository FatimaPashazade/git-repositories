import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
      <div className="menuContainer">
        <p>
          Signed in as <br />
          Fatima Pashazade
        </p>
        <div className="lineThree" />

        <div className="menuStatus">
          <input type="text" placeholder='Set Status'/>
        </div>

        <div className="lineThree" />

         <p>
          <Link to='/profile'> Your Profile</Link>
          </p>

        <p> Your Repositories</p>
        <p> Your codespace</p>
        <p> Your organization</p>
        <p> Your projects</p>
        <p> Your stars</p>
        <p> Your gists</p>

        <div className="lineThree" />

        <p>Upgrade</p>
        <p>Featute preview</p>
        <p>Help</p>

        <div className="lineThree" />
        <p>Sign out</p>

      </div>
    </div>
  )
}

export default Menu
