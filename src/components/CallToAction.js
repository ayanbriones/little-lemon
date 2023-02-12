import React from 'react'
import heroImage from '../assets/Mario and Adrian A.jpg'

export default function CallToAction() {
  return (
    <section className='hero'>
      <header>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          voluptatum voluptate perferendis nobis, iste libero! Magni quod ipsum
          culpa esse!
        </p>
        <img src={heroImage} height='300' alt='Little Lemon Restaurant' />
        <button className='button'>Reserve a table</button>
      </header>
    </section>
  )
}
