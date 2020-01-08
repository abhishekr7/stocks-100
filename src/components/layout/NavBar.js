import React from 'react'
import { Link , NavLink } from 'react-router-dom'


function Navbar() {
    return (
      <nav className="nav-wrapper grey darken-4">
          <div  className="container">
              <NavLink  to='/home'>Home</NavLink>

              <NavLink to='/analytics'>Analytics</NavLink>
            </div>
      </nav>
    );
}

export default Navbar
