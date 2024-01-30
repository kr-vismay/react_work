import React from 'react'

function Hero() {
  return (
    <div className='main'>
      <div className='content'>
       <p>Welcome to our site</p>
       <div className='hero-btn'>
       <button className='hero-btn-item'>Shope Now</button>
       <button className='hero-btn-item'>Category</button>
       </div>
      </div>
      <div className='product-img'>
      <img src='../../public/images/index.jpeg' className='img'></img>
      </div>
    </div>
  )
}

export default Hero
