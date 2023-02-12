import React from 'react'
import chicagoPhoto from '../assets/restauranfood.jpg'
export default function Chicago() {
  return (
    <section className='chicago'>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi
        tenetur minus nemo beatae rem, labore doloribus architecto molestias
        dolorum odio corporis dignissimos quibusdam ad quas iure, vel quis
        repellendus.
      </p>
      <img src={chicagoPhoto} height={300} alt='' />
      <img src={chicagoPhoto} height={300} alt='' />
    </section>
  )
}
