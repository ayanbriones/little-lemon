import React from 'react'
import chicagoPhoto from '../assets/restauranfood.jpg'
export default function Chicago() {
  return (
    <section className='chicago'>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. The restaurant
        features a locally-sourced menu with daily specials.
      </p>
      <img src={chicagoPhoto} height={300} alt='' />
      <img src={chicagoPhoto} height={300} alt='' />
    </section>
  )
}
