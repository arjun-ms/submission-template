import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
    <nav>
      <ul>
        <div className='nav_button'>
        <a href="#">HANDICRAFT</a>
        <a href="#">PAINTINGS</a>
        <a href="#">DIGITAL ART</a>
        <a href="#">NEWS AND EVENTS</a>
        </div>
      <img src="/assets/profile.png" className="Navbar_image" alt="logo"></img>
      </ul>
    </nav>
    <hr></hr>
    </div>
  )
}

export default Navbar