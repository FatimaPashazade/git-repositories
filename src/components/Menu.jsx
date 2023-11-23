import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Component: Menu
 * Description: Renders a menu displaying user options and settings.
 * @returns {JSX.Element} - JSX for the menu.
 */
function Menu() {
  return (
    <div className="menu">
      <div className="menuContainer">
        {/* User information */}
        <p>
          Signed in as <br />
          Fatima Pashazade
        </p>

        {/* Line */}
        <div className="lineThree" />

        {/* Set Status */}
        <div className="menuStatus">
          <input type="text" placeholder='Set Status'/>
        </div>

        {/* Line */}
        <div className="lineThree" />

        {/* Navigation links */}
        <p><Link to='/profile'> Your Profile</Link></p>
        <p> Your Repositories</p>
        <p> Your codespace</p>
        <p> Your organization</p>
        <p> Your projects</p>
        <p> Your stars</p>
        <p> Your gists</p>

        {/* Line */}
        <div className="lineThree" />

        {/* Options */}
        <p>Upgrade</p>
        <p>Featute preview</p>
        <p>Help</p>

        {/* Line */}
        <div className="lineThree" />

        {/* Sign out */}
        <p>Sign out</p>
      </div>
    </div>
  )
}

export default Menu
