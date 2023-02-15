import React from 'react'
import heroImage from '../assets/Mario and Adrian A.jpg'

export default function CallToAction() {
  return (
    <section className='call-to-action bg-green'>
      <div className='left'>
        <h1 className='title fg-yellow'>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p className='lead-text'>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
        <button className='button bg-yellow'>Reserve a table</button>
      </div>
      <div className='right'>
        <img src={heroImage} alt='Little Lemon Restaurant' />
      </div>
    </section>
  )
}
