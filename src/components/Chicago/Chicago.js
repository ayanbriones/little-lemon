import React from 'react'
import chicagoPhoto1 from '../../assets/Mario and Adrian Aa.jpg'
import chicagoPhoto2 from '../../assets/restaurant chef Ba.jpg'
import './Chicago.css'
export default function Chicago() {
  return (
    <section className='chicago bg-green'>
      <div className='wrapper'>
        <div className='left'>
          <h2 className='title fg-yellow'>Little Lemon</h2>
          <h2 className='subtitle'>Chicago</h2>
          <p className='lead-text'>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className='right'>
          <div className='img1-wrapper'>
            <img src={chicagoPhoto1} alt='' />
          </div>
          <div className='img2-wrapper'>
            <img src={chicagoPhoto2} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
