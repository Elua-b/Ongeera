import React from 'react'
import {FaAngleDown} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import './Navbar.css'
function Navbar() {
  return (
    <div className="container">
    <div className="item">
    <div className="logo">
        <img src="/logo.png" className='logo' alt="" />
    </div>
    <div className="logo-name">Onge<span style={{color:"green",fontSize:"40px",marginTop:"-10px"}}>e</span>ra</div>
    </div>
    <div className="item">
      <ul className="list">
        <li className="listItem">Home</li>
        <li className="listItem">About</li>
        <li className="listItem">Services</li>
        {/* <Image src="/logo2.png" alt="" width="160px" height="69px"/> */}
        
        <li className="listItem">Gallery</li>
        <li className="listItem">Blog</li>
        <li className="listItem">Contacts</li>


      </ul>
      </div>
    <div className="item">
      <div className="cart">
      {/* <Image src="/cart.jpg"   alt="" width="30px" height="30px"/> */}
    <img src="/search2.png" className='search' alt="" />
      </div>
    </div>
  </div>
  )
}

export default Navbar
