import React from 'react'

function Navbar() {
  return (
    <div className='container'>
        <div className='logo-img'>
        <img src="../public/logo.jpg" className='logo'></img>
        </div>
        <ul>
        <li><a href='/#'>Home</a></li>
        <li><a href='/#'>About</a></li>
        <li><a href='/#'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
