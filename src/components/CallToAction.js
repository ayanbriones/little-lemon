import React from 'react'
import heroImage from '../assets/Mario and Adrian A.jpg'

export default function CallToAction() {
  return (
    <section className='call-to-action bg-green'>
      <div>
        <h1 className='title fg-yellow'>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p className='lead-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          voluptatum voluptate perferendis nobis, iste libero! Magni quod ipsum
          culpa esse!
        </p>
        <button className='button bg-yellow'>Reserve a table</button>
      </div>
      <div className='image-container'>
        <img src={heroImage} alt='Little Lemon Restaurant' />
      </div>
    </section>
  )
}
