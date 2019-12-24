import React from 'react'
import { Link , NavLink } from 'react-router-dom'


function Navbar() {
    return (
      <nav className="nav-wrapper grey darken-4">
          <div  className="container">

              <ul>
                  <li><NavLink to='/home'>Home</NavLink></li>

                  <li><NavLink to='/analytics'>Analytics</NavLink></li>

                  <li><NavLink to='/add'>New Investor</NavLink></li>
              </ul>


              <div className="right">
                <ul>
                  <li><NavLink to='/add'>Login</NavLink></li>
                  <li><NavLink to='/add'>Register</NavLink></li>
                </ul>
              </div>

            </div>
      </nav>
    );
}

export default Navbar
