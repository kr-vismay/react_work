import React from 'react'

function Navbar() {
  return (
    <div className='container'>
    <nav className='navbar'>
    <div className='logo-img'>
    <img src='../public/images/logo.jpeg' className='logo'></img>
    </div>
    <ul className='list'>
    <li><a href='/#'>menu</a></li>
    <li><a href='/#'>Location</a></li>
    <li><a href='/#'>About</a></li>
    <li><a href='/#'>Contact</a></li>
    </ul>
    <button className='btn'>login</button>
    </nav>
    </div>
  )
}

export default Navbar
