import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav>
      <ul>
        <div className='nav_button'>
        <Link to="/handicraft">HANDICRAFT</Link>
        <Link to="/painting">PAINTINGS</Link>
        <Link to="/digitalart">DIGITAL ART</Link>
        <Link to="/auction">AUCTION</Link>
        </div>
      <img src="/assets/profile.png" className="Navbar_image" alt="logo"></img>
      </ul>
    </nav>
    <hr></hr>
    </div>
  )
}

export default Navbar