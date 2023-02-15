import React from 'react'
import chicagoPhoto from '../assets/restauranfood.jpg'
export default function Chicago() {
  return (
    <section className='chicago bg-green'>
      <div className='left'>
        <h1 className='title fg-yellow'>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p className='lead-text'>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className='right'>
        <div className='img1-wrapper'>
          <img src={chicagoPhoto} alt='' />
        </div>
        <div className='img2-wrapper'>
          <img src={chicagoPhoto} alt='' />
        </div>
      </div>
    </section>
  )
}
